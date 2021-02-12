import { Button as RealButton } from "../components";

const info = {
  title: 'Button',
  component: RealButton,
};

export default info;

const Template = (args) => <RealButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: "Primary Button",
  primary: true,
};

export const Secondary = Template.bind({});

Secondary.args = {
  children: "Secondary Button"
};