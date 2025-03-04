import React from "react";

const Innotern: React.FC = () => {
    return (
        <div className="bg-white min-h-screen flex flex-col items-center font-inter">
            {/* Full-Width Image at the Top with Title */}
            <div className="relative w-full h-100">
                <img src="/image/LE.jpg" alt="LE" className="w-full h-full object-contain" />
                <h1 className="absolute inset-0 flex items-center justify-center text-black text-4xl font-bold drop-shadow-lg px-8 w-full text-center">
                    ENTRY LEVEL / INNOTERN
                </h1>
            </div>

            {/* Content Section - Everything Below Image */}
            <section className="max-w-4xl text-center mt-12 w-full px-10">
                <h1 className="text-3xl font-bold text-gray-800 mb-4 px-8">
                    YOUR NEXT STEP IS HERE. TAKE IT.
                </h1>
                <p className="text-gray-700 text-lg leading-relaxed w-full">
                    Capco is a great place to start, or to reboot your career if you are a career changer or are re-entering the workforce.
                    We have a variety of entry-level roles. In addition, our unique Associate Talent Program (ATP) is our primary hiring
                    program for entry-level candidates, or for career changers who want to transition to a career in consulting.
                    Our ATP program is tailor-made to help you enhance your skillset and enhance your understanding of the industry’s
                    best practices.
                </p>
            </section>

            {/* Second Section - Criteria Section */}
            <section className="min-h-screen flex flex-col items-center justify-center w-full px-10 mt-10 bg-white">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">
                    ARE YOU A GOOD FIT?
                </h1>
                <h2 className="text-xl text-blue-500 font-semibold mb-4">
                    ATP CRITERIA
                </h2>
                <p className="text-gray-700 text-lg max-w-3xl text-center mb-6">
                    At Capco, we believe that our diverse and inclusive culture, where different perspectives are welcomed, gives us a
                    competitive edge. We look for candidates from a variety of backgrounds and experiences.
                </p>
                <h3 className="text-lg font-bold text-blue-500 mb-3">
                    TO QUALIFY FOR OUR ATP PROGRAM, YOU SHOULD MEET THESE CRITERIA:
                </h3>
                <ul className="text-gray-700 text-lg list-disc list-inside max-w-3xl text-left">
                    <li>Have a university or college degree</li>
                    <li>Be a recent university graduate, or a change professional - with financial services, consulting or fintech experience</li>
                    <li>Possess exceptional analytical skills and problem-solving abilities</li>
                    <li>Have strong verbal and written communication skills</li>
                    <li>Be passionate about your work and focused on delivering excellence</li>
                    <li>Have an interest in working in consulting and the financial services industry</li>
                    <li>Have strong skills in the Microsoft Office suite (PowerPoint, Excel, Word, etc.)</li>
                </ul>
            </section>

            {/* APPLY NOW Section - Reduced Gap Further */}
            <section className="flex flex-col items-center justify-center w-full px-10 mt-1 bg-white">
                <h1 className="text-4xl font-bold text-black mb-4">APPLY NOW!</h1>
                <button className="bg-blue-500 text-white px-6 py-3 text-lg font-semibold uppercase tracking-wide hover:bg-teal-700 transition">
                    CAREER SEARCH
                </button>
            </section>
        </div>
    );
};

export default Innotern;
