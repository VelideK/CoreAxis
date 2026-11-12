"use client";

import Image from "next/image";
import { useState } from "react";
import AxiAssistant from "./components/AxiAssistant";

const navigation = [
  { label: "BPM services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "Our approach", href: "#approach" },
  { label: "Pricing", href: "#pricing" },
];

const socialProfiles = [
  { label: "Instagram", mark: "IG", href: "" },
  { label: "X", mark: "X", href: "" },
  { label: "LinkedIn", mark: "in", href: "" },
];

const services = [
  {
    number: "01",
    title: "Process discovery",
    description:
      "Understand how work moves today, find friction points, and agree on what better should look like.",
  },
  {
    number: "02",
    title: "Workflow design",
    description:
      "Map roles, decisions, approvals, and exceptions into clear processes people can follow.",
  },
  {
    number: "03",
    title: "Automation enablement",
    description:
      "Identify repeatable work and shape practical automation around your teams and systems.",
  },
  {
    number: "04",
    title: "Governance & improvement",
    description:
      "Create ownership, process standards, and a path to measure and improve operations over time.",
  },
];

const solutions = [
  {
    title: "Approvals & requests",
    description: "Make reviews, decisions, and handoffs easier to follow.",
    icon: "↗",
  },
  {
    title: "Employee onboarding",
    description: "Coordinate the people, steps, and information behind a smooth start.",
    icon: "＋",
  },
  {
    title: "Customer operations",
    description: "Bring consistency to customer onboarding and service workflows.",
    icon: "◎",
  },
  {
    title: "Procurement & finance",
    description: "Clarify purchase requests, invoice routing, and financial approvals.",
    icon: "◇",
  },
];

const approach = [
  {
    number: "01",
    title: "Understand",
    description: "Learn your goals, systems, constraints, and current process.",
  },
  {
    number: "02",
    title: "Design",
    description: "Agree on a practical future state with clear ownership and controls.",
  },
  {
    number: "03",
    title: "Enable",
    description: "Plan the right workflow, automation, and integration approach.",
  },
  {
    number: "04",
    title: "Improve",
    description: "Review outcomes and refine the process as your operation evolves.",
  },
];

const engagements = [
  {
    title: "Process assessment",
    description: "A focused start to understand a process and identify improvement priorities.",
    details: ["Current-state review", "Opportunity map", "Recommended next steps"],
  },
  {
    title: "Workflow pilot",
    description: "A scoped engagement to design and validate a priority workflow.",
    details: ["Process and roles", "Approval and exception paths", "Pilot delivery plan"],
    featured: true,
  },
  {
    title: "Business transformation",
    description: "A coordinated program for complex or cross-team process change.",
    details: ["Multiple processes", "Integration and governance planning", "Ongoing improvement"],
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <main>
      <header className="site-header" id="top">
        <div className="site-container header-inner">
          <a aria-label="CoreAxis home" className="site-brand" href="#top" onClick={closeMenu}>
            <Image
              alt="CoreAxis Global Services"
              className="site-logo"
              height={192}
              priority
              src="/coreaxis-logo.png"
              width={288}
            />
          </a>

          <button
            aria-controls="primary-navigation"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            className={`menu-toggle${menuOpen ? " is-open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
          >
            <span />
            <span />
          </button>

          <nav
            aria-label="Main navigation"
            className={`site-nav${menuOpen ? " is-open" : ""}`}
            id="primary-navigation"
          >
            {navigation.map((item) => (
              <a href={item.href} key={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
            <a className="button button-gold nav-cta" href="#contact" onClick={closeMenu}>
              Talk to CoreAxis <span aria-hidden="true">↗</span>
            </a>
          </nav>
        </div>
      </header>

      <section aria-labelledby="hero-title" className="hero">
        <div className="site-container hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">
              <span /> BUSINESS PROCESS MANAGEMENT
            </p>
            <h1 id="hero-title">
              Make your business processes <span>work better.</span>
            </h1>
            <p className="hero-description">
              CoreAxis helps organizations bring clarity to the workflows, approvals, and
              handoffs that keep business moving.
            </p>
            <div className="hero-actions">
              <a className="button button-gold" href="#services">
                Explore BPM services <span aria-hidden="true">→</span>
              </a>
              <a className="button button-outline" href="#pricing">
                Explore pricing
              </a>
            </div>
            <div className="hero-note">
              <span className="note-rule" />
              <span>Powering global business operations</span>
            </div>
          </div>

          <figure aria-label="Illustrative business process flow" className="process-visual">
            <div className="visual-topline">
              <span className="visual-dot" />
              ILLUSTRATIVE PROCESS FLOW
              <span className="visual-menu">···</span>
            </div>
            <div className="visual-title-row">
              <div>
                <span className="visual-caption">WORKFLOW EXAMPLE</span>
                <h2>Request to resolution</h2>
              </div>
              <span className="visual-tag">BPM</span>
            </div>
            <div className="flow-list">
              <div className="flow-step">
                <span className="flow-number">01</span>
                <span className="flow-icon">↙</span>
                <span className="flow-label">
                  <strong>Intake</strong>
                  <small>Capture the request</small>
                </span>
                <span className="flow-state">Defined</span>
              </div>
              <span aria-hidden="true" className="flow-connector" />
              <div className="flow-step">
                <span className="flow-number">02</span>
                <span className="flow-icon">⌕</span>
                <span className="flow-label">
                  <strong>Review</strong>
                  <small>Route to the right owner</small>
                </span>
                <span className="flow-state">Assigned</span>
              </div>
              <span aria-hidden="true" className="flow-connector" />
              <div className="flow-step">
                <span className="flow-number">03</span>
                <span className="flow-icon flow-icon-gold">✓</span>
                <span className="flow-label">
                  <strong>Resolve</strong>
                  <small>Complete and learn</small>
                </span>
                <span className="flow-state">Measured</span>
              </div>
            </div>
            <figcaption>
              A simple example of how a process can be made visible from start to finish.
            </figcaption>
            <span aria-hidden="true" className="visual-orbit orbit-one" />
            <span aria-hidden="true" className="visual-orbit orbit-two" />
          </figure>
        </div>
      </section>

      <section aria-label="CoreAxis capabilities" className="capability-strip">
        <div className="site-container capability-list">
          <span>PROCESS DISCOVERY</span>
          <i />
          <span>WORKFLOW DESIGN</span>
          <i />
          <span>AUTOMATION STRATEGY</span>
          <i />
          <span>GOVERNANCE & IMPROVEMENT</span>
        </div>
      </section>

      <section aria-labelledby="services-title" className="section services-section" id="services">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow section-eyebrow">HOW COREAXIS HELPS</p>
              <h2 id="services-title">
                Better processes start with <span>better visibility.</span>
              </h2>
            </div>
            <p className="section-intro">
              Bring people, work, and systems into a process that is easier to understand,
              manage, and improve.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <span className="card-number">{service.number}</span>
                <span aria-hidden="true" className="service-arrow">
                  ↗
                </span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="card-rule" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="solutions-title"
        className="section solutions-section"
        id="solutions"
      >
        <div className="site-container solutions-layout">
          <div className="solutions-intro">
            <p className="eyebrow section-eyebrow">BUILT AROUND REAL WORK</p>
            <h2 id="solutions-title">
              Make complex work feel <span>straightforward.</span>
            </h2>
            <p>
              From a single approval to a cross-functional operation, BPM helps teams make
              repeatable work clearer and more consistent.
            </p>
            <a className="text-link" href="#approach">
              See how we work <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="solution-grid">
            {solutions.map((solution) => (
              <article className="solution-card" key={solution.title}>
                <span aria-hidden="true" className="solution-icon">
                  {solution.icon}
                </span>
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="approach-title" className="section approach-section" id="approach">
        <div className="site-container">
          <div className="center-heading">
            <p className="eyebrow section-eyebrow">A PRACTICAL PATH FORWARD</p>
            <h2 id="approach-title">
              From process challenge to <span>lasting improvement.</span>
            </h2>
            <p>
              A collaborative approach helps make sure process changes solve the right problem
              and work for the people who use them.
            </p>
          </div>
          <div className="approach-grid">
            {approach.map((step) => (
              <article className="approach-step" key={step.number}>
                <span className="approach-number">{step.number}</span>
                <span className="approach-line" />
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="pricing-title" className="section pricing-section" id="pricing">
        <div className="site-container">
          <div className="section-heading pricing-heading">
            <div>
              <p className="eyebrow section-eyebrow">PRICING THAT FITS THE WORK</p>
              <h2 id="pricing-title">
                Clear scope. <span>Custom investment.</span>
              </h2>
            </div>
            <p className="section-intro">
              Every organization starts in a different place. CoreAxis scopes engagements
              around your processes, complexity, integrations, and delivery goals.
            </p>
          </div>

          <div className="pricing-grid">
            {engagements.map((engagement) => (
              <article
                className={`pricing-card${engagement.featured ? " pricing-featured" : ""}`}
                key={engagement.title}
              >
                {engagement.featured && <span className="popular-label">A focused first step</span>}
                <h3>{engagement.title}</h3>
                <p>{engagement.description}</p>
                <div className="price-label">Custom quote</div>
                <span className="price-caption">Scoped to your needs</span>
                <ul>
                  {engagement.details.map((detail) => (
                    <li key={detail}>
                      <span aria-hidden="true">✓</span> {detail}
                    </li>
                  ))}
                </ul>
                <a className={engagement.featured ? "button button-gold" : "button button-plan"} href="#contact">
                  Discuss this option <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
          <p className="pricing-note">
            Fees depend on the agreed scope, delivery timeline, integrations, and support needs.
            A written proposal follows discovery.
          </p>
        </div>
      </section>

      <section aria-labelledby="contact-title" className="contact-section" id="contact">
        <div className="site-container contact-layout">
          <div>
            <p className="eyebrow">START WITH ONE PROCESS</p>
            <h2 id="contact-title">
              Ready to make work <span>work better?</span>
            </h2>
            <p>
              Tell us what is slowing your operation down. We’ll help shape a practical next
              step.
            </p>
          </div>
          <div className="contact-placeholder">
            <span className="contact-status">
              <i /> Contact channel to be confirmed
            </span>
            <p>
              Add CoreAxis’s official sales email, phone number, or contact form URL to enable
              consultation requests.
            </p>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="site-container footer-inner">
          <a aria-label="CoreAxis home" className="footer-brand" href="#top">
            <Image
              alt="CoreAxis Global Services"
              className="footer-logo"
              height={192}
              src="/coreaxis-logo.png"
              width={288}
            />
          </a>
          <p>Powering global business operations.</p>
          <div className="footer-links">
            <a href="#services">Services</a>
            <a href="#approach">Our approach</a>
            <a href="#pricing">Pricing</a>
          </div>
          <div aria-label="CoreAxis social profiles" className="footer-socials">
            {socialProfiles.map((profile) =>
              profile.href ? (
                <a
                  aria-label={`CoreAxis on ${profile.label}`}
                  className="social-profile"
                  href={profile.href}
                  key={profile.label}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span aria-hidden="true" className="social-mark">
                    {profile.mark}
                  </span>
                  <span>{profile.label}</span>
                </a>
              ) : (
                <span
                  aria-label={`${profile.label} profile URL to be added`}
                  className="social-profile social-placeholder"
                  key={profile.label}
                  title="Add the official CoreAxis profile URL here"
                >
                  <span aria-hidden="true" className="social-mark">
                    {profile.mark}
                  </span>
                  <span>{profile.label}</span>
                </span>
              ),
            )}
          </div>
          <span className="copyright">© {new Date().getFullYear()} CoreAxis Global Services</span>
        </div>
      </footer>
      <AxiAssistant />
    </main>
  );
}
