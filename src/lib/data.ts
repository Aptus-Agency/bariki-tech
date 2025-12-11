const fencingImage = '/electric-fencing.jpg';
const accessImage = '/access-control.jpg';

export interface Service {
  icon: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  link: string;
}

export interface ServiceData {
  id: string;
  icon: string;
  title: string;
  description: string;
  image: string;
  video: string;
  heroImage: string;
  features: string[];
  benefits: string[];
  detailedDescription: string;
  whyChoose: string;
  images: string[];
  ecosystemBranch?: string;
}

// Gold Standard Values Interface
export interface GoldStandardValue {
  title: string;
  interpretation: string;
  inAction: string;
  icon: string;
}

// Ecosystem Branch Interface
export interface EcosystemBranch {
  id: string;
  branch: string;
  tagline: string;
  coreFunction: string;
  strategicValue: string;
  icon: string;
  description: string;
  keyMetrics?: string[];
  relatedServices: string[];
}

// Client Tier Interface
export interface ClientTier {
  id: string;
  name: string;
  tagline: string;
  subtitle: string;
  targetClientele: string[];
  philosophy: string;
  entryPoint: string;
  solution: string;
  serviceCovenant: string;
  transparency: string;
  quote: string;
  icon: string;
  color: string;
}

// Resilience Matrix Layer Interface
export interface ResilienceMatrixLayer {
  layer: string;
  domain: string;
  objective: string;
  deliverables: string;
  icon: string;
}

// Gold Standard Framework Item Interface
export interface GoldStandardFrameworkItem {
  title: string;
  description: string;
  details: string;
  icon: string;
}

// Gold Standard Values (4 Core Values)
export const goldStandardValues: GoldStandardValue[] = [
  {
    title: 'Kaizen (Continuous Improvement)',
    interpretation: 'We do not settle for version one. Every project teaches us to build version two.',
    inAction: '"The Kaizen Minute" in every daily huddle; Quarterly Innovation Sprints.',
    icon: 'mdi:chart-line-variant'
  },
  {
    title: 'Integrity (Radical Transparency)',
    interpretation: 'Trust is earned through truth, not marketing.',
    inAction: 'Open-book proposals; Blameless post-mortems where we fix process, not people.',
    icon: 'mdi:shield-check'
  },
  {
    title: 'Under-Promise, Over-Deliver',
    interpretation: 'We deliberately hold back 15% extra performance to surprise the client.',
    inAction: 'The "15% Rule" is logged in our Value-Added Reports for future-proofing.',
    icon: 'mdi:gift'
  },
  {
    title: 'Collaboration',
    interpretation: 'Every challenge is solved as one team, across departments and with our clients.',
    inAction: 'Daily cross-functional syncs; Client co-design sessions.',
    icon: 'mdi:account-group'
  }
];

