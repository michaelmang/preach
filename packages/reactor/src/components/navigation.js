import { apply, tw } from '@preach/twind';

export default function Navigation({ children, className, ...rest }) {
  const baseClasses = tw`${apply`
    bg-color-primary
    h-24
    px-7
    text-color-white
    flex
    flex-row
    justify-between
    items-center
    ${className}
  `}`;
  
  return (
    <nav className={baseClasses} {...rest}>
      {children}
    </nav>
  );
};