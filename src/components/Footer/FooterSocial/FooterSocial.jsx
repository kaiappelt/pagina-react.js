import React from "react";
import { FooterSocialStyle } from "./FooterSocialStyle"

function FooterSocial(props) {
  return (
    <FooterSocialStyle>
          <div className="FooterSocialStyle">
             <span>{props.children}</span>  
         </div>
    </FooterSocialStyle>
  );
}

export { FooterSocial };
