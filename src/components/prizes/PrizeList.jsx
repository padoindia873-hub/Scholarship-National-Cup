import React from 'react'

const images = [
    { src: "/Assets/wp16.jpg", alt: "Product 1", desc: "1ST Winner will get Rs. 5000" },
];
const images1 = [
    { src: "/Assets/wp16.jpg", alt: "Product 1", desc: "Others top ten winners will get Rs.5000" },
];
const Blocklevel = [
    { src: "/Assets/wp4.jpg", alt: "Product 1", desc: "PRIZE : 1st winner Rs. 50,000/- Scholarship " },
];
const Blocklevel1 = [

    { src: "/Assets/wp21.jpg", alt: "Product 2", desc: "Consolation : 2nd to 13th top winner Rs. 10,000/- Scholarship (Each)" },
];
const Blocklevel2 = [
    { src: "/Assets/wp4.jpg", alt: "Product 3", desc: "Consolation :12nd to 92nd top wonner Rs.5000/-Scholarship(Each)" },
];

const Districtlevel = [
    { src: "/Assets/wp17.jpg", alt: "Product 1", desc: "1st BMW Bike + 5,00,000" },
    { src: "/Assets/wp15.jpg", alt: "Product 2", desc: "2nd KTM Bike + 3,00,000" },
    { src: "/Assets/wp14.jpg", alt: "Product 3", desc: "3rd Pulsar Bike + 2,00,000" },
    { src: "/Assets/wp3.jpg", alt: "Product 3", desc: "4th Scooty + 1,00,000 Remaining All Candidates." },
    // { src: "/Assets/wp13.jpg", alt: "Product 3", desc: "5th Laptop + 1,000000" },

];

const Districtlevel2 = [
    { src: "/Assets/ip.jpg", alt: "Product 1", desc: "Addition : 92 pcs I-Pads (Total 92 Pcs) " },
    { src: "/Assets/wp4.jpg", alt: "Product 2", desc: "Rs. 1,00,000/- cash for traveling" },

];

const STATElevel = [
    { src: "/Assets/wp2.jpg", alt: "Product 1", desc: "24 Pcs Hyundai Exter Car " },
    { src: "/Assets/wp4.jpg", alt: "Product 2", desc: "Each and Every one Rs. 50 Lakh Cash " },
    { src: "/Assets/wp18.jpg", alt: "Product 3", desc: "50 Gm Pure Gold Medal (22 carat)" },
    { src: "/Assets/wp6.jpg", alt: "Product 3", desc: "2BHK Flat" },
];

const STATElevel2 = [
    { src: "/Assets/wp8.jpg", alt: "Product 3", desc: "2nd top 22 candidates will get Hyundai Car" },
    { src: "/Assets/wp4.jpg", alt: "Product 3", desc: "2nd top 22 candidates will get 10 Laks Cash" },
];

const Allevel = [
    { src: "/Assets/k1.jpg", alt: "Product 1", desc: "Final ROUND 33 LOSERS WILL GET 1 CRORE CASH FOR HIGHER STUDY " },
    { src: "/Assets/wp4.jpg", alt: "Product 2", desc: "1St Round 600 LOSERS WILL GET 2 CRORE CASH " },
    // { src: "/Assets/wp4.jpg", alt: "Product 2", desc: "2nd Round 40 LOSER WILL GET  3BHK FLAT" },
    // { src: "/Assets/k2.jpg", alt: "Product 3", desc: "FINAL ROUND 9 LOSER WILL GET 4 CRORE CASH " },
    // { src: "/Assets/k3.jpg", alt: "Product 3", desc: "FINAL ROUND 9 LOSER WILL GET 4 BHK FLAT " },
    // { src: "/Assets/k5.jpg", alt: "Product 3", desc: "FINAL ROUND 9 LOSER WILL GET  MARCEDEZ BENZ CAR" },
];

const SecoAllevel = [
    { src: "/Assets/wp19.jpg", alt: "Product 1", desc: "1 Kg Gold Trophy " },
    { src: "/Assets/wp4.jpg", alt: "Product 2", desc: "10 Crore Cash  " },
    { src: "/Assets/k6.jpg", alt: "Product 2", desc: "Jaguar Car " },
    { src: "/Assets/k7.jpg", alt: "Product 3", desc: "5 BHK Flat  " },
    { src: "/Assets/k8.jpg", alt: "Product 3", desc: "All Expenses for Abroad Study Scholarship  " },
];

