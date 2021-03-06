import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Carmen | En kompanjon tillämpning', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'En kompanjon tillämpning', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'En kompanjontillämpning för',
  name: 'Restaurang Carmen',
  subtitle: 'Hur många Karhu hinner du med idag då, lille vän?',
  cta: 'Aktuella öppettider?',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
