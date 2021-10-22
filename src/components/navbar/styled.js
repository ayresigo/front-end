import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  background-image: linear-gradient(
    to top,
    #252525,
    #1d1d1d,
    #161616,
    #0d0d0d,
    #000000
  );
  height: 50px;
  display: flex;
  align-items: center;
  font-size: 1rem;
  box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 0px 0px 10px 10px;

  @media screen and (max-width: 720px) {
    .navbar {
      position: relative;
    }

    .nav-menu {
      display: flex;
      flex-direction: column;
      width: 100%;
      position: absolute;
      top: 50px;
      left: -100%;
      border-radius: 0 0 20px 20px;
      animation: growUp 300ms ease;
      transform-origin: bottom center;
      opacity: 1;
    }

    .nav-menu.active {
      background: #252525;
      left: 0;
      opacity: 1;
      z-index: 1;
      animation: growDown 300ms ease;
      transform-origin: top center;

      @keyframes growDown {
        0% {
          transform: scaleY(0);
        }
        100% {
          transform: scaleY(1);
        }
      }
    }

    .nav-links {
      text-align: center;
      padding: 2rem;
      width: 100%;
      display: table;
    }

    .nav-links:hover {
      background-color: #303030;
      border-radius: 0;
    }

    .menu-icon {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 60%);
      font-size: 1.8rem;
      cursor: pointer;
    }
  }
`;

export const LogoWrapper = styled.div`
  color: #fff;
  margin-left: 50px;
  justify-self: start;
  cursor: pointer;
  font-size: 1.5rem;
`;

export const MenuIconWrapper = styled.div`
  display: none;
  color: #fff;
  justify-self: end;
  cursor: pointer;
`;

export const ULWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 10px;
  list-style: none;
  text-align: center;
  width: 80vw;
  justify-content: end;
`;

export const LIWrapper = styled.li`
  color: white;
  text-decoration: none;

  &:hover {
    background-color: #252525;
    border-radius: 4px;
    transition: all 0.2s ease-out;
  }
`;
