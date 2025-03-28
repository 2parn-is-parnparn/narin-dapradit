"use client";
import Navbar from "@/app/components/Navbar";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function Home() {

  const router = useRouter();

  useEffect(() => {
    const logVisit = async () => {
      await fetch("/api/logs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ip: "0.0.0.0", // หรือให้ Backend ดึง IP จริง
          userAgent: navigator.userAgent,
        }),
      });
    };

    logVisit();
  }, []);

  const navigateTo = (path?: string) => {
    if (path) {
      router.push(path);
    }
  };

  const navigateTo_ = (path?: string) => {
    if (path) {
      window.open(path, "_blank");
    }
  };

  const projects = [
    {
      title: "TEAMMORTAL",
      subtitle: "SOFTWARE DESIGN PROJECT",
      mainDescription: "Designed and developed a website using React, Node.js, and MongoDB to help users find gaming partners, connecting them with others who share similar interests and lifestyles.",
      detailPath: "/teammortal",
      mainTechStack: ["Software Design", "Mini Project"],
      hasDetailPage: true
    },
    {
      title: "ARTTROVERT",
      subtitle: "INTERACTIVE SYSTEMS PROJECT",
      mainDescription: "Designed a website for buying and selling artwork.",
      detailPath: "/arttrovert",
      mainTechStack: ["Designing Interactive Systems"],
      hasDetailPage: true
    },

    {
      title: "KINCLEAN",
      subtitle: "HUMAN-COMPUTER INTERACTION GROUP PROJECT",
      mainDescription: "Designed a website for selling clean food with a delivery service.",
      detailPath: "/kinclean",
      mainTechStack: ["HUMAN-COMPUTER INTERACTION"],
      hasDetailPage: true
    },
    {
      title: "NudMhor",
      subtitle: "ANDROID MOBILE APPLICATION GROUP PROJECT",
      mainDescription: "Designed a mobile application for reporting symptoms and scheduling doctor appointments in advance.",
      detailPath: "/nudmhor",
      mainTechStack: ["ANDROID MOBILE APPLICATION PROGRAMMING"],
      hasDetailPage: true,
    },
    {
      title: "Espressoul",
      subtitle: "HUMAN-COMPUTER INTERACTION INDIVIDUAL PROJECT",
      mainDescription: "Designed a website to showcase the history and evolution of coffee.",
      detailPath: "/espressoul",
      mainTechStack: ["HUMAN-COMPUTER INTERACTION"],
      hasDetailPage: true,
    },
    {
      title: "MEDISCAN",
      subtitle: "AI COURSE PROJECT",
      mainDescription: "Developed an AI-powered system for scanning drug types, providing information on their properties, and recording alerts via Line.",
      mainTechStack: ["AI"],
      hasDetailPage: false,
      detailPath: undefined
    },
    {
      title: "BOTTLE BANK",
      subtitle: "IOT IMPLEMENTATION PROJECT",
      mainDescription: "Developed a plastic bottle and can collection kiosk using Arduino for control, integrated AI for sorting, and created a web application to manage the system.",
      mainTechStack: ["PRINCIPLE OF INTERNET OF THINGS IMPLEMENTATION"],
      hasDetailPage: false,
      detailPath: undefined
    },
  ];

  return (
    <div className="container">
      <Navbar />
      <main>
        <section id="about" className="hero">
          <div className="profile-container">
            <div className="myImage">
              <img src="/profile1.jpg" alt="Profile" />
            </div>
          </div>

          <div className="hero-content">
            <h1 className="name">Narin Dapradit</h1>
            <p className="bio">
              Hi, I'm Narin. I'm passionate about creating products that truly connect with users. Whether I'm designing interfaces or writing code, I always start by understanding what users really need. To me, good products aren't just functional—they solve real problems and deliver great experiences. I enjoy the challenge of translating user needs into intuitive designs and reliable solutions that make a genuine difference.
            </p>
            <div className="contact-info">
              <p><span className="contact-label">Email:</span> narindapradit.parnparn@gmail.com</p>
              <p><span className="contact-label">Phone:</span> +66 62 2134 6238</p>
              <p><span className="contact-label">LinkedIn:</span> <a href="https://linkedin.com/in/narindapradit" target="_blank" rel="noopener noreferrer">linkedin.com/in/narindapradit</a></p>
            </div>
          </div>
        </section>



        <section id="projects" className="projects-section">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="myCard">
                <div className="card-content">
                  <h3 className="project-title">{project.title}</h3>
                  {/* <h4 className="project-subtitle">{project.subtitle}</h4> */}
                  <div className="tech-stack">
                    <div className="tech-stack-items">
                      {project.mainTechStack.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <p className="project-description">{project.mainDescription}</p>



                  {project.hasDetailPage && (
                    <button
                      className="myButton"
                      onClick={() =>
                        project.title === "TEAMMORTAL"
                          ? navigateTo(project.detailPath)
                          : navigateTo(project.detailPath)
                      }
                    >
                      VIEW PROJECT
                    </button>
                  )}

                </div>
              </div>
            ))}
          </div>
        </section>



        <section id="skills" className="skills-section">
          <h2 className="section-title">Skills</h2>
          <div className="skills-container">
            <div className="skills-category">
              <h3 className="skills-category-title">Hard Skills</h3>
              <ul className="skills-list">
                <li>Figma</li>
                <li>Wireframing</li>
                <li>Prototyping</li>
                <li>Interaction Design</li>
                <li>Adobe Photoshop</li>
                <li>Python</li>
                <li>React</li>
                <li>Next.js</li>
                <li>Node.Js</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>

            <div className="skills-category">
              <h3 className="skills-category-title">Soft Skills</h3>
              <ul className="skills-list">
                <li>Team Collaboration</li>
                <li>Effective Communication</li>
                <li>Emotional Intelligence (EQ) and Empathy </li>
                <li>Responsibility</li>
              </ul>
            </div>
          </div>
        </section>


        <section id="experience" className="experience-section">
          <h2 className="section-title">Experience</h2>
          <div className="experience-card">
            <div className="experience-header">
              <div className="experience-company-section">
                <h3 className="company">Ascend Group</h3>
              </div>
              <span className="location">Bangkok, Thailand</span>

            </div>
            <div className="experience-company-section">
              <p className="position">TechOps Team Internship, Ascend Money</p>
              <span className="duration">January 8, 2024 – June 28, 2024</span>
            </div>

            <h4 className="project-name">Machine Learning-Based Issue Detection in Jenkins Pipeline</h4>
            <ul className="responsibilities">
              <li>Worked on a machine learning-based system to predict CI/CD pipeline issues by analyzing Jenkins logs.</li>
              <li>Developed predictive models using Python, scikit-learn, and Jupyter Notebook to detect error patterns and enhance pipeline efficiency.</li>
              <li>Explored and contributed to scalable, containerized architecture using Docker & Kubernetes (EKS) on AWS.</li>
              <li>Designed the data storage structure using MongoDB and developed backend services with Node.js.</li>
              <li>Built and implemented a real-time monitoring dashboard with Next.js, improving troubleshooting efficiency for DevOps teams.</li>
            </ul>
          </div>
        </section>

        <section id="education" className="education-section">
          <h2 className="section-title">Education</h2>
          <div className="education-card">
            <div className="education-header">
              <h3 className="institution">King Mongkut's Institute of Technology Ladkrabang</h3>
              <span className="location">Bangkok, Thailand</span>
            </div>
            <p className="degree">School of Science in Computer Science, 2.96 GPA</p>
            <p className="duration">2021 – Present</p>
          </div>
        </section>

      </main>

      <footer>
        <p>© 2025 Narin Dapradit. All rights reserved.</p>
      </footer>
    </div>
  );
}