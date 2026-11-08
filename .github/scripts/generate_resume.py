from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import mm
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, KeepTogether
from reportlab.pdfbase.pdfmetrics import stringWidth
from xml.sax.saxutils import escape
from pathlib import Path

OUT = Path("docs/assets/RAFIA_ABBASI_AI_ML_RESUME.pdf")
OUT.parent.mkdir(parents=True, exist_ok=True)

NAVY = colors.HexColor("#18253b")
BLUE = colors.HexColor("#5368a8")
MUTED = colors.HexColor("#5d6675")
RULE = colors.HexColor("#d9deea")

doc = SimpleDocTemplate(
    str(OUT), pagesize=A4,
    rightMargin=14*mm, leftMargin=14*mm,
    topMargin=10*mm, bottomMargin=10*mm,
    title="Rafia Abbasi - AI/ML Resume",
    author="Rafia Abbasi"
)

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(
    name="Name", parent=styles["Title"], fontName="Helvetica-Bold",
    fontSize=19, leading=21, textColor=NAVY, alignment=TA_CENTER,
    spaceAfter=2
))
styles.add(ParagraphStyle(
    name="Contact", parent=styles["Normal"], fontName="Helvetica",
    fontSize=8, leading=10, textColor=MUTED, alignment=TA_CENTER,
    spaceAfter=7
))
styles.add(ParagraphStyle(
    name="Section", parent=styles["Heading2"], fontName="Helvetica-Bold",
    fontSize=9.2, leading=11, textColor=BLUE, spaceBefore=5, spaceAfter=2,
    borderPadding=0
))
styles.add(ParagraphStyle(
    name="BodySmall", parent=styles["BodyText"], fontName="Helvetica",
    fontSize=7.55, leading=9.1, textColor=NAVY, spaceAfter=1.5
))
styles.add(ParagraphStyle(
    name="BulletSmall", parent=styles["BodyText"], fontName="Helvetica",
    fontSize=7.35, leading=8.8, leftIndent=9, firstLineIndent=-7,
    textColor=NAVY, spaceAfter=1
))
styles.add(ParagraphStyle(
    name="Role", parent=styles["BodyText"], fontName="Helvetica-Bold",
    fontSize=7.8, leading=9.1, textColor=NAVY, spaceAfter=1
))
styles.add(ParagraphStyle(
    name="Meta", parent=styles["BodyText"], fontName="Helvetica-Oblique",
    fontSize=7.3, leading=8.5, textColor=MUTED, spaceAfter=1
))

story = []
P = lambda t, s="BodySmall": Paragraph(t, styles[s])
def section(title, body):
    story.append(Paragraph(title.upper(), styles["Section"]))
    story.append(Table([[""]], colWidths=[doc.width], rowHeights=[0.6],
        style=TableStyle([("BACKGROUND",(0,0),(-1,-1),RULE)])))
    story.append(Spacer(1, 2))
    story.extend(body)

story.append(Paragraph("Rafia Abbasi", styles["Name"]))
story.append(Paragraph(
    "+91 8791420361&nbsp;&nbsp; | &nbsp;&nbsp;"
    "rafiaabbasi9000@gmail.com&nbsp;&nbsp; | &nbsp;&nbsp;"
    "LinkedIn: linkedin.com/in/rafia-abbasi-91486025a&nbsp;&nbsp; | &nbsp;&nbsp;"
    "GitHub: github.com/rafiaabbasi24", styles["Contact"]))

section("Summary", [P(
    "B.Tech Computer Science Engineering student and Generative AI Trainee building AI/ML applications with RAG, LLMs, "
    "multi-agent systems, n8n, and cloud deployment on Azure and AWS."
)])

section("Education", [
    P("<b>Graphic Era Hill University, Dehradun</b> &nbsp; | &nbsp; 2022 – 2026"),
    P("B.Tech in Computer Science Engineering &nbsp; | &nbsp; CGPA: <b>8.30 / 10.0</b>")
])

