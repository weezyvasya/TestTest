import type { FC } from "react";
import { WelcomeComponent } from "../WelcomeComponent/WelcomeComponent";
import { Activities } from "../../features/Activities/Activities";
import { Form } from "../../features/Form/Form"; 
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