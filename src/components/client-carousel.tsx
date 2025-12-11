import Image from "next/image";

const clients = [
    { name: "Buwule and Mayiga Advocates", logo: "/clients/buwule-and-mayiga-advocates.png" },
    { name: "Case Medical", logo: "/clients/case-medical.png" },
    { name: "Clark University", logo: "/clients/clark-university.png" },
    { name: "Cornerstone Community School", logo: "/clients/cornerstone-community-school.png" },
    { name: "Faraja Africa", logo: "/clients/faraja-africa.png" },
    { name: "Makerere CEDAT", logo: "/clients/makerere-cedat.png" },
    { name: "Makerere NetLabs", logo: "/clients/makerere-netlabs.png" },
    { name: "Uganda Christian University", logo: "/clients/uganda-christian-university.png" },
];

const ClientCarousel = () => {
    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="container-custom mb-10 text-center">
                <h3 className="text-2xl font-bold text-dark/80">Trusted by Leading Organizations</h3>
            </div>

            <div className="relative w-full">
                <div className="flex w-[200%] animate-scroll hover:[animation-play-state:paused] items-center">
                    {/* First set of logos */}
                    <div className="flex w-1/2 justify-around items-center px-4">
                        {clients.map((client, index) => (
                            <div key={`client-1-${index}`} className="h-20 w-40 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 mx-4">
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Second set of logos for seamless loop */}
                    <div className="flex w-1/2 justify-around items-center px-4">
                        {clients.map((client, index) => (
                            <div key={`client-2-${index}`} className="h-20 w-40 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 mx-4">
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Gradient overlays for smooth fade effect at edges */}
                <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
                <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
            </div>
        </section>
    );
};

export default ClientCarousel;