experience = [
    P("<b>Generative AI Trainee — Prodigy Infotech</b> &nbsp; | &nbsp; Jan 2026 – Jul 2026", "Role"),
    P("Built end-to-end RAG pipelines: ingestion, chunking, embeddings, vector storage, and grounded LLM answers.", "BulletSmall"),
    P("Automated AI workflows in n8n, connecting LLM calls, APIs, and data sources to remove manual work.", "BulletSmall"),
    P("Developed multi-agent systems with CrewAI using role-based agents, tasks, and tools for research and analysis workflows.", "BulletSmall"),
    P("Deployed and tested GenAI applications on Microsoft Azure and AWS using cloud-hosted LLM services and serverless compute.", "BulletSmall"),
    P("Applied prompt engineering and evaluation to improve response relevance and reduce hallucinations.", "BulletSmall")
]
section("Experience", experience)

skill_rows = [
    ("Languages", "Python, C++, C, Java, JavaScript, SQL"),
    ("GenAI & LLMs", "RAG, Prompt Engineering, LangChain, LangGraph, CrewAI, Groq, Google Gemini, OpenAI APIs"),
    ("ML & NLP", "Scikit-learn, Pandas, NumPy, NLP, TF-IDF, Cosine Similarity"),
    ("Databases", "Neo4j (Graph DB), Vector Databases, MySQL"),
    ("Automation & Backend", "n8n, FastAPI, Flask, REST APIs"),
    ("Cloud & Tools", "Microsoft Azure, AWS, Git, GitHub, VS Code"),
    ("Core Concepts", "Data Structures & Algorithms, Multi-Agent Systems, Knowledge Graphs")
]
skill_body = [P(f"<b>{escape(k)}:</b> {escape(v)}") for k, v in skill_rows]
section("Technical Skills", skill_body)

project_body = [
    P("<b>NeuroGraph AI: Memory-Augmented AI Search</b> &nbsp; | &nbsp; Oct 2025 – Dec 2025", "Role"),
    P("Built a memory-augmented AI search system that stores entities and relationships from past queries in a Neo4j knowledge graph for context-aware answers.", "BulletSmall"),
    P("Integrated Groq-hosted LLMs, combining graph retrieval with LLM reasoning to ground responses in previously stored knowledge.", "BulletSmall"),
    P("Designed modular components for query processing, graph memory read/write, and response generation.", "BulletSmall"),
    Spacer(1, 2),
    P("<b>Nexus AI: Multi-Agent AI Platform</b> &nbsp; | &nbsp; Feb 2025 – Apr 2025", "Role"),
    P("Developed a multi-agent AI platform where specialized agents collaborate for research, retrieval, and response synthesis using RAG over custom knowledge sources.", "BulletSmall"),
    P("Built FastAPI services to orchestrate agent workflows, deployed on the cloud with supporting automations in n8n.", "BulletSmall"),
    P("Designed modular agent roles and tools for retrieval, analysis, and answer generation.", "BulletSmall")
]
section("AI/ML Projects", project_body)

achievements = [
    P("Presented the paper “Unlocking Blockchain” at the International Conference on Smart Electronics and Smart Systems (ICSES 2024).", "BulletSmall"),
    P("Solved 300+ problems on LeetCode and GeeksforGeeks covering Data Structures and Algorithms.", "BulletSmall"),
    P("Google Data Analytics Professional Certificate — data cleaning, analysis, and visualization.", "BulletSmall"),
    P("Developed a fake profile detection model achieving 85% accuracy on a test dataset.", "BulletSmall"),
    P("Coordinated 3+ NSS community service events with 15+ volunteers, impacting 200+ local residents.", "BulletSmall")
]
section("Achievements & Certifications", achievements)

def footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(RULE)
    canvas.setLineWidth(0.5)
    canvas.line(doc.leftMargin, 8*mm, A4[0]-doc.rightMargin, 8*mm)
    canvas.setFont("Helvetica", 6.7)
    canvas.setFillColor(MUTED)
    canvas.drawString(doc.leftMargin, 5*mm, "Rafia Abbasi | AI / ML & Generative AI")
    canvas.drawRightString(A4[0]-doc.rightMargin, 5*mm, f"Page {doc.page}")
    canvas.restoreState()

doc.build(story, onFirstPage=footer, onLaterPages=footer)
print(f"Generated {OUT}")
