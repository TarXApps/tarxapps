interface SectionLabelProps {
  label: string;
}

const SectionLabel = ({ label }: SectionLabelProps) => {
  return (
    <div className="flex items-center justify-center gap-3 mb-6">
      <div className="h-px w-12 bg-gradient-to-r from-transparent via-secondary/60 to-secondary" />
      <span className="text-xs font-semibold tracking-[0.35em] text-secondary uppercase px-2">
        {label}
      </span>
      <div className="h-px w-12 bg-gradient-to-l from-transparent via-secondary/60 to-secondary" />
    </div>
  );
};

export default SectionLabel;
