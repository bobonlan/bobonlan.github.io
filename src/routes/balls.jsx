import "./../App.css";

export default function Balls() {
  return (
    <div className="page-content">
      <section className="about-hero">
        <p className="about-prompt">// about</p>
        <h1 className="about-name">bobonlan</h1>
        <p className="about-tagline">
          amateur IT guy. world of warcraft addict.
        </p>
      </section>

      <section className="about-section">
        <h2 className="section-header"><span className="accent">&gt;</span> about me</h2>
        <p>
          This website started as a way to learn web dev, then evolved into 
          me wanting a place to host anything I create. It may not be the most 
          exciting thing ever made, but it's mine.
        </p>
      </section>

      <section className="about-section">
        <h2 className="section-header"><span className="accent">&gt;</span> what i'm into</h2>
        <div className="about-grid">
          <div className="about-card">
            <h3>// games</h3>
            <p>Extremely addicted to WoW TBC Classic. I main a Fury Warrior. I also play Magic: the Gathering in person and on Arena.</p>
          </div>
          <div className="about-card">
            <h3>// tech</h3>
            <p>I consume a lot of homelabbing content. Currently working on a smallscale homelab on an old laptop I have. 
              Pihole and Plex media server coming soon.
            </p>
          </div>
          <div className="about-card">
            <h3>// the site</h3>
            <p>I made this site as a way to learn web dev. Sort of a resume/portfolio 
              type of thing. It ain't much, but it's honest work.
            </p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2 className="section-header"><span className="accent">&gt;</span> find me</h2>
        <p>
          I'm bobonlan pretty much everywhere. GitHub, Twitch, Reddit, all of it. 
          Links are in the footer.
        </p>
      </section>
    </div>
  );
}