// Ecosystem Branches (6 Strategic Services)
export const ecosystemBranches: Record<string, EcosystemBranch> = {
  'consultancy': {
    id: 'consultancy',
    branch: 'Security Consultancy',
    tagline: 'The Strategic Brain',
    coreFunction: 'Strategic advisory and system architecture using our Bariki Resilience Matrix™.',
    strategicValue: 'Defines the Gold Standard and architects the entire security roadmap.',
    icon: 'mdi:brain',
    description: 'We advise, design, and oversee security ecosystems from blueprint to commissioning. This engine is uniquely powerful because it is backed by the five other branches that execute what we envision.',
    relatedServices: []
  },
  'installations-maintenance': {
    id: 'installations-maintenance',
    branch: 'Installations & Maintenance',
    tagline: 'The Operational Backbone',
    coreFunction: 'Flawless technical implementation and support with a 98% First-Time Fix Rate.',
    strategicValue: 'Executes the consultancy\'s blueprints into operational reality.',
    icon: 'mdi:tools',
    description: 'We design, install, and maintain the physical infrastructure—from electric fencing to access control—that keeps Africa\'s operations running.',
    keyMetrics: ['98% First-Time Fix Rate'],
    relatedServices: ['cctv-surveillance', 'electric-fencing', 'access-control', 'gate-automation', 'vehicle-access-control-barriers', 'intercom-systems', 'intruder-alarms', 'metal-detectors']
  },
  'cybersecurity': {
    id: 'cybersecurity',
    branch: 'Cybersecurity Division',
    tagline: 'The Digital Shield',
    coreFunction: 'Protects the digital infrastructure that physical systems depend on.',
    strategicValue: 'Hardens the digital layer, ensuring end-to-end resilience.',
    icon: 'mdi:security',
    description: 'We provide Managed Detection & Response (MDR), vulnerability testing, and incident response, recognizing that your firewall is your new perimeter wall.',
    relatedServices: []
  },
  'systems-integration': {
    id: 'systems-integration',
    branch: 'Systems Integration',
    tagline: 'The Central Nervous System',
    coreFunction: 'Harmonizes physical security devices with software and network layers.',
    strategicValue: 'Ensures all systems communicate seamlessly, creating a unified command view.',
    icon: 'mdi:network',
    description: 'We connect the disconnected. Every camera, sensor, access point, and alarm speaks one language under our unified architecture.',
    relatedServices: ['cctv-surveillance', 'access-control', 'intruder-alarms']
  },
  'sales-supplies': {
    id: 'sales-supplies',
    branch: 'Sales & Supplies',
    tagline: 'The Certified Supply Chain',
    coreFunction: 'Provides verified, high-quality technology and equipment.',
    strategicValue: 'Guarantees certified, compliant solutions from trusted global partners.',
    icon: 'mdi:package-variant',
    description: 'We source only from verified manufacturers. Every component meets international standards and carries full warranty.',
    relatedServices: []
  },
  'training-development': {
    id: 'training-development',
    branch: 'Training & Development',
    tagline: 'The Future-Proofing Engine',
    coreFunction: 'Builds the next generation of security engineers and client teams.',
    strategicValue: 'Sustains the culture and skill needed for long-term excellence.',
    icon: 'mdi:school',
    description: 'We train your team to operate, maintain, and optimize your security systems. Knowledge transfer is built into every project.',
    relatedServices: []
  }
};

// Client Tiers (SIMBA, MAMBA, CHAP-CHAP)
export const clientTiers: Record<string, ClientTier> = {
  'simba': {
    id: 'simba',
    name: 'SIMBA',
    tagline: 'Architecting National Resilience',
    subtitle: 'For Those Who Secure the Pulse of a Nation',
    targetClientele: [
      'Banks & Financial Institutions',
      'Telecommunications Giants',
      'Government & Critical Infrastructure',
      'Energy & Oil & Gas'
    ],
    philosophy: 'We operate as a strategic extension of your enterprise, architecting converged security ecosystems where uptime is non-negotiable and a single point of failure is unacceptable. This is where our Security by Design consultancy is paramount.',
    entryPoint: 'Strategic Security Consultancy & The Bariki Resilience Matrix™ Assessment',
    solution: 'Fully customized, integrated ecosystems. A fusion of physical security with our Cybersecurity Division\'s managed services.',
    serviceCovenant: 'Platinum Managed Care with 24/7 monitoring, guaranteed SLAs, and a dedicated client success manager.',
    transparency: 'Full access to the Bariki Command Center Portal™ for real-time KPI and resilience dashboard tracking.',
    quote: 'We don\'t just protect your assets; we harden a component of the national economy.',
    icon: 'mdi:bank',
    color: 'primary'
  },
  'mamba': {
    id: 'mamba',
    name: 'MAMBA',
    tagline: 'Enabling Business Confidence',
    subtitle: 'The Engine of Growth, Secured',
    targetClientele: [
      'Medium Enterprises & Corporate HQs',
      'Private Schools & Hospitals',
      'Hotels & Hospitality Chains',
      'Supermarkets & Retail',
      'Manufacturing Plants'
    ],
    philosophy: 'For organizations where security must enable growth, not hinder it. We deliver intelligent, proactive systems that prevent loss, ensure compliance, and create environments where business and people can flourish.',
    entryPoint: 'Comprehensive Site Audit & Risk Heat Mapping',
    solution: 'Standardized yet adaptable "Assurance Packages" (e.g., Retail Shield, Campus Safeguard) with scope for specific integration.',
    serviceCovenant: 'Proactive Care Plan with scheduled health checks, performance reporting, and rapid response.',
    transparency: 'Quarterly performance reviews based on the Bariki Tech Assurance Index™.',
    quote: 'Your security becomes a silent partner in your productivity.',
    icon: 'mdi:office-building',
    color: 'secondary'
  },
  'chap-chap': {
    id: 'chap-chap',
    name: 'CHAP-CHAP',
    tagline: 'Delivering Essential Assurance',
    subtitle: 'Smart Protection for Your Foundation',
    targetClientele: [
      'Homeowners & Private Residences',
      'Small Shops & Start-ups',
      'Diaspora Property Investors'
    ],
    philosophy: 'Everyone deserves peace of mind. We deliver straightforward, dependable security solutions that are easy to use, easy to maintain, and incredibly effective. No complexity, no jargon, just reliable protection.',
    entryPoint: 'Essential Site Survey and Consultation',
    solution: 'Pre-designed, cost-effective "Essentials Combos" for immediate coverage (e.g., Smart Home Kit, Shop Safeguard Bundle).',
    serviceCovenant: 'Foundation Care offering reliable, remote-support-first service and on-demand call-outs.',
    transparency: 'Clear documentation, simple user training, and a straightforward warranty.',
    quote: 'Radical clarity from day one—we ensure you understand your system completely, turning you into the confident guardian of your own space.',
    icon: 'mdi:home',
    color: 'accent'
  }
};

