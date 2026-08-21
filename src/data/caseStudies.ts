export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  overview: string;
  problem: string;
  context: string;
  role: string;
  architecture: string[];
  approach: string[];
  implementation: string[];
  challenges: string[];
  technicalDecisions: { decision: string; rationale: string }[];
  technology: string[];
  result: string[];
  lessonsLearned: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const CASE_STUDIES: Record<string, CaseStudy> = {
  'bhasabodh-ai-translation': {
    slug: 'bhasabodh-ai-translation',
    title: 'BHASABODH — AI Translation System & QA Chatbot',
    subtitle: 'Fine-Tuning Transformer LLMs for Low-Resource Romanized Nepali',
    overview: 'BHASABODH is a bidirectional translation engine and QA assistant designed to convert informal Romanized Nepali text into formal Devanagari script. Built during my internship at eSewa, it leverages fine-tuned BLOOM and BERT models served via a high-performance FastAPI interface.',
    problem: 'Digital wallet users in Nepal frequently type transaction details, queries, and descriptions in Romanized Nepali (Latin alphabet), whereas backend systems and localization protocols require Devanagari script. Off-the-shelf translation engines struggle with colloquial spelling variants and low-resource language nuances.',
    context: 'Built as part of the R&D initiative at eSewa Ltd to improve automated customer communication and transaction query understanding across millions of digital wallet transactions.',
    role: 'AI/ML Engineering Intern — Responsible for NLP data preprocessing pipelines, transformer fine-tuning experiments, BLEU metric evaluation, and FastAPI web integration.',
    architecture: [
      'Raw Romanized Text Input → Preprocessing & Tokenization Pipeline',
      'Fine-Tuned BLOOM / BERT Variant Model → Devanagari Sequence Generation',
      'BLEU Metric Validation & Post-Processing Guardrails',
      'FastAPI Async Server Layer → Tailwind CSS Frontend Interface',
    ],
    approach: [
      'Cleaned and curated custom parallel text corpora for Romanized and Devanagari Nepali pairs.',
      'Fine-tuned multilingual transformer architectures (BLOOM and BERT variants) using PyTorch and Hugging Face.',
      'Implemented automated BLEU score computation scripts to measure translation fidelity across model checkpoints.',
      'Optimized model inference latency for web delivery by stripping unnecessary layers and deploying async FastAPI endpoints.',
    ],
    implementation: [
      'Built data cleaning scripts to handle spelling variations, special characters, and code-mixed English-Nepali sentences.',
      'Configured sequence-to-sequence training loops with custom learning rate schedules and gradient accumulation.',
      'Constructed a lightweight web interface with FastAPI and Tailwind CSS for interactive testing and demonstration.',
    ],
    challenges: [
      'Low corpus availability for Romanized Nepali required meticulous data cleaning and synthetic augmentation.',
      'High inference latency on transformer models needed parameter optimization and model quantization before web serving.',
    ],
    technicalDecisions: [
      {
        decision: 'Selected BLOOM & BERT variants over generic translation APIs',
        rationale: 'Generic APIs failed to parse localized Nepali slang and phonetic typing conventions; custom fine-tuning provided exact domain alignment.',
      },
      {
        decision: 'FastAPI for Model Backend',
        rationale: 'FastAPI’s native async support enabled non-blocking model inference requests compared to traditional synchronous WSGI frameworks.',
      },
    ],
    technology: ['Python', 'PyTorch', 'Transformers', 'Hugging Face', 'FastAPI', 'BLEU Metrics', 'Tailwind CSS'],
    result: [
      'Successfully produced a high-accuracy bidirectional translation model tailored to digital wallet interaction contexts.',
      'Reduced translation error rate on key transaction terms.',
      'Delivered a functional FastAPI prototype ready for internal R&D evaluation.',
    ],
    lessonsLearned: [
      'Data quality and preprocessing pipeline design have a far greater impact on low-resource NLP performance than model size alone.',
      'Evaluation metrics like BLEU must be paired with human qualitative review for nuanced language tasks.',
    ],
    githubUrl: 'https://github.com/laxmansharma1811/BHASABODH',
  },
  'eduhub-global-education-portal': {
    slug: 'eduhub-global-education-portal',
    title: 'EDUHUB Global Education Portal',
    subtitle: 'Architecting & Deploying a Production Django Education SaaS',
    overview: 'EDUHUB Universal Services is a live, production-grade education portal designed to connect Nepali students with international universities, courses, and scholarship opportunities.',
    problem: 'Students looking for global higher education lack a centralized, fast, and searchable platform tailored to admission requirements, visa guides, and verified scholarship listings.',
    context: 'Built from scratch to serve as the core digital infrastructure for EDUHUB Universal Services, requiring 99.9% uptime, fast response times, and strong search engine visibility.',
    role: 'Full-Stack Software Engineer & DevOps Lead — Designed database schemas, built Django backend logic, crafted responsive templates, configured VPS web servers, and optimized SEO.',
    architecture: [
      'Client Request → Nginx Reverse Proxy (SSL Terminal)',
      'Nginx → Uvicorn / Gunicorn WSGI Application Server',
      'Django 4.2 Application Core → PostgreSQL Database Cluster',
      'Media Asset Pipeline & Cache Control',
    ],
    approach: [
      'Modeled relational schemas in PostgreSQL to handle complex university-program-scholarship mappings efficiently.',
      'Developed a custom Django administration interface for non-technical team members to manage global university listings.',
      'Configured Nest Nepal VPS server infrastructure with Nginx, Uvicorn, Systemd service unit management, and Let’s Encrypt SSL.',
      'Executed full SEO metadata optimization, structured data schemas, XML sitemaps, and mobile performance tuning.',
    ],
    implementation: [
      'Implemented custom database queries with select_related and prefetch_related to eliminate N+1 query performance bottlenecks.',
      'Created responsive, mobile-first UI components for seamless browsing across smartphones and desktops.',
      'Configured automated database backups and Nginx security headers.',
    ],
    challenges: [
      'Configuring production Nginx reverse proxy and Gunicorn sockets on VPS without existing deployment scripts.',
      'Optimizing complex database joins across university filters without degrading page load speeds.',
    ],
    technicalDecisions: [
      {
        decision: 'Django 4.2 with PostgreSQL',
        rationale: 'Provided robust ORM security, built-in admin portal, and enterprise reliability out of the box.',
      },
      {
        decision: 'Direct VPS Hosting (Nest Nepal) via Nginx & Uvicorn',
        rationale: 'Ensured low-latency access for Nepali users while maintaining full control over server resources and security headers.',
      },
    ],
    technology: ['Python', 'Django 4.2', 'PostgreSQL', 'Nest Nepal VPS', 'Nginx', 'Uvicorn', 'HTML5/CSS3', 'SEO'],
    result: [
      'Successfully deployed live platform at eduhubuniversalservices.com with consistent high uptime.',
      'Achieved fast page load times and indexed search ranking for target educational search terms in Nepal.',
    ],
    lessonsLearned: [
      'Production deployment requires as much discipline in server environment security and process management as in writing application code.',
      'Early database indexing is vital for search-heavy platforms.',
    ],
    liveUrl: 'https://eduhubuniversalservices.com',
  },
  'heart-disease-prediction-system': {
    slug: 'heart-disease-prediction-system',
    title: 'Heart Disease Prediction System',
    subtitle: 'Clinical Machine Learning Classification & Diagnostic Dashboard',
    overview: 'An interactive machine learning application that predicts patient heart disease risk based on key clinical parameters such as cholesterol, resting blood pressure, max heart rate, and ST depression.',
    problem: 'Early clinical risk screening often requires parsing multiple diagnostic data points. An automated, accessible ML screening dashboard helps highlight risk probabilities rapidly.',
    context: 'Developed as a practical machine learning engineering project demonstrating model training, feature selection, evaluation, and instant web model deployment.',
    role: 'ML Developer — Cleaned clinical datasets, trained and evaluated classification models, engineered features, and built the interactive Streamlit dashboard.',
    architecture: [
      'Patient Clinical Inputs → Preprocessing & Feature Scaler (Scikit-Learn)',
      'Trained ML Classification Model (Random Forest / Logistic Regression) → Probability Prediction',
      'Streamlit Dashboard → Interactive Visualization & Risk Metrics Display',
    ],
    approach: [
      'Explored and preprocessed medical dataset using Pandas and NumPy, handling missing values and feature scaling.',
      'Trained multiple classification algorithms (Logistic Regression, Decision Trees, Random Forest) and compared accuracy/recall metrics.',
      'Selected the highest-performing model based on cross-validation and ROC-AUC score.',
      'Built a user-friendly Streamlit web interface allowing clinicians or users to adjust sliders and receive instant risk analysis.',
    ],
    implementation: [
      'Serialized model pipeline using Joblib for rapid loading in the Streamlit application environment.',
      'Added visual charts detailing key diagnostic indicators contributing to individual patient risk levels.',
      'Deployed application live on Streamlit Cloud.',
    ],
    challenges: [
      'Balancing model recall to minimize false negatives in medical risk classification.',
      'Designing an interface that makes clinical parameters intuitive for non-specialists to input.',
    ],
    technicalDecisions: [
      {
        decision: 'Streamlit for UI',
        rationale: 'Allowed rapid deployment of an interactive Python-native dashboard directly connected to the scikit-learn model pipeline.',
      },
    ],
    technology: ['Python', 'Scikit-learn', 'Streamlit', 'Pandas', 'NumPy', 'Joblib'],
    result: [
      'Deployed a live, accessible prediction tool at heardiseaseprediction1811.streamlit.app.',
      'Achieved high accuracy on test clinical data split.',
    ],
    lessonsLearned: [
      'Medical ML applications must prioritize recall to avoid missing high-risk cases.',
      'Streamlit is exceptionally effective for prototyping ML tools quickly for user feedback.',
    ],
    liveUrl: 'https://heardiseaseprediction1811.streamlit.app/',
    githubUrl: 'https://github.com/laxmansharma1811',
  },
  'data-engineering-airflow-pipeline': {
    slug: 'data-engineering-airflow-pipeline',
    title: 'Automated ETL & Data Orchestration Pipeline',
    subtitle: 'Enterprise DAG Orchestration with Apache Airflow & MinIO Storage',
    overview: 'An automated data engineering pipeline designed to ingest, clean, transform, and store unstructured and structured analytics datasets using Apache Airflow and MinIO object storage.',
    problem: 'Manual data extraction and raw file ingestion create bottlenecks, data inconsistencies, and silent failure points for downstream analytics applications.',
    context: 'Engineered during my Data Engineering Internship at Dlytica Inc. Pvt. Ltd to master production workflow automation and cloud storage architectures.',
    role: 'Data Engineering Intern — Designed Apache Airflow DAGs, set up MinIO object buckets, created Dockerized task environments, and wrote ETL transformation scripts.',
    architecture: [
      'Data Source (APIs / Web Scraping) → Apache Airflow Ingestion Task',
      'Airflow Task → Raw Data Stored in MinIO Object Storage (S3-compatible)',
      'Airflow Transformation DAG → Python Transformation & Data Cleaning',
      'Cleaned Data → PostgreSQL / Warehouse Analytics Destination',
    ],
    approach: [
      'Designed modular Apache Airflow DAGs with retry policies, slack alerts, and task dependencies.',
      'Configured MinIO local object storage buckets to replicate AWS S3 data lake architecture.',
      'Containerized the pipeline execution environment using Docker Compose to ensure reproducible runs across development and server environments.',
    ],
    implementation: [
      'Wrote custom Python operators and hooks to streamline interactions between Airflow tasks and MinIO storage.',
      'Implemented strict schema validation checks before writing transformed data into target database tables.',
    ],
    challenges: [
      'Handling task failures gracefully in Airflow DAG execution loops without leaving orphaned data files in storage.',
    ],
    technicalDecisions: [
      {
        decision: 'Apache Airflow for Task Orchestration',
        rationale: 'Provided programmatic Python DAG definitions, task dependency visualization, and built-in logging.',
      },
      {
        decision: 'MinIO Object Storage',
        rationale: 'Delivered lightweight, S3-API compatible object storage ideal for local and cloud data staging.',
      },
    ],
    technology: ['Apache Airflow', 'MinIO', 'Python', 'Docker', 'PostgreSQL', 'ETL'],
    result: [
      'Successfully created automated DAGs capable of hands-free daily data processing.',
      'Established reliable error logging and workflow state management.',
    ],
    lessonsLearned: [
      'Idempotency in ETL task design is essential—running a DAG task multiple times must produce identical, side-effect-free results.',
    ],
    githubUrl: 'https://github.com/laxmansharma1811',
  },
};
