import React from "react";
import heroImg from "../../assets/data extraction-rafiki.png";
const Home = () => {
    return (
        <div className="text-white flex w-full justify-between items-start p-10 md:p-20">

            <div className="md:w-1/2 md:pt-32">
                <h1 className="text-3xl md:text-6xl font-bold leading-normal tracking-tighter">
                    Hello! I am Charan
                </h1>

                <p className="text-xm md:text-2xl tracking-tight mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
                    doloremque? Aspernatur, sequi molestias, velit quo reprehenderit
                    debitis earum illo alias libero quis voluptatum officiis deserunt
                    ullam reiciendis. Officia autem dolores voluptatum laborum.
                </p>
                <button
                    className=" mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 transition duration-300 hover:opacity-90 hover:scale-105 font-semibold rounded-3xl bg-[#465697] "
                >
                    Contact Me
                </button>
            </div>

            <img className="w-2/5" src={heroImg} alt="hero" />
        </div>
    );
};

export default Home;