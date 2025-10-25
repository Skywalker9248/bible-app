import styled from "styled-components";
import { FaCross } from "react-icons/fa";

const MenuBar = () => {
    return (
        <NavbarContainer>
            <BrandContainer>
                <BrandText>Bible App</BrandText>
                <CrossIcon />
            </BrandContainer>
        </NavbarContainer>
    )
}

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #1e1e1e;
  border-bottom: 1px solid #333;
  padding: 15px 20px;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const BrandContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
`;

const BrandText = styled.h1`
  margin: 0;
  font-size: 1.5rem;
  color: #ffffff;
  font-weight: 600;
`;

const CrossIcon = styled(FaCross)`
  color: #ffffff;
  font-size: 1.2rem;
`;

export default MenuBar;