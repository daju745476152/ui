const sideNav = [
  { label: "CURRENT VOID", active: true },
  { label: "NEURAL HISTORY" },
  { label: "ASSETS" },
  { label: "SYSTEM CONFIG" },
];

const commandSteps = [
  {
    title: "指令优化",
    detail: "结合已知意图补齐约束与语气",
  },
  {
    title: "执行规划",
    detail: "按优先级生成多阶段流程",
  },
  {
    title: "渲染执行",
    detail: "输出结果并保留可追踪痕迹",
  },
];

const modeButtons = ["Normal", "DeepThink"];

export default function Home() {
  return (
    <main className="app-shell">
      <aside className="sidebar">
        <div>
          <div className="brand-block">
            <div className="brand-mark">vivo</div>
            <div>
              <p className="brand-title">Pro Studio</p>
              <p className="brand-subtitle">PRECISION V2</p>
            </div>
          </div>

          <button className="sequence-button">+ Initiate Sequence</button>

          <nav className="side-nav">
            {sideNav.map((item) => (
              <a
                key={item.label}
                href="#"
                className={item.active ? "side-link active" : "side-link"}
              >
                <span className="side-link-icon" />
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="sidebar-footer">
          <div className="support-links">
            <a href="#">HELP</a>
            <a href="#">STATUS</a>
          </div>

          <div className="profile-card">
            <div className="avatar">C</div>
            <div>
              <p>Core Admin</p>
              <span>Level 7 Access</span>
            </div>
          </div>
        </div>
      </aside>

      <section className="workspace">
        <header className="topbar">
          <div className="topbar-left">
            <h1>Studio Precision</h1>
            <nav className="top-nav">
              <a href="#">Gallery</a>
              <a href="#" className="is-active">
                Model Lab
              </a>
              <a href="#">Community</a>
            </nav>
          </div>

          <div className="topbar-actions">
            <button aria-label="messages" className="icon-button">
              <span className="icon-circle" />
            </button>
            <button aria-label="notifications" className="icon-button bell">
              <span className="icon-bell" />
            </button>
          </div>
        </header>

        <div className="workspace-gradient" />

        <section className="hero-stack">
          <div className="status-card glass-panel">
            <div className="status-pill">ASSET ANALYZER 70%</div>
            <p className="status-line">已经理解编辑意图</p>
            <p className="status-line">识别为风格迁移任务</p>
            <div className="step-list">
              {commandSteps.map((step) => (
                <div key={step.title} className="step-item">
                  <div className="step-star" />
                  <div>
                    <p>{step.title}</p>
                    <span>{step.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="content-block">
            <div className="section-label">
              <span />
              VOID INTELLIGENCE
            </div>

            <div className="portrait-card">
              <div className="portrait-image" />
              <div className="portrait-glow" />
            </div>
          </div>
        </section>

        <section className="prompt-dock">
          <div className="dock-background" />
          <div className="prompt-box">
            <div className="prompt-input">Ask anything...</div>

            <div className="prompt-toolbar">
              <button className="toolbar-square" aria-label="add">
                +
              </button>

              <div className="toolbar-modes">
                {modeButtons.map((label) => (
                  <button key={label} className="mode-chip">
                    <span className="mode-spark" />
                    {label}
                    <span className="mode-caret" />
                  </button>
                ))}
              </div>

              <div className="toolbar-actions">
                <button className="voice-button">
                  <span className="voice-wave" />
                  Voice
                </button>
                <button className="send-button" aria-label="send">
                  <span className="send-arrow" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
