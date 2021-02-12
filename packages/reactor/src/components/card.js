import { apply, tw } from '@preach/twind';

export default function Card({ children, className, ...rest }) {
  const baseClasses = tw`${apply`
    bg-color-white
    text-color-dark
    shadow-xl
    p-6
    h-64
    ${className}
  `}`;

  return (
    <div className={baseClasses} {...rest}>
      {children}
    </div>
  );
};