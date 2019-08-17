import React from 'react'

export default class SocialBtn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: this.props.value,
      type: this.props.type,
      link: this.props.link
    }
  }

  render() {
    return (
      <a className={this.state.type} href={this.state.link}>{this.state.value}</a>
    )
  }
}

