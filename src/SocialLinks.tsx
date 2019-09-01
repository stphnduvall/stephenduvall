import * as React from "react"
import SocialBtn from "./components/socialBtns"

export function Buttons() {
  let buttons = [
    {
      value: 'GroupMe',
      type: '',
      link: 'https://groupme.com/join_group/50943163/JLXTmLnN'
    },
    {
      value: 'Discord',
      type: '',
      link: 'https://discord.gg/nH7SCnQ'
    },
    {
      value: 'Instagram',
      type: '',
      link: 'https://instagram.com/stephenduvall'
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