// Resilience Matrix (4 Layers)
export const resilienceMatrix: ResilienceMatrixLayer[] = [
  {
    layer: 'Layer 1: Physical Domain',
    domain: 'Perimeter, Building, Room',
    objective: 'Secure the tangible environment using CPTED principles.',
    deliverables: 'Layout Plans, Camera & Access Blueprints',
    icon: 'mdi:shield-home'
  },
  {
    layer: 'Layer 2: Logical Domain',
    domain: 'Networked Devices, Access Data',
    objective: 'Protect the digital layer of physical systems.',
    deliverables: 'Network Architecture, Credential Hierarchies',
    icon: 'mdi:network'
  },
  {
    layer: 'Layer 3: Cyber Domain',
    domain: 'IT/OT Systems, Cloud, Data',
    objective: 'Ensure data confidentiality, integrity, and availability.',
    deliverables: 'Vulnerability Reports, Compliance Plans',
    icon: 'mdi:cloud-lock'
  },
  {
    layer: 'Layer 4: Unified Integration Layer™',
    domain: 'Unified Command Architecture',
    objective: 'Harmonize all domains for centralized command.',
    deliverables: 'Integration Maps, Unified Dashboard',
    icon: 'mdi:monitor-dashboard'
  }
];

// Gold Standard Framework (Excellence, Engineered)
export const goldStandardFramework: GoldStandardFrameworkItem[] = [
  {
    title: 'White Glove Inspections',
    description: 'Before any handover, a project must pass an independent audit by senior engineers against a 180-point checklist.',
    details: 'No exposed cables, no default passwords, no blind spots left unverified.',
    icon: 'mdi:clipboard-check'
  },
  {
    title: 'The Bariki Tech Assurance Index™ (BTAI)',
    description: 'A live dashboard providing clients with transparent, real-time metrics on their security posture.',
    details: 'Tracking System Uptime (99.99%), Threat Detection Confidence (≥97%), Mean Time to Resolution (<4 hrs), and Compliance Integrity (100%).',
    icon: 'mdi:chart-line'
  },
  {
    title: 'Live Performance Walls',
    description: 'Real-time scoreboards in every Bariki office displaying active KPIs.',
    details: 'We believe performance unmeasured is performance unseen.',
    icon: 'mdi:monitor-dashboard'
  }
];

