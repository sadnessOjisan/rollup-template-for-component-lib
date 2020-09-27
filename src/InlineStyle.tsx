import * as React from "react";

interface Props {
  message: string;
}

const _Component: React.FC<Props> = (props) => {
  return <div style={{ color: "red" }}>{props.message}</div>;
};

export const InlineStyle = _Component;
