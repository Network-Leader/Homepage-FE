<<<<<<< HEAD
import React from "react";
=======
>>>>>>> develop
import {
  FooterBox,
  FooterContents,
  FooterIconBox,
<<<<<<< HEAD
  FooterRightBox,
  FooterLeftBox,
} from "../../styles/layout/footer";
import { ReactComponent as NLslogo } from "../../assets/NL_logo-white.svg";
import gitIcon from "../../assets/github_icon.svg";
import mailIcon from "../../assets/mail_icon.svg";
=======
} from "../../styles/layout/footer";
import { ReactComponent as NLslogo } from "../../assets/logo/NL_logo-white.svg";
>>>>>>> develop
import { Text } from "../common";

function Footer() {
  return (
    <FooterBox>
      <FooterIconBox>
<<<<<<< HEAD
        <FooterLeftBox>
          <NLslogo width="35px" />
        </FooterLeftBox>
        <FooterRightBox>
          <a href="https://github.com/Network-Leader">
            <img src={gitIcon} alt="github" />
          </a>
          <img src={mailIcon} alt="mail" />
        </FooterRightBox>
=======
        <NLslogo width="35px" />
>>>>>>> develop
      </FooterIconBox>
      <FooterContents>
        <Text
          size="small"
          color="foot"
          children="서울특별시 노원구 공릉로"
          lineheight="28px"
        />
        <Text
          size="small"
          color="foot"
          children="© 개인정보처리방침 NL. All RIGHT RESERVED"
          lineheight="28px"
        />
      </FooterContents>
    </FooterBox>
  );
}

export default Footer;
