import * as React from "react";
import styled from "styled-components";

interface Props {
  message: string;
}

const _Component: React.FC<Props> = (props) => {
  return <div>{props.message}</div>;
};

const StyledComponent = styled(_Component)`
  color: blue;
`;

export const Component = StyledComponent;
