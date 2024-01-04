import React from "react";

const AboutSection = () => {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8 isolate">
      <div className="absolute opacity-20 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] inset-0" />
      <div className="absolute right-1/2 -z-10 xl:origin-center xl:mr-16 lg:mr-0 sm:mr-28 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        {/* Logo */}
        <img className="mx-auto h-12" src="" alt="" />

        <figure className="mt-10">
          <blockquote className="text-center text-2xl leading-9 font-semibold text-gray-900 sm:text-3xl">
            <p>
              “Hi, I'm Dawid, a 26-year-old passionate frontend learner, working
              on creating exciting SPAs. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Nemo expedita voluptas culpa sapiente alias
              molestiae. Numquam corrupti in laborum sed rerum et corporis.”
            </p>
          </blockquote>

          <figcaption className="mt-10">
            <img className="mx-auto h-10 w-10 rounded-full" src="" alt="" />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="text-gray-900 font-semibold">Dave</div>
              <svg
                viewBox="0 0 2 2"
                width={3}
                height={3}
                aria-hidden="true"
                className="fill-gray-900"
              >
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-gray-600">d</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default AboutSection;
