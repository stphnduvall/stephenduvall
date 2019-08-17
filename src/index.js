import React from "react"
import ReactDom from "react-dom"
import App from "./App.js"
import Buttons from "./SocialLinks"
import Projects from "./Projects"

ReactDom.render(<Projects />, document.getElementById('projectContainer'))

ReactDom.render(<Buttons />, document.getElementById("socialButtons"))

ReactDom.render(<App />, document.getElementById("root"));
