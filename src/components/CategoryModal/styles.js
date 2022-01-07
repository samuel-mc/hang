import styled from 'styled-components';

const ModalContainer = styled.main`
  background-color: var(--tertiary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: absolute;
  width: 100%;
  z-index: 1;
`;

const ModalContent = styled.div`
  background-color: var(--primary-color);
  border-radius: 32px;
  padding-bottom: 24px;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  & h1 {
    background: var(--secondary-color);
    border-radius: 32px 32px 0 0;
    font-size: var(--md);
    color: var(--white);
    margin-bottom: 24px;
    padding: 16px;
  }

  @media (min-width: 320px) {
    & {
      width: 300px;
    }
  }

  @media (min-width: 768px) {
    & {
      width: 500px;
    }
  }
`;

const Button = styled.button`
  background-color: var(--white);
  border: none;
  border-radius: 17px;
  font-family: var(--font-family);
  font-size: var(--sm);
  font-weight: bold;
  margin: 8px;
  padding: 12px 24px;
  transition: all 0.8s ease-in-out;

  @media (min-width: 768px) {
    &:hover {
      background-color: var(--orange);
      color: var(--white);
      cursor: pointer;
      transition: all 0.3s ease-in-out;
    }
  }
`;

export { ModalContainer, ModalContent, Button };
