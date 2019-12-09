export interface project {
  title: string
  img: string
  desc: string
  link: string
}

let bart = require('./img/bart.jpg')
let mc = require('./img/mc.jpeg')
let roots = require('./img/roots.png')
let triag = require('./img/SSS screenshot.png')

export const projects: project[] = [
  {
    title: 'Nspire Triangle Solver',
    img: `${triag}`,
    desc: 'A small lua script written for the TI-Nspire series of calculators that can solve a triangle given 3 sets of information.',
    link: 'https://github.com/stphnduvall/nspire-triangle'
  },
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
  },
  {
    value: 'Twitter',
    type: '',
    link: 'https://twitter.com/stephenduvall17'
  },
  {
    value: 'Github',
    type: '',
    link: 'https://github.com/stphnduvall'
  }
]
