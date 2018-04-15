import React from "react";
import styled from "styled-components";
import ROUTES from "../../constants/routes";
import { Link } from "react-router-dom";

import Logo from "../../assets/photos/logo-white.svg";

const FooterWrapper = styled.footer`
    background-color: #000;
    padding: 26px 0;
`;

const FooterLeft = styled.div`
    a {
        font-size: 34px;
        margin-top: 10px;
        color: #fff;
        padding-left: 30px;
        position: relative;
        vertical-align: middle;
    }
`;

const FooterRight = styled.div`
    li {
        display: inline-block;
        &:not(:last-child) {
            a {
               border-right: 1px solid #cecece;
            }
        }
    }
    
    a {
        padding: 0 30px;
        font-size: 16px;
        text-transform: uppercase;
        color: #fff;
    }
`;



const Footer = () => (
    <FooterWrapper>
        <div className="container">
            <div className="row align-items-center">
                <FooterLeft className="col-xs-12 col-md-7">
                    <Link to={ROUTES.HOME}>
                        <img src={Logo} />
                    </Link>
                    <a href="https://www.instagram.com/krisstina1/" target="_blank" rel="noopener noreferrer">
                        <span className="icon-instagram"></span>
                    </a>
                </FooterLeft>
                <FooterRight className="col-xs-12 col-md-5">
                    <ul>
                        <li>
                            <Link to={ROUTES.HOME}>Home</Link>
                        </li>
                        <li>
                            <Link to={ROUTES.CATEGORIES}>Dresses</Link>
                        </li>
                        <li>
                            <Link to={ROUTES.CONTACT}>Contact</Link>
                        </li>
                    </ul>
                </FooterRight>
            </div>
        </div>
    </FooterWrapper>
);

export default Footer;
