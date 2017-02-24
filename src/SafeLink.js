import React, { Component, PropTypes } from 'react'

class SafeLink extends Component {
  static propTypes = {
    href: PropTypes.string.isRequired
  }
  render() {
    const {children, href} = this.props
    return (
      <a href={href} target='_blank' rel='noopener noreferrer'>
        {children}
      </a>
    )
  }
}

export default SafeLink
