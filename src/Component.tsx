import * as React from "react";
import styled from "styled-components";

interface Props {
  message: string;
  className?: string;
}

const _Component: React.FC<Props> = (props) => {
  return <div className={props.className}>{props.message}</div>;
};

export const StyledComponent = styled(_Component)`
  color: blue;
  & div {
    color: red;
  }
`;
