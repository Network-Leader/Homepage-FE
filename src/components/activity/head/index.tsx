import styled from "@emotion/styled";
import { Text } from "../../common";

const HeadContainer = styled.div`
  width: 1017px;
  height: 40px;
  display: flex;
  align-items: center;
  margin: 0 0 40px 0;
`;

const Head = () => {
  return (
    <HeadContainer>
      <Text size="h4" weight="bold">
        활동 현황
      </Text>
    </HeadContainer>
  );
};

export default Head;
