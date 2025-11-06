import Footer from "@/components/footer";
import Header from "@/components/header";
import { socialLinks } from "@/lib/data";
import { Icon } from "@iconify/react";
import Link from "next/link";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: "mdi-light:map-marker",
      title: 'Visit Our Office',
      // Corrected address from company profile [cite: 14, 380]
      details: ['Plot 10-12, Hancock Rd', 'Ntinda, Kampala, Uganda'],
      action: {title: 'Get Directions', href: 'https://maps.app.goo.gl/TdTxoHtoRB25t2u79'}
    },
    {
      icon: "mdi-light:phone",
      title: 'Call Us Now',
      // Corrected phone number from company profile [cite: 14, 385]
      details: ['+256 702 751 312'],
      action: {title: 'Call Now', href: 'tel:+256702751312'}
    },
    {
      icon: "mdi-light:email",
      title: 'Email Us',
      // Verified email from company profile [cite: 14, 381]
      details: ['info@barikitech.com', 'support@barikitech.com'],
      action: {title: 'Send Email', href: 'mailto:info@barikitech.com'}
    },
    {
      icon: "mdi-light:clock",
      title: 'Working Hours',
      // Corrected working hours from company profile 
      details: ['Mon - Fri: 8:00 AM - 5:00 PM', 'Sat: 9:00 AM - 1:00 PM'],
      action: {title: 'Call Emergency Line', href: 'tel:+256702751312'}
    }
  ];

  return (
    <>
      <Header />
      <section id="contact" className="bg-background">
        {/* Section Header */}
        <section className="section-padding bg-gradient-primary pt-32">
          <div className="container-custom text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Secure Your
              <span className="block">Property Today?</span>
            </h2>

            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Contact our security experts for a free consultation and quote.
              We&apos;re here to help protect what matters most to you.
            </p>
          </div>
        </section>
        <div className="container-custom section-padding">

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information & Map Suggestion */}
            <div className="animate-slide-left">
              <h3 className="text-2xl font-bold text-dark mb-8">
                Let&apos;s Discuss Your Security Needs
              </h3>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div
                    key={info.title}
                    className="card-glass p-6 hover-lift"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon icon={info.icon} className="w-6 h-6 text-white" />
                      </div>

                      <div className="flex-1">
                        <h4 className="font-semibold text-dark mb-2">{info.title}</h4>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-muted-foreground mb-1">
                            {detail}
                          </p>
                        ))}
                        <button className="text-primary hover:text-secondary transition-colors font-medium text-sm mt-2">
                          <Link href={info.action.href}>{info.action.title}</Link> →
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="flex gap-4 p-6">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-primary hover:scale-110 transition-all"
                    >
                      <Icon icon={social.icon} className="w-5 h-5 text-white" />
                    </a>
                  ))}
                </div>
              </div>

            </div>

            {/* Contact Form */}
            <div className="animate-slide-right">
              <div className="card-glass p-8">
                <h3 className="text-2xl font-bold text-dark mb-6">
                  Request a Free Quote
                </h3>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-dark mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark mb-2">
                      Service Needed
                    </label>
                    {/* Expanded services based on company profile [cite: 8, 39, 54, 156, 160] */}
                    <select className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
                      <option value="">Select a service</option>
                      <option value="cctv">CCTV Surveillance</option>
                      <option value="fencing">Electric & Razor Fencing</option>
                      <option value="access">Access Control Systems</option>
                      <option value="alarms">Intruder & Panic Alarms</option>
                      <option value="automation">Gate Automation</option>
                      <option value="intercom">Video & Audio Intercoms</option>
                      <option value="barriers">Vehicle Access Barriers</option>
                      <option value="attendance">Time & Attendance</option>
                      <option value="detectors">Metal Detectors</option>
                      <option value="consultation">Security Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark mb-2">
                      Project Details
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your security requirements..."
                    ></textarea>
                  </div>

                  <button className="btn-primary bg-gradient-primary w-full group flex items-center justify-center">
                    Send Message
                    <Icon icon="mdi-light:send" className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>

                <div className="mt-6 pt-6 border-t border-border text-center">
                  <p className="text-sm text-muted-foreground">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card-glass p-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2821.1770922920027!2d32.61803604763362!3d0.3428112953607218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb84935b5c63%3A0xa9118451a68e9b56!2sBariki%20Tech!5e0!3m2!1sen!2sug!4v1762110072213!5m2!1sen!2sug"
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: '0.75rem' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactSection;