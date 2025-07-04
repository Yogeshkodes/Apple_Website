import React from "react";
import gsap from "gsap";
import { rightImg, watchImg } from "../utils";
import { useGSAP } from "@gsap/react";
import VideoCarousel from "./VideoCarousel";

function Highlights() {
  useGSAP(() => {
    gsap.to("#title", { opacity: 1, y: 0, delay: 1 });
    gsap.to(".link", { opacity: 1, y: 0, stagger: 1.5 });
  }, []);
  return (
    <section
      id="Highlights"
      className="w-screen h-full overflow-hidden common-padding bg-zinc max-sm:mt-12"
    >
      <div className="screen-max-width ">
        <div className="mb-12 md:flex items-end justify-between">
          <h1 id="title" className="section-heading">
            Get the highlights.
          </h1>

          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the film
              <img src={watchImg} alt="watch" className="ml-2" />
            </p>

            <p className="link">
              Watch the event
              <img src={rightImg} alt="right" className="ml-2" />
            </p>
          </div>
        </div>

        <VideoCarousel />
      </div>
    </section>
  );
}

export default Highlights;
