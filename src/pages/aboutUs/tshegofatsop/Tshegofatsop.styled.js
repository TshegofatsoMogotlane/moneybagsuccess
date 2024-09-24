import styled from "styled-components";

export const ContainerTsp = styled.div`
  max-width: 96vw;
  margin: 0 auto;
  padding: 20px;
  display:flex;
  background: linear-gradient(135deg, ${(props) => props.theme.colors.primary}, ${(props) => props.theme.colors.cardColor});
  img{
    width:33rem;
    height:25rem;
    margin-top:2rem;
    margin-right:1rem;
    border-radius: 2rem;
    border: none;
  }
`;
export const Divider= styled.div`
    background-color:transparent;
`
export const TitleTsp = styled.h2`
  font-family: "Georgia", serif;
  text-align:center;
  font-size: 2.5em;
  color:${(props)=>props.theme.colors.text} ;
  background-color:transparent;
  margin:1rem 2rem;
`;

export const SubtitleTsp = styled.h3`
  text-align:center;
  font-family: "Arial", sans-serif; 
  font-size: 1.5em;
  background-color:transparent;
  color:${(props)=>props.theme.colors.text} ;
  margin:1rem 2rem;
`;

export const ParagraphTsp = styled.p`
  margin:1rem 2rem;
  font-family: "Arial", sans-serif;
  font-size: 1em;
  background-color:transparent;
  line-height: 1.6;
  color:${(props)=>props.theme.colors.text} ;
`;

