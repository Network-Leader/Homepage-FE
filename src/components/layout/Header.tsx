import React from "react";
import { HeaderBox, HeaderContents, HeaderMenuItem, LogoBox } from "../../styles/layout/header";
import { ReactComponent as NLlogo } from '../../assets/NL_logo-white-ori.svg'
import { Nav } from "../common";
import { Link } from "react-router-dom";

type User = {name: string;}

type Props =
{
  authenticated: boolean;
  profile: User | null;
}

const menuList = [
  '로그인', '소개', '활동', '팀 블로그', '지원'
]

function Header(props: Props) {
  return (
    <HeaderBox>
      <LogoBox>
        <Link to="/">
          <NLlogo/>
        </Link>
      </LogoBox>
      <HeaderContents>
        {menuList.map((item, index) => (
          <HeaderMenuItem>
            <Nav color="white" size="large" children={item} url={item}/>
          </HeaderMenuItem>
        ))
        }
      <div>
      {props.authenticated ? props.profile?.name : <Nav color="white" size="small" children='login' url='/signin'/>}
      </div>
      </HeaderContents>
    </HeaderBox>
  )
}

export default Header