import styled from 'styled-components';

export const PreviousWrapper = styled.div`
  background: var(--clr-light);
  color: var(--clr-dark);
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  transform: ${({ previous }) =>
    previous ? 'translateY(0)' : 'translateY(60%)'};
  transition: -webkit-transform 350ms ease;
  transition: transform 350ms ease;
  transition: transform 350ms ease, -webkit-transform 350ms ease;
  padding: 3rem;

  .previous-weather__title {
    text-align: ${({ previous }) => (previous ? 'left' : 'center')};
    ${({ previous }) =>
      previous ? 'animation: slideUpIn 750ms forwards;' : 'text-align: center'};
  }

  @-webkit-keyframes slideUpIn {
    0% {
      opacity: 0;
      transform: translateY(50%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideUpIn {
    0% {
      opacity: 0;
      transform: translateY(50%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Toggle = styled.button`
  position: absolute;
  background: var(--clr-light);
  left: 50%;
  top: 50px;
  width: 10rem;
  transform: translate(-50%, calc(-100% - 3rem));
  text-align: center;
  font-size: var(--fs-h2);
  line-height: 1;
  clip-path: polygon(50% 0, 0 100%, 100% 100%);
  cursor: pointer;
  color: var(--clr-gray);
  border: 0;
  font-family: inherit;

  :hover,
  :focus {
    color: var(--clr-dark);
  }

  span {
    display: block;
    transform: ${({ previous }) =>
      previous ? 'rotate(180deg) translateY(-6px)' : 'rotate(0)'};

    transition: -webkit-transform 300ms ease;
    transition: transform 300ms ease;
    transition: transform 300ms ease, -webkit-transform 300ms ease;
  }
`;

export const PreviousDays = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  justify-content: space-between;
  height: 150px;
  overflow: auto;
`;

export const PreviousDay = styled.div`
  opacity: 0;
  ${({ previous }) => previous && 'animation: slideUpIn 750ms forwards;'};
  margin: 10px 0;
  
  > * {
    margin: 0;
  }

  .previous-day__date {
    font-size: 0.9rem;
    color: var(--clr-gray);
  }

  .previous-day__more-info {
    cursor: pointer;
    border: 0;
    border-radius: 100vmax;
    background: var(--clr-dark);
    color: var(--clr-light);
    text-transform: uppercase;
    padding: 0.3em 1em;
    margin-top: 1em;
  }

  .previous-day__more-info:hover {
    background: var(--clr-gray);
  }

  :nth-child(1) {
    animation-delay: 100ms;
  }

  :nth-child(2) {
    animation-delay: 125ms;
  }

  :nth-child(3) {
    animation-delay: 150ms;
  }

  :nth-child(4) {
    animation-delay: 175ms;
  }

  :nth-child(5) {
    animation-delay: 200ms;
  }

  :nth-child(6) {
    animation-delay: 225ms;
  }

  :nth-child(7) {
    animation-delay: 250ms;
  }

  .show-weather.previous-weather .previous-day:nth-child(7) {
    animation-delay: 300ms;
  }
`;
