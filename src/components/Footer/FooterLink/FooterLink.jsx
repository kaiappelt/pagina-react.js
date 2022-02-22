import React from "react";
import { FooterLinkStyle } from "./FooterLinkStyle";
import "../../../style/app.css";

function FooterLink(props) {
  return (
    <FooterLinkStyle>
      <h5>{props.link}</h5>
    </FooterLinkStyle>
  );
}

export { FooterLink };
