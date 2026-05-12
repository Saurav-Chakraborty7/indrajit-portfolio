
# Deployment Guide

## Step 1 — Generate Website in Antigravity

Upload:
- content folder
- prompt file

Use the provided portfolio prompt.

## Step 2 — Review Generated UI

Check:
- Mobile responsiveness
- Button links
- Resume download
- Section spacing
- Dark mode consistency

## Step 3 — Push to GitHub

Commands:

git init
git add .
git commit -m "Initial QA portfolio"
git branch -M main
git remote add origin YOUR_REPO
git push -u origin main

## Step 4 — Deploy to Vercel

- Import GitHub repo
- Click deploy
- Done

Recommended domain examples:
- indrajitsqa.dev
- sauravqa.dev
