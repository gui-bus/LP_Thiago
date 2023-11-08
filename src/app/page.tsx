import DeliverySection from "@/components/sections/deliverySection";
import WashSection from "@/components/sections/washSection";
import { Divider } from "@nextui-org/react";
import RepairSection from "@/components/sections/repairSection";
import Products from "@/components/Products";
import LessonHomeSection from "@/components/sections/lessonHomeSection";

import LocationSection from "@/components/sections/locationSection";
import TeamSection from "@/components/sections/teamSection";
import { BsTools } from "react-icons/bs";

import { FaInstagram, FaYoutube, FaTiktok, FaWhatsapp } from "react-icons/fa6";
import Banner from "@/components/sections/banner";
import ServicesSection from "@/components/sections/servicesSection";

const iconMap: { [key: string]: JSX.Element } = {
  FaYoutube: <FaYoutube size={32} />,
  FaInstagram: <FaInstagram size={32} />,
  FaTiktok: <FaTiktok size={32} />,
  FaWhatsapp: <FaWhatsapp size={32} />,
};

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Banner />
      <ServicesSection />

      <TeamSection />

      <LocationSection />

      <Products />
    </main>
  );
}
