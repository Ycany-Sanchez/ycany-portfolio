// The single source of truth for portfolio copy. No invented employers or projects.
export default {
  name: 'Ycany Ashra Sanchez',
  shortName: 'Ycany',
  initials: 'YS',
  title: 'Developer & student',
  headline: ['Useful ideas.', 'Built with care.'],
  intro: 'I’m Ycany. I build practical AI for safer conversations and better decisions at sea.',
  githubUsername: 'Ycany-Sanchez',
  github: 'https://github.com/Ycany-Sanchez',
  workshop: [
    { name: 'IMentia', repository: 'IMentia' },
    { name: 'FoodPantry', repository: 'FoodPantry' },
    { name: 'DocTient1', repository: 'DocTient1' },
    { name: 'tinHealth', repository: 'tinHealth' }
  ],
  linkedin: 'https://www.linkedin.com/in/ycany-ashra-sanchez-bb987937a/',
  email: '', // Optional. Leave empty to use LinkedIn for contact.
  education: {
    school: 'Cebu Institute of Technology',
    dates: '2024 – 2028',
    note: 'Learning, experimenting, and turning ideas into working software.'
  },
  about: 'I’m a student at Cebu Institute of Technology, building AI that addresses everyday problems. My projects span online safety with BantAI Buddy and fisheries intelligence with Team TIKI’s Parola.',
  additionalProjects: [
    {
      id: 'parola',
      name: 'Parola',
      subtitle: 'Ocean intelligence. Within everyone’s reach.',
      category: 'AI · Maritime intelligence',
      team: 'Team TIKI',
      image: 'parola.png',
      imageAlt: 'Conceptual aerial ocean artwork with lime current contours around islands',
      description: 'A fisheries intelligence platform designed to help Filipino fisherfolk find potential fishing hotspots, reduce fuel consumption, and make safer decisions at sea.',
      award: 'Top 5 finalist',
      awardContext: 'Recognized at Iloilo AI Fest.',
      story: 'Developed by Team TIKI, Parola combines machine learning with oceanographic and satellite datasets to predict potential fishing grounds. The platform is designed to deliver fishing advisories and weather alerts through SMS, including to fisherfolk without smartphones or internet access.',
      details: [
        { title: 'Read the ocean', body: 'Analyze sea surface temperature, chlorophyll concentration, ocean currents, bathymetry, and historical fishing activity to identify potential fishing grounds.' },
        { title: 'Reach beyond the smartphone', body: 'SMS advisories and weather alerts make insights accessible to fisherfolk without smartphones or internet access.' },
        { title: 'Connect data to action', body: 'API integrations, cloud-based data processing, and automated n8n workflows collect, process, and distribute information.' }
      ],
      technologies: ['Python', 'Machine Learning', 'API Integration', 'Satellite Data Processing', 'Cloud Computing', 'n8n Workflow Automation', 'SMS API Integration', 'Geospatial Data Analysis'],
      source: 'https://www.linkedin.com/feed/update/urn:li:activity:7515284028795625472/'
    }
  ],
  project: {
    name: 'BantAI Buddy',
    subtitle: 'A safer space for online conversations.',
    category: 'AI · Browser extension',
    year: '2025',
    description: 'An AI-powered browser extension designed to flag harmful messages, scams, and predatory content across messaging platforms.',
    award: '2nd place',
    awardContext: 'Among 28 teams at an inter-school hackathon in Cebu.',
    details: [
      { title: 'Detect harmful content', body: 'The project targets bullying, inappropriate messages, scams, and predatory attempts on platforms including Messenger and Instagram.' },
      { title: 'Explain the flag', body: 'Multilingual detection is paired with educational explanations to help users understand why a message was flagged.' },
      { title: 'Keep parents informed', body: 'A parental notification system sends incident alerts through Gmail.' }
    ],
    story: 'Developed for an inter-school hackathon organized by the I.T. & Business Process Association of the Philippines, with mentorship from Accenture professionals. The system was rebuilt from scratch on the day of the competition.',
    source: 'https://www.linkedin.com/in/ycany-ashra-sanchez-bb987937a/'
  },
  certifications: [
    { name: 'Java OOP', issuer: 'CodeChum', date: 'May 2026' },
    { name: 'AI Ready ASEAN', issuer: 'ASEAN Foundation', date: 'December 2025' },
    { name: 'Graphic Design Essentials', issuer: 'Canva', date: 'September 2025' }
  ]
};
