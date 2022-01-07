import styled from 'styled-components';

const Board = styled.div`
  background-color: var(--secondary-color);
  border-radius: 12px;
  display: flex;
  flex-wrap: wrap;
  font-size: var(--lg);
  font-weight: bold;
  padding: 24px;
  text-transform: uppercase;
  width: auto;
`;

const LetterContainer = styled.div`
  background-color: var(--white);
  border-bottom: 4px solid var(--orange);
  border-radius: 12px;
  padding: 8px 12px;
  margin: 0 8px;

  &:hover {
    cursor: default;
  }
`;

export { Board, LetterContainer };
