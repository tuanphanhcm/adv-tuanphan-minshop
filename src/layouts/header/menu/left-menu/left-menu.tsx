import React from "react";
import Logo from "layouts/logo/logo";
import { LeftMenuWrapper } from "./left-menu.style";

type Props = {
  logo: string;
};

export const LeftMenu: React.FC<Props> = ({ logo }) => {
  return (
    <LeftMenuWrapper>
      <Logo imageUrl={logo} alt="SCCG" />
    </LeftMenuWrapper>
  );
};
