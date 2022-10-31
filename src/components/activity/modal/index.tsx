import { useParams } from "react-router-dom";
import {
  ModalContainer,
  ModalTemplate,
} from "../../../styles/activity/modal/template";
import AddActivityModal from "./add";
import RegisterActivityModal from "./register";

export interface ModalProps {
  title: string | null;
  description: string | null;
  leader: string | null;
  generation: number | string | null;
  limit: number | string | null;
  registry: number | null;
  classification: "클래스" | "스터디" | "특강";
  deadline: Date | null;
  tag: string[] | null;
  thumbnail: string | null;
}

const Template = () => {
  const { contentId } = useParams();
  return (
    <ModalContainer>
      <ModalTemplate>
        {contentId ? <RegisterActivityModal /> : <AddActivityModal />}
      </ModalTemplate>
    </ModalContainer>
  );
};

export default Template;
