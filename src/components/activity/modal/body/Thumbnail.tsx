import styled from "@emotion/styled";
import { Image } from "../../../common";

const ThumbnailContainer = styled.div`
  width: 405px;
  height: 265px;
  /* position: relative;
  .layer {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    border-radius: ${({ theme }) => theme.borderRadius.default};
    background: linear-gradient(
      180deg,
      rgba(248, 248, 248, 0) -28.1%,
      rgba(64, 64, 64, 0.4) 26.59%
    );
  } */
`;

const Thumbnail = ({ thumb }: { thumb: string }) => {
  return (
    <ThumbnailContainer>
      <Image
        src={thumb}
        alt="thumbnail"
        width={405}
        height={265}
        fit="cover"
        display="inline-block"
        shape="rounded"
      />
      {/* <div className="layer" /> */}
    </ThumbnailContainer>
  );
};

export default Thumbnail;
