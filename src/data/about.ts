import { Heart, Sparkles, Target, Zap } from "lucide-react";

interface TeamMember {
  name: string;
  src: string;
  designation: string;
  linkedin: string;
  color: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Sarah Johnson",
    designation: "Chief Executive Officer",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3",
    linkedin: "https://linkedin.com/in/sarahjohnson",
    color: "from-cyan-500 to-blue-500",
  },
  {
    name: "Michael Chen",
    designation: "Chief Technology Officer",
    src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3",
    linkedin: "https://linkedin.com/in/michaelchen",
    color: "from-orange-500 to-red-500",
  },
  {
    name: "Emily Rodriguez",
    designation: "Head of Design",
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3",
    linkedin: "https://linkedin.com/in/emilyrodriguez",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "David Kumar",
    designation: "Lead Developer",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    linkedin: "https://linkedin.com/in/davidkumar",
    color: "from-pink-500 to-rose-500",
  },
  {
    name: "Lisa Wang",
    designation: "Project Manager",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    linkedin: "https://linkedin.com/in/lisawang",
    color: "from-amber-500 to-yellow-500",
  },
  {
    name: "James Patterson",
    designation: "Marketing Director",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3",
    linkedin: "https://linkedin.com/in/jamespatterson",
    color: "from-violet-500 to-purple-500",
  },
];

export const values = [
  {
    icon: Sparkles,
    title: "Innovation First",
    description:
      "We stay ahead of the curve, embracing cutting-edge technologies to deliver solutions that set new standards.",
  },
  {
    icon: Target,
    title: "Results Driven",
    description:
      "Your success metrics are our KPIs. We're obsessed with delivering measurable impact and ROI.",
  },
  {
    icon: Heart,
    title: "Client Partnership",
    description:
      "We don't just work for you—we work with you. Your vision becomes our mission.",
  },
  {
    icon: Zap,
    title: "Agile Excellence",
    description:
      "Fast iterations, continuous improvement, and adaptive strategies keep us nimble and effective.",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Deep dive into your business, goals, and challenges to understand what success looks like.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "Craft a tailored roadmap with clear milestones, timelines, and deliverables.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Create intuitive, beautiful interfaces that users love and convert.",
  },
  {
    number: "04",
    title: "Development",
    description:
      "Build robust, scalable solutions using industry best practices and modern tech.",
  },
  {
    number: "05",
    title: "Testing",
    description:
      "Rigorous QA ensures bug-free, secure, and performant applications.",
  },
  {
    number: "06",
    title: "Launch",
    description:
      "Seamless deployment and post-launch support to ensure smooth operations.",
  },
];
