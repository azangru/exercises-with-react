import React, { Component } from 'react';
import styled from 'styled-components';
import { DragSource } from 'react-dnd';

import TargetPane from 'client/components/target-pane';
import SourcePane from 'client/components/source-pane';

const StyledItem = styled.div`
  width: 100%;
  height: 100px;
  background: grey;
  margin: 10px 0;
`;

class Item extends Component {
  render() {
    const { connectDragSource } = this.props;
    return connectDragSource(
      <div>
        <StyledItem>
          {this.props.id}
        </StyledItem>
      </div>
    );
  }
}

const sourceSpec = {
  beginDrag(props) {
    return { id: props.id };
  }
}

const dragSource = DragSource('DND-TEST', sourceSpec, (connect, monitor) => ({
	connectDragSource: connect.dragSource(),
	isDragging: monitor.isDragging(),
}));

export default dragSource(Item);
