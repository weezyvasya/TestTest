import type { FC } from "react";
import { WelcomeComponent } from "../WelcomeComponent/WelcomeComponent";
import { Activities } from "../../fitches/Activities/Activities";
import { Form } from "../Form/Form"; 
import { useModal } from "../../context/ModalContext"; 

export const Content: FC = () => {
  const { isOpen, closeModal } = useModal();

  return (
    <main>
      <WelcomeComponent /> 
      <Activities />
      <Form isOpen={isOpen} onClose={closeModal} />
    </main>
  );
};