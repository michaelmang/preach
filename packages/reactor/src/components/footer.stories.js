import { tw } from "@preach/twind";

import { Button, Footer as RealFooter } from "../components";

const info = {
  title: 'Footer',
  component: RealFooter,
};

export default info;

const Template = (args) => <RealFooter {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: (
    <>
      <div className={tw`text-sm`}>{new Date().getFullYear()} © Preach</div>
      <ul className={tw`flex flex-row text-sm`}>
        <li className={tw`mr-6`}>Careers</li>
        <li className={tw`mr-6`}>Legal</li>
        <li>Help</li>
      </ul>
      <Button white>App Store</Button>
    </>
  ),
};