export const servicesData: Record<string, ServiceData> = {
  'cctv-surveillance': {
    id: 'cctv-surveillance',
    icon: 'mdi:security-cctv',
    title: 'Digital CCTV Surveillance Systems',
    description: 'Advanced surveillance systems with HD cameras, remote monitoring, and intelligent analytics for comprehensive security coverage.',
    image: "https://res.cloudinary.com/zurri-cloud/image/upload/v1761837924/bariki/qf4upyjn3byenihy6xiv.jpg",
    heroImage: "https://res.cloudinary.com/zurri-cloud/image/upload/v1761834481/bariki/nlg8xybmeq7dcximos5f.webp",
    video: "https://www.youtube.com/embed/Q_p3pka81uc?si=gpY5ouI7u93PnIoT&amp;controls=0",
    features: ['HD/4K Video Quality', 'Remote Monitoring', 'Motion Detection', 'Night Vision', 'Cloud Storage', 'Mobile App Access'],
    benefits: [
      'Gold Standard installations with 180-point quality checklist',
      '98% First-Time Fix Rate backed by our skilled engineers',
      'Radical transparency with open-book proposals and clear pricing',
      'Future-proofed with the 15% Rule for continuous improvement'
    ],
    detailedDescription: 'Our CCTV surveillance systems are designed for Africa\'s unique security challenges. From Kampala\'s bustling business districts to remote oilfield installations, we deliver HD/4K monitoring with intelligent analytics that work reliably in challenging conditions. Every camera placement follows CPTED principles, ensuring optimal coverage with minimal blind spots.',
    whyChoose: 'We don\'t just install cameras—we architect visual intelligence systems. Our CCTV solutions integrate seamlessly with your access control, alarms, and cybersecurity infrastructure, creating a unified command view. With remote monitoring, mobile access, and cloud backup, you gain complete visibility from anywhere in the world.',
    images: ["https://res.cloudinary.com/zurri-cloud/image/upload/v1761842328/bariki/fwoicvsnk4peajiizvrl.jpg", "https://res.cloudinary.com/zurri-cloud/image/upload/v1761842265/bariki/sk3bbrqtn7xrksv3wnca.webp"],
    ecosystemBranch: 'installations-maintenance'
  },
  'electric-fencing': {
    id: 'electric-fencing',
    icon: 'mdi:gate-alert',
    title: 'High-Security Electric Fencing',
    description: 'High-voltage perimeter protection systems designed to deter intruders while ensuring safety and reliability.',
    image: "https://res.cloudinary.com/zurri-cloud/image/upload/v1762418932/bariki/wpqc6g1ekjup8zr8kxhk.webp",
    heroImage: fencingImage,
    video: "https://www.youtube.com/embed/-Hpc8R-gYBs?si=bL3CMoymlRR2STLS",
    features: ['High Voltage Protection', 'Alarm Integration', 'Weather Resistant', 'Low Maintenance', 'Solar Options', 'Monitoring Systems'],
    benefits: [
      'Engineered for Africa\'s climate with weather-resistant materials',
      'Integrated alarm systems that speak to your unified security ecosystem',
      'Solar-powered options for reliable operation in power-challenged areas',
      'Designed following CPTED principles for maximum perimeter security'
    ],
    detailedDescription: 'Our high-security electric fencing solutions protect critical infrastructure across Uganda and East Africa. From banking institutions to telecom facilities and industrial compounds, we design perimeter protection that withstands Africa\'s unique challenges—intense sun, heavy rains, and power instability. Every installation integrates with your broader security architecture.',
    whyChoose: 'We don\'t just string wire—we design perimeter intelligence. Our electric fencing integrates seamlessly with CCTV surveillance, access control, and central monitoring systems. With alarm integration, zone detection, and solar backup options, your perimeter becomes the first layer of a coordinated security response.',
    images: [],
    ecosystemBranch: 'installations-maintenance'
  },
  'access-control': {
    id: 'access-control',
    icon: 'mdi:access-point',
    title: 'Access Control',
    description: 'Smart access control systems including biometric scanners, keycards, and automated entry management.',
    image: accessImage,
    heroImage: accessImage,
    video: "https://www.youtube.com/embed/9dfILBOmnCA?si=tnUBP4Bxvv1vTSWC",
    features: ['Biometric Scanners', 'Keycard Systems', 'Mobile Access', 'Time Scheduling', 'Visitor Management', 'Integration Ready'],
    benefits: [
      'Multi-domain security: physical credentials backed by digital authentication',
      'Real-time access logs that integrate with your CCTV and alarm systems',
      'Visitor management that protects privacy while maintaining accountability',
      'Scalable from single doors to multi-site enterprise deployments'
    ],
    detailedDescription: 'Our access control solutions secure Uganda\'s most sensitive facilities—from bank vaults to data centers, hospital wings to government offices. We design hierarchical credential systems that give you granular control over who enters where and when. Every access event is logged, creating an audit trail that meets compliance requirements while integrating seamlessly with surveillance and alarm systems.',
    whyChoose: 'We don\'t just control doors—we architect identity-based security. Our access control systems unify biometric scanners, keycard readers, mobile credentials, and visitor management into one intelligent platform. With time-based scheduling, zone restrictions, and emergency lockdown capabilities, you maintain complete control while ensuring smooth operations.',
    images: ["https://res.cloudinary.com/zurri-cloud/image/upload/v1759535383/bariki/eyfnlqb82dfteinvlcoe.jpg"],
    ecosystemBranch: 'installations-maintenance'
  },
  'gate-automation': {
    id: 'gate-automation',
    icon: 'mdi:gate',
    title: 'Automated Gate Systems',
    description: 'Automated gate systems with remote control, safety features, and integration with existing security systems.',
    image: "https://res.cloudinary.com/zurri-cloud/image/upload/v1759534485/bariki/bq86zz10bu5bhsafk22d.webp",
    heroImage: "https://res.cloudinary.com/zurri-cloud/image/upload/v1759534485/bariki/bq86zz10bu5bhsafk22d.webp",
    video: "https://www.youtube.com/embed/u1IyMLt-AEM?si=CM7-CpaVD-q63rTh",
    features: ['Remote Control', 'Safety Sensors', 'Backup Power', 'Integration Ready', 'Mobile App', 'Emergency Override'],
    benefits: [
      'Backup power systems ensure operation during Uganda\'s frequent power outages',
      'Safety sensors that protect vehicles and pedestrians from accidental injury',
      'Remote and mobile control for convenience without compromising security',
      'Integration with access control for credential-based entry authorization'
    ],
    detailedDescription: 'Our automated gate systems combine convenience with security for residential estates, commercial complexes, and industrial facilities across East Africa. We engineer solutions that handle high-traffic volumes while maintaining security integrity. Every installation includes backup power, safety sensors, and integration points for access control and surveillance systems.',
    whyChoose: 'We don\'t just automate gates—we create controlled entry ecosystems. Our gate systems integrate with access control for credential verification, CCTV for visual confirmation, and alarm systems for unauthorized access alerts. With mobile app control, emergency override, and backup power, your gates remain both convenient and secure.',
    images: [],
    ecosystemBranch: 'installations-maintenance'
  },
  'vehicle-access-control-barriers': {
    id: 'vehicle-access-control-barriers',
    icon: 'mdi:timer',
    title: 'Vehicle Access Control Barriers',
    description: 'Automated boom barriers that secure perimeters, control traffic flow, and create a single, manageable access point for enhanced security',
    image: 'https://res.cloudinary.com/zurri-cloud/image/upload/v1759534834/bariki/ei6jc4hzhkctszxawhn4.jpg',
    heroImage: "https://res.cloudinary.com/zurri-cloud/image/upload/v1759534834/bariki/ei6jc4hzhkctszxawhn4.jpg",
    video: "https://www.youtube.com/embed/l78obVT8MVs?si=dCNzztrCXUYbKaWB",
    features: [
      "Creates a single, controlled access point for vehicles",
      "Acts as a visible sign of proactive security measures",
      "Allows security guards to conduct systematic vehicle searches",
      "Reduces traffic speed and density on your premises",
      "Represents a physical line that cannot be crossed without authorization"
    ],
    benefits: [
      "Effectively secures perimeter from unauthorized vehicle entry",
      "Integrates with CCTV and license plate recognition systems",
      "Manages traffic flow while maintaining security protocol integrity",
      "Built to withstand Africa\'s climate and high-traffic demands"
    ],
    images: [],
    detailedDescription: "Our vehicle access control barriers secure critical facilities across Uganda—from banking headquarters to telecom sites, industrial parks to government compounds. We design barrier systems that create controlled checkpoints, allowing security personnel to verify credentials and conduct inspections while maintaining efficient traffic flow. Every barrier integrates with access control, surveillance, and alarm systems for coordinated security response.",
    whyChoose: "We don\'t just install barriers—we architect vehicular security checkpoints. Our barrier systems integrate with license plate recognition, access control credentials, and CCTV surveillance to create intelligent vehicle screening. With backup power, safety sensors, and remote control capabilities, you maintain security without creating bottlenecks.",
    ecosystemBranch: 'installations-maintenance'
  },
  'intercom-systems': {
    id: "intercom-systems",
    icon: "mdi:intercom",
    title: "Video & Audio Intercom Systems",
    description: "Securely manage visitor access with a range of audio and video intercoms for apartments, homes, and businesses.",
    image: "https://res.cloudinary.com/zurri-cloud/image/upload/v1759535030/bariki/gh1ezkbgikrjpfk9abze.jpg",
    heroImage: "https://res.cloudinary.com/zurri-cloud/image/upload/v1759535030/bariki/gh1ezkbgikrjpfk9abze.jpg",
    video: "https://www.youtube.com/embed/TW-K5pFtcVg?si=AjWo7TNfe9b_Dwv7",
    features: [
      "Audio and video verification options",
      "Specialized systems for single homes, apartments, and large buildings",
      "Wireless and wired configurations available",
      "Solutions for both gate and door entry access",
      "Door-to-phone intercom systems for added convenience"
    ],
    benefits: [
      "Screen and identify visitors before granting access to your property",
      "Integration with access control for automated visitor credential logging",
      "Wireless options ideal for retrofitting existing properties without rewiring",
      "Scalable from single-family homes to multi-tenant apartment complexes"
    ],
    images: [],
    detailedDescription: "Our video and audio intercom systems provide the first point of visitor verification for residential estates, apartment buildings, hospitals, and corporate facilities across Uganda. We design intercom solutions that integrate with access control for automated entry, CCTV for visual recording, and alarm systems for distress signaling. From simple audio intercoms to sophisticated video systems with mobile app integration, every solution is tailored to your security requirements.",
    whyChoose: "We don\'t just install intercoms—we create intelligent visitor management systems. Our intercom solutions integrate with access control to automatically log visitor credentials, with CCTV to record all visitor interactions, and with mobile apps to manage access remotely. Whether you need simple audio verification or sophisticated video intercoms with recording capabilities, we architect solutions that enhance security while maintaining hospitality.",
    ecosystemBranch: 'installations-maintenance'
  },
  "intruder-alarms": {
    id: "intruder-alarms",
    icon: "mdi:alarm-light",
    title: "Intruder & Panic Alarm Systems",
    description: "Protect your property with intelligent alarm systems that detect unauthorized entry and provide instant alerts through audible sirens and remote panic buttons.",
    image: "https://res.cloudinary.com/zurri-cloud/image/upload/v1759535383/bariki/eyfnlqb82dfteinvlcoe.jpg",
    heroImage: "https://res.cloudinary.com/zurri-cloud/image/upload/v1759535383/bariki/eyfnlqb82dfteinvlcoe.jpg",
    video: "https://www.youtube.com/embed/qTf8Kvd4Ups?si=ndsMUakIHY4emQoQ",
    features: [
      "Vibration sensors for windows and magnetic contacts for doors to detect unauthorized opening",
      "Passive Infra-Red (PIR) motion sensors for large rooms",
      "A central control panel that indicates the specific zone (area) of an intrusion",
      "Wired and wireless system options are available to avoid untidy cables",
      "Comes complete with remote panic switches and a standby battery for power failures"
    ],
    benefits: [
      "Immediate intrusion detection removes the element of surprise from intruders",
      "Zone-based alerts pinpoint exact location of security breach for rapid response",
      "Standby battery ensures continuous protection during power outages",
      "Wireless options provide clean, aesthetic installations without compromising security"
    ],
    images: [],
    detailedDescription: "Our intruder and panic alarm systems protect homes, businesses, and critical facilities across Uganda with intelligent zone-based detection. We design alarm systems that integrate with CCTV for visual verification, access control for armed/disarmed automation, and central monitoring for immediate response. Every system includes backup power, panic buttons for personal safety, and mobile alerts for real-time notifications wherever you are.",
    whyChoose: "We don\'t just install alarms—we architect intelligent detection ecosystems. Our alarm systems integrate with CCTV to automatically trigger recording when motion is detected, with access control to arm/disarm based on credential usage, and with mobile apps for instant alerts and remote management. With zone-based detection, you know exactly where an intrusion is occurring, enabling precise and rapid security response.",
    ecosystemBranch: 'installations-maintenance'
  },
  "metal-detectors": {
    id: "metal-detectors",
    icon: "mdi:metal-detector",
    title: "Walk-Through Portable Metal Detectors",
    description: "A highly portable and rapidly deployable metal detector for events and facilities, ensuring enhanced security screening with ease and efficiency.",
    image: "https://res.cloudinary.com/zurri-cloud/image/upload/v1762419337/bariki/wmjzqpvdctgpfj8ybnyh.jpg",
    heroImage: "https://res.cloudinary.com/zurri-cloud/image/upload/v1759535630/bariki/sosgliesju4ydk55dh0t.png",
    video: "https://www.youtube.com/embed/C-kLgMuMW-Y?si=DEJFcwgczDF_ajmM",
    features: [
      "Single-person portability and can be transported in a car or van",
      "Assembles and disassembles in under 5 minutes",
      "Long-lasting 40-hour battery life for extended use",
      "Built-in transit counter to track how many people have passed through",
      "Memory feature to save user settings for specific locations"
    ],
    benefits: [
      "Rapidly deployable for immediate security needs at any location",
      "40-hour battery life ensures full-day operation without power infrastructure",
      "Cost-effective solution for both permanent and temporary security requirements",
      "Perfect for Africa\'s diverse venue needs: schools, churches, events, and facilities"
    ],
    images: [],
    detailedDescription: "Our walk-through portable metal detectors provide flexible security screening for Uganda\'s schools, places of worship, sporting venues, corporate events, and government facilities. When you need professional-grade security screening without permanent installation, our portable detectors deploy in minutes. With 40-hour battery life, built-in people counting, and location-specific memory settings, you get enterprise-grade screening with maximum flexibility.",
    whyChoose: "We don\'t just supply metal detectors—we provide flexible security screening solutions. Our portable walk-through detectors are ideal for venues that need professional-grade screening without permanent infrastructure. Whether you\'re securing a one-time event, rotating between multiple locations, or need backup screening capacity, our detectors deliver reliable performance with minimal setup time and maximum portability.",
    ecosystemBranch: 'installations-maintenance'
  }
};

