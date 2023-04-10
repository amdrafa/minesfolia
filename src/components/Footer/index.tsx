/* eslint-disable @next/next/no-img-element */
import { FaFacebook } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { ContainerFooter, ContainerFooterLimit } from "./styles";

export function Footer() {
  return (
    <ContainerFooter>
      <ContainerFooterLimit>
        <div className="logo-and-socials">
          <img src={"https://i.imgur.com/pml4zFb.png"} alt="Logo Mines Lucrativo" />
          <FaFacebook size={35} className="icon" style={{marginLeft: "20px"}} />
          <BsYoutube size={35} className="icon" />
          <AiOutlineInstagram size={35} className="icon" />
        </div>
        <div className="links">
          <p>Termos de uso</p>
          <p>Políticas de Privacidade</p>
        </div>
      </ContainerFooterLimit>
    </ContainerFooter>
  );
}
