import { tw } from '@preach/twind';

export default function Button({ children, primary = false, ...rest }) {
  const baseClasses = tw`w-max px-4 py-2 rounded-md`;
  const primaryClasses = tw`bg-color-primary text-color-white`; 
  const secondaryClasses = tw`bg-color-white text-color-primary border-color-primary border-2`; 
  const additionalClasses = primary ? primaryClasses : secondaryClasses; 
  
  return (
    <button className={[baseClasses, additionalClasses].join(' ')} {...rest}>
      {children}
    </button>
  );
};