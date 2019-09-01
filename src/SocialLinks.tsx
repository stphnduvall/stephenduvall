import * as React from "react"
import SocialBtn from "./components/socialBtns"

export function Buttons() {
  let buttons = [
    {
      value: 'GroupMe',
      type: '',
      link: 'https://groupme.com'
    },
    {
      value: 'Discord',
      type: '',
      link: 'https://instagram.com'
    },
    {
      value: 'Social',
      type: '',
      link: 'https://google.com'
    }
  ]

  return (
    <div className="row justify-content-center">
      {buttons.map((i) => {
        return <SocialBtn type={i.type} value={i.value} link={i.link}/>
      })}
    </div>
  )
}
