# admin-app

This is a remote microfrontend that provides an admin panel component to the `main-app` via Module Federation.

## Features

- Displays a greeting and user information
- Checks authentication and role from shared Pinia store
- Has its own internal routing (e.g. `/users`, `/settings`)
- Integrates smoothly as a secured remote module

## Technologies

- Vue 3
- Vite
- Pinia
- Vue Router
- Module Federation (originjs plugin)

## Project structure