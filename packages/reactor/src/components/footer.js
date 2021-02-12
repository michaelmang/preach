import { apply, tw } from '@preach/twind';

export default function Footer({ children, className, ...rest }) {
  const baseClasses = tw`${apply`
    bg-color-primary
    h-24
    px-7
    pt-32
    pb-12
    text-color-white
    flex
    flex-row
    justify-between
    items-center
    ${className}
  `}`;

  return (
    <div className={baseClasses} {...rest}>
      {children}
    </div>
  );
};