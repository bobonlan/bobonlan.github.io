import "./../App.css";

export default function AboutButton() {
  return (
    <div className="page-content">
      <section className="resume-header">
        <p className="about-prompt">// resume</p>
        <h1>Your Name</h1>
        <p className="resume-contact">
          yourtown, OK &nbsp;·&nbsp; your@email.com &nbsp;·&nbsp; github.com/bobonlan
        </p>
      </section>

      <section className="resume-section">
        <h2 className="section-header"><span className="accent">&gt;</span> experience</h2>

        <div className="resume-entry">
          <div className="resume-entry-header">
            <span className="resume-role">Job Title</span>
            <span className="resume-date">Month Year – Present</span>
          </div>
          <span className="resume-company">Company Name · City, ST</span>
          <ul className="resume-bullets">
            <li>Placeholder responsibility or achievement</li>
            <li>Placeholder responsibility or achievement</li>
            <li>Placeholder responsibility or achievement</li>
          </ul>
        </div>

        <div className="resume-entry">
          <div className="resume-entry-header">
            <span className="resume-role">Job Title</span>
            <span className="resume-date">Month Year – Month Year</span>
          </div>
          <span className="resume-company">Company Name · City, ST</span>
          <ul className="resume-bullets">
            <li>Placeholder responsibility or achievement</li>
            <li>Placeholder responsibility or achievement</li>
          </ul>
        </div>
      </section>

      <section className="resume-section">
        <h2 className="section-header"><span className="accent">&gt;</span> skills</h2>
        <div className="skills-grid">
          <div className="skill-group">
            <h3>// technical</h3>
            <p>Skill · Skill · Skill · Skill · Skill</p>
          </div>
          <div className="skill-group">
            <h3>// tools</h3>
            <p>Tool · Tool · Tool · Tool · Tool</p>
          </div>
          <div className="skill-group">
            <h3>// platforms</h3>
            <p>Platform · Platform · Platform</p>
          </div>
        </div>
      </section>

      <section className="resume-section">
        <h2 className="section-header"><span className="accent">&gt;</span> certifications</h2>
        <div className="resume-entry">
          <div className="resume-entry-header">
            <span className="resume-role">Certification Name</span>
            <span className="resume-date">Year</span>
          </div>
          <span className="resume-company">Issuing Organization</span>
        </div>
        <div className="resume-entry">
          <div className="resume-entry-header">
            <span className="resume-role">Certification Name</span>
            <span className="resume-date">In Progress</span>
          </div>
          <span className="resume-company">Issuing Organization</span>
        </div>
      </section>

      <section className="resume-section">
        <h2 className="section-header"><span className="accent">&gt;</span> education</h2>
        <div className="resume-entry">
          <div className="resume-entry-header">
            <span className="resume-role">Degree or Program</span>
            <span className="resume-date">Year</span>
          </div>
          <span className="resume-company">Institution Name</span>
        </div>
      </section>
    </div>
  );
}