import React from 'react'

function project(title, img, desc, link) {
  this.title = title
  this.img = img
  this.desc = desc
  this.link = link
}

export default function Projects() {

  let projectArray = [new project('title1', 'src/_MG_5316-bw.jpg', 'testing description 1', 'https://google.com'),
    new project('title2', 'src/_MG_5316-bw.jpg', 'testing description 1', 'https://google.com'),
    new project('title3', 'src/_MG_5316-bw.jpg', 'testing description 1', 'https://google.com')
  ]

  return (
    projectArray.map(project => {
      return (
        <>
          <h2>{project.title}</h2>
          <img src={project.img}></img>
          <p>{project.desc}</p>
          <a href={project.link}>{project.link}</a>
        </>
      )
    })
  )
}
