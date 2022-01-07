import styled from 'styled-components';

const Board = styled.div`
  background-color: var(--secondary-color);
  border-radius: 12px;
  display: flex;
  flex-wrap: wrap;
  font-weight: bold;
  justify-content: center;
  margin: 12px;
  padding: 24px;
  width: auto;
`;

const LetterContainer = styled.button`
  background-color: var(--tertiary-color);
  border: none;
  border-bottom: 4px solid var(--white);
  border-radius: 12px;
  color: var(--white);
  font-size: var(--md);
  margin: 8px;
  padding: 8px 12px;
  text-transform: uppercase;
  transition: all 0.8s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: var(--primary-color);
    transition: all 0.3s ease-in-out;
  }
`;

export { Board, LetterContainer };
