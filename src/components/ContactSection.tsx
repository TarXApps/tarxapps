import { Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-display gradient-text inline-block">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
        </div>

        {/* Contact content */}
        <div className="space-y-8">
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Feel free to reach out if you'd like to connect or have any questions.
          </p>

          {/* Email button */}
          <a
            href="mailto:shiekhtariq007@gmail.com"
            className="inline-flex items-center gap-4 px-10 py-5 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground text-lg font-semibold glow-effect transition-all duration-300 hover:scale-105 group"
          >
            <Mail className="w-6 h-6" />
            <span>shiekhtariq007@gmail.com</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;