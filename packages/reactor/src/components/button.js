import { apply, tw } from '@preach/twind';

export default function Button({ children, className, primary = false, white = false, ...rest }) {
  const baseClasses = tw`${apply`w-max px-8 py-2 rounded-full ${className}`}`;
  const primaryClasses = tw`bg-color-primary text-color-white`; 
  const secondaryClasses = tw`bg-transparent text-color-${white ? 'white' : 'primary'} border-color-${white ? 'white' : 'primary'} border-2`; 
  const additionalClasses = primary ? primaryClasses : secondaryClasses; 
  
  return (
    <button className={[baseClasses, additionalClasses].join(' ')} {...rest}>
      {children}
    </button>
  );
};