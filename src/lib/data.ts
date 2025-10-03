const cctvImage = '/cctv-installation.jpg';
const fencingImage = '/electric-fencing.jpg';
const accessImage = '/access-control.jpg';
const heroImage = '/hero-security.jpg';

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
  icon: any;
  title: string;
  description: string;
  image: string;
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
      image: "/cctv-installation.jpg",
      heroImage: cctvImage,
      features: ['HD/4K Video Quality', 'Remote Monitoring', 'Motion Detection', 'Night Vision', 'Cloud Storage', 'Mobile App Access'],
      benefits: [
          'Our skilled professionals bring years of experience',
          'We are the leading security company in the industry',
          'Our transparent pricing ensures no hidden fees or surprises',
          'We adhere to strict safety standards on all job sites'
      ],
      detailedDescription: 'We pride ourselves on delivering high-quality CCTV surveillance services tailored to meet the unique needs of our clients. With years of experience in the industry, our team of skilled professionals excels in bringing your vision to life. Whether you are looking to secure a new property, monitor an existing space, or need comprehensive surveillance services, we are here to help.',
      whyChoose: 'Transform your existing space with our renovation and remodeling services. Whether you want to update your kitchen, bathroom, or entire home, we bring innovation and style to enhance your living spaces. Our team specializes in both minor updates and major renovations, using cutting-edge materials and design techniques to improve functionality, aesthetics, and value. We work closely with you to ensure your project aligns with your vision, budget, and timeline.',
      images: [cctvImage, fencingImage, accessImage]
  },
  'electric-fencing': {
      id: 'electric-fencing',
      icon: 'mdi:electric-fence',
      title: 'Electric Fencing Solutions',
      description: 'High-voltage perimeter protection systems designed to deter intruders while ensuring safety and reliability.',
      image: fencingImage,
      heroImage: fencingImage,
      features: ['High Voltage Protection', 'Alarm Integration', 'Weather Resistant', 'Low Maintenance', 'Solar Options', 'Monitoring Systems'],
      benefits: [
          'Our skilled professionals bring years of experience',
          'We are the leading security company in the industry',
          'Our transparent pricing ensures no hidden fees or surprises',
          'We adhere to strict safety standards on all job sites'
      ],
      detailedDescription: 'We pride ourselves on delivering high-quality electric fencing services tailored to meet the unique needs of our clients. With years of experience in the industry, our team of skilled professionals excels in perimeter protection. Whether you are looking to secure a new property, enhance an existing perimeter, or need comprehensive fencing solutions, we are here to help.',
      whyChoose: 'Transform your property security with our electric fencing solutions. We specialize in installing high-voltage perimeter protection systems that deter intruders while ensuring safety. Our systems integrate seamlessly with existing security infrastructure and can be customized to meet your specific requirements.',
      images: [fencingImage, heroImage, cctvImage]
  },
  'access-control': {
      id: 'access-control',
      icon: 'mdi:access-point',
      title: 'Access Control',
      description: 'Smart access control systems including biometric scanners, keycards, and automated entry management.',
      image: accessImage,
      heroImage: accessImage,
      features: ['Biometric Scanners', 'Keycard Systems', 'Mobile Access', 'Time Scheduling', 'Visitor Management', 'Integration Ready'],
      benefits: [
          'Our skilled professionals bring years of experience',
          'We are the leading security company in the industry',
          'Our transparent pricing ensures no hidden fees or surprises',
          'We adhere to strict safety standards on all job sites'
      ],
      detailedDescription: 'We pride ourselves on delivering high-quality access control services tailored to meet the unique needs of our clients. With years of experience in the industry, our team of skilled professionals excels in implementing secure entry systems. Whether you need biometric scanners, keycard systems, or mobile access solutions, we are here to help.',
      whyChoose: 'Enhance your security with smart access control systems. Our solutions provide comprehensive control over who enters your premises and when. We specialize in biometric systems, keycard access, and mobile integration, ensuring seamless security management for your facility.',
      images: [accessImage, cctvImage, fencingImage]
  },
  'gate-automation': {
      id: 'gate-automation',
      icon: 'mdi:gate',
      title: 'Gate Automation',
      description: 'Automated gate systems with remote control, safety features, and integration with existing security systems.',
      image: heroImage,
      heroImage: heroImage,
      features: ['Remote Control', 'Safety Sensors', 'Backup Power', 'Integration Ready', 'Mobile App', 'Emergency Override'],
      benefits: [
          'Our skilled professionals bring years of experience',
          'We are the leading security company in the industry',
          'Our transparent pricing ensures no hidden fees or surprises',
          'We adhere to strict safety standards on all job sites'
      ],
      detailedDescription: 'We pride ourselves on delivering high-quality gate automation services tailored to meet the unique needs of our clients. With years of experience in the industry, our team of skilled professionals excels in automated entry systems. Whether you need a new installation or an upgrade to existing gates, we are here to help.',
      whyChoose: 'Modernize your entry points with our gate automation solutions. We provide fully automated gate systems with remote control capabilities, safety sensors, and backup power. Our systems integrate seamlessly with your existing security infrastructure for complete control and monitoring.',
      images: [heroImage, accessImage, fencingImage]
  },
  'time-attendance': {
      id: 'time-attendance',
      icon: 'mdi:timer',
      title: 'Time & Attendance',
      description: 'Comprehensive workforce management solutions with biometric time tracking and reporting systems.',
      image: accessImage,
      heroImage: accessImage,
      features: ['Biometric Tracking', 'Real-time Reports', 'Mobile Integration', 'Shift Management', 'Analytics', 'Payroll Integration'],
      benefits: [
          'Our skilled professionals bring years of experience',
          'We are the leading workforce management company in the industry',
          'Our transparent pricing ensures no hidden fees or surprises',
          'We provide 24/7 support for all our systems'
      ],
      detailedDescription: 'We pride ourselves on delivering high-quality time and attendance solutions tailored to meet the unique needs of our clients. With years of experience in the industry, our team of skilled professionals excels in workforce management systems. Whether you need biometric tracking, mobile integration, or comprehensive reporting, we are here to help.',
      whyChoose: 'Streamline your workforce management with our time and attendance solutions. Our systems provide accurate biometric tracking, real-time reporting, and seamless payroll integration. We help businesses of all sizes improve efficiency and reduce administrative overhead.',
      images: [accessImage, heroImage, cctvImage]
  },
  'security-consulting': {
      id: 'security-consulting',
      icon: 'mdi:account-group',
      title: 'Security Consulting',
      description: 'Expert security assessments and consulting services to identify vulnerabilities and recommend optimal solutions.',
      image: fencingImage,
      heroImage: fencingImage,
      features: ['Risk Assessment', 'Custom Solutions', 'Implementation Planning', 'Training Programs', 'Maintenance Plans', '24/7 Support'],
      benefits: [
          'Our security experts bring years of experience',
          'We are the leading security consulting firm in the industry',
          'Our comprehensive assessments identify all vulnerabilities',
          'We provide ongoing support and training for your team'
      ],
      detailedDescription: 'We pride ourselves on delivering high-quality security consulting services tailored to meet the unique needs of our clients. With years of experience in the industry, our team of security experts excels in risk assessment and solution design. Whether you need a comprehensive security audit or custom implementation planning, we are here to help.',
      whyChoose: 'Get expert guidance with our security consulting services. Our team conducts thorough risk assessments, designs custom security solutions, and provides implementation support. We offer ongoing training and maintenance plans to ensure your security systems remain effective and up-to-date.',
      images: [fencingImage, cctvImage, accessImage]
  }
};

