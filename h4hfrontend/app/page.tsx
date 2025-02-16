"use client";

import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import React, { useState, useRef, useEffect } from "react";

import dynamic from "next/dynamic";

const AudioRecorder = dynamic(() => import("@/components/AudioRecorder"), { ssr: false });

export default function Home() {
  const [text, setText] = useState("record");
  const [audioStream, setAudioStream] = useState(null);
  const [count, setCount] = useState(0);
  const socketRef = useRef(null);
  const mediaRecorderRef = useRef(null);


  
  useEffect(() => {
    
    const talk = new SpeechSynthesisUtterance(
      "Hello there! I'm your flight booking assistant! How can I help you?"
    );
    

    const voices = speechSynthesis.getVoices();
    talk.voice = voices[0];
    console.log("testing")
    speechSynthesis.speak(talk);
    
  }, []);

  const clickButton = async () => {
    if (count == 0) {
      setCount(count + 1);
      speak();
    }

    if (text === "record") {
      // Start recording logic
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        setAudioStream(stream);
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;

        mediaRecorder.ondataavailable = (event) => {
          if (event.data && event.data.size > 0) {
            if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
              socketRef.current.send(event.data);
              console.log("Sent audio chunk:", event.data);
            }
          }
        };
        mediaRecorder.start(100);
      } catch (error) {
        console.error(error);
      }
      setText("recording"); // Change button text to "recording"
    } else {
      // Stop recording logic
      if (audioStream) {
        const tracks = audioStream.getTracks();
        for (let track of tracks) {
          track.stop();
          console.log(`Stopped track: ${track.kind}`);
        }
        setAudioStream(null);
      }
      setText("record"); // Change button text back to "record"
    }
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
            <AudioRecorder/>

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
