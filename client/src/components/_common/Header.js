import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import ROUTES from "../../constants/routes";
import Logo from "../../assets/photos/logo.svg";


const HeaderWrapper = styled.header`
    padding: 20px 0 30px 0;
`;

const LogoWrapper = styled.div`
    text-align: center;
    margin-bottom: 20px;
`;

const NavWrap = styled.nav`
    text-align: center;
    border-top: 1px solid #b7b7b7;
    border-bottom: 1px solid #b7b7b7;
    
    a {
      text-transform: uppercase;
    }
`;

const MainNav = styled.ul``;

const NavItem = styled.li`
    display: inline-block;
    position: relative;
    padding: 12px 0;
`;

const NavLinkWrap = ({ className, children, to, onClick }) => (
    <Link onClick={onClick} className={className} to={to}>{children}</Link>
);


const NavLink = styled(NavLinkWrap)`
    margin: 0 25px;
    padding: 0 8px;
`;

const SubMenu = styled.ul`
    position: absolute;
    transform: translateX(-50.2%);
    background-color: #fff;
    display: ${ props => props.show ? 'block' : 'none'};
    top: 43px;
    left: 50%;
    padding: 0 10px;
    min-width: 180px;
    border: 1px solid #b7b7b7;
    border-top: none;
    z-index: 99;
`;

const SubMenuItem = styled.li`
    &:not(:last-child) {
      a {
        border-bottom: 1px solid #b7b7b7;
      }
    }
`;

const SubMenuLink = styled(NavLinkWrap)`
    padding: 14px 0;
    display: inline-block;
`;


class Header extends React.Component {

    state = {
        showSubMenu: false
    };

    eventType = /Mobi|Tablet|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    showSubMenu = () => this.setState((prevState) => ({ showSubMenu: !prevState.showSubMenu }));

    handleMouseEnter = () => !this.eventType && this.showSubMenu();

    handleMouseLeave = () => this.showSubMenu();

    handleClick = (e) => {
        if (this.eventType) {
            if (!this.state.showSubMenu) {
                e.preventDefault();
                this.showSubMenu();
            }
        }
    };

    render() {
        console.log("Header rendered!!!");
        return (
            <HeaderWrapper>
                <LogoWrapper>
                    <Link to={ROUTES.HOME}>
                        <img src={Logo} alt="Kristina Mijacevic Logo"/>
                    </Link>
                </LogoWrapper>
                <NavWrap>
                    <MainNav>
                        <NavItem>
                            <NavLink to={ROUTES.HOME}>Home</NavLink>
                        </NavItem>
                        <NavItem onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                            <NavLink onClick={this.handleClick} to={ROUTES.CATEGORIES}>Dresses</NavLink>
                            <SubMenu show={this.state.showSubMenu}>
                                <SubMenuItem>
                                    <SubMenuLink to={`${ROUTES.CATEGORY}/prva`}>Unique dresses</SubMenuLink>
                                </SubMenuItem>
                                <SubMenuItem>
                                    <SubMenuLink to={`${ROUTES.CATEGORY}/druga`}>Wedding dresses</SubMenuLink>
                                </SubMenuItem>
                                <SubMenuItem>
                                    <SubMenuLink to={`${ROUTES.CATEGORY}/treca`}>custom dresses</SubMenuLink>
                                </SubMenuItem>
                                <SubMenuItem>
                                    <SubMenuLink to={`${ROUTES.CATEGORY}/cetvrta`}>dresses on sale</SubMenuLink>
                                </SubMenuItem>
                            </SubMenu>
                        </NavItem>
                        <NavItem>
                            <NavLink to={ROUTES.CONTACT}>About Me</NavLink>
                        </NavItem>
                    </MainNav>
                </NavWrap>

            </HeaderWrapper>
        );
    }
}


export default Header;


