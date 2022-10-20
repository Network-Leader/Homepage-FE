import {
  HeaderBox,
  HeaderContents,
  HeaderMenuItem,
  LogoBox,
} from "../../styles/layout/header";
import { ReactComponent as NLlogo } from "../../assets/logo/NL_LOGO.svg";
import { Nav } from "../common";
import { Link } from "react-router-dom";

type User = { name: string };

type Props = {
  authenticated: boolean;
  profile: User | null;
};

const menuList = [
  {
    name: "소개",
    link: "/",
  },
  {
    name: "활동",
    link: "activity",
  },
  {
    name: "팀 블로그",
    link: "/",
  },
  {
    name: "지원",
    link: "/",
  },
];

function Header(props: Props) {
  return (
    <HeaderBox>
      <LogoBox>
        <Link to="/">
          <NLlogo style={{ width: "211px", height: "105px" }} />
        </Link>
      </LogoBox>
      <HeaderContents>
        {menuList.map(({ name, link }) => (
          <HeaderMenuItem key={name ?? link}>
            <Nav color="white" size="large" url={link}>
              {name}
            </Nav>
          </HeaderMenuItem>
        ))}
        <div>
          {props.authenticated ? (
            props.profile?.name
          ) : (
            <HeaderMenuItem>
              <Nav color="white" size="large" url="member/signin">
                로그인
              </Nav>
            </HeaderMenuItem>
          )}
        </div>
      </HeaderContents>
    </HeaderBox>
  );
}

export default Header;
