import { Link } from 'react-router-dom';

export default function Button({
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...rest
}) {
  const base =
    'inline-flex items-center justify-center rounded-md font-bold focus:outline-none focus:ring-2 transition shadow-sm';
  
  const sizes =
    size === 'lg'
      ? 'px-5 py-1.5 text-sm'
      : size === 'sm'
      ? 'px-3 py-1 text-xs'
      : 'px-4 py-1.5 text-xs';

  const styles =
    variant === 'primary'
      ? 'bg-[#5B47FF] text-white hover:bg-[#4d39e0] focus:ring-brand'
      : variant === 'secondary'
      ? 'bg-white/5 border border-white/20 text-white hover:bg-white/10 focus:ring-white/30'
      : variant === 'teal'
      ? 'bg-blue-600 text-white hover:bg-blue-500 focus:ring-blue-600'
      : variant === 'white'
      ? 'bg-white text-[#0B1521] hover:bg-gray-50 focus:ring-white/50'
      : variant === 'outline'
      ? 'border border-[#5B47FF] text-[#5B47FF] hover:bg-[#5B47FF]/5'
      : 'bg-white/5 border border-white/20 text-white hover:bg-white/10';

  const commonProps = {
    className: `${base} ${sizes} ${styles} ${className}`,
    onClick,
    ...rest,
  };

  if (to) {
    return <Link to={to} {...commonProps}>{children}</Link>;
  }

  if (href) {
    return <a href={href} {...commonProps}>{children}</a>;
  }

  return (
    <button type="button" {...commonProps}>
      {children}
    </button>
  );
}
