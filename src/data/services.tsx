import { CustomSoftwareDevelopment } from "@/components/services/custom-software-development";
import { DigitalMarketing } from "@/components/services/digital-marketing";
import { ERPDevelopment } from "@/components/services/erp-development";
import { SAPDevelopment } from "@/components/services/sap-development";
import { ThirdPartyIntegration } from "@/components/services/third-party-integration";
import { WebDevelopment } from "@/components/services/web-development";
import {
  CodeXml,
  DollarSign,
  Globe,
  Layout,
  Megaphone,
  Settings,
} from "lucide-react";

export const services = [
  {
    name: "web-development",
    title: "Your Ultimate",
    highlight: "Web Development Solutions",
    subtitle: "Web Development",
    description: [
      "Modern, responsive, and secure websites tailored to your brand and audience.",
      "We build high-performance, SEO-optimized, and scalable web applications designed to grow with your business.",
    ],
    points: [
      "Custom website design",
      "Mobile-first approach",
      "High performance & scalability",
    ],
    header: <WebDevelopment />,
    Icon: Globe,
    banner: {
      title: "Build Websites That Perform, Scale, and Inspire",
      description:
        "We create high-quality, responsive websites that blend beautiful design with powerful technology to deliver seamless digital experiences.",
    },
    process: {
      heading: "Our Process",
      subheading: "Crafting Scalable Websites That Work",
      description:
        "Our approach combines deep technical expertise, modern frameworks, and user-focused design to deliver web experiences that drive measurable business results.",
      steps: [
        {
          number: "01",
          title: "Discovery",
          description:
            "We begin by understanding your goals, business needs, and target audience. Through workshops and research, we define the website’s purpose, scope, and success metrics.",
        },
        {
          number: "02",
          title: "Design",
          description:
            "Our designers create intuitive, visually engaging interfaces that enhance user experience while maintaining brand consistency across all devices.",
        },
        {
          number: "03",
          title: "Development",
          description:
            "Using technologies like Next.js, React, and Node.js, we build fast, SEO-friendly, and scalable websites optimized for long-term performance and easy maintenance.",
        },
        {
          number: "04",
          title: "Testing & QA",
          description:
            "We perform comprehensive browser and device testing to ensure consistent functionality, accessibility, and performance across environments.",
        },
        {
          number: "05",
          title: "Launch & Support",
          description:
            "After deployment, we monitor performance, provide post-launch support, and implement ongoing improvements to keep your site ahead of trends.",
        },
      ],
    },
    testimonials: [],
    faqs: {
      heading: "Web Development FAQs",
      description: "Common questions about our web development process.",
      items: [
        {
          id: "web-faq-1",
          question: "Do you build responsive websites?",
          answer:
            "Yes, all our websites are designed to adapt seamlessly to all devices and screen sizes, ensuring optimal user experience.",
        },
        {
          id: "web-faq-2",
          question: "Do you handle website maintenance after launch?",
          answer:
            "Absolutely. We offer ongoing support, updates, backups, and performance monitoring after your site goes live.",
        },
        {
          id: "web-faq-3",
          question: "Can you build e-commerce websites?",
          answer:
            "Yes, we create scalable e-commerce solutions with secure payment gateways, inventory systems, and analytics dashboards.",
        },
        {
          id: "web-faq-4",
          question: "How long does it take to build a website?",
          answer:
            "It typically takes 4–10 weeks depending on design complexity, features, and content availability.",
        },
        {
          id: "web-faq-5",
          question: "Do you optimize for SEO?",
          answer:
            "Yes, we implement best SEO practices like meta tags, clean URLs, fast loading times, and semantic markup for better ranking.",
        },
      ],
    },
  },

  {
    name: "digital-marketing",
    title: "Grow Your Brand With",
    highlight: "Digital Marketing",
    subtitle: "Digital Marketing",
    description: [
      "Data-driven marketing strategies that deliver measurable growth and ROI.",
      "We combine creativity, analytics, and technology to help your brand reach the right audience effectively.",
    ],
    points: [
      "Google & social media ads",
      "Google Ads account setup",
      "Lead generation & ROI tracking",
    ],
    header: <DigitalMarketing />,
    Icon: Settings,
    banner: {
      title: "Drive Growth With Data-Driven Marketing",
      description:
        "Our campaigns blend creativity and analytics to attract, engage, and convert customers while boosting brand visibility.",
    },
    process: {
      heading: "Our Process",
      subheading: "Driving Results Through Strategy and Insight",
      description:
        "Every marketing strategy we create is tailored to your goals, leveraging real data and modern tools for maximum ROI.",
      steps: [
        {
          number: "01",
          title: "Research & Strategy",
          description:
            "We analyze your market, audience, and competition to craft a strategy that focuses on the right channels and KPIs.",
        },
        {
          number: "02",
          title: "Creative Planning",
          description:
            "Our creative team develops engaging ad copy, visuals, and campaign structures that align with your brand voice.",
        },
        {
          number: "03",
          title: "Campaign Execution",
          description:
            "We launch and monitor campaigns across search engines and social media platforms, fine-tuning targeting for the best performance.",
        },
        {
          number: "04",
          title: "Performance Tracking",
          description:
            "Using analytics tools, we track engagement, conversions, and key metrics to identify what’s working and where to improve.",
        },
        {
          number: "05",
          title: "Optimization & Scaling",
          description:
            "We continuously optimize campaigns, allocate budget intelligently, and scale strategies to achieve sustainable growth.",
        },
      ],
    },
    testimonials: [],
    faqs: {
      heading: "Digital Marketing FAQs",
      description: "Answers to common marketing questions.",
      items: [
        {
          id: "dm-faq-1",
          question: "Do you provide social media marketing?",
          answer:
            "Yes, we manage social campaigns on Facebook, Instagram, LinkedIn, and other major platforms to build brand engagement.",
        },
        {
          id: "dm-faq-2",
          question: "How do you measure campaign success?",
          answer:
            "We track KPIs such as CTR, conversions, leads, and ROI using tools like Google Analytics and Meta Ads Manager.",
        },
        {
          id: "dm-faq-3",
          question: "Can you handle SEO and paid ads together?",
          answer:
            "Yes, we design integrated strategies that include SEO, PPC, and content marketing for better synergy and long-term growth.",
        },
        {
          id: "dm-faq-4",
          question: "Do you manage email marketing campaigns?",
          answer:
            "Absolutely. We create automated email funnels and personalized campaigns to nurture leads and drive conversions.",
        },
        {
          id: "dm-faq-5",
          question: "How long before I start seeing results?",
          answer:
            "You’ll usually start seeing measurable improvements in 4–6 weeks, depending on campaign type and industry.",
        },
      ],
    },
  },

  {
    name: "custom-software-development",
    title: "Tailored",
    highlight: "Custom Software Development",
    subtitle: "Custom Software Development",
    description: [
      "We build robust, scalable software designed to solve your unique business challenges.",
      "Our custom-built solutions focus on performance, security, and usability — ensuring they evolve with your needs.",
    ],
    points: [
      "Web & mobile applications",
      "Scalable architectures",
      "UI/UX focused design",
    ],
    header: <CustomSoftwareDevelopment />,
    Icon: Megaphone,
    banner: {
      title: "Build Software That Fits Your Vision",
      description:
        "From strategy to delivery, we create software that empowers businesses to operate smarter and scale faster.",
    },
    process: {
      heading: "Our Process",
      subheading: "Building Software That Works for You",
      description:
        "We collaborate closely with your team throughout every stage — ensuring alignment, transparency, and results.",
      steps: [
        {
          number: "01",
          title: "Discovery & Planning",
          description:
            "We start by defining clear goals, workflows, and functional requirements, ensuring every feature adds business value.",
        },
        {
          number: "02",
          title: "System Architecture",
          description:
            "Our architects design modular, scalable, and secure frameworks using the latest technologies and cloud infrastructure.",
        },
        {
          number: "03",
          title: "Development",
          description:
            "We follow agile methodologies to deliver incremental builds, maintain flexibility, and ensure timely delivery.",
        },
        {
          number: "04",
          title: "Testing & QA",
          description:
            "Our QA team performs functional, performance, and security testing to deliver a reliable, production-ready solution.",
        },
        {
          number: "05",
          title: "Deployment & Support",
          description:
            "We deploy the solution with CI/CD pipelines and provide continuous monitoring, updates, and maintenance.",
        },
      ],
    },
    testimonials: [],
    faqs: {
      heading: "Custom Software FAQs",
      description: "Everything you need to know about custom solutions.",
      items: [
        {
          id: "csd-faq-1",
          question: "Do you build both web and mobile apps?",
          answer:
            "Yes, we develop web, desktop, and mobile applications using technologies like React, Flutter, and .NET.",
        },
        {
          id: "csd-faq-2",
          question: "Can you integrate our existing systems?",
          answer:
            "Absolutely. We ensure seamless integration with your existing tools, APIs, and databases.",
        },
        {
          id: "csd-faq-3",
          question: "Do you offer post-launch support?",
          answer:
            "Yes, we provide ongoing maintenance, monitoring, and feature enhancements after launch.",
        },
        {
          id: "csd-faq-4",
          question: "What’s your typical development timeline?",
          answer:
            "Depending on complexity, projects usually take 8–16 weeks, including design, development, and testing.",
        },
        {
          id: "csd-faq-5",
          question: "Can you help with software modernization?",
          answer:
            "Yes, we refactor legacy systems into modern architectures for better performance and maintainability.",
        },
      ],
    },
  },

  {
    name: "third-party-integration",
    title: "Seamless Connections with",
    highlight: "Third-Party Integrations",
    subtitle: "Third-Party Tool Integration",
    description: [
      "Integrate your tools and platforms for better automation and data flow.",
    ],
    points: [
      "CRM, ERP & SaaS APIs",
      "Google & Meta integrations",
      "Automation & analytics tools",
    ],
    header: <ThirdPartyIntegration />,
    Icon: Layout,
    banner: {
      title: "Connect, Automate, and Optimize",
      description:
        "We integrate third-party tools to eliminate silos, improve efficiency, and enable seamless operations.",
    },
    process: {
      heading: "Our Process",
      subheading: "Building Reliable Connections",
      description:
        "We approach integrations strategically — ensuring security, scalability, and smooth interoperability between systems.",
      steps: [
        {
          number: "01",
          title: "Requirements Analysis",
          description:
            "We map your current ecosystem and identify data touchpoints that require synchronization or automation.",
        },
        {
          number: "02",
          title: "API Strategy & Design",
          description:
            "Our engineers design secure API workflows that handle authentication, rate limits, and data consistency efficiently.",
        },
        {
          number: "03",
          title: "Development & Implementation",
          description:
            "We build robust API connections, ensuring error handling, data validation, and minimal downtime.",
        },
        {
          number: "04",
          title: "Testing & Validation",
          description:
            "We run simulations and load tests to ensure integrations work flawlessly under real-world conditions.",
        },
        {
          number: "05",
          title: "Monitoring & Maintenance",
          description:
            "We continuously monitor integrations and provide updates to maintain reliability as APIs evolve.",
        },
      ],
    },
    testimonials: [],
    faqs: {
      heading: "Integration FAQs",
      description: "Your integration questions answered.",
      items: [
        {
          id: "int-faq-1",
          question: "Can you integrate CRM and ERP systems?",
          answer:
            "Yes, we specialize in connecting CRMs, ERPs, and analytics tools for unified data flow across departments.",
        },
        {
          id: "int-faq-2",
          question: "Is data security ensured during integration?",
          answer:
            "Absolutely. We use OAuth2, SSL encryption, and role-based access control to secure all data exchanges.",
        },
        {
          id: "int-faq-3",
          question: "Can integrations be automated?",
          answer:
            "Yes, we design event-driven workflows that automatically synchronize and update data between systems.",
        },
        {
          id: "int-faq-4",
          question: "Do you integrate third-party APIs like Stripe or HubSpot?",
          answer:
            "Yes, we have experience integrating a wide range of tools — including Stripe, HubSpot, Salesforce, and Google APIs.",
        },
        {
          id: "int-faq-5",
          question: "How do you handle API version updates?",
          answer:
            "We monitor API deprecations and proactively update integrations to maintain stability and compliance.",
        },
      ],
    },
  },

  {
    name: "sap-development",
    title: "Optimize Workflows with",
    highlight: "SAP Development",
    subtitle: "SAP Development",
    description: [
      "Enterprise-grade SAP solutions designed for performance, scalability, and flexibility.",
      "We handle implementation, customization, and integration to help your business operate more efficiently.",
    ],
    points: [
      "SAP FI, MM, SD, HR modules",
      "Fiori & ABAP development",
      "Integration & support",
    ],
    header: <SAPDevelopment />,
    Icon: DollarSign,
    banner: {
      title: "Empower Your Enterprise with SAP",
      description:
        "We implement and customize SAP solutions that streamline operations and improve business performance.",
    },
    process: {
      heading: "Our Process",
      subheading: "Delivering SAP Excellence",
      description:
        "Our SAP experts follow a structured approach to ensure seamless implementation, integration, and optimization.",
      steps: [
        {
          number: "01",
          title: "Business Assessment",
          description:
            "We evaluate your current systems and identify areas where SAP can improve process automation and data consistency.",
        },
        {
          number: "02",
          title: "Solution Design",
          description:
            "Our SAP architects design module configurations that align perfectly with your workflows and business goals.",
        },
        {
          number: "03",
          title: "Development & Customization",
          description:
            "We develop custom Fiori apps, ABAP enhancements, and integrations that extend SAP’s core functionality.",
        },
        {
          number: "04",
          title: "Testing & Data Migration",
          description:
            "We migrate your existing data securely and conduct comprehensive testing to ensure performance and reliability.",
        },
        {
          number: "05",
          title: "Deployment & Ongoing Support",
          description:
            "We deploy the SAP solution, provide user training, and offer continuous monitoring, updates, and technical support.",
        },
      ],
    },
    testimonials: [],
    faqs: {
      heading: "SAP Development FAQs",
      description: "Get clarity on our SAP services and approach.",
      items: [
        {
          id: "sap-faq-1",
          question: "Do you provide SAP customization?",
          answer:
            "Yes, we offer customization using SAP Fiori, ABAP, and workflow automation to fit your business requirements.",
        },
        {
          id: "sap-faq-2",
          question: "Can you integrate SAP with other systems?",
          answer:
            "Yes, we integrate SAP with CRMs, ERPs, and third-party APIs to ensure smooth data synchronization.",
        },
        {
          id: "sap-faq-3",
          question: "Do you provide SAP support and maintenance?",
          answer:
            "Absolutely. We provide ongoing maintenance, monitoring, and technical support for all SAP modules.",
        },
        {
          id: "sap-faq-4",
          question: "Which SAP modules do you work with?",
          answer:
            "We specialize in SAP FI, MM, SD, HR, and CRM modules, along with Fiori app development.",
        },
        {
          id: "sap-faq-5",
          question: "Do you assist with SAP migration projects?",
          answer:
            "Yes, we manage SAP migration from legacy systems or cloud transitions, ensuring zero data loss and minimal downtime.",
        },
      ],
    },
  },

  {
    name: "erp-development",
    title: "Streamline Operations with",
    highlight: "ERP Development",
    subtitle: "ERP Software Development",
    description: [
      "Centralize and simplify your business processes with a tailored ERP system.",
      "We design ERP platforms that provide real-time visibility, improve productivity, and automate critical workflows.",
    ],
    points: [
      "Finance & HR modules",
      "Inventory management",
      "Real-time dashboards",
    ],
    header: <ERPDevelopment />,
    Icon: CodeXml,
    banner: {
      title: "Transform Operations with a Custom ERP",
      description:
        "We build ERP systems that unify departments, automate processes, and provide actionable insights to drive decisions.",
    },
    process: {
      heading: "Our Process",
      subheading: "Designing ERP Systems That Empower",
      description:
        "Our approach to ERP development focuses on business efficiency, scalability, and complete process automation.",
      steps: [
        {
          number: "01",
          title: "Requirement Analysis",
          description:
            "We understand your business structure and map out key departments and workflows to identify ERP modules needed.",
        },
        {
          number: "02",
          title: "Module Design",
          description:
            "We create detailed module blueprints for finance, HR, sales, and inventory — each optimized for seamless collaboration.",
        },
        {
          number: "03",
          title: "System Development",
          description:
            "Our team builds a robust ERP core with advanced features like user roles, automation, and analytics dashboards.",
        },
        {
          number: "04",
          title: "Integration",
          description:
            "We integrate your ERP with existing tools like CRMs, accounting software, or third-party APIs for unified data.",
        },
        {
          number: "05",
          title: "Deployment & Training",
          description:
            "After launch, we train your staff, ensure smooth onboarding, and provide continuous system support.",
        },
      ],
    },
    testimonials: [],
    faqs: {
      heading: "ERP Development FAQs",
      description: "Learn more about our ERP systems and process.",
      items: [
        {
          id: "erp-faq-1",
          question: "Can ERP be customized for small businesses?",
          answer:
            "Yes, we build modular ERP solutions that scale from startups to enterprises, focusing on your business needs.",
        },
        {
          id: "erp-faq-2",
          question: "Can you integrate ERP with CRM?",
          answer:
            "Absolutely. We ensure your ERP seamlessly connects with CRM, HRM, and accounting systems for unified operations.",
        },
        {
          id: "erp-faq-3",
          question: "Do you offer cloud-based ERP?",
          answer:
            "Yes, we develop secure and scalable cloud ERP platforms with real-time access and data security.",
        },
        {
          id: "erp-faq-4",
          question: "Can you migrate data from legacy systems?",
          answer:
            "Yes, we handle end-to-end migration from legacy platforms, ensuring data integrity and minimal downtime.",
        },
        {
          id: "erp-faq-5",
          question: "How long does ERP development take?",
          answer:
            "Depending on the complexity, ERP systems usually take 12–24 weeks to design, develop, and deploy.",
        },
      ],
    },
  },
];
