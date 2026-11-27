export const site = {
  name: "Deepak Kumawat",
  title: "Head of Product Development & Robotics Engineer",
  role: "Robotics Engineer & Product Developer",
  shortName: "DK",
  location: "Jaipur, Rajasthan, India",
  email: "dk8166050@gmail.com",
  phone: "+91 8890879233",
  phoneHref: "+918890872333",
  intro:
    "I build intelligent machines, electronic systems and products that connect software with the physical world.",
  description:
    "Deepak Kumawat is a Robotics Engineer and Product Developer building embedded systems, PCB hardware, UAVs, STEM robotics products and mechanical CAD assemblies at RoboSiddhi Private Limited, Jaipur.",
  // Real profile URL provided by Deepak Kumawat (tracking params stripped).
  linkedin: {
    url: "https://www.linkedin.com/in/deepak-kumawat-6b98a8233",
    label: "LinkedIn",
    placeholder: false,
  },
  // Placeholder until the correct profile URL is provided.
  github: {
    url: "https://github.com/",
    label: "GitHub",
    placeholder: true,
  },
} as const;

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#contact", label: "Contact" },
] as const;

export const sectionIds = [
  "home",
  "about",
  "experience",
  "work",
  "expertise",
  "education",
  "contact",
] as const;
