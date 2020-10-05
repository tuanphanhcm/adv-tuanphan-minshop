import Router from "next/router";
import React from "react";
import { LogoImage, LogoWrapper } from "./logo.style";

type LogoProps = {
  imageUrl: string;
  alt: string;
  onClick?: () => void;
};

const Logo: React.FC<LogoProps> = ({ imageUrl, alt, onClick }) => {
  function onLogoClick() {
    Router.push("/");
    if (onClick) {
      onClick();
    }
  }
  return (
    <LogoWrapper onClick={onLogoClick}>
      <LogoImage src={imageUrl} alt={alt} />
    </LogoWrapper>
  );
};

export default Logo;
