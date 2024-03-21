import { SlideNav } from "./slide.js";

const slide = new SlideNav(".slide", ".slide-wrapper");
slide.init();
slide.addArrow(".prev", ".next");

slide.addControl();

// slide.changeSlide(3);
// slide.activePrevSlide();

console.log(slide);
