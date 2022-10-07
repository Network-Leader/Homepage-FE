import {
  FooterBox,
  FooterContents,
  FooterIconBox,
} from "../../styles/layout/footer";
import { ReactComponent as NLslogo } from "../../assets/NL_logo-white.svg";
import { Text } from "../common";

function Footer() {
  return (
    <FooterBox>
      <FooterIconBox>
        <NLslogo width="35px" />
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
