import { tw } from "@preach/twind";

import { Button, Card as RealCard } from "../components";

const info = {
  title: "Card",
  component: RealCard,
};

export default info;

const Template = (args) => <RealCard {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: (
    <div className={tw`flex flex-row h-full`}>
      <div
        className={tw`flex flex-col items-center justify-center bg-color-warning text-3xl font-bold h-full w-1/2 mr-8`}
      >
        Preach
      </div>
      <div className={tw`flex flex-col justify-between w-1/3`}>
        <div className={tw`font-bold text-xl`}>Derp</div>
        <div>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </div>
        <Button>View public site</Button>
      </div>
    </div>
  ),
};