export const quickServices = [
  { id: 'cctv-surveillance', label: 'CCTV Surveillance', icon: 'mdi:security' },
  { id: 'electric-fencing', label: 'Electric Fencing', icon: 'mdi:electricity' },
  { id: 'access-control', label: 'Access Control', icon: 'mdi:lock' },
  { id: 'gate-automation', label: 'Gate Automation', icon: 'mdi:gate' },
  { id: 'time-attendance', label: 'Time & Attendance', icon: 'mdi:clock' },
  { id: 'security-consulting', label: 'Security Consulting', icon: 'mdi:account-group' }
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
  'Licensed security professionals',
  'State-of-the-art equipment',
  '24/7 monitoring & support',
  'Custom security solutions',
  'Preventive maintenance',
  'Emergency response team'
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
      icon: 'mdi:shield-outline',
      title: 'Project Planning',
      description: 'Strategic security design with professional implementation'
    },
    {
      icon: 'mdi:account-group-outline',
      title: 'Expert Team',
      description: 'Highly trained engineers and technicians'
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
      name: 'David Kamau',
      role: 'Chief Executive Officer',
      image: '/team-1.jpg'
    },
    {
      name: 'Grace Wanjiru',
      role: 'Lead Security Engineer',
      image: '/team-1.jpg'
    },
    {
      name: 'James Omondi',
      role: 'Installation Specialist',
      image: '/team-1.jpg'
    },
    {
      name: 'Sarah Muthoni',
      role: 'Project Manager',
      image: '/team-1.jpg'
    }
  ];