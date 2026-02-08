interface SectionLabelProps {
  label: string;
  centered?: boolean;
}

const SectionLabel = ({ label, centered = false }: SectionLabelProps) => {
  return (
    <div className={`flex items-center gap-3 mb-4 ${centered ? 'justify-center' : ''}`}>
      <div className="h-px w-6 bg-gradient-to-r from-transparent to-primary/50" />
      <span className="text-xs font-medium tracking-[0.3em] text-primary/70 uppercase">
        {label}
      </span>
      <div className="h-px w-6 bg-gradient-to-l from-transparent to-primary/50" />
    </div>
  );
};

export default SectionLabel;
