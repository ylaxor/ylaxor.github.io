export interface TimelineItem {
  title: string;
  role: string;
  start: string;
  end: string;
  duration: string;
  location: string;
  description?: string;
  points?: string[];
}

export interface EducationItem {
  title: string;
  role: string;
  start: string;
  end: string;
  duration: string;
  location: string;
  institution: string;
  points: string[];
}

export interface ExperienceItem extends TimelineItem {
  company: string;
  points: string[];
}

export interface LanguageItem {
  name: string;
  level: string;
  levelLabel: string;
  proficiency: number; // 0-100
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface SkillCategory {
  title: string;
  groups: SkillGroup[];
}

export const cv = {
  name: 'Ali Ncibi',
  title: 'Data Engineer, Data Scientist & Computer Science Researcher',
  tagline:
    'Dedicated to building impactful AI solutions—from rigorous algorithmic benchmarking to deploying practical machine learning pipelines. As a versatile and lifelong learner, I genuinely enjoy discovering new tools and adapting to evolving technologies.',

  contact: {
    email: 'first.last.telephone@gmail.com',
    location: 'Île-de-France',
    github: 'https://github.com/ylaxor',
    remote: 'Europe, Africa, Asia',
  },

  languages: [
    { name: 'English', level: 'Fluent', levelLabel: 'C1', proficiency: 90 },
    { name: 'French', level: 'Bilingual', levelLabel: 'C2', proficiency: 95 },
    { name: 'Arabic', level: 'Native', levelLabel: 'C2', proficiency: 100 },
  ] as LanguageItem[],

  education: [
    {
      title: 'PhD in Computer Science',
      role: 'Doctoral Researcher',
      start: 'Mar. 2023',
      end: 'Jun. 2026',
      duration: '3 years',
      location: 'Versailles, France',
      institution: 'University of Paris Saclay',
      points: [
        'Focused on the design of standard, structured data-driven pipelines, and the evaluation of semantic representation strategies for cross-home human activity recognition from binary IoT traces.',
      ],
    },
    {
      title: 'Engineering Degree (MSc.) in Data Science',
      role: 'MSc Student',
      start: 'Sept. 2019',
      end: 'Jun. 2021',
      duration: '2 years',
      location: 'Palaiseau, France',
      institution: 'Telecom Paris, Institut Polytechnique de Paris',
      points: [
        'Focused on numerical optimization, statistical machine learning, digital imagery and computer vision, natural language processing, graph mining, programming, and human & social sciences.',
      ],
    },
    {
      title:
        'Engineering Degree (MSc.) in Information Technology and Telecommunications',
      role: 'MSc Student',
      start: 'Sept. 2017',
      end: 'Jun. 2019',
      duration: '2 years',
      location: 'Tunis, Tunisia',
      institution: 'National Engineering School of Tunis (ENIT)',
      points: [
        'Focused on electronics, signal transmission and processing, networking techniques, programming, databases, and system administration.',
      ],
    },
  ] as EducationItem[],

  experience: [
    {
      title: 'PhD Candidate',
      company: 'INRIA',
      role: 'PhD Candidate | CDD',
      start: 'Mar. 2023',
      end: 'Feb. 2026',
      duration: '3 years',
      location: 'Saclay, France',
      points: [
        'Designed and open-sourced FlowAR, a standardized and modular machine learning framework for human activity recognition, enabling systematic evaluation and benchmarking across a total of 13 public real-world datasets and multiple pipeline configurations.',
        'Evaluated semantic representation strategies to improve model portability, achieving over 90% average balanced accuracy per activity in structured environments while analyzing the effects of sensor noise, sequence length, feature quality, and training data volume.',
      ],
    },
    {
      title: 'Research Engineer',
      company: 'UVSQ',
      role: 'Research Engineer | CDD',
      start: 'Oct. 2022',
      end: 'Feb. 2023',
      duration: '4 months',
      location: 'Versailles, France',
      points: [
        'Reviewed and analysed machine learning approaches for human activity recognition from sensor data in smart-home environments.',
        'Modernised and extended a legacy analysis tool to enable systematic exploration of 13 real-world smart-home sensor datasets, incorporating additional descriptive statistics tools and data analysis capabilities.',
      ],
    },
    {
      title: 'Engineer',
      company: 'SouthPigalle (Metyis Group)',
      role: 'Engineer | CDD',
      start: 'Nov. 2021',
      end: 'May 2022',
      duration: '6 months',
      location: 'Paris, France',
      points: [
        'Designed and validated a domain-specific chatbot prototype for question answering in the jewellery and watchmaking domain.',
        'Refactored core components of the production chatbot architecture, improving the accuracy of individual modules and the overall quality of the conversational assistance.',
      ],
    },
    {
      title: 'Research Engineer',
      company: 'INSERM',
      role: 'Research Engineer | CDD',
      start: 'Feb. 2021',
      end: 'Aug. 2021',
      duration: '6 months',
      location: 'Clamart, France',
      points: [
        'Built a PyTorch-based pipeline for clinical temporal relation extraction using text embeddings and sequence models, achieving an average F1-score above 80 across annotated relation types (ISO-TimeML) on a real-world French clinical corpus.',
      ],
    },
  ] as ExperienceItem[],

  dataSkills: {
    foundations: {
      title: 'Theoretical Foundations & Application Areas',
      groups: [
        'Numerical optimisation',
        'Descriptive statistics, and statistical hypothesis testing',
        'Statistical machine learning, and ensemble models',
        'Deep learning architectures, and representation learning',
        'Learning paradigms and data efficiency (supervised, transfer, semi-supervised, self-supervised, few-shot)',
        'Digital imagery, computer vision, graph mining and natural language processing',
        'Large language models (base, instruction-tuned), prompt engineering',
        'Foundational models, generative AI, and agentic workflows',
        'Human activity learning',
      ],
    },
    modalities: {
      title: 'Data Modalities & Example Tasks',
      groups: [
        'Tabular data – scoring, classification, and clustering.',
        'Text – classification, named entity recognition, part-of-speech tagging, natural language understanding, natural language generation, question answering, text paraphrasing, semantic retrieval, task-oriented dialogue management (classic chatbots).',
        'Images – image classification, object detection and recognition, image captioning, and image registration.',
        'Audio – music generation and music style transfer.',
        'Multimodal (text, image, audio) – retrieval augmented generation, multimodal information retrieval, and agentic workflows (using reflection, dynamic planning, tool-use and code execution patterns).',
        'Sensors – human activity discovery, recognition, prediction, and temporal segmentation.',
      ],
    },
    toolkit: {
      title: 'Data Toolkit',
      groups: [
        'Machine Learning & Deep Learning: PyTorch, PyTorch Lightning, Scikit-learn, ONNX, Scikit-optimize, Scikit-network',
        'NLP & LLMs: Transformers, LangChain, LangGraph, OpenAI API, spaCy, NLTK, Flair',
        'Data & Backend Engineering: Pandas, Pydantic, FastAPI, Flask, Streamlit, Docker, PostgreSQL/Vector DBs',
      ],
    },
  },

  computerSkills: [
    {
      title: 'Programming Languages',
      items: ['Python', 'C, C++, C#', 'JavaScript, TypeScript'],
    },
    {
      title: 'Data Management',
      items: [
        'Relational databases',
        'SQL querying',
        'Feature engineering pipelines',
        'Data warehouses, data lakes',
        'Vector databases (storage, querying)',
        'Reporting, analysis and monitoring tools (PowerBI, Tableau, custom dashboards and description tools)',
      ],
    },
    {
      title: 'Productivity and Collaboration',
      items: [
        'Latex, Office',
        'Diagramming tools (e.g. draw.io)',
        'Project management tools (e.g., Jira)',
      ],
    },
    {
      title: 'Programming Styles and Principles',
      items: [
        'Object-oriented programming',
        'Functional, pipeline-oriented programming',
        'SOLID principles',
        'Automated testing',
        'Notions of domain-driven design',
      ],
    },
    {
      title: 'Version Control & CI/CD',
      items: [
        'Git',
        'GitHub Actions',
        'GitLab CI/CD',
        'Automated testing and deployment pipelines',
      ],
    },
    {
      title: 'Containerization',
      items: ['Docker (images/containers)'],
    },
    {
      title: 'Compute and Deployment',
      items: [
        'Virtual Private Servers (VPS)',
        'Amazon Web Services (AWS)',
        'Google Cloud Platform (GCP)',
        'Heroku, DigitalOcean',
        'Supabase, Vercel, Netlify',
      ],
    },
    {
      title: 'Web & Mobile Development',
      items: [
        'Raw HTML and CSS',
        'Node.js, React, Nuxt',
        'Ionic, Capacitor (cross-platform apps)',
        'Streamlit',
      ],
    },
    {
      title: 'Operating Systems',
      items: ['Linux', 'MacOS', 'Windows'],
    },
  ],
} as const;
