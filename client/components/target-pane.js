import React, { Component } from 'react';
import styled from 'styled-components';
import { DropTarget } from 'react-dnd'

const StyledTargetPane = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  height: 100%;
  background: blue;
`;

class TargetPane extends Component {
  render() {
    const { connectDropTarget } = this.props;
    return connectDropTarget(
      <div>
        <StyledTargetPane>
        This is target pane!!!
        </StyledTargetPane>
      </div>
    );
  }
}

const dropTargetSpec = {
  drop(props, monitor) {
    console.log('props', props);
    console.log(monitor.getItem());
  },
  hover(props, monitor) {
    console.log('hover');
  }
};
const collectFunction = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver()
})

const dropTarget = DropTarget('DND-TEST', dropTargetSpec, collectFunction)

export default dropTarget(TargetPane);
