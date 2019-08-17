import React from "react"
import SocialBtn from "./components/socialBtns"
import { hot } from "react-hot-loader"

function Buttons() {
  let buttons = [
    {
      value: 'GroupMe',
      type: 'primary',
      link: 'https://groupme.com'
    },
    {
      value: 'Discord',
      type: 'secondary',
      link: 'https://instagram.com'
    },
    {
      value: 'Social',
      type: 'warning',
      link: 'https://google.com'
    }
  ]

  return (
    buttons.map((i) => {
      return <SocialBtn type={i.type} value={i.value} link={i.link}/>
    })
  )
}

export default hot(module)(Buttons)
