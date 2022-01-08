import styled, { keyframes } from 'styled-components';

const appear = keyframes`
  0% {
      opacity: 0;
    transform: scale(0);
  }
  70% {
    opacity: 0.7;
    transform: scale(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const MistakeAnimation = styled.h1`
    
    animation: ${appear} 2s ease-in-out infinite;
`;