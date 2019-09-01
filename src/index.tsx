import * as React from 'react'
import * as ReactDOM from "react-dom"
import Projects from "./Projects"
import { Buttons } from './SocialLinks';

import "./scss/styles.scss"

ReactDOM.render(<Projects />, document.getElementById('projectContainer'))
ReactDOM.render(<Buttons />, document.getElementById('socialButtons'))
