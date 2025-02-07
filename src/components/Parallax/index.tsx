import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Parallax = () => {
  const [background, setBackground] = useState(20);

  const parallaxRef = useRef(null);
  const mountain3 = useRef(null);
  const mountain2 = useRef(null);
  const mountain1 = useRef(null);
  const cloudsBottom = useRef(null);
  const cloudsLeft = useRef(null);
  const cloudsRight = useRef(null);
  const stars = useRef(null);
  const sun = useRef(null);
  const copy = useRef(null);
  const btn = useRef(null);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const sunMoveRatio = screenWidth < 1200 ? 2.5 : 1.4;
    const mountain2MoveRatio = screenWidth < 640 ? 10 : 30;
    const mountain3MoveRatio = screenWidth < 1200 ? 10 : 20;
    const copyMoveRatio = screenWidth < 640 ? -170 : -250;
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      var tl = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: "top top",
          end: "5000 bottom",
          scrub: true,
          pin: true,
          onUpdate: (self) => {
            setBackground(Math.ceil(self.progress * 100 + 20));
          },
        },
      });
      tl.to(
        mountain3.current,
        {
          y: `-=${mountain3MoveRatio}`,
        },
        0
      );
      tl.to(
        mountain2.current,
        {
          y: `-=${mountain2MoveRatio}`,
        },
        0
      );
      tl.to(
        mountain1.current,
        {
          y: "+=50",
        },
        0
      );
      tl.to(
        stars.current,
        {
          top: 0,
        },
        0.5
      );
      tl.to(
        cloudsBottom.current,
        {
          opacity: 0,
          duration: 0.5,
        },
        0
      );
      tl.to(
        cloudsLeft.current,
        {
          x: "-20%",
          opacity: 0,
        },
        0
      );
      tl.to(
        cloudsRight.current,
        {
          x: "20%",
          opacity: 0,
        },
        0
      );
      tl.to(
        sun.current,
        {
          y: 210 * sunMoveRatio,
        },
        0
      );
      tl.to(
        copy.current,
        {
          y: `${copyMoveRatio}%`,
          opacity: 1,
        },
        0
      );
      tl.to(
        btn.current,
        {
          opacity: 1,
        },
        1.5
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="overflow-hidden">
      <div
        ref={parallaxRef}
        style={{
          background: `linear-gradient(#0F2B9C, #673D7D ${background}%, #A74A67, #EDFC54 )`,
        }}
        className="parallax h-[110vh] w-full"
      >
        <img
          ref={mountain3}
          className="bottom-0 z-[3] w-full"
          src="./parallax/mountain-3.svg"
        />
        <img
          ref={mountain2}
          className="bottom-[20px] z-[2] w-full"
          src="./parallax/mountain-2.svg"
        />
        <img
          ref={mountain1}
          className="bottom-[40px] z-[1] w-full"
          src="./parallax/mountain-1.svg"
        />
        <img
          ref={sun}
          className="absolute left-[50%] top-[40%] w-[40%] translate-x-[-50%]
            translate-y-[-50%]"
          src="./parallax/sun.svg"
        />
        <img
          ref={cloudsBottom}
          className="bottom-0 w-full"
          src="./parallax/cloud-bottom.svg"
        />
        <img
          ref={cloudsLeft}
          className="left-0 w-[20%]"
          src="./parallax/clouds-left.svg"
        />
        <img
          ref={cloudsRight}
          className="right-0 w-[20%]"
          src="./parallax/clouds-right.svg"
        />
        <img
          ref={stars}
          className="-top-[550px] left-0 w-full"
          src="./parallax/stars.svg"
        />

        <div
          ref={copy}
          className="copy"
        >
          <h1
            className="xlg:text-[60px] text-center text-[30px] sm:text-[35px]
              md:text-[45px]"
          >
            Steven <br className="block sm:hidden" />
            the Data Engineer Portfolio
          </h1>
          <span className="mb-[50px] mt-[30px] text-center">
            Data Engineer skilled in <br className="block sm:hidden" /> AWS |
            Python | SQL | Docker | PowerBI | CI/CD | Git
          </span>
          <button
            ref={btn}
            onClick={() => {
              const element = document.querySelector("#project");
              element?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Discover more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Parallax;
