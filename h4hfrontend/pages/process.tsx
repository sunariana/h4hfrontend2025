import Link from "next/link";
import Image from "next/image";
import "../app/globals.css";
import { Target, AlertTriangle, Clock } from "lucide-react";

const Process = () => {
    const sections = [
        {
            title: "Goals",
            icon: Target,
            items: [
            "Assist with the visually impaired with booking a flight to a destination",
            "Take Away the stress often associated with planning a trip",
            ],
        },
        {
            title: "Challenges",
            icon: AlertTriangle,
            items: [
            "Having an AI agent navigate multiple websites",
            "Data transfer from the front end to the back end",
            "Having the AI agent collect user information without overwhelming the user",
            ],
        },
        {
            title: "Future Plans",
            icon: Clock,
            items: [
            "Seamlessly integrate all the steps of planning a trip to a destination",
            "Examples:",
            "• booking a hotel",
            "• fleshed out itinerary for the visually impaired",
            ],
        },
        ]
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
      <main className="container mx-auto px-6 flex items-start justify-center min-h-[calc(100vh-80px)] pb-20">
        <div className="flex items-center justify-center max-w-6xl w-full">
          {/* Text section */}
          <div className="max-w-xl space-y-6 pr-8 pt-10">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-center">
              Our
              <span className="text-[#F5D3B2]"> Process</span>
            </h1>

            <div className="grid gap-12 md:grid-cols-3">
                {sections.map(({ title, icon: Icon, items }) => (
                <div key={title} className="space-y-4">
                    <div className="flex items-center gap-3">
                    <Icon className="h-8 w-8 text-[#d4af37]" />
                    <h2 className="text-2xl font-semibold text-white">{title}</h2>
                    </div>
                    <ul className="space-y-2">
                    {items.map((item, index) => (
                        <li key={index} className="text-gray-300">
                        {item.startsWith("•") ? <span className="ml-4">{item}</span> : item}
                        </li>
                    ))}
                    </ul>
                </div>
                ))}
            </div>

            <div className="mt-16 space-y-12">
                <section>
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-center">
                    Our
                    <span className="text-[#F5D3B2]"> Audience</span>
                </h1>
                </section>

                <section>
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-center">
                    Our
                    <span className="text-[#F5D3B2]"> Audience</span>
                </h1>
                </section>
            </div>

            {/* Image section */}
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

};

export default Process;
