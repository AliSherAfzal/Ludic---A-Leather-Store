# ADR-002 — Frontend Architecture

**Status:** Accepted

---

# Decision

The frontend will use:

- React
- Vite
- Tailwind CSS

with a component-driven architecture.

---

# Rationale

React provides reusable components, a mature ecosystem, and excellent compatibility with modern tooling.

Vite offers fast development builds and an efficient developer experience.

Tailwind CSS enables a scalable design system while minimizing custom CSS duplication.

---

# Architecture Principles

- Component Reusability
- Separation of Responsibilities
- Layout-Based Routing
- Context for Global State
- Mock Data before APIs
- API-first integration in future sprints