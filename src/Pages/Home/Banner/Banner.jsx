import React from "react";
import Typewriter from 'typewriter-effect';


const Banner = () => {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-primary/10"></div>

      <div className="relative max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center md:px-0">
        <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
          <div className="flex items-center mb-2 text-center md:text-left justify-center md:justify-start">
            <hr className="w-10 mr-3 border-2 border-blue-500" />
            <h1 className="text-lg font-semibold text-blue-600">
              Welcome To Our OwnMed
            </h1>
            <hr className="w-10 ml-3 border-2 border-blue-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-secondary">
            We Care About Your

            <Typewriter
              options={{
                strings: [
                  '<span class="text-primary">Health</span>',
                  '<span class="text-primary">Family</span>',
                ],
                autoStart: true,
                loop: true,
                html: true,
              }}
            />

          </h1>
          <p className="text-accent max-w-md">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat.
          </p>
          <div className="flex gap-2">
            <button className="btn btn-primary mt-4 text-white">Appointment</button>

            <button className="btn btn-secondary mt-4 text-white">Be a part</button>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0">
          <img
            src="https://i.ibb.co.com/ymgS8CHm/doctor.png"
            alt="Doctor"
            className="w-80 md:w-full max-w-sm rounded-lg shadow-lg my-5"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
