import Image from "next/image";
import hero1 from "@/assets/home/slider/one.png";
import hero2 from "@/assets/home/slider/two.png";
import hero3 from "@/assets/home/slider/three.png";
import hero4 from "@/assets/home/slider/four.png";


export interface SlideData {
  id: number;
  title: string;
  description: string;
  image: any; // StaticImageData type
}

export const sliderData: SlideData[] = [
  {
    id: 1,
    title: "Your Adventure is Calling",
    description: "As a true visionary and achiever, you've already conquered so much, but you're dreaming of a legacy that will endure and leave a lasting mark on your family",
    image: hero1
  },
  {
    id: 2,
    title: "The Weight of Success",
    description: "You have the vision and courage to rise above challenges, yet the weight of managing it all alone begins to hold you back, making the dream feel more like a logistical nightmare.",
    image: hero2
  },
  {
    id: 3,
    title: "When it feels overwhelming",
    description: "WA MAC arrives to lighten the load. Managing your properties becomes a breeze, and you can focus on long-term planning and objectives, while we handle the details.",
    image: hero3
  },
  {
    id: 4,
    title: "Delegation Gives You Power",
    description: "With your properties in trusted hands, you can fully immerse yourself in pursuits that give you a higher ROI, and we'll ensure everything runs smoothly behind the scenes.",
    image: hero4
  }
];
