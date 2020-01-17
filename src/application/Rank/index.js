import React from 'react';
import Loading from '../../baseUI/loading';
import styled from'styled-components';
const PullUpLoading = styled.div`
  position: absolute;
  left:0; right:0;
  bottom: 5px;
  width: 60px;
  height: 60px;
  margin: auto;
  z-index: 100;
`;

function Rank (props) {
  return (
    <div>Rank
      <PullUpLoading ><Loading></Loading></PullUpLoading>
    </div>
    
  )
}

export default React.memo(Rank);