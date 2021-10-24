import React from "react";
import { Component } from "react";
import { MenuItems } from "./menu-items";
import MetamaskLogin from "../metamask-login";
import * as S from "./styled";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <S.NavbarWrapper className="navbar">
        <S.LogoWrapper className="navbar-logo">
          <i className="fas fa-user-ninja" /> Cryminals
        </S.LogoWrapper>
        <S.MenuIconWrapper className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"} />
        </S.MenuIconWrapper>
        <S.ULWrapper
          className={this.state.clicked ? "nav-menu active" : "nav-menu"}
        >
          {MenuItems.map((item, index) => {
            return (
              <S.LIWrapper key={index}>
                {item.icon ? (
                  <MetamaskLogin />
                ) : (
                  <a href={item.url} className="nav-links">
                    {item.title}
                  </a>
                )}
              </S.LIWrapper>
            );
          })}
        </S.ULWrapper>
      </S.NavbarWrapper>
    );
  }
}

export default Navbar;
