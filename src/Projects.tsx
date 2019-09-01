import * as React from 'react'

interface project {
  title: string
  img: string
  desc: string
  link: string
}

export default function Projects() {

  let projectArray: project[] = [
    {title: 'Dad Joke Bot', img: 'http://stbartholomewingoldsby.weebly.com/uploads/3/2/0/8/32082737/9507512.jpg?250', desc: 'Who doesn\'t love a good dad joke every day? That\'s exactly what this project does. Built with typescript and NodeJs', link: 'https://github.com/stphnduvall/groupme-bot'},
    {title: 'MCStatus', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZhssWQs2hoInBs_5gU4Y5XVmfLUDoDLIfhuoebNEkNki2A-U6BA', desc: 'Simple npm module that checks the status of a Minecraft server. (Will be implemented on this site soon)', link: 'https://github.com/stphnduvall/mcstatus'},
    {title: 'Roots Next Generation', img: 'https://www.rootsnextgeneration.org/roots.png', desc: 'A Podcast CMS for my local college ministry to record and upload podcasts ', link: 'https://rootsnextgeneration.org'},
  ]

  return (
    <>
      <h2 id="projectHeading">Projects</h2>
      {
        projectArray.map(project => {
          return (
            <a className="row align-items-center" href={project.link}>
              <div className="col-4 col-md-6" id="projectImage">
                <img src={project.img} className="img-fluid" />
              </div>
              <div className="col" id="projectInfo">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
              </div>
            </a>
          )
        })
      }
    </>
  )
}
