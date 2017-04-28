import React, { Component } from 'react'
import SplitPane from 'react-split-pane'

import './resizer.css'

class SplitContainer extends Component {
  render() {
    const { children } = this.props
    return (
      <SplitPane split='vertical' defaultSize={320}
        onDragFinished={() => {
          let count = children.length
          for (let i =0; i < count; i++) {
            let child = children[i]
            if (child.type.prototype.hasOwnProperty('updateSize')) {
              child.type.prototype.updateSize.call(child.type)
            }
          }
        }}>
        {children}
      </SplitPane>
    )
  }
}

export default SplitContainer
