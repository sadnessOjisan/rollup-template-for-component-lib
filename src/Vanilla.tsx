import * as React from "react";

interface Props {
  message: string;
}

const _Component: React.FC<Props> = (props) => {
  return <div>{props.message}</div>;
};

export const VanillaComponent = _Component;
