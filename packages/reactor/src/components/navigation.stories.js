import { tw } from "@preach/twind";

import { Button, Navigation as RealNavigation } from "../components";

const info = {
  title: 'Navigation',
  component: RealNavigation,
};

export default info;

const Template = (args) => <RealNavigation {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: (
    <>
      <div className={tw`text-2xl`}>Preach</div>
      <ul className={tw`flex flex-row`}>
        <li className={tw`mr-6`}>Dashboard</li>
        <li className={tw`mr-6`}>Sermons</li>
        <li>Analytics</li>
      </ul>
      <Button white>New Sermon</Button>
    </>
  ),
};