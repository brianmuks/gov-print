import Link from "next/link";
import { styled } from "@mui/material";
import Image from "next/image";

const LinkStyled = styled(Link)(() => ({
  height: "70px",
  width: "180px",
  overflow: "hidden",
  display: "block",
}));

const Logo = () => {
  return (
    <LinkStyled href="/">
      <Image
        src="/images/logos/gov-print-logo.png"
        alt="logo"
        height={100}
        width={100}
        priority
      />
    </LinkStyled>
  );
};

export default Logo;
