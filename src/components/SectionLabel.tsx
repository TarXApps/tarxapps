interface SectionLabelProps {
  label: string;
}

const SectionLabel = ({ label }: SectionLabelProps) => {
  return (
    <div className="flex items-center justify-center gap-4 mb-4">
      <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary/50" />
      <span className="text-xs font-medium tracking-[0.3em] text-primary/70 uppercase">
        {label}
      </span>
      <div className="h-px w-8 bg-gradient-to-l from-transparent to-primary/50" />
    </div>
  );
};

export default SectionLabel;
