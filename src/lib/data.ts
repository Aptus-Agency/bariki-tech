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

interface ServiceData {
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
}

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
      'Our skilled professionals bring years of experience',
      'We are the leading security company in the industry',
      'Our transparent pricing ensures no hidden fees or surprises',
      'We adhere to strict safety standards on all job sites'
    ],
    detailedDescription: 'We pride ourselves on delivering high-quality CCTV surveillance services tailored to meet the unique needs of our clients. With years of experience in the industry, our team of skilled professionals excels in bringing your vision to life. Whether you are looking to secure a new property, monitor an existing space, or need comprehensive surveillance services, we are here to help.',
    whyChoose: 'Transform your existing space with our renovation and remodeling services. Whether you want to update your kitchen, bathroom, or entire home, we bring innovation and style to enhance your living spaces. Our team specializes in both minor updates and major renovations, using cutting-edge materials and design techniques to improve functionality, aesthetics, and value. We work closely with you to ensure your project aligns with your vision, budget, and timeline.',
    images: ["https://res.cloudinary.com/zurri-cloud/image/upload/v1761842328/bariki/fwoicvsnk4peajiizvrl.jpg", "https://res.cloudinary.com/zurri-cloud/image/upload/v1761842265/bariki/sk3bbrqtn7xrksv3wnca.webp"]
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
      'Our skilled professionals bring years of experience',
      'We are the leading security company in the industry',
      'Our transparent pricing ensures no hidden fees or surprises',
      'We adhere to strict safety standards on all job sites'
    ],
    detailedDescription: 'We pride ourselves on delivering high-quality electric fencing services tailored to meet the unique needs of our clients. With years of experience in the industry, our team of skilled professionals excels in perimeter protection. Whether you are looking to secure a new property, enhance an existing perimeter, or need comprehensive fencing solutions, we are here to help.',
    whyChoose: 'Transform your property security with our electric fencing solutions. We specialize in installing high-voltage perimeter protection systems that deter intruders while ensuring safety. Our systems integrate seamlessly with existing security infrastructure and can be customized to meet your specific requirements.',
    images: []
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
      'Our skilled professionals bring years of experience',
      'We are the leading security company in the industry',
      'Our transparent pricing ensures no hidden fees or surprises',
      'We adhere to strict safety standards on all job sites'
    ],
    detailedDescription: 'We pride ourselves on delivering high-quality access control services tailored to meet the unique needs of our clients. With years of experience in the industry, our team of skilled professionals excels in implementing secure entry systems. Whether you need biometric scanners, keycard systems, or mobile access solutions, we are here to help.',
    whyChoose: 'Enhance your security with smart access control systems. Our solutions provide comprehensive control over who enters your premises and when. We specialize in biometric systems, keycard access, and mobile integration, ensuring seamless security management for your facility.',
    images: ["https://res.cloudinary.com/zurri-cloud/image/upload/v1759535383/bariki/eyfnlqb82dfteinvlcoe.jpg"]
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
      'Our skilled professionals bring years of experience',
      'We are the leading security company in the industry',
      'Our transparent pricing ensures no hidden fees or surprises',
      'We adhere to strict safety standards on all job sites'
    ],
    detailedDescription: 'We pride ourselves on delivering high-quality gate automation services tailored to meet the unique needs of our clients. With years of experience in the industry, our team of skilled professionals excels in automated entry systems. Whether you need a new installation or an upgrade to existing gates, we are here to help.',
    whyChoose: 'Modernize your entry points with our gate automation solutions. We provide fully automated gate systems with remote control capabilities, safety sensors, and backup power. Our systems integrate seamlessly with your existing security infrastructure for complete control and monitoring.',
    images: []
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
      "Effectively secures the perimeter of your property from unauthorized vehicle entry",
      "Acts as a clear visual deterrent to potential trespassers",
      "Improves on-site safety by managing the speed and flow of traffic",
      "Strengthens your security protocol by enabling controlled vehicle checks"
    ],
    images: [],
    detailedDescription: "Bariki Tech's vehicle access control barriers are designed to secure your perimeter by creating a single, controlled access point. These barriers are a clear and visible sign that you are taking a proactive approach to security, allowing guards the opportunity to conduct searches and verify authorization. By representing a physical line that cannot be crossed without permission, they effectively reduce traffic speed and density, enhancing both security and safety on your property.",
    whyChoose: "At Bariki Tech, we don't just sell products; we deliver comprehensive security solutions tailored to your unique needs. Our approach is founded on our brand promise of **Dependable Protection, Smart Solutions, and Ongoing Care. Backed by a team of highly trained and experienced engineers and technicians, we have built a reputation for innovation, integrity, and excellence. We partner with globally recognized brands to ensure the highest quality and reliability. When you choose Bariki, you're not just installing a system; you're investing in a trusted partnership dedicated to protecting what matters most to you through integration, maintenance, and unwavering support."
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
      "Safely screen and identify visitors before granting them access to your property",
      "Enjoy convenient communication with visitors from the safety of inside your home or office",
      "Increase your privacy by controlling who can approach your door or gate",
      "A wide range of options ensures a perfect fit for any type of property"
    ],
    images: [],
    detailedDescription: "With Bariki Tech's intercom systems, visitor access is managed safely and efficiently. An intercom unit is mounted at your gate, allowing you to communicate with visitors before deciding to let them in, which greatly enhances your privacy and security. We are a preferred supplier for all kinds of solutions, including apartment security entry phones, building intercoms, wireless systems, and video gate door access systems, ensuring we have the right product for your specific needs.",
    whyChoose: "At Bariki Tech, we don't just sell products; we deliver comprehensive security solutions tailored to your unique needs. Our approach is founded on our brand promise of **Dependable Protection, Smart Solutions, and Ongoing Care. Backed by a team of highly trained and experienced engineers and technicians, we have built a reputation for innovation, integrity, and excellence. We partner with globally recognized brands to ensure the highest quality and reliability. When you choose Bariki, you're not just installing a system; you're investing in a trusted partnership dedicated to protecting what matters most to you through integration, maintenance, and unwavering support."
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
      "Removes a burglar's best ammunition—surprise—by providing immediate alerts of an intrusion",
      "Allows you to instantly alert neighbors and security agents when in distress using strategically placed or remote panic switches",
      "The system continues to protect your property even during a power outage, thanks to the standby battery",
      "Offers a clean, aesthetic installation with modern wireless alarm systems"
    ],
    images: [],
    detailedDescription: "Protect your property and family by installing a Bariki Tech burglar alarm system. Our systems consist of vibration sensors on windows, magnetic contacts on doors, and optional PIR motion sensors for larger areas to detect any unauthorized entry. When triggered, the system activates an audible siren and/or a silent alarm, with a control panel indicating exactly where the intrusion is taking place. For personal safety, the system includes remote panic switches that can be carried around the compound to instantly call for help. We offer both traditional and wireless systems for a clean installation.",
    whyChoose: "At Bariki Tech, we don't just sell products; we deliver comprehensive security solutions tailored to your unique needs. Our approach is founded on our brand promise of **Dependable Protection, Smart Solutions, and Ongoing Care**. Backed by a team of highly trained and experienced engineers and technicians, we have built a reputation for innovation, integrity, and excellence. We partner with globally recognized brands to ensure the highest quality and reliability. When you choose Bariki, you're not just installing a system; you're investing in a trusted partnership dedicated to protecting what matters most to you through integration, maintenance, and unwavering support."
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
      "Can be deployed rapidly to address immediate security needs at any location",
      "Saves time and labor as it can be easily transported and set up by a single person",
      "Ensures reliable operation for full-day events without needing a constant power source",
      "Highly cost-effective and versatile for a wide variety of venues such as schools, churches, and sporting events"
    ],
    images: [],
    detailedDescription: "When we say portable, we mean a truly dynamic detector capable of being rapidly deployed within minutes instead of hours. With only one operator, the detector can be transported to virtually any location—even in a car—and be up and running within five minutes! This makes it a true cost-saver and the smart choice for professionals who need security in both permanent and multiple temporary locations on short notice. It's the ideal solution for securing schools, churches, nightclubs, sporting events, and other venues.",
    whyChoose: "At Bariki Tech, we don't just sell products; we deliver comprehensive security solutions tailored to your unique needs. Our approach is founded on our brand promise of **Dependable Protection, Smart Solutions, and Ongoing Care**. Backed by a team of highly trained and experienced engineers and technicians, we have built a reputation for innovation, integrity, and excellence. We partner with globally recognized brands to ensure the highest quality and reliability. When you choose Bariki, you're not just installing a system; you're investing in a trusted partnership dedicated to protecting what matters most to you through integration, maintenance, and unwavering support."
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
    quote: "CryptoFlow has completely transformed my crypto trading experience. The real-time analytics and AI recommendations have significantly improved my returns.",
    author: "Michael Chen",
    role: "Full-time Trader",
    avatar: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=100&h=100&fit=crop"
  },
  {
    quote: "As a beginner, I was intimidated by crypto trading until I found CryptoFlow. Their intuitive interface and educational resources made it easy to start investing confidently.",
    author: "Sarah Johnson",
    role: "Tech Entrepreneur",
    avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop"
  },
  {
    quote: "The security features on CryptoFlow are unmatched. I feel confident keeping my assets on their platform, and the trading fees are the most competitive I've found.",
    author: "David Rodriguez",
    role: "Cybersecurity Specialist",
    avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop"
  },
  {
    quote: "Their customer support is phenomenal. Any time I've had a question or issue, the team has resolved it quickly. The platform itself is lightning fast and reliable.",
    author: "Emma Thompson",
    role: "Investment Advisor",
    avatar: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=100&h=100&fit=crop"
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
  { number: '500+', label: 'Complete Projects', icon: 'mdi:building-outline' },
  { number: '50+', label: 'Team Members', icon: 'mdi:account-group-outline' },
  { number: '450+', label: 'Client Reviews', icon: 'mdi:award-outline' },
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