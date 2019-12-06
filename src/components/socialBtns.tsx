import * as React from 'react'

interface ButtonProps {
  type: string
  value:  string
  link: string
}

interface ButtonState {
  type: string
  value: string
  link: string
}

export default class SocialBtn extends React.Component<ButtonProps, ButtonState> {
  constructor(props: any) {
    super(props)

    this.state = {
      value: this.props.value,
      type: 'btn col p-0 ' + this.props.type,
      link: this.props.link
    }
  }

  render() {
    return (
      <a className={this.state.type} href={this.state.link}>{this.state.value}</a>
    )
  }
}
