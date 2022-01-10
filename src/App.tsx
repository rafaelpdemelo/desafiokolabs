import { FooterTextComponent } from "./components/FooterText";
import { LoginModal } from "./components/LoginModal";
import { TitleComponent } from "./components/TitleComponent";
import { GlobalStyle } from "./styles/global";


export function App() {
  return (
    <>
    
      <TitleComponent/>
      <LoginModal/>
      <FooterTextComponent />
      <GlobalStyle />

    </>
  );
}


