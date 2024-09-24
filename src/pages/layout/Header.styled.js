import styled from "styled-components";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { BsSearchHeartFill } from "react-icons/bs";

export const HeaderWrapper = styled.div`
  .on-mobile{
    display:none;
  }
  display: flex;
  height:10.2vw;

  .on-web {
    height: 10vh;
    width: 90vw;
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    padding: 1.5rem;
    .logo {
      margin-left:3rem;
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
      padding-top:2rem;
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
      width: 100%; 
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
  }

    

  @media (max-width: 768px) {
    
    .on-web{
      display:none;
    }
    .on-mobile{
      display:flex;
      width: 90vw;
      background-color: transparent;
      display: flex;
      justify-content: space-between;
      padding: 1.5rem;
      .logo {
        margin-left:3rem;
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

    }
    
  }
  @media (max-width: 480px) {
    .on-web{
      display:none;
    }
    .on-mobile{
      display:flex;
      margin-bottom:4rem;
      .logo {
      height: 4rem;
      width: 4rem;
      margin-bottom:4rem;
    }

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



