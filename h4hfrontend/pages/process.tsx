import Link from "next/link";
import Image from "next/image";
import "../app/globals.css";

const Process = () => {
  const sections = [
    {
      title: "Goals",
      icon: "/target.png",
      items: [
        "• Assist with the visually impaired with booking a flight to a destination",
        "• Take Away the stress often associated with planning a trip",
      ],
    },
    {
      title: "Challenges",
      icon: "/challenges.png",
      items: [
        "• Having an AI agent navigate multiple websites",
        "• Data transfer from the front end to the back end",
        "• Having the AI agent collect user information without overwhelming the user",
      ],
    },
    {
      title: "Future Plans",
      icon: "/future.png",
      items: [
        "• Seamlessly integrate all the steps of planning a trip to a destination",
        "• Examples: booking a hotel, fleshed out itinerary for the visually impaired",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-[#25406e] text-white relative overflow-hidden font-sans">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Visionary Logo" width={40} height={40} className="object-contain" />
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
      <main className="container mx-auto px-4 pb-20">
        <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-center mt-12 mb-16">
          Our <span className="text-[#F5D3B2]">Process</span>
        </h1>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:gap-16 max-w-6xl mx-auto">
          {sections.map(({ title, icon, items }) => (
            <div key={title} className="flex flex-col items-center space-y-6">
              <div className="flex flex-col items-center">
                <div className="flex justify-center items-center h-40 w-40">
                  <Image
                    src={icon || "/placeholder.svg"}
                    alt={`${title} icon`}
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
                <h2 className="text-2xl font-semibold text-white text-center">{title}</h2>
              </div>
              <ul className="space-y-3 w-full">
                {items.map((item, index) => (
                  <li key={index} className="text-gray-300">
                    {item.startsWith("•") ? (
                      <span className="ml-4 block">{item}</span>
                    ) : (
                      <span className="block">{item}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-24 space-y-16">
            <section>
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-center">
                Our <span className="text-[#F5D3B2]">Audience</span>
                </h2>
            </section>

            {/* Two columns layout */}
            <div className="flex gap-2">
                {/* Left Column - 30% width */}
                <div className="w-[30%] bg-gray-800 p-4 text-white justify-center">
                    <h3 className="text-9xl font-bold">70%</h3>
                </div>

                {/* Right Column - 70% width */}
                <div className="w-[70%] bg-gray-700 p-10 text-white justify-left">
                    <h3 className="text-xl font-medium">of websites in certain industries inaccessible to the vision-impaired according to the Deque Systems</h3>
                </div>
            </div>
        </div>

        <div className="mt-24 space-y-16">
          <section>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-center">
              Our <span className="text-[#F5D3B2]">User Flow</span>
            </h2>
            <div className="flex justify-center items-center">
                <Image
                    src="/userflow.jpg"
                    alt="Design of our user flow."
                    width={1000}
                    height={1000}
                />
            </div>
          </section>
        </div>

        <div className="mt-24 space-y-16">
          <section>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-center pb-10">
              Our <span className="text-[#F5D3B2]">Wireframe and UI</span>
            </h2>
            {/* Two columns layout */}
            <div className="flex gap-2">
                {/* Left Column - 55% width */}
                <div className="w-[55%] flex justify-center items-center">
                    <Image
                        src="/UI.png"
                        alt="Design of our user flow."
                        width={500}
                        height={500}
                    />
                </div>

                {/* Right Column - 45% width */}
                <div className="flex w-[45%] bg-gray-700 p-10 text-white justify-left">
                    <h3 className="text-4xl font-medium"> font: <span className="font-bold">quicksand</span>/quicksand</h3>
                </div>
            </div>
            <div className="flex justify-center items-center pt-10">
                <Image 
                    src="/wireframe.png"
                    alt="A picture of our wireframe and how our pages are linked."
                    width={500}
                    height={500}
                />
            </div>
          </section>
        </div>

        <div className="mt-24 space-y-16 pb-20">
          <section>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-center">
              Our <span className="text-[#F5D3B2]">Creation and Demo</span>
            </h2>
            <div className="flex">
                {/* Left Column - 35% width */}
                <div className="w-[45%] bg-gray-700 p-10 text-white">
                    <h3 className="text-3xl font-bold pt-10 pb-3">What Visionairy Does:</h3>
                    <p className="text-2xl font-medium">LALALALALA</p>
                </div>

                {/* Right Column - 65% width */}
                <div className="w-[55%] flex justify-center items-center">
                    {/* Embedded Video */}
                    <div className="w-full h-full max-w-xl pt-20">
                    <iframe
                        width="100%"
                        height="315"
                        src="https://www.youtube.com/embed/H6q6pYZ9Fho?si=Yd3ip1K3NSOKXNnk"  // Replace VIDEO_ID with your actual YouTube video ID
                        title="Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    </div>
                </div>
            </div>
          </section>
        </div>
      </main>

      {/* Background Images */}
      <Image
        src="/squiggle.png"
        alt="Decorative squiggle"
        width={360}
        height={360}
        className="absolute bottom-0 right-0 w-90 h-90 object-cover"
      />
      <Image
        src="/planetrail.png"
        alt="Decorative planet rail"
        width={192}
        height={192}
        className="absolute bottom-0 left-16 w-48 h-48 object-cover"
      />
    </div>
  )
}

export default Process