export const quickServices = [
  { id: 'cctv-surveillance', label: 'CCTV Surveillance', icon: 'mdi:security' },
  { id: 'electric-fencing', label: 'Electric Fencing', icon: 'mdi:electricity' },
  { id: 'access-control', label: 'Access Control', icon: 'mdi:lock' },
  { id: 'gate-automation', label: 'Gate Automation', icon: 'mdi:gate' },
  { id: 'vehicle-access-control-barriers', label: 'Vehicle Access Control Barriers', icon: 'mdi:car' },
  { id: 'intercom-systems', label: 'Intercom Systems', icon: 'mdi:phone' },
  { id: 'intruder-alarms', label: 'Intruder Alarms', icon: 'mdi:alarm' },
  { id: 'metal-detectors', label: 'Metal Detectors', icon: 'mdi:alarm' }
];

export const faqs = [
  {
    question: 'Are you licensed and insured?',
    answer: 'Yes, Bariki Tech Security Solutions is fully licensed and insured. We maintain all necessary certifications and insurance coverage to provide professional security services.'
  },
  {
    question: 'Do you offer free estimates?',
    answer: 'Yes, we offer free consultations and estimates to help you understand your project\'s scope and costs before you commit. Our experts will assess your security needs and provide a detailed quote.'
  },
  {
    question: 'How long will my project take?',
    answer: 'Project duration varies depending on the scope and complexity. During your consultation, we\'ll provide a detailed timeline. Most installations are completed within 1-3 days, while larger projects may take up to a week.'
  },
  {
    question: 'What is your warranty policy?',
    answer: 'We offer comprehensive warranties on all installations and equipment. Our standard warranty covers 2 years for labor and varies by manufacturer for equipment. We also provide ongoing maintenance plans.'
  },
  {
    question: 'Do you provide 24/7 support?',
    answer: 'Yes, we offer 24/7 emergency support for all our clients. Our team is always available to respond to security concerns and system issues promptly.'
  }
];

