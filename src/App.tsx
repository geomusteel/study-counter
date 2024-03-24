import "./App.css"
import { MainPage } from "./pages/MainPage";
import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyle = createGlobalStyle`
 ${reset}
`;

export default function App() {
  return (
      <div className="App">
        <GlobalStyle />
        <MainPage></MainPage>
      </div>
  );
}
