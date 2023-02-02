import React from "react";
import styled from 'styled-components';

const COLORS = {

  "primary":"green",
  "danger":"red",

} 
const Heading = styled.h1`
color :${(props)=>COLORS[(props.color)]};
`;




function Styled_compontent() {
  return (
    <div>
  <Heading color='primary'>Its a styled component</Heading>
    
    </div>
  )
}



export default Styled_compontent