const thdAllevel = [
    { src: "/Assets/wp19.jpg", alt: "Product 1", desc: "500 gm Gold Trophy" },
    { src: "/Assets/wp4.jpg", alt: "Product 2", desc: "8 Crore Cash  " },
    { src: "/Assets/k6.jpg", alt: "Product 2", desc: "Jaguar Car " },
    { src: "/Assets/k7.jpg", alt: "Product 3", desc: "5 BHK Flat  " },
    { src: "/Assets/k8.jpg", alt: "Product 3", desc: "All Expenses for Abroad Study Scholarship  " },

];
const FotAllevel = [
    { src: "/Assets/wp19.jpg", alt: "Product 1", desc: "250 gm Gold Trophy" },
    { src: "/Assets/wp4.jpg", alt: "Product 2", desc: "6 Crore Cash  " },
    { src: "/Assets/k6.jpg", alt: "Product 2", desc: "Jaguar Car " },
    { src: "/Assets/k7.jpg", alt: "Product 3", desc: "5 BHK Flat  " },
    { src: "/Assets/k8.jpg", alt: "Product 3", desc: "All Expenses for Abroad Study Scholarship  " },
];
const PrizeList = () => {
    return (
        <div className="px-5 py-10 bg-white min-h-screen text-center">
            {/* Heading */}
            <h1 className="text-4xl font-bold text-gray-800 mb-6">PADHO INDIA SCHOLARSHIP CUP</h1>

            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">FINAL LEVEL (NATIONAL LEVEL) (TOTALLY OFFLINE)</h1>

            {/* Paragraph */}
            <p className="max-w-3xl mx-auto text-base text-gray-600 leading-relaxed mb-6">
                COMPETITION : IQ AND G.K. BASED
            </p>
            <p className="max-w-3xl mx-auto text-base text-gray-600 leading-relaxed mb-10">
                <strong>1st Prize:</strong>
            </p>

            {/* Image Grid */}
            <div className="flex flex-wrap justify-center gap-5">
                {SecoAllevel.map((img, index) => (
                    <div className="max-w-xs text-center" key={index}>
                        <img src={img.src} alt={img.alt} className="w-full h-52 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer" />
                        <p className="mt-2 text-sm text-gray-700">{img.desc}</p>
                    </div>
                ))}
            </div>

            {/* Repeat for other levels with headings */}
            <div className="mt-16">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">FINAL LEVEL (NATIONAL LEVEL) (TOTALLY OFFLINE)</h1>
                <p className="text-base text-gray-600 mb-6">COMPETITION : IQ AND G.K. BASED</p>
                <p className="text-base text-gray-600 mb-10"><strong>2nd Prize:</strong></p>
                <div className="flex flex-wrap justify-center gap-5">
                    {thdAllevel.map((img, index) => (
                        <div className="max-w-xs text-center" key={index}>
                            <img src={img.src} alt={img.alt} className="w-full h-52 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer" />
                            <p className="mt-2 text-sm text-gray-700">{img.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Third Prize */}
            <div className="mt-16">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">FINAL LEVEL (NATIONAL LEVEL) (TOTALLY OFFLINE)</h1>
                <p className="text-base text-gray-600 mb-6">COMPETITION : IQ AND G.K. BASED</p>
                <p className="text-base text-gray-600 mb-10"><strong>3rd Prize:</strong></p>
                <div className="flex flex-wrap justify-center gap-5">
                    {FotAllevel.map((img, index) => (
                        <div className="max-w-xs text-center" key={index}>
                            <img src={img.src} alt={img.alt} className="w-full h-52 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer" />
                            <p className="mt-2 text-sm text-gray-700">{img.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* FINAL LEVEL NO PRIZE TEXT */}
            <div className="mt-16">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">FINAL LEVEL (NATIONAL LEVEL) (TOTALLY OFFLINE)</h1>
                <p className="text-base text-gray-600 mb-10">COMPETITION : IQ AND G.K. BASED</p>
                <div className="flex flex-wrap justify-center gap-5">
                    {Allevel.map((img, index) => (
                        <div className="max-w-xs text-center" key={index}>
                            <img src={img.src} alt={img.alt} className="w-full h-52 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer" />
                            <p className="mt-2 text-sm text-gray-700">{img.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* STATE LEVEL */}
            {/* <div className="mt-16">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">STATE LEVEL (Offline)</h1>
                <p className="text-base text-gray-600 mb-4">COMPETITION : IQ AND G.K. BASED</p>
                <p className="text-base text-gray-600 mb-6"><strong>PRIZE:</strong> Each of the 24 members will go to at the next level (Final Level)</p>
                <p className="text-base text-gray-600 mb-10"><strong>1st Prize:</strong></p>
                <div className="flex flex-wrap justify-center gap-5">
                    {STATElevel.map((img, index) => (
                        <div className="max-w-xs text-center" key={index}>
                            <img src={img.src} alt={img.alt} className="w-full h-52 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer" />
                            <p className="mt-2 text-sm text-gray-700">{img.desc}</p>
                        </div>
                    ))}
                </div>

                <p className="text-base text-gray-600 mt-10 mb-6"><strong>2nd Prize:</strong></p>
                <div className="flex flex-wrap justify-center gap-5">
                    {STATElevel2.map((img, index) => (
                        <div className="max-w-xs text-center" key={index}>
                            <img src={img.src} alt={img.alt} className="w-full h-52 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer" />
                            <p className="mt-2 text-sm text-gray-700">{img.desc}</p>
                        </div>
                    ))}
                </div>
            </div> */}

            {/* DISTRICT LEVEL */}
            <div className="mt-16">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">DISTRICT LEVEL (Offline)</h1>
                <p className="text-base text-gray-600 mb-4">COMPETITION : IQ AND G.K. BASED</p>
                <p className="text-base text-gray-600 mb-10"><strong>1st Prize:</strong></p>
                <div className="flex flex-wrap justify-center gap-5">
                    {Districtlevel.map((img, index) => (
                        <div className="max-w-xs text-center" key={index}>
                            <img src={img.src} alt={img.alt} className="w-full h-52 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer" />
                            <p className="mt-2 text-sm text-gray-700">{img.desc}</p>
                        </div>
                    ))}
                </div>

                {/* <p className="text-base text-gray-600 mt-10 mb-6"><strong>2nd Prize:</strong> Remaining person will receive a prize.</p>
                <div className="flex flex-wrap justify-center gap-5">
                    {Districtlevel2.map((img, index) => (
                        <div className="max-w-xs text-center" key={index}>
                            <img src={img.src} alt={img.alt} className="w-full h-52 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer" />
                            <p className="mt-2 text-sm text-gray-700">{img.desc}</p>
                        </div>
                    ))}
                </div> */}
            </div>

            {/* BLOCK LEVEL */}
            <div className="mt-16">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">BLOCK LEVEL (Online)</h1>
                <p className="text-base text-gray-600 mb-4">COMPETITION : IQ AND G.K. BASED</p>

                <p className="text-base text-gray-600 mb-10"><strong>1st Prize:</strong></p>
                <div className="flex flex-wrap justify-center gap-5">
                    {Blocklevel.map((img, index) => (
                        <div className="max-w-xs text-center" key={index}>
                            <img src={img.src} alt={img.alt} className="w-full h-52 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer" />
                            <p className="mt-2 text-sm text-gray-700">{img.desc}</p>
                        </div>
                    ))}
                </div>

                <p className="text-base text-gray-600 mt-10 mb-6"><strong>2nd Prize:</strong></p>
                <div className="flex flex-wrap justify-center gap-5">
                    {Blocklevel1.map((img, index) => (
                        <div className="max-w-xs text-center" key={index}>
                            <img src={img.src} alt={img.alt} className="w-full h-52 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer" />
                            <p className="mt-2 text-sm text-gray-700">{img.desc}</p>
                        </div>
                    ))}
                </div>

                {/* <p className="text-base text-gray-600 mt-10 mb-6"><strong>3rd Prize:</strong></p>
                <div className="flex flex-wrap justify-center gap-5">
                    {Blocklevel2.map((img, index) => (
                        <div className="max-w-xs text-center" key={index}>
                            <img src={img.src} alt={img.alt} className="w-full h-52 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer" />
                            <p className="mt-2 text-sm text-gray-700">{img.desc}</p>
                        </div>
                    ))}
                </div> */}
            </div>

            {/* SCHOOL AND COLLEGE LEVEL */}
            <div className="mt-16">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">SCHOOL AND COLLEGE LEVEL WINNER (Online)</h1>
                <p className="text-base text-gray-600 mb-6">COMPETITION : IQ AND G.K. BASED</p>
                <p className="text-base text-gray-600 mb-10"><strong>1st Prize:</strong></p>
                <div className="flex flex-wrap justify-center gap-5">
                    {images.map((img, index) => (
                        <div className="max-w-xs text-center" key={index}>
                            <img src={img.src} alt={img.alt} className="w-full h-52 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer" />
                            <p className="mt-2 text-sm text-gray-700">{img.desc}</p>
                        </div>
                    ))}
                </div>

                {/* <p className="text-base text-gray-600 mt-10 mb-6"><strong>2nd Prize:</strong></p> */}
                {/* <div className="flex flex-wrap justify-center gap-5">
                    {images1.map((img, index) => (
                        <div className="max-w-xs text-center" key={index}>
                            <img src={img.src} alt={img.alt} className="w-full h-52 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer" />
                            <p className="mt-2 text-sm text-gray-700">{img.desc}</p>
                        </div>
                    ))}
                </div> */}
            </div>

            <p className="text-sm text-gray-500 mt-12 max-w-2xl mx-auto">
                If this level Scholarship Exam Competition is done, you will get all these awards or not because it's a total level-based competition. You will win the prize only if you win.
            </p>
        </div>
    );
}
export default PrizeList