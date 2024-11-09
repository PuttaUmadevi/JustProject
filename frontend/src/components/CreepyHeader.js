import styled from 'styled-components';

const CreepyHeading = styled.h1`
  text-align: center;
  font-size: 4pc;
  font-family: 'Bleeding Cowboys', cursive; /* Use the Exquisite Corpse font with a cursive fallback */
  color: #ba0202; /* Pick a creepy color, like red */
  /* Add any additional styling for a creepy effect */
  text-shadow :  0px 0px 10px #7ff743;

`;

const CreepyHeader = () => {
  return (
    <CreepyHeading>Haunt Explorer</CreepyHeading>
  );
};

export default CreepyHeader;
