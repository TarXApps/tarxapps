import { Award, Trophy, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import SectionLabel from "./SectionLabel";

const useInView = (options = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    }, { threshold: 0.1, ...options });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isInView };
};

type AwardType = "valuable" | "promising" | "best" | "appreciation" | "staff";

interface AwardItem {
  title: string;
  issuer: string;
  date: string;
  description: string;
  type: AwardType;
}

const awards: AwardItem[] = [
  { title: "Valuable Staff Award", issuer: "Educational Technology Centre", date: "Jun 2018", description: "For valuable contributions and consistent performance that contributed to the success of the center.", type: "valuable" },
  { title: "Certificate of Appreciation", issuer: "Ibra College of Technology", date: "Apr 2018", description: "For contributions as organizing committee member for Staff Cultural Night 2018.", type: "appreciation" },
  { title: "Certificate of Appreciation", issuer: "Ibra College of Technology", date: "Mar 2018", description: "For support in the Smart Education & Technology Symposium (SETS2018).", type: "appreciation" },
  { title: "Certificate of Appreciation", issuer: "Ibra Toastmasters Club", date: "Jan 2018", description: "For role as graphic designer for a speech contest.", type: "appreciation" },
  { title: "Valuable Staff Award", issuer: "Educational Technology Centre", date: "Jun 2017", description: "For valuable contributions and consistent performance that contributed to the success of the center.", type: "valuable" },
  { title: "Certificate of Appreciation", issuer: "Department of IT", date: "Mar 2017", description: "For support in Fiesta Mathematica 2017 competition.", type: "appreciation" },
  { title: "Certificate of Appreciation", issuer: "Ibra College of Technology", date: "Nov 2016", description: "For participation as an expert in Oman Skills International Competition.", type: "appreciation" },
  { title: "Valuable Staff Award", issuer: "Educational Technology Centre", date: "Jun 2016", description: "For valuable contributions and consistent performance that contributed to the success of the center.", type: "valuable" },
  { title: "Best Personality Award (HOTSTAR)", issuer: "Educational Technology Centre", date: "Jun 2015", description: "Role model for Academic Year 2015-2016 in promoting professional values and ethics.", type: "best" },
  { title: "Valuable Staff Award", issuer: "Educational Technology Centre", date: "Jun 2015", description: "For valuable contributions and consistent performance that contributed to the success of the center.", type: "valuable" },
  { title: "Certificate of Appreciation", issuer: "Ibra College of Technology", date: "Jan 2015", description: "For cooperation during Sports Day 2015.", type: "appreciation" },
  { title: "Certificate of Appreciation", issuer: "Ibra College of Technology", date: "Dec 2014", description: "For outstanding support for Graduation Ceremony 2014.", type: "appreciation" },
  { title: "Valuable Staff Award", issuer: "Educational Technology Centre", date: "Jun 2014", description: "For valuable contributions and consistent performance that contributed to the success of the center.", type: "valuable" },
  { title: "Promising Staff Award", issuer: "Educational Technology Centre", date: "Jul 2013", description: "For commendable performance that contributed to the success of the center.", type: "promising" },
  { title: "Promising Staff Award", issuer: "Educational Technology Centre", date: "Jun 2012", description: "For commendable performance that contributed to the success of the center.", type: "promising" },
  { title: "Certificate of Appreciation", issuer: "Ibra College of Technology", date: "Mar 2012", description: "For tireless effort as organizer team member in OSOM 2012.", type: "appreciation" },
  { title: "Certificate of Appreciation", issuer: "Department of Business Studies", date: "Jul 2011", description: "For valuable services as facilitator during Academic Year 2010-2011.", type: "appreciation" },
  { title: "Certificate of Appreciation", issuer: "Ibra College of Technology", date: "Jul 2010", description: "For contributions to college events during Academic Year 2009-2010.", type: "appreciation" },
  { title: "Certificate of Appreciation", issuer: "Department of Business Studies", date: "Dec 2009", description: "For services as facilitator in Computer Skills workshop.", type: "appreciation" },
  { title: "Certificate of Appreciation", issuer: "Ibra College of Technology", date: "Jul 2009", description: "For contribution in Quality Assurance Self Assessment Group.", type: "appreciation" },
  { title: "Certificate of Appreciation", issuer: "Ibra College of Technology", date: "Mar 2009", description: "For facilitating Advanced Photoshop Training.", type: "appreciation" },
  { title: "Certificate of Appreciation", issuer: "Ibra College of Technology", date: "Feb 2009", description: "For training candidates for Oman Skills Competition in Graphics Design.", type: "appreciation" },
  { title: "Certificate of Appreciation", issuer: "Ibra College of Technology", date: "Feb 2009", description: "For Presentation in Career Fair 2009.", type: "appreciation" },
  { title: "Staff of the Month", issuer: "Ministry of Manpower, Sultanate of Oman", date: "Sep 2008", description: "For efforts, commitment, and execution of duties which positively affected performance.", type: "staff" },
  { title: "Letter of Appreciation", issuer: "Aeroman Aviation", date: "Jan 2008", description: "For extended hard work and constant daily support in establishing Aeroman Aviation.", type: "appreciation" },
];

