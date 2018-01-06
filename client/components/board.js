import React, { Component } from 'react';
import styled from 'styled-components';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContextProvider } from 'react-dnd';


import TargetPane from 'client/components/target-pane';
import SourcePane from 'client/components/source-pane';

const BoardArea = styled.div`
  display: grid;
  grid-template-columns: 200px auto 200px;
  height: 100vh;
  background: pink;
`;

class Board extends Component {
  render() {
    return (
      <DragDropContextProvider backend={HTML5Backend}>
        <BoardArea>
          <TargetPane/>
          This is board area!!!
          <SourcePane/>
        </BoardArea>
      </DragDropContextProvider>
    );
  }
}

export default Board;
