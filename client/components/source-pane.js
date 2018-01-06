import React, { Component } from 'react';
import styled from 'styled-components';

import Item from 'client/components/item';

const StyledSourcePane = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
  height: 100%;
  background: green;
  padding: 10px;
`;

class SourcePane extends Component {
  render() {
    return (
      <StyledSourcePane>
        <Item id="first-item"/>
        <Item id="second-item"/>
      </StyledSourcePane>
    );
  }
}

export default SourcePane;
