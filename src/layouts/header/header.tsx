import React from "react";
import HeaderWrapper from "./header.style";
import { RightMenu } from "./menu/right-menu/right-menu";
import { LeftMenu } from "./menu/left-menu/left-menu";

type Props = {
  className?: string;
};

const Header: React.FC<Props> = ({ className }) => {
  const LogoImage = "";
  const UserImage = "";
  return (
    <HeaderWrapper className={className} id="layout-header">
      <LeftMenu logo={LogoImage} />
      <RightMenu
        isAuthenticated={true}
        onJoin={() => console.log("JOIN")}
        onLogout={() => console.log("LOGOUT")}
        avatar={UserImage}
      />
    </HeaderWrapper>
  );
};

export default Header;
