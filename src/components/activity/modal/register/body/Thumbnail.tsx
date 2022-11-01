import { Image } from "../../../../common";
import defaultModalImg from "../../../../../assets/activity/defaultImg/activity_modal_default_img.png";

const Thumbnail = ({ thumb }: { thumb: string | null }) => {
  return (
    <Image
      src={thumb ? thumb : defaultModalImg}
      alt="thumbnail"
      width="405px"
      height="265px"
      fit="cover"
      display="inline-block"
      shape="rounded"
    />
  );
};

export default Thumbnail;
