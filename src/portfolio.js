const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '',
  title: 'AB.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Anushka',
  role: 'Computer Science Engineering Student',
  description:
    'I am Anushka Bandyopadhyay, a 2nd year computer science student currently doing B.Tech in SRM Institute of Science and Technology, KTR Chennai Campus',
  resume: '',
  social: {
    linkedin: 'https://www.linkedin.com/in/anushka-bandyopadhyay-a64567224/',
    github: 'https://github.com/hive0372',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Library Management System',
    description:
      'Library Management System using python. It manages information of the customers taking books or giving it back, the dates when it was returned, and which book was taken or returned to the library',
    stack: ['python'],
    sourceCode: 'https://github.com/hive0372/LibManSys',
    livePreview: 'https://github.com/hive0372/LibManSys',
  }, 
]

const certifications = [
  // certifications can be added an removed 
  // if there are no certifications, Certifications section won't show up
  {
    name: 'The Complete Introduction to C++',
    link: 'https://drive.google.com/file/d/1AzA9jIGf6IKf0KHRgx2oJorazLli4hk-/view?usp=sharing',
  }, 
  {
    name: 'Hackerrank Problem Solving(Basic) Certicate',
    link: 'https://drive.google.com/file/d/1AzA9jIGf6IKf0KHRgx2oJorazLli4hk-/view?usp=sharing',
  }, 
  {
    name: 'Hackerrank Python(Basic) Certificate',
    link: 'https://drive.google.com/file/d/1AzA9jIGf6IKf0KHRgx2oJorazLli4hk-/view?usp=sharing',
  }, 
  {
    name: 'Data Science Foundations Certificate',
    link: 'https://drive.google.com/file/d/1AzA9jIGf6IKf0KHRgx2oJorazLli4hk-/view?usp=sharing',
  }, 
  {
    name: 'Python Fundamentals for Beginners Certificate',
    link: 'https://drive.google.com/file/d/1AzA9jIGf6IKf0KHRgx2oJorazLli4hk-/view?usp=sharing',
  }, 
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'C++',
  'C',
  'HTML',
  'CSS',
  'JavaScript',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'anushkab0602@gmail.com',
}

export { header, about, projects, certifications, skills, contact }
