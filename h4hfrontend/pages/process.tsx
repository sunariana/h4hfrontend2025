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
            {/* Add audience content here */}
          </section>

          <section>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-center">
              Our <span className="text-[#F5D3B2]">Wireframe</span>
            </h2>
            {/* Add wireframe content here */}
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

