export type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  links: {
    github: string;
    live: string;
  };
};

let idNumber = 1;

export const projects: Project[] = [
  {
    id: idNumber++,
    title: "Centralized College Merchandise Management System",
    description:
      "Built a MERN stack platform for centralized college merchandise sales with catalog management, orders, delivery slots, and notifications. Implemented async Pub-Sub workflows and benchmarked Monolith vs Microservices architectures, validating better performance with modular monolith design.",
    tags: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "System Design",
      "Microservices",
    ],
    links: {
      github:
        "https://github.com/SohailTSM/Centralized-College-Merchandise-Management-System",
      live: "https://ccmms.tsmtech.in/",
    },
  },
  {
    id: idNumber++,
    title: "Detecting Machine-Generated Code",
    description:
      "Built and evaluated multiple approaches including CodeBERT, StarCoder2 hybrid, and Graph Transformers to detect AI-generated code, achieving strong results on SemEval-2026 under multilingual and adversarial settings.",
    tags: ["Python", "Transformers", "Machine Learning", "GNN", "LLMs"],
    links: {
      github: "https://github.com/SohailTSM/Machine-Generated-Code-Detection",
      live: "",
    },
  },
  {
    id: idNumber++,
    title: "Cipher Decryption and Language Modeling using Sequence Models",
    description:
      "Implemented RNN, LSTM, SSM, and Bi-LSTM from scratch in PyTorch for cipher decryption and language modeling, achieving 78.25% accuracy and improving predictions on noisy data using an error-correction pipeline.",
    tags: ["Python", "PyTorch", "NLP", "Deep Learning", "Sequence Models"],
    links: {
      github:
        "https://github.com/SohailTSM/Cipher-Decryption-and-Language-Modeling",
      live: "",
    },
  },
  {
    id: idNumber++,
    title: "Sorting Visualizer",
    description:
      "Developed an interactive sorting visualizer to compare common algorithms with real-time animations and adjustable parameters, built using React and deployed on Vercel.",
    tags: ["React", "Tailwind CSS", "Recoil", "Vercel"],
    links: {
      github: "https://github.com/SohailTSM/Sorting-Visualizer",
      live: "https://sorting-visualizer.tsmtech.in/",
    },
  },
  {
    id: idNumber++,
    title: "Peer-to-Peer Distributed File Sharing System",
    description:
      "Implemented a tracker-based P2P file sharing system supporting peer discovery, file metadata management, and decentralized client-to-client file transfer.",
    tags: ["C++", "Sockets", "Multithreading", "Distributed Systems"],
    links: {
      github:
        "https://github.com/SohailTSM/Peer-to-Peer-Distributed-File-Sharing-System",
      live: "",
    },
  },
  {
    id: idNumber++,
    title: "Disaster Aid",
    description:
      "ADisasterAid is a project that helps organize and share critical information during disasters to support relief efforts and improve response coordination.",
    tags: ["React", "Node.js", "MongoDB", "AWS S3"],
    links: {
      github: "https://github.com/SohailTSM/Disaster-Aid",
      live: "",
    },
  },
  {
    id: idNumber++,
    title: "POSIX Shell",
    description:
      "Implemented a POSIX-compliant command-line shell supporting command execution, pipelines, I/O redirection, process control, and signal handling for foreground and background jobs.",
    tags: ["C++", "POSIX", "Shell", "System Programming"],
    links: {
      github: "https://github.com/SohailTSM/POSIX-Shell",
      live: "",
    },
  },
  {
    id: idNumber++,
    title: "4-Gram Language Model for Text Prediction",
    description:
      "Implemented an n-gram (up to 4-gram) statistical language model from scratch in Python with multiple smoothing techniques including Laplace, Witten-Bell, and Kneser-Ney. Evaluated model performance using entropy and perplexity, and built a modular preprocessing pipeline for tokenization and normalization.",
    tags: ["Python", "NLP", "Language Modeling", "Statistical Modeling"],
    links: {
      github: "https://github.com/SohailTSM/4GramLanguageModel",
      live: "",
    },
  },
];
