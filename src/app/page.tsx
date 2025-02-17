import Image from "next/image";
import Hero from "@/components/home/Hero";
import Chaos from "@/components/home/Chaos";
import Effortless from "@/components/home/Effortless";
import Chatbot from "@/components/shared/chatbot/Chatbot";
import ChatbotWrapper from '@/components/shared/chatbot/ChatbotWrapper';
import HeroAnimation from "@/components/home/HeroAnimation";
export default function Home() {
  return (
    <main>
      <Hero />
      <Chaos />
      <Effortless />
      <HeroAnimation />
      <ChatbotWrapper />
    </main>
  );
}
