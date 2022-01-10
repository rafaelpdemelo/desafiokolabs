
import { Modal } from "./styles";

import logo from "../../assets/Logo-B.svg";


export function LoginModal() {
    return (
        <>
            <Modal>
                <img src={logo} alt="Logo"  />
                <h1 className="textLogin">LOGIN</h1>
                <form >
                    <label>
                    EMAIL / USERNAME
                    <input type="text"   />
                    </label>
                    <p>USER NÃO ENCONTRADO</p>

                    <label id="senhaLabel">
                    SENHA
                    <input type="password"  />
                    </label>
                    <p>SENHA NÃO CONFERE</p>
                    <button type="submit" >
                    ENTRAR    
                    </button>
                </form>
                <a href="#"> DON'T HAVE AN ACCOUNT? </a>
            </Modal>
            
        </>
    );
}