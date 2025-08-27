import React from 'react'
const github_username = 'rafiaabbasi24'
const email = 'rafiaabbasi9000@gmail.com'
const phone = '+91-8791420361'
const linkedin = 'https://www.linkedin.com/in/rafia-abbasi-91486025a/'

const projects = [
	'rafiaabbasi24/ParknGO',
	'rafiaabbasi24/Resume-job-matcher',
	'rafiaabbasi24/Disk-Scheduling-Algorithm-Visualizer',
]

const links = [
	{
		name: 'GitHub',
		icon: 'fab fa-fw fa-github',
		link: 'https://github.com/rafiaabbasi24',
		description: 'My profile on GitHub',
	},
	{
		name: 'LinkedIn',
		icon: 'fab fa-fw fa-linkedin',
		link: linkedin,
		description: 'Connect with me on LinkedIn',
	},
	{
		name: 'E-mail',
		icon: 'fas fa-fw fa-at',
		link: `mailto:${email}`,
		description: 'Lets get in touch!',
	},
	{
		name: 'Phone',
		icon: 'fas fa-fw fa-phone',
		link: `tel:+918791420361`,
		description: 'Call me directly',
	},
]

const info = (
	<>
		<p>
			Hello! I'm Rafia Abbasi, a passionate Computer Science Engineering
			student.
		</p>
		<p>
			I'm currently pursuing my{' '}
			<span className="highlighted">
				B.Tech in Computer Science Engineering
			</span>{' '}
			at{' '}
			<span className="highlighted">
				Graphic Era Hill University, Dehradun
			</span>{' '}
			with a CGPA of 8.30/10.0.
		</p>
		<p>
			I specialize in{' '}
			<span className="highlighted">full-stack development</span> with
			expertise in <span className="highlighted">React.js</span>,{' '}
			<span className="highlighted">Node.js</span>, and{' '}
			<span className="highlighted">Python</span>. I love building
			innovative solutions and have worked on projects ranging from
			parking platforms to AI-powered resume matching tools.
		</p>
		<p>
			I'm passionate about{' '}
			<span className="highlighted">Data Structures & Algorithms</span>,{' '}
			<span className="highlighted">Machine Learning</span>, and{' '}
			<span className="highlighted">Cloud Technologies</span>. I've solved
			300+ problems on competitive programming platforms and published
			research on blockchain technology.
		</p>
	</>
)

const education = {
	school: 'Graphic Era Hill University, Dehradun',
	degree: 'B.Tech in Computer Science Engineering',
	period: '2022–2026',
	cgpa: '8.30 / 10.0',
}

const technicalSkills = {
	languages: [
		'C++',
		'C',
		'JavaScript',
		'TypeScript',
		'Java',
		'Python',
		'HTML',
		'CSS',
		'SQL',
	],
	frameworks: [
		'React.js',
		'Next.js',
		'Node.js',
		'Express.js',
		'Tailwind CSS',
		'Flask',
	],
	databases: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase', 'AWS', 'Docker'],
	tools: ['Git', 'GitHub', 'Jenkins', 'Postman', 'VS Code', 'Figma'],
	concepts: [
		'Data Structures & Algorithms',
		'REST APIs',
		'MVC Architecture',
		'Agile Methodologies',
		'NLP',
	],
}

const achievements = [
	'Published a research paper, "Unlocking Blockchain," at the International Conference on Smart Electronics and Smart Systems (ICSES 2024)',
	'Solved over 300+ problems on platforms like LeetCode and GeeksforGeeks, demonstrating strong proficiency in Data Structures and Algorithms',
	'Achieved Google Data Analytics Professional Certificate, gaining expertise in data cleaning, analysis, and visualization',
	'Engineered a fake profile detection model with 85% accuracy on a test dataset',
	'Coordinated 3+ community service events with a team of 15+ volunteers as part of the NSS, positively impacting over 200 local residents',
]

export {
	github_username,
	email,
	phone,
	linkedin,
	projects,
	links,
	info,
	education,
	technicalSkills,
	achievements,
}