export const features = [
  'ColorVu 3.0 - 24/7 Full-Color Night Vision',
  'F1.0 Super Lens - Ultra-Light Sensitive',
  '4K UHD Resolution',
  'Smart Hybrid Light Technology',
  'AcuSense 3.0 - AI-Powered Detection',
  'Audio 2.0 - Two-Way Communication'
];

export const values = [
  {
    icon: "mdi-light:shield",
    title: 'Dependable Protection',
    description: 'Smart Solutions. Ongoing Care.',
    highlight: 'We don\'t just install, we integrate, protect, maintain and build trust.'
  },
  {
    icon: "mdi-light:target",
    title: 'Our Mission',
    description: 'To protect lives and property through smart security installations, excellent service and ongoing care.'
  },
  {
    icon: "mdi-light:eye",
    title: 'Our Vision',
    description: 'To be the most trusted provider of smart, dependable, caring security solutions in Africa.'
  }
];

export const stats = [
  {
    icon: "bxs:check-shield",
    value: '500+',
    label: 'Installations Completed',
    description: 'Successful security installations'
  },
  {
    icon: "bxs:happy",
    value: '200+',
    label: 'Happy Clients',
    description: 'Satisfied customers nationwide'
  },
  {
    icon: "bxs:rocket",
    value: '10+',
    label: 'Years Experience',
    description: 'Proven track record'
  },
  {
    icon: "bxs:time",
    value: '24/7',
    label: 'Support Available',
    description: 'Round-the-clock assistance'
  }
];

