"use client";

import { useState, FormEvent } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    affiliation: "",
    topic: "",
    message: "",
  });
  const [status, setStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending..." });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus({
        type: "success",
        message: "Message sent successfully! We'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        affiliation: "",
        topic: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Failed to send message. Please try again.",
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="page-shell page-hero-contact">
      <header className="page-header">
        <div className="page-eyebrow">Contact</div>
        <h1>Contact the team</h1>
        <p className="page-lead">
          Reach out about sponsorship, partnerships, speaking invitations, or joining the
          team. Messages route to student leadership and, when appropriate, faculty
          advisors.
        </p>
      </header>

      <div className="page-grid">
        <section className="page-section">
          <h2>Send us a note</h2>
          <p>
            Fill out the form below and we'll get back to you as soon as possible. All
            fields are required to help us route your message to the right team.
          </p>

          {status.type === "success" && (
            <div className="form-status form-status-success">
              <p>{status.message}</p>
            </div>
          )}

          {status.type === "error" && (
            <div className="form-status form-status-error">
              <p>{status.message}</p>
            </div>
          )}

          <form className="stack" style={{ marginTop: "0.8rem" }} onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="field">
                <label htmlFor="name">
                  Name <span style={{ color: "#FF7518" }}>*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={status.type === "loading"}
                />
              </div>
              <div className="field">
                <label htmlFor="email">
                  Email <span style={{ color: "#FF7518" }}>*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@illinois.edu"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status.type === "loading"}
                />
              </div>
            </div>
            <div className="form-grid">
              <div className="field">
                <label htmlFor="affiliation">
                  Affiliation <span style={{ color: "#FF7518" }}>*</span>
                </label>
                <input
                  id="affiliation"
                  name="affiliation"
                  placeholder="Student, faculty, firm, organization..."
                  value={formData.affiliation}
                  onChange={handleChange}
                  required
                  disabled={status.type === "loading"}
                />
              </div>
              <div className="field">
                <label htmlFor="topic">
                  Topic <span style={{ color: "#FF7518" }}>*</span>
                </label>
                <select
                  id="topic"
                  name="topic"
                  value={formData.topic}
                  onChange={handleChange}
                  required
                  disabled={status.type === "loading"}
                >
                  <option value="" disabled>
                    Select a topic
                  </option>
                  <option value="sponsorship">Sponsorship / partnership</option>
                  <option value="press">Press / speaking</option>
                  <option value="student">Join the team</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="field">
              <label htmlFor="message">
                Message <span style={{ color: "#FF7518" }}>*</span>
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="How can we help?"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={status.type === "loading"}
              />
            </div>
            <div>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={status.type === "loading"}
              >
                {status.type === "loading" ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </section>

        <aside className="page-aside">
          <div className="stack">
            <div>
              <span className="badge">Routing</span>
              <p style={{ marginTop: "0.4rem", fontSize: "0.86rem" }}>
                Messages are typically routed to ISD leadership,project managers or subteam leads based on the topic selected. If you are a sponsor, please reach out to the team directly at <a href="mailto:uiucsolardecahtlon@gmail.com" style={{ color: "#FF7518" }}>uiucsolardecahtlon@gmail.com</a>.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}


