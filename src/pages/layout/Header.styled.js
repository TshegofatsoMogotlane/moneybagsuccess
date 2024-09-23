import styled from "styled-components";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { BsSearchHeartFill } from "react-icons/bs";

export const HeaderWrapper = styled.div`
  height: 10vh;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;

  .logo {
    height: 6rem;
    width: 6rem;
    background-color: ${({ theme }) => theme.colors.secondary};
    border: 0.3rem solid ${({ theme }) => theme.colors.primary}; 
    border-radius: 50%; 
    object-fit: contain;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: scale(1.2);
      filter: brightness(1.2);
    }
  }

  .header_center {
    display: flex;
    align-items: center;
    flex: 1;
    max-width: 20%;
    padding: 1.2rem;
    height: 5vh;
    border: 0.1rem solid lightgray;
    border-radius: 50rem;
    background-color: ${({ theme }) => theme.colors.brics_empire};
  }

  .header_center > input {
    flex: 1;
    height: 100%; 
    border: none;
    padding: 0.8rem;
    outline-width: 0;
    font-size: 1rem;
    background-color: ${({ theme }) => theme.colors.brics_empire}; 
  }

  .header_center > svg {
    font-size: 1.5rem;
    cursor: pointer;
    margin-left: 1rem;
    background-color: ${({ theme }) => theme.colors.brics_empire};
  }

  @media (max-width: 768px) {
    padding: 1rem; 
    .logo {
      height: 4rem;
      width: 4rem;
    }

    .header_center {
      max-width: 80%;
      padding: 1rem;
    }

    .header_center > input {
      font-size: 0.9rem;
    }

    .header_center > svg {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 480px) {
    padding: 0.8rem;

    .logo {
      height: 3rem;
      width: 3rem;
    }

    .header_center {
      max-width: 90%;
      padding: 0.8rem;
    }

    .header_center > input {
      font-size: 0.8rem;
    }

    .header_center > svg {
      font-size: 1rem;
    }
  }
`;

export const LightModeIcon = styled(MdOutlineLightMode)`
  color: ${(props) => props.theme.colors.text};
  font-size: 2rem;
  cursor: pointer;
`;

export const DarkModeIcon = styled(MdDarkMode)`
  color: ${(props) => props.theme.colors.text};
  font-size: 2rem;
  cursor: pointer;
`;

export const SearchIcon = styled(BsSearchHeartFill)`
  color: ${(props) => props.theme.colors.default};
  font-size: 1.5rem;
  cursor: pointer;
`;


