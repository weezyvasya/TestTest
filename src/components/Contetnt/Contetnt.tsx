import type { FC } from "react";
import { useState } from "react";
import { WelcomeComponent } from "../WelcomeComponent/WelcomeComponent";
import { Activities } from "../Activities/Activities";
import { Form } from "../Form/Form"; 

interface ContentProps {}

export const Content: FC<ContentProps> = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleRegisterClick = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <main>
      <WelcomeComponent />
      <Activities onRegisterClick={handleRegisterClick} />
      <Form isOpen={isFormOpen} onClose={handleCloseForm} />
    </main>
  );
};