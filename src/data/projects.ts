export type ProjectVisualId =
  | "bldc"
  | "rover"
  | "uav"
  | "bms"
  | "robox"
  | "tapbot";

export interface Project {
  id: string;
  number: string;
  name: string;
  category: string;
  description: string;
  focus: string[];
  details: string[];
  visual: ProjectVisualId;
  visualTag: string;
  /** Optional real coverage; only include verified references. */
  coverage?: { outlet: string; year: string; note: string }[];
}

export const projects: Project[] = [
  {
    id: "project-01",
    number: "01",
    name: "High-Power BLDC Motor Driver",
    category: "Power Electronics · PCB Design",
    description:
      "Designed a high-power BLDC motor driver PCB supporting 8S LiPo input (24–33.6V) and up to 20A continuous current, with careful high-current routing, thermal optimization and hardware validation.",
    focus: [
      "Power Electronics",
      "PCB Design",
      "High-current routing",
      "Thermal optimization",
      "Component placement",
      "Hardware validation",
    ],
    details: [
      "8S LiPo input · 24–33.6V",
      "Up to 20A continuous current",
      "Schematic capture and board routing",
      "SMD component placement",
      "Circuit debugging and validation",
    ],
    visual: "bldc",
    visualTag: "PCB · BLDC DRIVER",
  },
  {
    id: "project-02",
    number: "02",
    name: "Solar-Powered Lake Cleaning Rover",
    category: "Environmental Engineering · Robotics",
    description:
      "Designed a remote-controlled solar-powered surface vessel to collect floating plastic waste from water bodies, with 2.4GHz radio control, a solar power concept, surface waste collection and autonomous navigation as a design objective.",
    focus: [
      "Environmental engineering",
      "2.4GHz radio control",
      "Solar power concept",
      "Surface waste collection",
      "Autonomous navigation",
      "Mechanical design",
    ],
    details: [
      "Remote-controlled surface vessel",
      "Solar-powered concept",
      "Floating-waste collection system",
      "Water-environment engineering",
    ],
    visual: "rover",
    visualTag: "CAD · SURFACE VESSEL",
    coverage: [
      { outlet: "Dainik Bhaskar", year: "2024", note: "News media coverage" },
      { outlet: "News24", year: "2024", note: "News media coverage" },
    ],
  },
  {
    id: "project-03",
    number: "03",
    name: "Long-Range UAV",
    category: "UAV Engineering · Airframe Design",
    description:
      "Developed a long-range UAV concept using lightweight structural materials and a custom battery system, integrating electronics, mechanical design and system integration.",
    focus: [
      "UAV engineering",
      "Airframe design",
      "Electronics integration",
      "Mechanical design",
      "System integration",
    ],
    details: [
      "Long-range concept",
      "Lightweight structural materials",
      "Custom battery system",
      "Custom flight controller development",
      "Drone and RC plane projects with autonomous capabilities",
    ],
    visual: "uav",
    visualTag: "CAD · AIRFRAME",
  },
  {
    id: "project-04",
    number: "04",
    name: "Battery Management System",
    category: "Battery Electronics · Circuit Design",
    description:
      "Designed a balance-charging BMS circuit for multi-cell lithium battery systems, focusing on cell balancing, electrical safety and hardware engineering.",
    focus: [
      "Battery management electronics",
      "Circuit design",
      "Cell balancing",
      "Electrical safety",
      "Hardware engineering",
    ],
    details: [
      "Balance-charging topology",
      "Multi-cell lithium support",
      "Protection and safety circuitry",
    ],
    visual: "bms",
    visualTag: "SCH · BMS",
  },
  {
    id: "project-05",
    number: "05",
    name: "ROBOX Robotics Coding Kit",
    category: "Educational Robotics · Product Development",
    description:
      "A robotics and STEM learning platform built around ESP32 and ESP32-S3, with custom hardware, PCB and firmware, and block-based coding.",
    focus: [
      "Educational robotics",
      "ESP32",
      "ESP32-S3",
      "Firmware",
      "PCB design",
      "Blockly-style programming",
      "Product development",
    ],
    details: [
      "Custom PCB hardware",
      "Embedded firmware",
      "Block-based coding application",
      "Robotics integration with ROS2",
      "STEM education product",
    ],
    visual: "robox",
    visualTag: "HW · ESP32 KIT",
  },
  {
    id: "project-06",
    number: "06",
    name: "TAPBOT",
    category: "Robotics Education · Physical Interaction",
    description:
      "A screenless, button-programmable robot for children, designed to support storytelling, creative thinking and learning through interaction.",
    focus: [
      "Embedded systems",
      "Physical interaction",
      "Robotics education",
      "PCB design",
      "Firmware",
      "Product design",
    ],
    details: [
      "Screenless interface",
      "Button-programmable sequences",
      "Storytelling and critical-thinking activities",
      "Custom hardware and firmware",
    ],
    visual: "tapbot",
    visualTag: "PRD · TAPBOT",
  },
];
