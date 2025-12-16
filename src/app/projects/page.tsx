'use client'

import { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Icon } from '@iconify/react';

const officeCctv = '/project-office-cctv.jpg';
const residentialFence = '/project-residential-fence.jpg';
const corporateAccess = '/project-corporate-access.jpg';
const mallSurveillance = 'https://res.cloudinary.com/zurri-cloud/image/upload/v1762421979/bariki/ubujhsueh9778fzz9ana.jpg';
const warehouseSecurity = '/project-warehouse-security.jpg';
const schoolSecurity = '/project-school-security.jpg';

const projects = [
  {
    id: 1,
    title: 'Corporate Office CCTV Installation',
    category: 'CCTV Surveillance',
    location: 'Kampala',
    date: '2024',
    image: officeCctv,
    description: 'Comprehensive 24-camera CCTV system with 4K resolution and cloud backup for a leading financial institution.',
    services: ['CCTV Installation', 'Cloud Storage', '24/7 Monitoring']
  },
  {
    id: 2,
    title: 'Residential Electric Fencing',
    category: 'Electric Fencing',
    location: 'Kampala',
    date: '2024',
    image: residentialFence,
    description: 'High-voltage electric perimeter fencing with intelligent alarm system for luxury residential property.',
    services: ['Electric Fencing', 'Alarm Integration', 'Maintenance']
  },
  {
    id: 3,
    title: 'Corporate Access Control System',
    category: 'Access Control',
    location: 'Kampala',
    date: '2024',
    image: corporateAccess,
    description: 'Biometric access control system integrated with time attendance for 500+ employees.',
    services: ['Access Control', 'Biometric Systems', 'Time Attendance']
  },
  {
    id: 4,
    title: 'Shopping Mall Surveillance',
    category: 'CCTV Surveillance',
    location: 'Kampala',
    date: '2023',
    image: mallSurveillance,
    description: '100+ camera network with AI-powered analytics for crowd management and security monitoring.',
    services: ['CCTV Installation', 'AI Analytics', 'Remote Monitoring']
  },
  {
    id: 5,
    title: 'Warehouse Security Solution',
    category: 'Integrated Systems',
    location: 'Industrial Area',
    date: '2023',
    image: warehouseSecurity,
    description: 'Complete security solution including perimeter fencing, CCTV, and access control for logistics facility.',
    services: ['Electric Fencing', 'CCTV', 'Access Control']
  },
  {
    id: 6,
    title: 'School Campus Security',
    category: 'Integrated Systems',
    location: 'Kyanja',
    date: '2023',
    image: schoolSecurity,
    description: 'Integrated security system with visitor management and emergency alert system for educational institution.',
    services: ['CCTV Installation', 'Access Control', 'Alarm Systems']
  }
];

const categories = ['All Projects', 'CCTV Surveillance', 'Electric Fencing', 'Access Control', 'Integrated Systems'];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Projects');

  const filteredProjects = selectedCategory === 'All Projects'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative section-padding pt-32 flex items-center justify-center">
        <div className="container-custom">
          <div className="absolute inset-0">
            <img
              src={'https://res.cloudinary.com/zurri-cloud/image/upload/v1765885113/bariki/fzu1iatew3pxjg1apo1i.jpg'}
              alt="About Bariki Tech"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-dark/60"></div>
          </div>
          <div className="relative flex justify-start z-10 text-white">
            <div className="container-custom text-center">
              <h1 className="text-4xl font-bold text-white mb-4">Our Projects</h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Discover our portfolio of successful security installations across the nation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-accent/30 mt-12">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg transition-all duration-300 ${selectedCategory === category
                  ? 'bg-primary text-white shadow-elegant'
                  : 'bg-white text-foreground hover:bg-primary/10'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group card hover-scale"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <button className="btn-primary flex items-center gap-2">
                      <Icon icon="mdi:eye-outline" className="w-5 h-5" />
                      View Details
                    </button>
                  </div> */}
                  <div className="absolute top-4 right-0">
                    <span className="bg-primary text-white px-3 py-2 text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Icon icon="mdi:map-marker-outline" className="w-4 h-4 text-primary" />
                      {project.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon icon="mdi:calendar-outline" className="w-4 h-4 text-primary" />
                      {project.date}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.services.map((service) => (
                      <span
                        key={service}
                        className="px-3 py-1 bg-accent text-sm rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <Footer />
    </div>
  );
};

export default Projects;