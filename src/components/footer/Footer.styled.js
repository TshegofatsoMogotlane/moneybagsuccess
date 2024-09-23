import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background: linear-gradient(135deg, ${(props) => props.theme.colors.primary}, ${(props) => props.theme.colors.secondary});
  padding: 2rem 1rem;
  color: ${(props) => props.theme.colors.text};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 20px;
  @media (max-width: 768px) {
    padding: 15px;

    .message {
      font-size: 14px;
    }

    .social-icons a {
      font-size: 20px; /* Smaller size for mobile */
    }
  }

  @media (max-width: 480px) {
    padding: 10px;

    .message {
      font-size: 12px;
    }

    .social-icons a {
      font-size: 18px; /* Even smaller for very small screens */
    }
  }
`;

export const SocialIcons = styled.div`
  margin: 1rem 0;
  display: flex;
  gap: 1rem;
  background:none;

  button {
    background: none;
    border: none;
    color: ${(props) => props.theme.colors.text};
    font-size: 1.5rem;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: ${(props) => props.theme.colors.accent};
    }
  }
`;

export const FooterMessage = styled.p`
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  background: none; /* Remove any background color */
`;

export const Copyright = styled.p`
  font-size: 0.8rem;
  background: none; /* Remove any background color */
`;

export const SocialMessage = styled.div`
  margin-top: 1rem;
  color: ${(props) => props.theme.colors.accent};
  background: none; /* Remove any background color */
`;


