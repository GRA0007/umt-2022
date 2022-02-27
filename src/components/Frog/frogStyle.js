import styled from '@emotion/styled'

export const FrogCage = styled.div`
  width: 80%;
  max-width: 20ch;
  position: relative;

  &::after {
    display: block;
    content: '';
    position: absolute;
    background: var(--background-shadow);
    inset: 0;
    bottom: 100%;
    border-radius: 50%;
    z-index: -1;
    width: 130%;
    height: 50%;
    left: -17%;
    top: 70%;
  }

  &.loading::after {
    width: 90%;
    height: 30%;
    top: 81%;
    left: 2%;
  }

  &.loading > img {
    margin-left: 20%;
  }

  &.small {
    position: relative;
    max-width: 3em;
    &::after {
      content: none;
    }

    animation: hopping 5s infinite ease-out;
  }

  @keyframes hopping {
    0%, 47%, 53%, 100% {
      bottom: 0;
    }
    50% {
      bottom: 5px;
    }
  }
`

export const FrogImage = styled.img`
  width: 100%;
  display: block;
`
