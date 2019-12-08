export interface project {
  title: string
  img: string
  desc: string
  link: string
}

let bart = require('./img/bart.jpg')
let mc = require('./img/mc.jpeg')
let roots = require('./img/roots.png')

export const projects: project[] = [
  {
    title: 'Dad Joke Bot',
    img: `${bart}`,
    desc: 'Who doesn\'t love a good dad joke every day? That\'s exactly what this project does. Built with typescript and NodeJs',
    link: 'https://github.com/stphnduvall/groupme-bot'
  },
  {
    title: 'MCStatus',
    img: `${mc}`,
    desc: 'Simple npm module that checks the status of a Minecraft server. (Will be implemented on this site soon)',
    link: 'https://github.com/stphnduvall/mcstatus'
  },
  {
    title: 'Roots Next Generation',
    img: `${roots}`,
    desc: 'A Podcast CMS for my local college ministry to record and upload podcasts',
    link: 'https://rootsnextgeneration.org'
  },
]

export let buttons = [
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
