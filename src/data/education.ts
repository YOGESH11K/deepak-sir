export interface EducationEntry {
  id: string;
  degree: string;
  field: string;
  school: string;
  location: string;
  years: string;
}

export const education: EducationEntry[] = [
  {
    id: "edu-btech",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Electronics & Communication Engineering",
    school: "CTAE, MPUAT University",
    location: "Rajasthan, India",
    years: "2021 – 2025",
  },
  {
    id: "edu-diploma",
    degree: "Diploma in Electronics Engineering",
    field: "Electronics Engineering",
    school: "Government Polytechnic College, Chittorgarh",
    location: "Rajasthan, India",
    years: "2018 – 2021",
  },
];
