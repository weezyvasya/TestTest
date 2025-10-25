import type { FC } from "react";
import { Header } from "./components/Header/Header";
import { Content } from "./components/Contetnt/Contetnt";
import { Footer } from "./components/Footer/Footer";
import './App.css';

const App: FC = () => {
  return (
    <div className="app">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
//header - content - footer
// contet: WelcomComponent  -  Activities - Form
// разнести компоненты и установить Redux во второй папке TstTest, react tool kid


