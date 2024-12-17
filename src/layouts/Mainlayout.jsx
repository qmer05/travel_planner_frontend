import { Link, Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import facade from "../util/apiFacade";

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
          {facade.hasUserAccess("admin", true) && (
            <NavItem to="/admin">Admin</NavItem>
          )}
          <NavItem to="/home">Home</NavItem>
          <NavItem to="/countries">Countries</NavItem>
          <NavItem to="/api-documentation">API Documentation</NavItem>
          {!facade.loggedIn() ? (
            <NavItem to="/login">Login</NavItem>
          ) : (
            <NavItem to="/login">Profile</NavItem>
          )}
        </NavMenu>
      </Header>
      <Content>
        <MainContent>
          <Outlet />
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
  width: 95%; /* Make sure it spans the full width of the viewport */
  z-index: 1000;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack items vertically on smaller screens */
    padding: 10px 20px; /* Adjust padding */
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-bottom: 10px; /* Adds spacing between the logo and navigation on small screens */
  }
`;

const LogoImg = styled.img`
  height: 60px; /* Reduce logo size for smaller screens */
  margin-right: 15px;

  @media (max-width: 768px) {
    height: 50px; /* Further adjust logo size for narrow devices */
  }
`;

const NavMenu = styled.nav`
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack navigation links vertically */
    gap: 15px; /* Adjust spacing between links */
    align-items: center; /* Center align navigation */
  }
`;

const NavItem = styled(Link)`
  color: #34d5e3;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: normal;
  padding-bottom: 2px;
  position: relative;

  &::after {
    content: "";
    display: block;
    height: 2px;
    width: 0;
    background: rgb(68, 132, 75);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 1rem; /* Slightly reduce font size */
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column; /* Adjust content layout for responsive design */
  margin-top: 100px;
  margin-bottom: 80px;
  color: #333;

  @media (max-width: 768px) {
    margin-top: 120px; /* Increase top margin for the stacked header */
  }
`;

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
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 500;
  padding: 10px; /* Add some padding for better spacing */
`;
