import styled from "@emotion/styled";
import { Text } from "../../../common";

const DescriptionContainer = styled.div`
  width: 470px;
  height: 265px;
  display: flex;
  justify-content: space-between;
  position: relative;
`;
const Paragraph = styled.p`
  display: block;
  width: 370px;
  height: 100%;
  position: absolute;
  top: -5px;
  right: 0;
  font-size: ${({ theme }) => theme.font.size.medium}px;
  line-height: 191.2%;
`;

const Description = ({ description }: { description: string }) => {
  return (
    <DescriptionContainer>
      <Text size="medium" weight="medium">
        활동 설명
      </Text>
      <Paragraph>{description}</Paragraph>
    </DescriptionContainer>
  );
};

export default Description;
