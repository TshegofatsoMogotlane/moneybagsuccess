import styled from "styled-components"

export const Container = styled.div`
  .cards {
    height: auto;
    width: 100vw;
    background-color: ${(props) => props.theme.colors.primary};
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 1rem;
    text-align: center;
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    .cards {
      display: none;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin-bottom: 4rem;
   
  }
  @media (max-width: 480px) {
    .cards {
      display: none;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin-bottom: 4rem;
  }
`;



