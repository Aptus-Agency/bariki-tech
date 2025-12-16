'use client'

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/header';
import Link from 'next/link';
import Footer from '@/components/footer';
import { Icon } from '@iconify/react';
import { faqs, quickServices, servicesData } from '@/lib/data';

const ServiceDetail = () => {
    const { serviceId } = useParams<{ serviceId: string }>();
    const [openFaq, setOpenFaq] = useState<number | null>(1);

    const service = serviceId ? servicesData[serviceId] : null;

    if (!service) {
        return (
            <>
                <Header />
                <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-dark mb-4">Service Not Found</h1>
                        <Link href="/" className="btn-primary">
                            Return Home
                        </Link>
                    </div>
                </div>
                <Footer />
            </>
        );
    }


    return (
        <>

            {/* Hero Section */}
            <section className="relative h-[400px] flex items-center justify-center pt-32 md:pt-32">
                <Header />
                <div className="absolute inset-0">
                    <img
                        src={service.heroImage}
                        alt={service.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-dark/70"></div>
                </div>

                <div className="container-custom relative z-10 text-center text-white">
                    <h1 className="text-5xl lg:text-6xl font-bold mb-4 animate-slide-up">
                        {service.title}
                    </h1>
                </div>
            </section>

            {/* Main Content */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-[300px,1fr] gap-8">
                        {/* Sidebar */}
                        <aside className="space-y-6">
                            {/* Quick Services */}
                            <div className="card-glass p-6">
                                <h3 className="text-xl font-bold text-dark mb-4 border-b border-border pb-3">
                                    Quick Services
                                </h3>
                                <div className="space-y-2">
                                    {quickServices.map((item) => {
                                        return (
                                            <Link
                                                key={item.id}
                                                href={`/services/${item.id}`}
                                                className={`flex items-center gap-3 p-3 rounded-lg transition-all ${item.id === serviceId
                                                    ? 'bg-primary text-primary-foreground'
                                                    : 'hover:bg-accent text-dark'
                                                    }`}
                                            >
                                                <Icon icon={item.icon} className="w-5 h-5" />
                                                <span className="font-medium">{item.label}</span>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* CTA Card */}
                            <div className="card-glass p-6 bg-gradient-to-br from-dark to-dark/90 text-white">
                                <h3 className="text-xl font-bold mb-3">
                                    Ready for Your Next Security Project?
                                </h3>
                                <p className="text-white/80 mb-6 text-sm leading-relaxed">
                                    Get expert consultation and a free quote for your security needs.
                                </p>
                                <Link href="/contact" className="btn-primary w-full flex items-center justify-center gap-2">
                                    Reach out now
                                    <Icon icon="mdi:arrow-right" className="w-4 h-4" />
                                </Link>
                            </div>
                        </aside>

                        {/* Main Content */}
                        <div className="space-y-12">
                            {/* Service Image and Description */}
                            <div className="space-y-6">
                                {/* <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-[400px] object-cover rounded-2xl"
                                /> */}

                                <div>
                                    <iframe 
                                        width="1000" 
                                        height="500" 
                                        src={service.video} 
                                        title="YouTube video player" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                        referrerPolicy="strict-origin-when-cross-origin" 
                                        allowFullScreen>

                                        </iframe>
                                </div>

                                <div>
                                    <h2 className="text-3xl font-bold text-dark mb-4 flex items-center gap-3">
                                        {service.title}
                                    </h2>
                                    <p className="text-muted-foreground leading-relaxed text-lg">
                                        {service.detailedDescription}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-muted-foreground leading-relaxed">
                                        With years of industry experience, our team handles every aspect of the security process with professionalism and efficiency. We prioritize open communication, timely delivery, and quality workmanship to exceed your expectations. Trust us to provide innovative solutions that bring your security needs to life with unmatched craftsmanship.
                                    </p>
                                </div>
                            </div>

                            {/* Building Excellence Section */}
                            <div>
                                <h3 className="text-2xl font-bold text-dark mb-6">
                                    Securing with Unmatched Excellence
                                </h3>
                                <p className="text-muted-foreground mb-8 leading-relaxed">
                                    {service.whyChoose}
                                </p>

                                {/* Image Grid */}
                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    {service.images.map((img, index) => (
                                        <img
                                            key={index}
                                            src={img}
                                            alt={`${service.title} ${index + 1}`}
                                            className="w-full h-[300px] object-cover rounded-xl"
                                        />
                                    ))}
                                </div>

                                {/* Benefits List */}
                                <div className="space-y-3">
                                    {service.benefits.map((benefit, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <div className="w-2 h-2 rounded-full bg-primary"></div>
                                            </div>
                                            <p className="text-muted-foreground">{benefit}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* FAQ Section */}
                            <div>
                                <h3 className="text-2xl font-bold text-dark mb-6">
                                    Commonly Asked Questions
                                </h3>
                                <div className="space-y-4">
                                    {faqs.map((faq, index) => (
                                        <div key={index} className="card-glass overflow-hidden">
                                            <button
                                                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                                className={`w-full flex items-center justify-between p-6 text-left transition-colors ${openFaq === index ? 'bg-dark text-white' : 'hover:bg-accent'
                                                    }`}
                                            >
                                                <span className="font-semibold">{faq.question}</span>
                                                <Icon icon="mdi:chevron-down"
                                                    className={`w-5 h-5 transition-transform ${openFaq === index ? 'rotate-180' : ''
                                                        }`}
                                                />
                                            </button>
                                            {openFaq === index && (
                                                <div className="p-6 pt-0 animate-slide-up">
                                                    <p className="text-muted-foreground leading-relaxed">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-dark text-white py-20">
                <div className="container-custom">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div>
                            <h2 className="text-4xl font-bold mb-4">
                                Your Dream Project Awaits — Get Started Today!
                            </h2>
                        </div>
                        <Link href="/contact" className="btn-primary flex items-center gap-2 bg-primary hover:bg-primary/90">
                            <Icon icon="mdi:phone" className="w-5 h-5" />
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default ServiceDetail;