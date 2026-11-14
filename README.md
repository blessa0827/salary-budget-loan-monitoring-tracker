# Salary, Budget & Loan Monitor

A pastel-themed finance dashboard for tracking salary, budget, joint-loan obligations, co-borrower contributions, and payment dates. This repository contains both a responsive web app (Next.js + React) and an Expo mobile app (React Native).

## Apps

- **Web:** `apps/web` — Next.js App Router dashboard. Run `npm run dev:web` from the repository root.
- **Mobile:** `apps/mobile` — Expo app. Run `npm run start:mobile`, then open it in Expo Go or a simulator.

## Tracker data currently included

- Total joint monthly obligation: **₱4,121.75**
- Your monthly share: **₱124.74**
- RCBC joint loan: **₱2,254.74**, due on the 28th
- BPI joint loan: **₱1,867.01**, due on the 15th
- Co-borrower shares: Ante **₱3,000.00**, Love **₱997.01**, you **₱124.74**

The apps use sample dashboard data from the CSV supplied in the conversation. Salary and general budget data were not included in that CSV, so those areas are presented as ready-to-populate summaries rather than fabricated values. The source sheet has inconsistent cutoff labels in its summary section; loan due dates shown here follow the individual facility rows.

## Customize

Update the values in `apps/web/src/app/page.tsx` and `apps/mobile/App.tsx` to reflect changes to the tracker. A future enhancement can load CSV/Google Sheets data directly.
