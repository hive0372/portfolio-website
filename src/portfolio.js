const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '',
  title: 'AB.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Anushka',
  role: 'Computer Science Engineering Student ',
  description:
    'I am Anushka Bandyopadhyay,a fourth-year student pursuing a B. Tech in Computer Science with a specialization in Information Technology at SRMIST. Aspiring Data Science with strong skills in Python, MySQL, and machine learning techniques. Passionate about leveraging data analysis to uncover insights and drive data-informed decisions for impactful solutions.',
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
  {
    name: 'Intern at Fuzone e system pvt. ltd.',
    description:
      'Developed a Python-based database management system for a coaching center, improving data handling efficiency by 25% through optimized queries and user-friendly features for student and course management.',
    stack: ['sqlite'], 
    sourceCode: 'https://docs.google.com/document/d/1MJ6WYRaN1X6u0PoP9JsaXlmoEJ3rkDt7/edit?usp=sharing&ouid=101945067749294695230&rtpof=true&sd=true',
  },
  {
    name: 'ImageGenAI',
    description:
      'Developed an AI system to generate images from text, increasing the accuracy of outputs by 15% through iterative model training.',
    stack: ['GoogleColab'],
    sourceCode: 'https://github.com/hive0372/ImageGenAI/blob/main/ImageGenAI',
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
  {
    name: 'Oracle Machine Learning Using Autonomous Database',
    link: 'https://drive.google.com/file/d/1MDSlHKDBJw568kf7Kye7xpZhAcqp3meo/view?usp=sharing',
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
  'SQL',
  'Django',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'anushkab0602@gmail.com',
}

export { header, about, projects, certifications, skills, contact }
