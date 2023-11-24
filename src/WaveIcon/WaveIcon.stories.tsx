import WaveIcon, { WaveIconProps } from ".";
import React from "react";

export default {
  title: "icons/WaveIcon",
  component: WaveIcon,
  argTypes: {
    icon: {
      type: { required: true },
      description:
        "Just search for an icon on remixicon.com and look for its name. The name translates to PascalCase, remixicon-react required Icon suffix we already add it ",
      control: "text",
    },
    className: {
      type: { required: false },
      description: null,
      control: { type: "text" },
    },
  },
  args: {
    icon: "AddressBook",
  },
};

export const Element = (argTypes: WaveIconProps): React.ReactNode => {
  return (
    <>
      <WaveIcon {...argTypes} />
      <WaveIcon icon="AddressBook" />
      <WaveIcon icon="AddressBook" />
    </>
  );
};
