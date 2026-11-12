"use client";

import { type FormEvent, useEffect, useRef, useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const suggestedQuestions = [
  "What is BPM?",
  "How can CoreAxis help?",
  "How does pricing work?",
];

function getAnswer(question: string) {
  const text = question.toLowerCase();

  if (/price|pricing|cost|quote|fee|investment/.test(text)) {
    return "CoreAxis uses custom quotes rather than fixed public rates. The engagement options shown here are a process assessment, a workflow pilot, or a broader transformation. Scope, delivery timeline, integrations, and support needs help determine the proposal.";
  }

  if (/service|help|coreaxis|offer|capabilit/.test(text)) {
    return "CoreAxis BPM services are organized around four activities:\n\n• Process discovery — understand the current work and improvement goals.\n• Workflow design — map roles, decisions, approvals, and exceptions.\n• Automation enablement — identify repeatable work and suitable automation.\n• Governance and improvement — establish ownership and keep refining the process.";
  }

  if (/approach|start|begin|step|method/.test(text)) {
    return "A practical BPM engagement can start by understanding your goals and current process, then designing a future state, planning how to enable it, and reviewing results for ongoing improvement. The right scope depends on the process and your operating context.";
  }

  if (/approval|onboard|procure|invoice|request|use case|example/.test(text)) {
    return "Common BPM opportunities include approvals and requests, employee onboarding, customer operations, and procurement or finance workflows. These are examples to explore—not prebuilt CoreAxis software features.";
  }

  if (/automat|integrat|rule|ai|artificial intelligence|rpa/.test(text)) {
    return "Automation planning looks at the full process: the people involved, system handoffs, repeatable tasks, and decision rules. Integration, RPA, or AI may fit some processes, but they should be selected only after the workflow, controls, and business needs are understood. Axi is currently a guided preview and does not run AI automation.";
  }

  if (/bpm|business process|workflow|process management/.test(text)) {
    return "Business process management (BPM) is the practice of understanding, designing, and improving how work gets done. It makes steps, owners, decisions, and handoffs clearer, then helps teams review how the process performs and improve it over time.";
  }

  return "I can help with BPM basics, CoreAxis services, example use cases, the delivery approach, and quote-based pricing. Try one of the suggested questions, or ask about a process challenge in your own words.";
}

export default function AxiAssistant() {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, open]);

  function ask(question: string) {
    const trimmed = question.trim();
    if (!trimmed) return;

    setMessages((current) => [
      ...current,
      { role: "user", content: trimmed },
      { role: "assistant", content: getAnswer(trimmed) },
    ]);
    setDraft("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    ask(draft);
  }

  return (
    <div className="axi-widget">
      {open && (
        <section
          aria-labelledby="axi-title"
          aria-modal="false"
          className="axi-panel"
          role="dialog"
        >
          <header className="axi-header">
            <span aria-hidden="true" className="axi-avatar">
              A
              <i />
            </span>
            <div className="axi-heading">
              <h2 id="axi-title">Axi</h2>
              <span>CoreAxis BPM guide</span>
            </div>
            <span className="axi-preview">PREVIEW</span>
            {messages.length > 0 && (
              <button
                aria-label="Start a new conversation"
                className="axi-icon-button"
                onClick={() => setMessages([])}
                title="Start a new conversation"
                type="button"
              >
                ↻
              </button>
            )}
            <button
              aria-label="Close Axi assistant"
              className="axi-icon-button"
              onClick={() => setOpen(false)}
              type="button"
            >
              ×
            </button>
          </header>

          <div aria-live="polite" className="axi-messages" role="log">
            {messages.length === 0 ? (
              <div className="axi-welcome">
                <span aria-hidden="true" className="axi-welcome-mark">
                  ✦
                </span>
                <h3>Hi, I’m Axi.</h3>
                <p>
                  Ask me about BPM, CoreAxis services, or how a process improvement engagement
                  might work.
                </p>
                <div className="axi-prompts">
                  {suggestedQuestions.map((question) => (
                    <button key={question} onClick={() => ask(question)} type="button">
                      {question} <span aria-hidden="true">→</span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              messages.map((message, index) => (
                <div className={`axi-message ${message.role}`} key={`${message.role}-${index}`}>
                  {message.role === "assistant" && (
                    <span aria-hidden="true" className="axi-message-avatar">
                      A
                    </span>
                  )}
                  <p>{message.content}</p>
                </div>
              ))
            )}
            <div ref={endRef} />
          </div>

          <form className="axi-composer" onSubmit={handleSubmit}>
            <label className="axi-input-wrap">
              <span className="visually-hidden">Ask Axi a question</span>
              <input
                autoComplete="off"
                maxLength={500}
                onChange={(event) => setDraft(event.target.value)}
                placeholder="Ask about BPM..."
                ref={inputRef}
                value={draft}
              />
            </label>
            <button
              aria-label="Send message"
              className="axi-send"
              disabled={!draft.trim()}
              type="submit"
            >
              <span aria-hidden="true">↑</span>
            </button>
          </form>
          <p className="axi-disclaimer">Guided preview · not connected to a live AI service</p>
        </section>
      )}

      <button
        aria-expanded={open}
        aria-label={open ? "Close Axi assistant" : "Chat with Axi"}
        className={`axi-launcher${open ? " is-open" : ""}`}
        onClick={() => setOpen(!open)}
        type="button"
      >
        {open ? (
          <span aria-hidden="true" className="axi-launcher-close">
            ×
          </span>
        ) : (
          <>
            <span aria-hidden="true" className="axi-launcher-mark">
              ✦
            </span>
            <span>Ask Axi</span>
          </>
        )}
      </button>
    </div>
  );
}
