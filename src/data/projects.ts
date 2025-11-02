export type Project = {
  title: string;
  description: string;
  result: string;
  src: string;
};

export const projects: Project[] = [
  {
    title: "Real Estate Web Apps",
    description:
      "Custom-built real estate web applications with live inventory, map search, and lead automation. Designed for performance, scalability, and seamless user experience.",
    result: "Helped increase qualified leads by 45% within 3 months.",
    src: "projects/real-estate-dev.png",
  },
  {
    title: "CRM Development",
    description:
      "A powerful CRM built to simplify workflows, automate follow-ups, and track conversions in real time — enabling businesses to close deals faster with better insights.",
    result: "Improved sales team productivity by 35% and reduced lead leakage.",
    src: "projects/crm-dev.png",
  },
  {
    title: "Chatbot Integration",
    description:
      "AI-driven chatbots integrated across WhatsApp, websites, and CRMs — offering instant responses, 24/7 engagement, and higher lead-to-sale conversion rates.",
    result: "Boosted customer engagement by 60% and response time by 80%.",
    src: "projects/chat-bot-integration.png",
  },
  {
    title: "Café & Restaurant Websites",
    description:
      "Elegant, responsive websites for cafes and restaurants — with menu integration, table booking, and delivery links to enhance customer experience and visibility.",
    result: "Increased online reservations by 50% and website traffic by 70%.",
    src: "projects/cafe-restaurant.png",
  },
];
