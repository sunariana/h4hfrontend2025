"use client";

import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import React from "react";
import { useEffect, useState, useRef } from "react";


export default function Home() {
  const [text, setText] = useState("record");
  const [audioStream, setAudioStream] = useState(null);
  const [count, setCount] = useState(0);
  const socketRef = useRef(null);
  const mediaRecorderRef = useRef(null);

  useEffect(() => {
    // const ws = new WebSocket("http://localhost:3000/ws/audio");
    socketRef.current = new WebSocket("ws://localhost:3000/ws/audio");
    socketRef.current.binaryType = "arraybuffer";

    socketRef.current.onopen = () => {
      console.log("WebSocket connected");
    };

    socketRef.current.onmessage = (event) => {
      console.log("Received from backend:", event.data);
    };

    socketRef.current.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    socketRef.current.onclose = () => {
      console.log("WebSocket connection closed");
    };
  }, [])

  const clickButton = async () => {
    if (count == 0) {
      setCount(count + 1);
      speak();
    }
    if (text == "record") {
      // create a websocket connection with backend to obtain voice of user
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        setAudioStream(stream);
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;

        mediaRecorder.ondataavailable = (event) => {
          if (event.data && event.data.size > 0) {
            if (
              socketRef.current &&
              socketRef.current.readyState === WebSocket.OPEN
            ) {
              socketRef.current.send(event.data);
              console.log("Sent audio chunk:", event.data);
            }
          }
        };
        mediaRecorder.start(100);
      } catch (error) {
        console.error(error);
      }
    } else {
      // end the websocket connection
     if (audioStream) {
       const tracks = audioStream.getTracks();
       for (let track of tracks) {
         track.stop();
         console.log(`Stopped track: ${track.kind}`);
       }
       setAudioStream(null);
     }
    }
    let newText = text === "record" ? "stop recording" : "record";
    setText(newText);
  };

  const speak = () => {
    const talk = new SpeechSynthesisUtterance(
      "Hello there! I'm your flight booking assistant! How can I help you?"
    );

    const voices = speechSynthesis.getVoices();
    talk.voice = voices[2];

    speechSynthesis.speak(talk);
  };

  return (
    <div className="min-h-screen bg-[#25406e] text-white relative overflow-hidden font-sans">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6">
        <div className="flex items-center gap-2">
          <Image 
            src="/logo.png"
            alt="Visionary Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <Link href="/" className="text-2xl font-bold">
            Visionairy
          </Link>
        </div>
        <div className="flex gap-8">
          <Link href="/process" className="hover:opacity-80 transition-opacity">
            process
          </Link>
          <Link href="/about" className="hover:opacity-80 transition-opacity">
            about
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 flex items-center justify-center min-h-[calc(100vh-220px)]">
        <div className="flex items-center justify-between max-w-6xl w-full">
          <div className="max-w-xl space-y-6 pr-8">
            <h1 className="leading-tight font-bold text-5xl">
              Welcome to Visionairy,
              <br />
              Your Virtual <span className="text-[#F5D3B2]">Flight Assistant!</span>
            </h1>
            <p className="text-lg lg:text-xl">
              We provide service to the visually impaired in helping book a flight to travel around the world! Click the
              button on the right of the screen to begin.
            </p>
          </div>

          <div className="flex flex-col items-center">
            {/* Circular Button with animations */}
            <button
              className="group relative w-[400px] h-[400px] flex-shrink-0 rounded-full focus:outline-none focus:ring-2 focus:ring-[#6e93dd] focus:ring-offset-4 focus:ring-offset-[#25406e] overflow-hidden"
              aria-label="Begin flight assistance"
            >
              {/* Base circle */}
              <div className="absolute inset-0 rounded-full border-4 border-[#6e93dd] bg-[#6e93dd]/20 transition-all duration-500 ease-out group-hover:bg-[#6e93dd]/30" />

              {/* Ripple effect circles */}
              <div className="absolute inset-0 rounded-full border-4 border-[#6e93dd] opacity-0 scale-50 group-hover:scale-100 group-hover:opacity-20 transition-all duration-700 ease-out" />
              <div className="absolute inset-0 rounded-full border-4 border-[#6e93dd] opacity-0 scale-75 group-hover:scale-110 group-hover:opacity-10 transition-all duration-1000 delay-100 ease-out" />

              {/* Rotating border */}
              <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#6e93dd] group-hover:rotate-180 transition-all duration-1000 ease-in-out" />

              {/* Pulsing inner circle */}
              <div className="absolute inset-0 rounded-full bg-[#6e93dd]/10 group-hover:animate-pulse" />
            </button>

            <div> 
              <img
                src="/squiggle.png"
                alt="Description"
                className="absolute bottom-0 right-0 w-90 h-90 object-cover"
              />
              <img
                src="/planetrail.png"
                alt="Description"
                className="absolute bottom-0 left-16 w-48 h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