export const testimonials = [
  {
    quote: "Bariki Tech transformed our bank's security posture from reactive to predictive. Their converged approach integrated our physical perimeter with our digital infrastructure seamlessly. True partners in security.",
    author: "Dr. Patricia Nakato",
    role: "Chief Security Officer, Regional Bank",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop"
  },
  {
    quote: "We needed a security partner who understood Uganda's unique challenges. Bariki's team designed a system that works reliably despite power fluctuations and harsh weather. The 15% Rule is real—they consistently over-deliver.",
    author: "James Okello",
    role: "Facilities Manager, Telecom Infrastructure",
    avatar: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=100&h=100&fit=crop"
  },
  {
    quote: "Their radical transparency sets them apart. Every proposal was clear, every installation documented, every system explained. We finally have a security ecosystem we understand and trust.",
    author: "Sarah Namuganza",
    role: "Operations Director, Hospital Network",
    avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop"
  },
  {
    quote: "Bariki doesn't just install equipment—they architect resilience. Our entire security infrastructure now operates as one unified system. The Gold Standard isn't marketing; it's their actual operating procedure.",
    author: "Emmanuel Kiiza",
    role: "Security Coordinator, Industrial Complex",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop"
  }
];

export const aboutPageValues = [
  {
    icon: 'solar:shield-bold-duotone',
    title: 'Dependable protection',
  },
  {
    icon: 'fluent:brain-circuit-24-filled',
    title: 'Smart Solutions'
  },
  {
    icon: 'mdi:heart',
    title: 'Ongoing Care'
  }
];

