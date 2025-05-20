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
    'I am Anushka Bandyopadhyay, a fourth-year student pursuing a B. Tech in Computer Science with a specialization in Information Technology at SRMIST. Aspiring Data Science professional with strong skills in Python, MySQL, and machine learning techniques. Passionate about leveraging data analysis to uncover insights and drive data-informed decisions for impactful solutions.',
  resume: 'https://drive.google.com/file/d/1AzA9jIGf6IKf0KHRgx2oJorazLli4hk-/view?usp=sharing',

  skills: ['Python', 'Data Science', 'Machine Learning', 'SQL', 'Problem Solving'],
  social: {
    linkedin: 'https://www.linkedin.com/in/anushka-bandyopadhyay-a64567224/',
    github: 'https://github.com/hive0372',
  },
}

const experience = [
  // experience can be added or removed
  // if there are no experience items, Experience section won't show up
  {
    role: 'Data Science Intern',
    company: 'Fuzone e system pvt. ltd.',
    duration: 'May 2023 - August 2023',
    description: [
      'Developed a Python-based database management system for a coaching center, improving data handling efficiency by 25%',
      'Implemented optimized SQL queries for faster data retrieval and analysis',
      'Created user-friendly features for student and course management',
      'Collaborated with a team of 5 developers to deliver the project on time'
    ],
    technologies: ['Python', 'SQLite', 'Data Analysis', 'UI/UX Design']
  },
  {
    role: 'Machine Learning Research Assistant',
    company: 'SRMIST Research Lab',
    duration: 'January 2023 - April 2023',
    description: [
      'Assisted in developing an AI system to generate images from text prompts',
      'Increased the accuracy of outputs by 15% through iterative model training',
      'Implemented and tested various machine learning algorithms',
      'Documented research findings and presented results to faculty'
    ],
    technologies: ['Python', 'TensorFlow', 'Google Colab', 'Computer Vision']
  }
]

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Library Management System',
    description:
      'Library Management System using Python. It manages information of the customers taking books or giving it back, the dates when it was returned, and which book was taken or returned to the library.',
    stack: ['Python', 'Database', 'UI Design'],
    sourceCode: 'https://github.com/hive0372/LibManSys',
    livePreview: 'https://github.com/hive0372/LibManSys',

    category: 'Database Systems'
  }, 
  {
    name: 'Coaching Center Database System',
    description:
      'Developed a Python-based database management system for a coaching center, improving data handling efficiency by 25% through optimized queries and user-friendly features for student and course management.',
    stack: ['Python', 'SQLite', 'Data Analysis'], 
    sourceCode: 'https://docs.google.com/document/d/1MJ6WYRaN1X6u0PoP9JsaXlmoEJ3rkDt7/edit?usp=sharing&ouid=101945067749294695230&rtpof=true&sd=true',

    category: 'Database Systems'
  },
  {
    name: 'ImageGenAI',
    description:
      'Developed an AI system to generate images from text, increasing the accuracy of outputs by 15% through iterative model training. Used advanced machine learning techniques and neural networks.',
    stack: ['Python', 'TensorFlow', 'Google Colab'],
    sourceCode: 'https://github.com/hive0372/ImageGenAI/blob/main/ImageGenAI',

    category: 'Machine Learning'
  }
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  {
    name: 'Python',
    level: 90,
    description: 'Proficient in Python programming with experience in data analysis, machine learning, and web development using frameworks like Django.'
  },
  {
    name: 'Data Science',
    level: 85,
    description: 'Strong foundation in data analysis, visualization, and statistical methods. Experienced with pandas, NumPy, and data visualization libraries.'
  },
  {
    name: 'Machine Learning',
    level: 80,
    description: 'Implemented various ML algorithms including regression, classification, and clustering. Familiar with TensorFlow and scikit-learn.'
  },
  {
    name: 'SQL',
    level: 85,
    description: 'Experienced in database design, complex queries, and database management systems. Proficient with SQLite and MySQL.'
  },
  {
    name: 'C++',
    level: 75,
    description: 'Strong understanding of object-oriented programming concepts and data structures using C++.'
  },
  {
    name: 'HTML/CSS',
    level: 70,
    description: 'Created responsive web designs and user interfaces using modern HTML5 and CSS3 techniques.'
  },
  {
    name: 'JavaScript',
    level: 65,
    description: 'Developed interactive web applications and implemented client-side functionality using JavaScript and basic frameworks.'
  },
  {
    name: 'Django',
    level: 60,
    description: 'Built web applications using the Django framework, including database models, views, and templates.'
  }
]

const certifications = [
  // certifications can be added an removed 
  // if there are no certifications, Certifications section won't show up
  {
    name: 'The Complete Introduction to C++',
    link: 'https://drive.google.com/file/d/1AzA9jIGf6IKf0KHRgx2oJorazLli4hk-/view?usp=sharing',
  }, 
  {
    name: 'Hackerrank Problem Solving(Basic) Certificate',
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
  }
]

const testimonials = []

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'anushkab0602@gmail.com',
  phone: '+91 9891458859',
  location: 'Ghaziabad, Uttar Pradesh, India',
  social: [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/anushka-bandyopadhyay-a64567224/',
      icon: <i className="fab fa-linkedin"></i>
    },
    {
      name: 'GitHub',
      url: 'https://github.com/hive0372',
      icon: <i className="fab fa-github"></i>
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com',
      icon: <i className="fab fa-twitter"></i>
    }
  ]
}

export { header, about, experience, projects, skills, certifications, testimonials, contact }
