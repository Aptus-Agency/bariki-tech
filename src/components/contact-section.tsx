import { Icon } from "@iconify/react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: "mdi-light:map-marker",
      title: 'Visit Our Office',
      details: ['Nairobi, Kenya', 'Professional Security Center'],
      action: 'Get Directions'
    },
    {
      icon: "mdi-light:phone",
      title: 'Call Us Now',
      details: ['+254 700 000 000', '+254 711 000 000'],
      action: 'Call Now'
    },
    {
      icon: "mdi-light:email",
      title: 'Email Us',
      details: ['info@barikitech.com', 'support@barikitech.com'],
      action: 'Send Email'
    },
    {
      icon: "mdi-light:clock",
      title: 'Working Hours',
      details: ['Mon - Fri: 8:00 AM - 6:00 PM', '24/7 Emergency Service'],
      action: 'Emergency Call'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Icon icon="mdi-light:message-square" className="w-5 h-5" />
            <span className="font-medium">Get In Touch</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-dark mb-6">
            Ready to Secure Your
            <span className="text-gradient block">Property Today?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contact our security experts for a free consultation and quote. 
            We're here to help protect what matters most to you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="animate-slide-left">
            <h3 className="text-2xl font-bold text-dark mb-8">
              Let's Discuss Your Security Needs
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
                        {info.action} →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="card-glass p-6">
              <h4 className="font-semibold text-dark mb-3">Emergency Service</h4>
              <p className="text-muted-foreground mb-4">
                Need immediate security assistance? Our emergency response team is available 24/7.
              </p>
              <button className="btn-secondary w-full">
                Call Emergency Line
              </button>
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
                  <select className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
                    <option value="">Select a service</option>
                    <option value="cctv">CCTV Surveillance</option>
                    <option value="fencing">Electric Fencing</option>
                    <option value="access">Access Control</option>
                    <option value="automation">Gate Automation</option>
                    <option value="attendance">Time & Attendance</option>
                    <option value="consultation">Security Consultation</option>
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

                <button className="btn-primary w-full group">
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
      </div>
    </section>
  );
};

export default ContactSection;