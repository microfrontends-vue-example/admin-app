# admin-app

Admin dashboard microfrontend for managing system data and operations within the microfrontend system.

---

## Role

- Provides administrative interface for system management
- Handles admin-specific workflows and operations
- Manages data across different domains
- Isolated from user-facing microfrontends

---

## Integration

- Exposed as a remote module via Module Federation
- Loaded dynamically by the host application (`main-app`)
- Designed to be independently deployable
- Loaded via remote entry URL at runtime
- Designed to be consumed by multiple host applications
- Versioned and integrated via Module Federation contracts

---

## Tech Stack

- Vue 3
- TypeScript
- Vite
- Module Federation (vite-plugin-federation)

---

## Development

```bash
yarn
yarn dev
```

Application runs at http://localhost:3003

---

## Part of system

This application is part of the microfrontend system:  
[Microfrontends Vue Lab](https://github.com/Artem-Makarchenko-Dev/microfrontends-vue-lab)