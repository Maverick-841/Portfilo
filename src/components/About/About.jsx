import React from "react";
import ReactTypingEffect from "react-typing-effect";
import profileImage from "../../assets/profile2.png";

const About = () => {
  return (
    <section
      id="about"
      className="py-10 px-[7vw] md:px-[7vw] lg:px-[18vw] font-sans mt-16"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">

        {/* LEFT CONTENT */}
        <div className="md:w-1/2 text-center md:text-left">

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Hi, I’m
          </h1>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-2">
            Charan Tej
          </h2>

          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-3 text-[#a855f7]">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                "Full Stack Developer",
                "Web Developer",
                "Coder",
                "Tech Enthusiast",
              ]}
              speed={100}
              eraseSpeed={60}
              typingDelay={400}
              eraseDelay={1500}
            />
          </h3>

          <p className="text-gray-400 mt-6 text-sm sm:text-base leading-relaxed">
            I am a passionate full-stack developer and currently pursuing my
            B.Tech (2nd Year). I have built multiple real-world projects using
            modern web technologies and constantly push myself to learn and
            improve. I am looking for an internship where I can sharpen my
            skills, gain industry exposure, and grow into a strong professional
            developer.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">

            <a
            
              href="/Charan_tej_Reddy.pdf"
              download
              className="px-7 py-2.5 rounded-full font-bold text-white text-base transition-all"
              style={{
                background: "linear-gradient(90deg,#8245ec,#a855f7)",
                boxShadow: "0 0 15px rgba(130,69,236,0.8)",
              }}
            >
              Download CV
            </a>

            <a
              href="#contact"
              className="px-7 py-2.5 rounded-full font-bold text-base text-white border border-purple-500 hover:bg-purple-600 transition-all duration-300"
            >
              Contact Me
            </a>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="md:w-1/2 flex justify-center">

          <div className="w-44 h-44 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full border-4 border-purple-600 overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300">

            <img
              src={profileImage}
              alt="Charan Tej Reddy"
              className="w-full h-full object-cover rounded-full object-[70%_40%]"
            />


          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
