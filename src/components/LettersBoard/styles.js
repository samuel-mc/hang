import styled, { keyframes } from 'styled-components';

const appear = keyframes`
  0% {
      opacity: 0;
    /* transform: scale(0); */
  }
  100% {
    opacity: 1;
    /* transform: scale(1); */
  }
`;

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
  position: relative;
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

const PlayAnimation = styled.h1`
  height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.25);
    font-size: 8rem;
    position: absolute;
    text-align: center;
    text-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
                rgba(0, 0, 0, 0.12) 0px -12px 30px,
                rgba(0, 0, 0, 0.12) 0px 4px 6px,
                rgba(0, 0, 0, 0.17) 0px 12px 13px,
                rgba(0, 0, 0, 0.09) 0px -3px 5px;
    animation: ${appear} 2s ease infinite alternate;
    top: 0;
`;

export {
  Board,
  LetterContainer,
  PlayAnimation,
};
