import React from "react";
import { FooterLink } from "../FooterLink/FooterLink";
import { FooterSocial } from "../FooterSocial/FooterSocial";
import { FooterColunaStyle } from "./FooterColunaStyle";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { BsDot } from "react-icons/bs"
import { BiCopyright } from "react-icons/bi"


function Footer() {
  return (
    <FooterColunaStyle>
          <div className="Footer">
            <div>
              <div className="Link">
                  <FooterLink link="About"/>
                  <BsDot />
                  <FooterLink link="Contract"/>
                  <BsDot />
                  <FooterLink link="Terms Of Use"/>
                  <BsDot />
                  <FooterLink link="Privacy Policy"/>
              </div>

              <div className="CopyRigth">
               <BiCopyright/>
               Your website 2022. All Rigths Reserved.
              </div>
            </div>

            <div className="Social">
                <FooterSocial><ul><BsFacebook /></ul></FooterSocial>
                <FooterSocial><ul><BsTwitter /></ul></FooterSocial>
                <FooterSocial><ul><GrInstagram /></ul></FooterSocial>
          </div>
        </div>
    </FooterColunaStyle>
  );
}

export { Footer };