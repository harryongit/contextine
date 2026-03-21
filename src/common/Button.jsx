export default function Button({
  href = '#',
  variant = 'primary',
  size = 'md',
  className = '',
  children,
}) {
  const base =
    'inline-flex items-center justify-center rounded-lg font-semibold focus:outline-none focus:ring-2 transition';
  const sizes =
    size === 'lg'
      ? 'px-6 py-2 text-base'
      : size === 'sm'
      ? 'px-4 py-2 text-sm'
      : 'px-5 py-3 text-sm';
  const styles =
    variant === 'primary'
      ? 'bg-gradient-to-r from-brand to-accent text-white shadow hover:from-brand hover:to-accent focus:ring-brand'
      : variant === 'secondary'
      ? 'border bg-white/10 border-white/30 text-white hover:bg-white/20 focus:ring-white/30'
      : variant === 'teal'
      ? 'bg-blue-500 text-white hover:bg-blue-400 focus:ring-blue-500'
      : variant === 'white'
      ? 'bg-white text-gray-900 hover:bg-gray-100 focus:ring-white/50'
      : variant === 'orange'
      ? 'bg-orange-500 text-white hover:bg-orange-400 focus:ring-orange-500'
      : 'border border-white/30 text-white hover:bg-white/10 focus:ring-white/30';
  return (
    <a href={href} className={`${base} ${sizes} ${styles} ${className}`}>
      {children}
    </a>
  );
}
