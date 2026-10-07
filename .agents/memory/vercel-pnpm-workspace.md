---
name: Vercel builds from this pnpm workspace
description: How to validate this app's npm-based Vercel deployment from a Replit pnpm monorepo.
---

The existing Replit workspace uses a pnpm-managed `node_modules`; running `npm install` in place can fail while npm Arborist inspects that tree. A clean Vercel-style copy of the root package, Vercel config, and app source installs with npm and builds successfully.

**Why:** The local dependency tree is managed by pnpm, while Vercel is configured to install from a clean root with npm.

**How to apply:** For future deployment checks, run `npm install` and `npm run build` in a clean copy rather than replacing the workspace's pnpm-managed `node_modules`.
