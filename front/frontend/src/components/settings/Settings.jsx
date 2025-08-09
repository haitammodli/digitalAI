import React, { useState } from "react";
import "./Settings.css";

const MENU = [
  { key: "profile", label: "Profile" },
  { key: "notifications", label: "Notifications" },
  { key: "security", label: "Security" },
  { key: "appearance", label: "Appearance" },
  { key: "integrations", label: "Integrations" },
];

const Settings = () => {
  const [active, setActive] = useState("profile");

  return (
    <div className="settings-page-container">
      {}
      <header className="settings-header">
        <h1>Settings</h1>
        <button className="btn-primary">Save</button>
      </header>

      {}
      <section className="settings-layout">
        <aside className="card settings-menu">
          {MENU.map((m) => (
            <button
              key={m.key}
              className={`menu-item ${active === m.key ? "active" : ""}`}
              onClick={() => setActive(m.key)}
            >
              {m.label}
            </button>
          ))}
        </aside>

        <main className="settings-content">
          {active === "profile" && <ProfilePanel />}
          {active === "notifications" && <NotificationsPanel />}
          {active === "security" && <SecurityPanel />}
          {active === "appearance" && <AppearancePanel />}
          {active === "integrations" && <IntegrationsPanel />}
        </main>
      </section>
    </div>
  );
};

export default Settings;

/* -------- PANELS -------- */

function ProfilePanel() {
  return (
    <section className="card panel">
      <h2>Profile Settings</h2>
      <p className="muted">Manage your personal information and preferences</p>

      <div className="form-grid">
        <Field label="First Name"><input type="text" placeholder="John" /></Field>
        <Field label="Last Name"><input type="text" placeholder="Doe" /></Field>

        <Field label="Email" full><input type="email" placeholder="john@example.com" /></Field>
        <Field label="Company" full><input type="text" placeholder="DailyPost Inc." /></Field>
        <Field label="Bio" full><textarea rows="5" placeholder="Content creator and social media enthusiast..." /></Field>
      </div>

      <div className="end">
        <button className="btn-primary"><span className="ico">💾</span> Save Changes</button>
      </div>
    </section>
  );
}

function NotificationsPanel() {
  return (
    <section className="card panel">
      <h2>Notification Preferences</h2>
      <p className="muted">Choose what notifications you want to receive</p>
      <Row title="Post Published" sub="Notify when posts are successfully published" />
      <Row title="Engagement Alerts" sub="Get notified about high engagement on your posts" defaultOn />
      <Row title="Scheduling Reminders" sub="Reminders about upcoming scheduled posts" />
    </section>
  );
}

function SecurityPanel() {
  return (
    <section className="card panel">
      <h2>Security</h2>
      <div className="form-grid">
        <Field label="Current Password" full><input type="password" /></Field>
        <div />
        <Field label="New Password"><input type="password" /></Field>
        <Field label="Confirm Password"><input type="password" /></Field>
      </div>
      <div className="end"><button className="btn-primary">Update Password</button></div>
    </section>
  );
}

function AppearancePanel() {
  return (
    <section className="card panel">
      <h2>Appearance</h2>
      <div className="form-grid">
        <Field label="Theme"><select><option>Light</option><option>Dark</option></select></Field>
        <Field label="Density"><select><option>Comfortable</option><option>Compact</option></select></Field>
      </div>
    </section>
  );
}

function IntegrationsPanel() {
  const providers = ["Telegram", "Reddit", "LinkedIn"];
  return (
    <section className="card panel">
      <h2>Integrations</h2>
      <div className="providers">
        {providers.map((p) => (
          <div key={p} className="provider">
            <div className="provider-info">
              <div className="logo">{p[0]}</div>
              <div>
                <div className="name">{p}</div>
                <div className="muted">Connect your {p} account</div>
              </div>
            </div>
            <button className="btn-secondary">Connect</button>
          </div>
        ))}
      </div>
    </section>
  );
}

function Field({ label, children, full }) {
  return (
    <label className={`field ${full ? "full" : ""}`}>
      <span>{label}</span>
      {children}
    </label>
  );
}
function Row({ title, sub, defaultOn }) {
  const [on, setOn] = useState(!!defaultOn);
  return (
    <div className="row">
      <div>
        <div className="row-title">{title}</div>
        <div className="row-sub muted">{sub}</div>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={on}
        className={`toggle ${on ? "on" : ""}`}
        onClick={() => setOn(!on)}
      >
        <span className="dot" />
      </button>
    </div>
  );
}