export const achievements = [
  { number: '50+', label: 'Complete Projects', icon: 'mdi:building-outline' },
  { number: '50+', label: 'Team Members', icon: 'mdi:account-group-outline' },
  { number: '45+', label: 'Client Reviews', icon: 'mdi:award-outline' },
  { number: '15+', label: 'Years Experience', icon: 'mdi:clock-outline' }
];

export const team = [
  {
    name: 'Migisa Isaac',
    role: 'Team Lead',
    image: 'https://res.cloudinary.com/zurri-cloud/image/upload/v1759527920/bariki/bmketverzbisjyuekxpx.png'
  },
  {
    name: 'Atwine Mukama Tayebwa',
    role: 'Business Development Manager',
    image: 'https://res.cloudinary.com/zurri-cloud/image/upload/v1759527920/bariki/rhrsscss7reexshwlvor.png'
  },
  {
    name: 'Monica Uwera',
    role: 'Client Relations Manager',
    image: 'https://res.cloudinary.com/zurri-cloud/image/upload/v1759527921/bariki/y9e1emejnm1ttcpm9vil.png'
  },
  {
    name: 'Luja Abdul Bastu',
    role: 'Network and Systems Admin',
    image: 'https://res.cloudinary.com/zurri-cloud/image/upload/v1759527921/bariki/jt0jx9kot7pzvzgbeyhn.png'
  }
];

export const socialLinks = [
  { icon: "basil:facebook-solid", href: '#', label: 'Facebook' },
  { icon: "basil:twitter-solid", href: '#', label: 'Twitter' },
  { icon: "basil:instagram-solid", href: '#', label: 'Instagram' },
  { icon: "basil:linkedin-solid", href: '#', label: 'LinkedIn' }
];