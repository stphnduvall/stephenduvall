import * as React from 'react'
import * as ReactDOM from "react-dom"
import "./styles.css"
import "./styles.scss"

interface Props {
  name: string
}

class App extends React.Component<Props> {
  render() {
    return <button className='btn'>Hello {this.props.name}</button>;
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App name="Jane" />, mountNode);
