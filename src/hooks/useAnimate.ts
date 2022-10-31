// TODO: gsap導入後にスクロールをしていたら画面の一番上に遷移してしまう不具合が頻発していたのでコメントアウトする。
export const useAnimate = () => {};

// import gsap from "gsap";
// import ScrollTrigger from "gsap/dist/ScrollTrigger";
// import { useEffect } from "react";

// type TProps = {
//   id: string;
//   from: Object;
//   to: Object;
// };

// export const useAnimate = ({ id, from, to }: TProps) => {
//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);
//     setAnimation();
//   }, []);

//   const setAnimation = () => {
//     gsap.fromTo(id, from, to);
//   };
// };
