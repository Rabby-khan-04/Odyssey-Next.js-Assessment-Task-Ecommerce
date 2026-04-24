const OrDivider = () => {
  return (
    <div className="flex items-center gap-3 my-2 md:my-6">
      <div className="flex-1 h-px bg-border" />
      <span className="text-sm text-muted-foreground">OR</span>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
};

export default OrDivider;
