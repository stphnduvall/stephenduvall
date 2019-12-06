export interface project {
  title: string
  img: string
  desc: string
  link: string
}

export const projects: project[] = [
  {
    title: 'Dad Joke Bot',
    img: 'bart.jpg',
    desc: 'Who doesn\'t love a good dad joke every day? That\'s exactly what this project does. Built with typescript and NodeJs',
    link: 'https://github.com/stphnduvall/groupme-bot'
  },
  {
    title: 'MCStatus',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZhssWQs2hoInBs_5gU4Y5XVmfLUDoDLIfhuoebNEkNki2A-U6BA',
    desc: 'Simple npm module that checks the status of a Minecraft server. (Will be implemented on this site soon)',
    link: 'https://github.com/stphnduvall/mcstatus'
  },
  {
    title: 'Roots Next Generation',
    img: 'https://www.rootsnextgeneration.org/roots.png',
    desc: 'A Podcast CMS for my local college ministry to record and upload podcasts',
    link: 'https://rootsnextgeneration.org'
  },
  {
    title: 'movie-dl',
    img: 'https://www.rootsnextgeneration.org/roots.png',
    desc: 'A little bit of code that searches and downloads movies from a website',
    link: '#'
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
