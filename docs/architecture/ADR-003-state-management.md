# ADR-003 — State Management

**Status:** Accepted

---

# Decision

Global application state will initially use the React Context API.

---

# Rationale

Current application complexity does not justify introducing Redux or Zustand.

Context provides sufficient capability for:

- Shopping Cart
- Authentication (future)
- Theme (future)

---

# Future

If application complexity increases significantly, a dedicated state management library may be introduced.
Current Context Usage

- Shopping Cart