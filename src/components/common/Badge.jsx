function Badge({ children, icon: Icon }) {
  return (
    <span className="inline-flex items-center gap-2 bg-primary/10 dark:bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-medium">
      {Icon && <Icon size={14} />}
      {children}
    </span>
  );
}

export default Badge;