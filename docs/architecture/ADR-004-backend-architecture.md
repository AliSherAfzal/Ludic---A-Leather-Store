# ADR-004 — Backend Architecture

**Status:** Accepted

---

# Decision

The backend will follow a Modular Monolith architecture.

---

# Structure

```
Routes
↓

Controllers
↓

Services
↓

Models
```

---

# Rationale

This approach keeps business logic isolated from routing while remaining simpler than microservices.

It also allows future extraction of services if scaling requirements change.