const getAwardIcon = (type: AwardType) => {
  switch (type) {
    case "valuable":
    case "promising":
      return Award;
    case "best":
    case "staff":
      return Trophy;
    default:
      return Star;
  }
};

const getAwardColor = (type: AwardType) => {
  switch (type) {
    case "valuable":
      return "text-gold";
    case "best":
    case "staff":
      return "text-accent";
    case "promising":
      return "text-secondary";
    default:
      return "text-primary";
  }
};

const HonorsSection = () => {
  const { ref, isInView } = useInView();

  // Group awards by type for summary
  const valuableCount = awards.filter(a => a.type === "valuable").length;
  const promisingCount = awards.filter(a => a.type === "promising").length;
  const specialCount = awards.filter(a => a.type === "best" || a.type === "staff").length;
  const appreciationCount = awards.filter(a => a.type === "appreciation").length;

  return (
    <section id="honors" className="py-28 md:py-32 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <SectionLabel label="Honors" />
          <h2 className="gradient-text inline-block mb-6">Honors & Awards</h2>
          <div className="flex items-center justify-center gap-2">
            <div className="h-1 w-16 bg-gradient-to-r from-transparent to-primary rounded-full" />
            <div className="h-2 w-2 rounded-full bg-secondary" />
            <div className="h-1 w-16 bg-gradient-to-l from-transparent to-primary rounded-full" />
          </div>
        </div>

        {/* Summary stats */}
        <div 
          ref={ref}
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center p-4 rounded-xl bg-card/50 border border-border/50">
            <div className="text-3xl font-bold font-display text-gold">{valuableCount}</div>
            <p className="text-caption">Valuable Staff Awards</p>
          </div>
          <div className="text-center p-4 rounded-xl bg-card/50 border border-border/50">
            <div className="text-3xl font-bold font-display text-secondary">{promisingCount}</div>
            <p className="text-caption">Promising Staff Awards</p>
          </div>
          <div className="text-center p-4 rounded-xl bg-card/50 border border-border/50">
            <div className="text-3xl font-bold font-display text-accent">{specialCount}</div>
            <p className="text-caption">Special Recognition</p>
          </div>
          <div className="text-center p-4 rounded-xl bg-card/50 border border-border/50">
            <div className="text-3xl font-bold font-display text-primary">{appreciationCount}</div>
            <p className="text-caption">Certificates</p>
          </div>
        </div>

        {/* Awards grid - compact */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {awards.map((award, index) => (
            <AwardCard key={`${award.title}-${award.date}`} award={award} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const AwardCard = ({ award, index }: { award: AwardItem; index: number }) => {
  const { ref, isInView } = useInView();
  const Icon = getAwardIcon(award.type);
  const iconColor = getAwardColor(award.type);

  return (
    <div
      ref={ref}
      className={`group p-3 rounded-lg bg-card/40 border border-border/40 hover:border-primary/50 transition-all duration-500 hover:bg-card/70 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{
        transitionDelay: `${Math.min(index * 30, 300)}ms`
      }}
    >
      <div className="flex items-start gap-2">
        <Icon className={`w-4 h-4 ${iconColor} flex-shrink-0 mt-0.5`} />
        <div className="min-w-0 flex-1">
          <h6 className="text-foreground leading-tight truncate">{award.title}</h6>
          <p className="text-caption mt-0.5">
            {award.issuer} · {award.date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HonorsSection;
