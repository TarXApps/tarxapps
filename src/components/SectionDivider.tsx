const SectionDivider = () => {
  return (
    <div className="relative py-8">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-4xl mx-auto px-4">
          <div className="h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
        </div>
      </div>
      {/* Center accent dot */}
      <div className="relative flex justify-center">
        <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
      </div>
    </div>
  );
};

export default SectionDivider;
