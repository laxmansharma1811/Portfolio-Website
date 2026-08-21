export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  tier: 1 | 2 | 3; // 1 = Signature, 2 = High Impact, 3 = Supporting
  category: 'ai-ml' | 'data-engineering' | 'backend-web' | 'mobile-automation';
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  metrics?: { label: string; value: string }[];
  featured: boolean;
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
  logoInitial: string;
  accentColor: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: { name: string; level: 'Primary' | 'Proficient' | 'Working Knowledge'; icon?: string }[];
}

export const PERSONAL_INFO = {
  name: 'Laxman Sharma',
  title: 'AI/ML & Data Systems Engineer',
  tagline: 'Engineering fine-tuned NLP models, async Python backends, and resilient automated data pipelines.',
  bio: 'Computer Science graduate (BSc Hons, 2025) from Sunway College Kathmandu with direct experience shipping production-grade NLP translation systems at eSewa (Nepal’s leading digital wallet) and automated ETL pipelines at Dlytica. Passionate about bridging machine learning research with scalable software architecture.',
  location: 'Kathmandu, Nepal (GMT+5:45)',
  email: 'laxman.sharma1811@gmail.com',
  phone: '+977-9848590208',
  github: 'https://github.com/laxmansharma1811',
  linkedin: 'https://www.linkedin.com/in/laxmansharma1/',
  website: 'https://laxman-sharma.com.np',
  resumePdf: '/assets/documents/Laxman_Sharma_Resume.pdf',
  avatarImage: '/assets/images/laxman.png',
  availableForWork: true,
  statusMessage: 'Available for Remote & Contract Engineering Roles',
  education: {
    institution: 'Sunway College Kathmandu',
    degree: 'Bachelor of Computer Science (Honours)',
    graduationDate: 'March 2025',
    certification: 'Certified Python Developer — Sunway College Kathmandu',
  },
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'bhasabodh-ai',
    slug: 'bhasabodh-ai-translation',
    title: 'BHASABODH — AI Translation & QA System',
    subtitle: 'Bidirectional Devanagari ↔ Romanized Nepali Transformer Pipeline',
    description: 'Fine-tuned custom BLOOM and BERT transformer variants to translate Romanized Nepali into formal Devanagari. Built a BLEU-evaluated inference optimization pipeline and integrated the model into a FastAPI web interface with interactive QA capability.',
    tier: 1,
    category: 'ai-ml',
    tags: ['PyTorch', 'Transformers', 'BLOOM / BERT', 'FastAPI', 'BLEU Metric', 'Tailwind CSS'],
    image: '/assets/images/laxman.png',
    githubUrl: 'https://github.com/laxmansharma1811/BHASABODH',
    metrics: [
      { label: 'Model Architecture', value: 'Transformer BLOOM/BERT' },
      { label: 'Evaluation Metric', value: 'BLEU Score Pipeline' },
      { label: 'Inference Backend', value: 'FastAPI Async' },
    ],
    featured: true,
  },
  {
    id: 'eduhub-portal',
    slug: 'eduhub-global-education-portal',
    title: 'EDUHUB Global Education Portal',
    subtitle: 'Production University & Scholarship Discovery Platform',
    description: 'Designed, built, and deployed a live Django 4.2 SaaS application helping students discover international universities and scholarships. Hosted on VPS with PostgreSQL, Nginx, Uvicorn, and comprehensive SEO optimization.',
    tier: 1,
    category: 'backend-web',
    tags: ['Python', 'Django 4.2', 'PostgreSQL', 'Nest Nepal VPS', 'Nginx', 'Uvicorn', 'SEO'],
    image: '/assets/images/project2.png',
    liveUrl: 'https://eduhubuniversalservices.com',
    metrics: [
      { label: 'Database', value: 'PostgreSQL Production' },
      { label: 'Web Server', value: 'Nginx + Uvicorn VPS' },
      { label: 'Status', value: 'Live Production' },
    ],
    featured: true,
  },
  {
    id: 'heart-disease-prediction',
    slug: 'heart-disease-prediction-system',
    title: 'Heart Disease Prediction System',
    subtitle: 'Clinical Parameter ML Classification Dashboard',
    description: 'Developed an ML risk assessment application using scikit-learn classification algorithms to evaluate clinical patient parameters. Deployed live with an interactive Streamlit frontend for real-time risk predictions.',
    tier: 1,
    category: 'ai-ml',
    tags: ['Python', 'Scikit-learn', 'Streamlit', 'Pandas', 'NumPy', 'ML Classification'],
    image: '/assets/images/analysis.png',
    liveUrl: 'https://heardiseaseprediction1811.streamlit.app/',
    githubUrl: 'https://github.com/laxmansharma1811',
    metrics: [
      { label: 'Algorithm', value: 'Scikit-Learn Classifier' },
      { label: 'UI Framework', value: 'Streamlit Interactive' },
      { label: 'Deployment', value: 'Streamlit Cloud [LIVE]' },
    ],
    featured: true,
  },
  {
    id: 'airflow-etl-pipeline',
    slug: 'data-engineering-airflow-pipeline',
    title: 'Automated ETL & Data Orchestration Pipeline',
    subtitle: 'Apache Airflow & MinIO Object Storage Workflow',
    description: 'Architected and executed automated ETL DAG pipelines using Apache Airflow. Integrated MinIO for object storage and Docker for containerized task execution to automate real-time data extraction and processing.',
    tier: 1,
    category: 'data-engineering',
    tags: ['Apache Airflow', 'MinIO', 'Python', 'Docker', 'ETL Pipelines', 'PostgreSQL'],
    image: '/assets/images/R.png',
    githubUrl: 'https://github.com/laxmansharma1811',
    metrics: [
      { label: 'Orchestrator', value: 'Apache Airflow DAGs' },
      { label: 'Storage', value: 'MinIO Object Storage' },
      { label: 'Environment', value: 'Docker Containerized' },
    ],
    featured: true,
  },
  {
    id: 'product-aggregator',
    slug: 'ecommerce-product-aggregator',
    title: 'E-Commerce Product Aggregator',
    subtitle: 'Multi-Platform Price Intelligence & Comparison Platform',
    description: 'Built a full-stack e-commerce aggregator enabling users to search, track historical price trends, and compare products across major platforms. Implemented automated price tracking via web scraping engines.',
    tier: 2,
    category: 'backend-web',
    tags: ['Django', 'Selenium', 'Tailwind CSS', 'PostgreSQL', 'Python'],
    image: '/assets/images/analysis.png',
    githubUrl: 'https://github.com/laxmansharma1811/Product_aggregator',
    featured: false,
  },
  {
    id: 'daraz-scraper',
    slug: 'daraz-ecommerce-scraper',
    title: 'Daraz E-Commerce Web Scraper',
    subtitle: 'Automated Product Data Extractor & Pipeline',
    description: 'Developed an automated scraping tool using Selenium and Requests to extract dynamic product listings, prices, user ratings, and details from Daraz, generating structured dataset outputs with Pandas.',
    tier: 2,
    category: 'mobile-automation',
    tags: ['Python', 'Selenium', 'Pandas', 'Requests', 'Data Mining'],
    image: '/assets/images/R.png',
    githubUrl: 'https://github.com/laxmansharma1811/Daraz-Ecommerce-Scraper',
    featured: false,
  },
  {
    id: 'social-platform',
    slug: 'fullstack-social-media-app',
    title: 'Social Media Full-Stack Application',
    subtitle: 'Django Social Network with Real-Time Interactions',
    description: 'Created a full-featured social platform supporting user authentication, status and media posts, real-time comments, likes/unlikes, and follower graph management.',
    tier: 2,
    category: 'backend-web',
    tags: ['Django', 'Tailwind CSS', 'SQLite', 'Authentication'],
    image: '/assets/images/project2.png',
    githubUrl: 'https://github.com/laxmansharma1811',
    featured: false,
  },
  {
    id: 'flutter-blog',
    slug: 'flutter-firebase-blog-app',
    title: 'Flutter-Firebase Blog Application',
    subtitle: 'Cross-Platform Mobile App with Real-Time Data Sync',
    description: 'Built a mobile blog application utilizing Flutter for cross-platform UI, paired with Firebase Authentication and Cloud Firestore for real-time document CRUD operations.',
    tier: 2,
    category: 'mobile-automation',
    tags: ['Flutter', 'Firebase Auth', 'Firestore', 'Dart'],
    image: '/assets/images/project3.png',
    githubUrl: 'https://github.com/laxmansharma1811/Flutter-Firebase',
    featured: false,
  },
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    company: 'eSewa Ltd',
    role: 'AI/ML Engineering Intern',
    location: 'Kathmandu, Nepal (Leading Digital Wallet Platform)',
    period: 'Nov 2024 – Mar 2025',
    type: 'Internship',
    logoInitial: 'E',
    accentColor: 'from-emerald-500 to-teal-700',
    description: 'Worked with the R&D team at Nepal’s premier digital payment platform to build BHASABODH, an intelligent Romanized-to-Devanagari translation model and QA assistant.',
    achievements: [
      'Contributed to training, fine-tuning, and evaluating transformer-based NLP models (BLOOM and BERT variants) on custom language datasets.',
      'Implemented BLEU score evaluation metrics, data cleaning pipelines, and inference throughput optimization techniques.',
      'Integrated the fine-tuned translation engine into a high-performance FastAPI web backend paired with a Tailwind CSS frontend.',
      'Collaborated closely with R&D engineers to test model accuracy and iterate on real-time translation response times.',
    ],
    technologies: ['PyTorch', 'Transformers', 'BLOOM / BERT', 'FastAPI', 'BLEU Metrics', 'Tailwind CSS', 'Python'],
  },
  {
    company: 'Dlytica Inc. Pvt. Ltd',
    role: 'Data Engineering Intern',
    location: 'Kathmandu, Nepal',
    period: 'Jul 2024 – Nov 2024',
    type: 'Internship',
    logoInitial: 'D',
    accentColor: 'from-indigo-500 to-purple-700',
    description: 'Completed an intensive data engineering program focused on cloud data warehousing, distributed ETL pipelines, and workflow automation.',
    achievements: [
      'Developed and scheduled Apache Airflow DAGs for automated workflow management and data ingestion pipelines.',
      'Utilized MinIO object storage for scalable, S3-compatible data lake storage during transformation jobs.',
      'Gained hands-on experience in cloud platform configuration, database performance tuning, and structured data warehousing.',
      'Engineered automated Python scripts for cleaning, transforming, and loading high-volume analytics datasets.',
    ],
    technologies: ['Apache Airflow', 'MinIO', 'Python', 'ETL', 'Docker', 'PostgreSQL', 'Data Lakes'],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'AI / ML & NLP Engineering',
    iconName: 'Brain',
    description: 'Specialized in fine-tuning transformer models, NLP tokenizers, classification algorithms, and ML pipelines.',
    skills: [
      { name: 'PyTorch & Transformers', level: 'Primary' },
      { name: 'BERT / BLOOM Models', level: 'Primary' },
      { name: 'Scikit-learn', level: 'Primary' },
      { name: 'Pandas & NumPy', level: 'Primary' },
      { name: 'BLEU Evaluation & NLP Pipelines', level: 'Proficient' },
      { name: 'TensorFlow', level: 'Working Knowledge' },
    ],
  },
  {
    title: 'Backend Systems & API Architecture',
    iconName: 'Server',
    description: 'Architecting fast, async microservices and monolithic web applications with robust database models.',
    skills: [
      { name: 'Python (Advanced)', level: 'Primary' },
      { name: 'FastAPI', level: 'Primary' },
      { name: 'Django 4.2', level: 'Primary' },
      { name: 'RESTful API Design', level: 'Primary' },
      { name: 'Flask', level: 'Proficient' },
      { name: 'Uvicorn / Gunicorn / Nginx', level: 'Proficient' },
    ],
  },
  {
    title: 'Data Engineering & Cloud Storage',
    iconName: 'Database',
    description: 'Orchestrating automated ETL pipelines, data warehousing, object storage, and relational databases.',
    skills: [
      { name: 'Apache Airflow (DAGs)', level: 'Primary' },
      { name: 'PostgreSQL & MySQL', level: 'Primary' },
      { name: 'MinIO (S3-Compatible Storage)', level: 'Proficient' },
      { name: 'Docker & Containerization', level: 'Proficient' },
      { name: 'ETL Pipeline Design', level: 'Proficient' },
      { name: 'MongoDB & Redis', level: 'Working Knowledge' },
    ],
  },
  {
    title: 'Automation, Scraping & Tooling',
    iconName: 'Cpu',
    description: 'Building automated data collectors, cross-platform apps, and developer workflows.',
    skills: [
      { name: 'Selenium & Web Automation', level: 'Primary' },
      { name: 'Git & Version Control', level: 'Primary' },
      { name: 'Linux / VPS Management (Nest Nepal)', level: 'Proficient' },
      { name: 'Streamlit & Rapid Prototyping', level: 'Proficient' },
      { name: 'JavaScript & TypeScript', level: 'Proficient' },
      { name: 'Flutter & Firebase', level: 'Working Knowledge' },
    ],
  },
];
