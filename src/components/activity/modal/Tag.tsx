import styled from "@emotion/styled";
import { Tag, Text } from "../../common";

const TagContainer = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  position: relative;
`;

const Tags = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0 0 0 74px;
  .margin {
    display: flex;
    margin: 0 8px 0 0;
  }
`;

const ModalTag = ({ tags }: { tags: string[] }) => {
  return (
    <TagContainer>
      <Text size="medium" weight="medium">
        태그
      </Text>
      <Tags>
        {tags.map((tag) => (
          <div className="margin">
            <Tag color="white" backgroundColor="black" radius="min">
              <Text size="medium" weight="medium" color="white">
                {tag}
              </Text>
            </Tag>
          </div>
        ))}
      </Tags>
    </TagContainer>
  );
};

export default ModalTag;
