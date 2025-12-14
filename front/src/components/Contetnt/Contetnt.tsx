import type { FC } from "react";
import { useState } from "react";
import { WelcomeComponent } from "../WelcomeComponent/WelcomeComponent";
import { Activities } from "../../fitches/Activities/Activities";
import { Form } from "../Form/Form"; 



export const Content: FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleRegisterClick = () => {   // ?
    setIsFormOpen(true);
    console.log('Test fn')
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