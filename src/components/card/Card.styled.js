import styled from "styled-components";

export const CardWrapper = styled.div`
  margin: 10px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 6px 18px -9px rgba(0, 0, 0, 0.75);
  transition: transform 100ms ease-in;
  cursor: pointer;
  width: 300px;
  &:hover {
    transform: scale(1.07);
  }
  .card {
    object-fit: fill;
    width: 100%;
  }
  .card_info {
    background-color:${(props)=>props.theme.colors.cardColor};
    margin-top: -9px;
    border-radius: 10px;
    padding: 20px;
    border: 1;
    color:${(props)=>props.theme.colors.text}
  }
  .card_info > h2 {
    background-color:${(props)=>props.theme.colors.cardColor};
    font-size: 18px;
    font-weight: 600;
  }
  .card_info > h3 {
    background-color:${(props)=>props.theme.colors.cardColor};
    font-size: 16px;
    font-weight: 450;
  }
  .card_info > h4 {
    background-color:${(props)=>props.theme.colors.cardColor};
    font-size: 14px;
    font-weight: 300;
    margin: 8px 0 8px 0;
  }
  @media (max-width: 768px) {
    .card_info > h2 {
      font-size: 16px;
    }

    .card_info > h4 {
      font-size: 12px;
    }
  }

  @media (max-width: 480px) {
    margin: 5px;
    .card_info {
      padding: 10px;
    }

    .card_info > h2 {
      font-size: 14px;
    }

    .card_info > h4 {
      font-size: 10px;
    }
  }
`;

