import Link from "next/link";
import Image from "next/image";
import "../app/globals.css";

const About = () => {
  const teamMembers = [
    {
      name: "Lucas",
      role: "backend demon",
      description: "carried us so hard insert here insert here insert insert insert insert",
      imageUrl: "/placeholder.svg",
      imagePosition: "left",
    },
    {
      name: "Jason",
      role: "Backend demon",
      description: "carried us so hard insert here insert here insert insert insert insert",
      imageUrl: "/placeholder.svg",
      imagePosition: "right",
    },
    {
      name: "Nathan",
      role: "Backend Demon",
      description: "carried us so hard insert here insert here insert insert insert insert",
      imageUrl: "/placeholder.svg",
      imagePosition: "left",
    },
    {
      name: "Ariana",
      role: "Front End demon",
      description: "carried us so hard insert here insert here insert insert insert insert",
      imageUrl: "/placeholder.svg",
      imagePosition: "right",
    },
    {
      name: "Sophia",
      role: "UX/UI designer",
      description: "carried us so hard insert here insert here insert insert insert insert",
      imageUrl: "/placeholder.svg",
      imagePosition: "left",
    },
    {
      name: "Vikram",
      role: "ECEN100",
      description: "carried us so hard insert here insert here insert insert insert insert",
      imageUrl: "/placeholder.svg",
      imagePosition: "right",
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
          <div className="max-w-xl space-y-20 pr-8 pt-10">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Your
              <span className="text-[#F5D3B2]"> Flight Attendants!</span>
            </h1>

            <div className="space-y-16">
              {teamMembers.map((member, index) => (
                <div
                  key={member.name}
                  className={`flex flex-col items-center gap-8 md:flex-row ${
                    member.imagePosition === "right" ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Member Image */}
                  <div className="relative aspect-[2/1] w-full max-w-md overflow-hidden md:w-1/2 md:mr-150">
                    <div
                      className={`absolute inset-0 rounded-[100px] bg-opacity-50 ${
                        index % 2 === 0 ? "bg-pink-300" : "bg-blue-300"
                      }`}
                    >
                      <Image src={member.imageUrl || "/globe.svg"} alt={member.name} fill className="object-cover" />
                    </div>
                  </div>
                  {/* Member Details */}
                  <div className="md:w-1/2 text-center md:text-left md:ml-150">
                    <h2 className="text-2xl font-bold text-white">{member.name}</h2>
                    <h3 className="mb-2 text-lg text-[#F5D3B2]">{member.role}</h3>
                    <p className="text-gray-300">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;


