import self from '../img/self.png';
import chatgpt_project from '../img/chatgpt_project.png';
import { colors } from '../colors/mainGradient';

export const info = {
  firstName: 'Himanshu',
  lastName: 'Kumar',
  initials: 'AL', // the example uses first and last, but feel free to use three or more if you like.
  position: 'a Full Stack Developer',
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: '🇮🇳',
      text: 'based in the Gujrat, India',
    },
    {
      emoji: '💻',
      text: 'Full Stack Developer at Trinity unicepts PVT LTD',
    },
    {
      emoji: '📧',
      text: 'hklohani@outlook.com',
    },
  ],
  socials: [
    {
      link: 'https://andy8647.com/andy.pdf', // this should be https://yourname.com/resume.pdf once you've deployed
      icon: 'fa fa-file',
      label: 'resume',
    },
    {
      link: 'https://instagram.com/andy_lgc?igshid=YmMyMTA2M2Y=',
      icon: 'fa fa-instagram',
      label: 'instagram',
    },
    {
      link: 'https://github.com/hklohani',
      icon: 'fa fa-github',
      label: 'github',
    },
    {
      link: 'https://www.linkedin.com/in/hklohani',
      icon: 'fa fa-linkedin',
      label: 'linkedin',
    },
    // {
    //   link: 'https://twitter.com/Andy8647L',
    //   icon: 'fa fa-twitter',
    //   label: 'twitter',
    // },
  ],
  bio: "Hello! I'm Himanshu Kumar. I'm a Full Stack Developer. I enjoy building web applications and learning new technologies. I'm currently working at Trinity Unicepts as a Full Stack Developer. I'm also a freelance web developer. I love to and explore new Technology. I'm currently based in Gujrat, India.",
  skills: {
    Languages: ['JavaScript', 'TypeScript', 'Python', 'PHP', 'HTML/CSS'],
    Frameworks: [
      'React',
      'NextJS',
      'Redux',
      'Redux toolkit',
      'Express',
      'Laravel',
      'Bootstrap',
      'Ant design',
      'Material UI',
      'Tailwind CSS',
    ],
    ['Databases']: ['MySQl', 'MongoDB'],
    ['Cloud Services']: ['AWS S3', 'AWS EC2', 'Google Analytics', 'Heroku', 'Netlify'],
    ['Tools']: [
      'Git',
      'Postman',
      'Docker',
      'Swagger',
      'npm',
      'yarn',
      'Bitbucket',
      'Github',
      'Gitlab',
      'VS Code',
    ],
    ['Web Servers']: ['Apache2', 'Nginx'],
  },
  hobbies: [
    {
      label: 'Learning New Things',
      emoji: '📙',
    },
    {
      label: 'Cooking',
      emoji: '🍳',
    },
  ],
  portfolio: [
    {
      title: 'Search in document',
      live: 'https://tattvam.unicepts.in/', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/hklohani/chatgpt-chatboat', // this should be a link to the **repository** of the project, where the code is hosted.
      image: chatgpt_project,
    },
  ],
};
