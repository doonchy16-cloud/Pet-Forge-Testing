const downloadUrl =
  "https://github.com/doonchy16-cloud/Pet-Forge-Testing/releases/download/mvp-v1.0.0/Pet.Forge-win32-x64.zip";

const githubUrl = "https://github.com/doonchy16-cloud/Pet-Forge-Testing";

function DownloadIcon() {
  return (
    <span className="download-icon" aria-hidden="true">
      <span className="download-arrow">↓</span>
    </span>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Pet Forge home">
          <span className="brand-mark" aria-hidden="true">PF</span>
          <span>Pet Forge</span>
        </a>
        <div className="nav-links">
          <a href="#install">How to install</a>
          <a href={githubUrl} target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="ambient ambient-one" />
        <div className="ambient ambient-two" />
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> MVP VERSION · WINDOWS</div>
          <h1>Build a world.<br /><span>Raise a legend.</span></h1>
          <p className="hero-description">
            Meet, care for, and grow your own extraordinary companions in Pet Forge.
            Download the first MVP release and help shape what comes next.
          </p>
          <div className="download-row">
            <a className="download-button" href={downloadUrl}>
              <DownloadIcon />
              <span>
                <small>DOWNLOAD FOR WINDOWS</small>
                <strong>Pet Forge — MVP Version</strong>
              </span>
            </a>
            <div className="file-meta">
              <strong>147.2 MB</strong>
              <span>Windows 64-bit · ZIP</span>
            </div>
          </div>
          <p className="release-note">
            <span aria-hidden="true">✦</span> Early build — expect rough edges and frequent improvements.
          </p>
        </div>

        <div className="hero-art" aria-label="Pet Forge MVP game artwork">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="forge-card">
            <div className="card-shine" />
            <span className="card-label">YOUR FIRST COMPANION</span>
            <div className="egg">
              <div className="egg-glow" />
              <div className="egg-body"><i /><i /><i /></div>
            </div>
            <div className="card-footer">
              <span>RARITY</span>
              <strong>UNKNOWN</strong>
            </div>
          </div>
          <span className="spark spark-one">✦</span>
          <span className="spark spark-two">✦</span>
          <span className="spark spark-three">·</span>
        </div>
      </section>

      <section className="trust-strip" aria-label="Release facts">
        <div><strong>MVP</strong><span>Early Access Version</span></div>
        <div><strong>64-BIT</strong><span>Made for Windows</span></div>
        <div><strong>FREE</strong><span>No account required</span></div>
        <div><strong>OPEN</strong><span>Public GitHub release</span></div>
      </section>

      <section className="install-section" id="install">
        <div className="section-heading">
          <span className="kicker">GET STARTED</span>
          <h2>From download to adventure<br />in three simple steps.</h2>
          <p>No launcher. No installer. Just unzip and play.</p>
        </div>
        <ol className="steps">
          <li>
            <span className="step-number">01</span>
            <div className="step-icon">↓</div>
            <h3>Download</h3>
            <p>Grab the Pet Forge MVP ZIP using the button above.</p>
          </li>
          <li>
            <span className="step-number">02</span>
            <div className="step-icon">◇</div>
            <h3>Extract</h3>
            <p>Right-click the ZIP, choose “Extract All,” and open the new folder.</p>
          </li>
          <li>
            <span className="step-number">03</span>
            <div className="step-icon">▶</div>
            <h3>Launch</h3>
            <p>Run the Pet Forge application and begin your adventure.</p>
          </li>
        </ol>
      </section>

      <section className="mvp-section">
        <div>
          <span className="kicker">A NOTE FROM THE FORGE</span>
          <h2>This is the beginning.</h2>
        </div>
        <div className="mvp-copy">
          <p>
            Pet Forge is currently an <strong>MVP Version</strong>—a focused first release
            built to prove the heart of the experience. Features may change, saves may
            evolve, and you may encounter bugs along the way.
          </p>
          <p>Your feedback helps turn this small spark into something extraordinary.</p>
          <a href={githubUrl} target="_blank" rel="noreferrer">View the project on GitHub <span>→</span></a>
        </div>
      </section>

      <section className="checksum" aria-label="Download verification">
        <div>
          <span className="shield" aria-hidden="true">✓</span>
          <div><strong>Verify your download</strong><span>SHA-256 checksum</span></div>
        </div>
        <code>84FE224710BB7D6C946009CCF9C3416FD3EA669218F4EF7A185DE729B6CA9587</code>
      </section>

      <footer>
        <a className="brand" href="#top"><span className="brand-mark">PF</span><span>Pet Forge</span></a>
        <p>MVP Version · Built with care, still being forged.</p>
        <a href={githubUrl} target="_blank" rel="noreferrer">GitHub ↗</a>
      </footer>
    </main>
  );
}
