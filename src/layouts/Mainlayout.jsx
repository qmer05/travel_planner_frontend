import {Link, Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";

// Header Component
const Header = styled.header`
  background-color: #0f3d41;
  color: white;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  width: 95%;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  height: 80px;
  margin-right: 15px;
`;

/*
const LogoText = styled.h1`
  font-size: 1.8rem;
  color: white;
  margin: 0;
`;
*/

const NavMenu = styled.nav`
  display: flex;
  gap: 30px;
`;

const NavItem = styled(Link)`
  color: #34d5e3;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: normal; /* Set a consistent font weight */
  padding-bottom: 2px; /* Optional: Adds spacing for underline effect */
  position: relative; /* Allows custom hover effects */

  &::after {
    content: "";
    display: block;
    height: 2px;
    width: 0;
    background: #342056; /* Color for underline */
    transition: width 0.3s ease; /* Smooth underline animation */
  }

  &:hover::after {
    width: 100%; /* Expand the underline on hover */
  }
`;

// Content Layout
const Content = styled.div`
  display: flex;
  margin-top: 100px; /* Adjust this value based on the height of your header */
  margin-bottom: 80px; /* Adjust for footer height */
  color: #333;
`;

/*
const LeftMenu = styled.div`
  width: 200px;
  background-color: #f4f4f4;
  padding: 20px;
`;

const LeftMenuItem = styled(Link)`
  display: block;
  color: #333;
  text-decoration: none;
  margin-bottom: 10px;
  &:hover {
    text-decoration: underline;
  }
`;
*/

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #fafafa;
  border-left: 2px solid #ccc;
  overflow-y: auto; /* Allows scrolling inside the main content if needed */
`;

/*
const ErrorBanner = styled.div`
  background-color: #f8d7da;
  color: #721c24;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
`;
*/

const Footer = styled.footer`
  background-color: lightgrey;
  color: grey;
  padding: 20px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1000; /* Ensures the footer appears above other content if overlapping */
`;

function MainLayout() {
  const navigate = useNavigate();

  return (
    <>
      <Header>
        <Logo onClick={() => navigate("/home")}>
          <LogoImg src="/logo.png" alt="Logo" />
          {/* <LogoText>Styled App</LogoText> */}
        </Logo>
        <NavMenu>
          <NavItem to="/home">Home</NavItem>
          <NavItem to="/countries">Countries</NavItem>
          <NavItem to="/login">Login</NavItem>
        </NavMenu>
      </Header>
      <Content>
        <MainContent>
          <Outlet/>
        </MainContent>
      </Content>

      <Footer>
        <p>
          &copy; 2024 Travel Planner. All rights reserved. |{" "}
          <a href="/privacy-policy">Privacy Policy</a> |{" "}
          <a href="/terms-of-service">Terms of Service</a>
        </p>
      </Footer>
    </>
  );
}

export default MainLayout;
