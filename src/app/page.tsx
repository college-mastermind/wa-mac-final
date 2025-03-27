import Image from "next/image";
import Hero from "@/components/home/Hero";
import Chaos from "@/components/home/Chaos";
import Effortless from "@/components/home/Effortless";
import Chatbot from "@/components/shared/chatbot/Chatbot";
import ChatbotWrapper from '@/components/shared/chatbot/ChatbotWrapper';
import HeroAnimation from "@/components/home/HeroAnimation";
import Whatsapp from "@/components/shared/whatsapp/Whatsapp";
import Serve from "@/components/home/Serve";
import Priority from "@/components/home/Priority";
export default function Home() {
  return (
    <main>
      <Hero />
      <Chaos />
      <Serve />
      <Priority />
      <Effortless />
      <HeroAnimation />
      <ChatbotWrapper />
      <Whatsapp />
      
    </main>
  );
}
