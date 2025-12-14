import { Mail, ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-display gradient-text inline-block">
            Let's Create Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
        </div>

        {/* Contact content */}
        <div className="space-y-8">
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? I'd love to hear about it. Whether it's a video 
            production, brand collaboration, or creative consultation, let's bring 
            your vision to life.
          </p>

          {/* Email button */}
          <a
            href="mailto:shiekhtariq007@gmail.com"
            className="inline-flex items-center gap-4 px-10 py-5 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground text-lg font-semibold glow-effect transition-all duration-300 hover:scale-105 hover:gap-6 group"
          >
            <Mail className="w-6 h-6" />
            <span>shiekhtariq007@gmail.com</span>
            <ArrowRight className="w-5 h-5 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
          </a>

          {/* Availability note */}
          <p className="text-sm text-muted-foreground mt-8">
            <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse" />
            Currently available for new projects
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
