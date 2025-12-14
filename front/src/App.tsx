import React from "react";
import { Header } from "./components/Header/Header";
import { Content } from "./components/Contetnt/Contetnt";
import { Footer } from "./components/Footer/Footer";
import { ModalProvider } from "./context/ModalContext";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ModalProvider>
          <div className="app">
            <Header />
            <Content />
            <Footer />
          </div>
        </ModalProvider>
      </Provider>
    );
  }
}

export default App;
//header - content - footer
// contet: WelcomComponent  -  Activities - Form
// разнести компоненты и установить Redux во второй папке TstTest, react tool kid
//каждый event это отдельный компонент
//
