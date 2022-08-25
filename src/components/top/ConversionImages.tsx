import { useAnimate } from "../../hooks/useAnimate";

type TProps = {
  number: number;
  leftImagePath: string;
  rightImagePath: string;
};

export const ConversionImages = ({
  number,
  leftImagePath,
  rightImagePath,
}: TProps) => {
  useAnimate({
    id: `#conversion-left-${number}`,
    from: { opacity: 0, transform: "rotate(-12deg)" },
    to: {
      opacity: 1,
      transform: "rotate(0deg)",
      scrollTrigger: {
        trigger: `#conversion-left-${number}`,
        start: "top 80%",
        end: "top 40%",
        scrub: true,
        markers: false,
        once: true,
      },
    },
  });
  useAnimate({
    id: `#conversion-right-${number}`,
    from: { opacity: 0, transform: "rotate(12deg)" },
    to: {
      opacity: 1,
      transform: "rotate(0deg)",
      scrollTrigger: {
        trigger: `#conversion-right-${number}`,
        start: "top 70%",
        end: "top 30%",
        scrub: true,
        markers: false,
        once: true,
      },
    },
  });
  return (
    <div className="w-full h-auto relative z-0">
      <div id={`conversion-left-${number}`} className="origin-[50%_300%]">
        <img
          src={leftImagePath}
          alt="conversion"
          className="w-4/5 mx-auto rotate-6 relative -z-10"
        />
      </div>
      <div className="absolute inset-0">
        <div id={`conversion-right-${number}`} className="origin-[50%_300%]">
          <img
            src={rightImagePath}
            alt="conversion"
            className="w-4/5 mx-auto -rotate-6 relative z-0 transition"
          />
        </div>
      </div>
    </div>
  );
};
