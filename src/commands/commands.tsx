import React from 'react'
import styles from './commands.module.scss'
import { links, info, education, technicalSkills, achievements } from '../config'
import { Commands, Command } from '../typings'
import ListElement from '../ListElement/ListElement'

const rawCommands: Command[] = [
	{
		name: 'help',
		icon: 'fas fa-fw fa-question-circle',
		description: 'List down all available commands',
		execute(app) {
			const { commands } = app.state
			return (
				<>
					Available commands:
					{[...commands.values()].map(
						({ icon, name, description }, key) => (
							<ListElement
								key={key}
								icon={icon}
								name={name}
								description={description}
								help
							/>
						)
					)}
				</>
			)
		},
	},
	{
		name: 'info',
		icon: 'fas fa-fw fa-info-circle',
		description: 'Show information about me',
		execute(app) {
			const { userDataLoaded, userData } = app.state
			const { avatar_url, login, name, bio } = userData || {}
			return (
				<div className={styles.infoWrapper}>
					<div className={styles.infoInner}>
						<div className={styles.avatarContainer}>
							<img
								src="/profile-photo.jpg"
								className={styles.avatar}
								alt="Rafia Abbasi"
								onError={(e) => {
									e.currentTarget.src = 'https://via.placeholder.com/200x200/00d4ff/ffffff?text=RA';
								}}
							/>
							<div className={styles.photoPlaceholder}>
								<i className="fas fa-user"></i>
								<span>Add your photo here</span>
							</div>
						</div>
						<div className={styles.content}>
							<div className={styles.header}>
								<strong>{name || 'Rafia Abbasi'}</strong>{' '}
								<span className="muted">@{login || 'rafiaabbasi24'}</span>
							</div>
							<em className={styles.bio}>"...{bio || 'Passionate Computer Science Engineering student'}"</em>
							<div className={styles.info}>{info}</div>
						</div>
					</div>

					<div className={styles.icons}>
						<i className="fab fa-fw fa-react"></i>
						<i className="fab fa-fw fa-node-js"></i>
						<i className="fab fa-fw fa-js-square"></i>
						<i className="fab fa-fw fa-python"></i>
						<i className="fab fa-fw fa-java"></i>
						<i className="fab fa-fw fa-aws"></i>
					</div>
				</div>
			)
		},
	},
	{
		name: 'projects',
		icon: 'fas fa-fw fa-tools',
		description: 'Display a list of my major projects',
		execute(app) {
			const { projectDataLoaded, projectData } = app.state
			if (!projectDataLoaded)
				return (
					<>
						<div className={styles.projectList}>
							<div className={styles.projectItem}>
								<strong className={styles.clickableTitle} onClick={() => window.open('https://park-n-go-eosin.vercel.app/', '_blank')}>
									ParkNGo: Urban Parking and Reservation Platform
									<i className="fas fa-external-link-alt"></i>
								</strong>
								<span className="muted">Feb 2025– Mar 2025</span>
								<p>• Architected a full-stack parking platform with 12+ features, including real-time availability, reservations, and user authentication, by engineering over 25 secure REST APIs.</p>
								<p>• Optimized a MySQL database with Prisma ORM, achieving efficient data handling and API response times under 150ms.</p>
								<p>• Built a secure, role-based dashboard with 5+ analytical modules to monitor revenue and user growth.</p>
								<p>• Integrated the PayU payment gateway, implementing secure transaction protocols to achieve a 99.9% success rate.</p>
								<div className={styles.projectLinks}>
									<a href="https://park-n-go-eosin.vercel.app/" target="_blank" rel="noopener noreferrer">
										<i className="fas fa-external-link-alt"></i> Live Demo
									</a>
									<a href="https://github.com/rafiaabbasi24/ParknGO" target="_blank" rel="noopener noreferrer">
										<i className="fab fa-github"></i> GitHub
									</a>
								</div>
							</div>
							<div className={styles.projectItem}>
								<strong className={styles.clickableTitle} onClick={() => window.open('https://github.com/rafiaabbasi24/Resume-job-matcher', '_blank')}>
									Resume-Job Matcher
									<i className="fab fa-github"></i>
								</strong>
								<span className="muted">Jan 2025– Feb 2025</span>
								<p>• Built an automated resume-matching tool using Python and NLP, designed to reduce manual screening time by over 75%.</p>
								<p>• Engineered a data preprocessing pipeline that improved text extraction accuracy from PDF/DOCX files by over 95%.</p>
								<p>• Implemented TF-IDF and cosine similarity algorithms, achieving a 92% match accuracy rate.</p>
								<div className={styles.projectLinks}>
									<a href="https://github.com/rafiaabbasi24/Resume-job-matcher" target="_blank" rel="noopener noreferrer">
										<i className="fab fa-github"></i> GitHub
									</a>
								</div>
							</div>
							<div className={styles.projectItem}>
								<strong className={styles.clickableTitle} onClick={() => window.open('https://github.com/rafiaabbasi24/Disk-Scheduling-Algorithm-Visualizer', '_blank')}>
									Disk Scheduling Algorithm Visualizer
									<i className="fab fa-github"></i>
								</strong>
								<span className="muted">Oct 2024– Nov 2024</span>
								<p>• Created an interactive web-based tool to visualize six key disk scheduling algorithms, improving user comprehension by an estimated 40%.</p>
								<p>• Leveraged HTML5 Canvas for animations and used Plotly.js to generate 5+ real-time performance comparison charts.</p>
								<p>• Implemented a secure user authentication system using PHP and MySQL, providing personalized progress tracking for 50+ beta users.</p>
								<div className={styles.projectLinks}>
									<a href="https://github.com/rafiaabbasi24/Disk-Scheduling-Algorithm-Visualizer" target="_blank" rel="noopener noreferrer">
										<i className="fab fa-github"></i> GitHub
									</a>
								</div>
							</div>
						</div>
					</>
				)
			return (
				<>
					{projectData.map(
						({ name, html_url, description }: any, key: number) => (
							<ListElement
								key={key}
								icon={'fab fa-fw fa-github-alt'}
								name={name}
								link={html_url}
								description={description}
							/>
						)
					)}
				</>
			)
		},
	},
	{
		name: 'education',
		icon: 'fas fa-fw fa-graduation-cap',
		description: 'Show my educational background',
		execute() {
			return (
				<div className={styles.educationSection}>
					<div className={styles.educationItem}>
						<strong>{education.school}</strong>
						<div className={styles.degree}>{education.degree}</div>
						<div className={styles.period}>{education.period}</div>
						<div className={styles.cgpa}>CGPA: {education.cgpa}</div>
					</div>
				</div>
			)
		},
	},
	{
		name: 'skills',
		icon: 'fas fa-fw fa-code',
		description: 'Display my technical skills',
		execute() {
			return (
				<div className={styles.skillsSection}>
					<div className={styles.skillCategory}>
						<strong className={styles.skillHeading}>Languages:</strong>
						<div className={styles.skillList}>
							{technicalSkills.languages.map((skill, index) => (
								<span key={index} className={styles.skillTag}>{skill}</span>
							))}
						</div>
					</div>
					<div className={styles.skillCategory}>
						<strong className={styles.skillHeading}>Frameworks & Libraries:</strong>
						<div className={styles.skillList}>
							{technicalSkills.frameworks.map((skill, index) => (
								<span key={index} className={styles.skillTag}>{skill}</span>
							))}
						</div>
					</div>
					<div className={styles.skillCategory}>
						<strong className={styles.skillHeading}>Databases & Cloud:</strong>
						<div className={styles.skillList}>
							{technicalSkills.databases.map((skill, index) => (
								<span key={index} className={styles.skillTag}>{skill}</span>
							))}
						</div>
					</div>
					<div className={styles.skillCategory}>
						<strong className={styles.skillHeading}>Developer Tools:</strong>
						<div className={styles.skillList}>
							{technicalSkills.tools.map((skill, index) => (
								<span key={index} className={styles.skillTag}>{skill}</span>
							))}
						</div>
					</div>
					<div className={styles.skillCategory}>
						<strong className={styles.skillHeading}>Core Concepts:</strong>
						<div className={styles.skillList}>
							{technicalSkills.concepts.map((skill, index) => (
								<span key={index} className={styles.skillTag}>{skill}</span>
							))}
						</div>
					</div>
				</div>
			)
		},
	},
	{
		name: 'achievements',
		icon: 'fas fa-fw fa-trophy',
		description: 'Show my achievements and certifications',
		execute() {
			return (
				<div className={styles.achievementsSection}>
					{achievements.map((achievement, index) => (
						<div key={index} className={styles.achievementItem}>
							• {achievement}
						</div>
					))}
				</div>
			)
		},
	},
	{
		name: 'resume',
		icon: 'fas fa-fw fa-file-alt',
		description: 'Download my resume',
		execute() {
			// Redirect to resume PDF
			window.open('/resume.pdf', '_blank');
			return (
				<div className={styles.resumeSection}>
					<p>📄 <strong>Opening your resume...</strong></p>
					<p>If the PDF doesn't open automatically, <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">click here</a> to download.</p>
				</div>
			)
		},
	},
	{
		name: 'links',
		icon: 'fas fa-fw fa-link',
		description: 'Get all my important links and socials',
		execute() {
			return (
				<>
					{links.map(({ icon, name, link, description }, key) => (
						<ListElement
							key={key}
							icon={icon}
							name={name}
							link={link}
							description={description}
						/>
					))}
				</>
			)
		},
	},
	{
		name: 'clear',
		icon: 'fas fa-fw fa-eraser',
		description: 'Clear terminal screen',
		execute(app) {
			app.setState({
				...app.state,
				record: [],
			})
		},
	},
]
const commands: Commands = new Map(rawCommands.map(cmd => [cmd.name, cmd]))

export default commands
