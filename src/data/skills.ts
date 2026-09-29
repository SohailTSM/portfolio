import { Code, Database, Layout, Terminal, Cpu, Brain } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type SkillCategory = {
  name: string;
  icon: LucideIcon;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    icon: Terminal,
    skills: ["C", "C++", "HTML/CSS", "JavaScript", "Python"],
  },
  {
    name: "Machine Learning & AI",
    icon: Brain,
    skills: ["scikit-learn", "Pandas", "NumPy", "Matplotlib", "PyTorch"],
  },
  {
    name: "Frontend Development",
    icon: Layout,
    skills: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    name: "Backend Development",
    icon: Code,
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    name: "Databases",
    icon: Database,
    skills: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    name: "NLP & LLMs",
    icon: Brain,
    skills: [
      "Tokenization",
      "SentencePiece",
      "Language Modeling",
      "LLM Pretraining",
      "Fine-tuning",
      "RNNs",
      "LSTMs",
      "Machine Translation",
      "Transformers",
      "Hugging Face",
      "Kaggle",
    ],
  },
  {
    name: "Tools & Technologies",
    icon: Cpu,
    skills: ["Git", "Vercel", "Linux", "Docker", "Weights & Biases"],
  },
];
