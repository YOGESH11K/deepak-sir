export interface ExpertiseGroup {
  id: string;
  num: string;
  title: string;
  items: string[];
}

export const expertiseGroups: ExpertiseGroup[] = [
  {
    id: "robotics",
    num: "01",
    title: "Robotics & Embedded Systems",
    items: [
      "ROS2",
      "STM32",
      "Arduino",
      "8051",
      "Raspberry Pi",
      "Raspberry Pi Pico",
      "ESP32-S3",
      "Linux",
      "Circuit Simulation",
      "Circuit Debugging",
    ],
  },
  {
    id: "hardware",
    num: "02",
    title: "Hardware & PCB Design",
    items: [
      "KiCad",
      "PCB Layout",
      "Power Electronics Routing",
      "Hardware Validation",
      "SMD Soldering",
      "Circuit Design",
    ],
  },
  {
    id: "mechanical",
    num: "03",
    title: "Mechanical & CAD",
    items: [
      "SolidWorks",
      "Autodesk Fusion 360",
      "FreeCAD",
      "3D Parts",
      "Mechanical Enclosures",
      "Assemblies",
    ],
  },
  {
    id: "programming",
    num: "04",
    title: "Programming",
    items: [
      "C",
      "C++",
      "Arduino",
      "MicroPython",
      "Embedded Firmware",
      "LLM-related Development",
    ],
  },
];
