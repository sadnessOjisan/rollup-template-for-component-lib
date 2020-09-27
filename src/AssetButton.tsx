import * as React from "react";
import Img from "./assets/hot.gif";

interface Props {
  message: string;
}

const _Component: React.FC<Props> = (props) => {
  return (
    <button>
      <img src={Img} alt="HOT" />
    </button>
  );
};

export const AssetButton = _Component;
