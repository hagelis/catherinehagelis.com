# Portfolio Website
My portfolio website built with React, Vite, and TailwindCSS, showcasing my projects, skills, certifications, and background.

Deployed on AWS using S3 static hosting, CloudFront CDN, Route 53 DNS, and ACM-managed HTTPS, with a live traffic analytics dashboard powered by a serverless metrics pipeline.

## Features
- Clean, responsive UI built with React + TailwindCSS
- Dynamic sections for Projects, Skills, Certifications, and Contact
- Live traffic dashboard visualizing weekly CloudFront analytics via Recharts
- Custom animations and modern gradient design
- Fully custom domain: catherinehagelis.com
- Secure HTTPS with automatic TLS via AWS Certificate Manager
- Global content delivery using CloudFront CDN
- Fast page loads with Vite asset optimization
- Zero-server, highly available cloud hosting
- Automated CI/CD using GitHub Actions and OIDC

## Serverless Metrics Pipeline
A weekly analytics pipeline that processes CloudFront access logs and delivers an AI-generated traffic summary to my inbox every Monday.

- AWS EventBridge — scheduled cron trigger (Mondays at 14:00 UTC)
- AWS Lambda — processes and analyzes CloudFront access logs from S3
- Claude API — generates a natural language summary of weekly traffic
- AWS SES — delivers the summary via automated email
- AWS DynamoDB — persists weekly metrics for dashboard visualization
- Bot/crawler filtering via regex on user agent field for accurate traffic data

## Tech Stack

### Client
- React
- Vite
- TailwindCSS
- Recharts
- Lucide Icons

### Cloud / Deployment
- AWS S3 — static file hosting + CloudFront log storage
- AWS CloudFront — CDN + HTTPS + caching
- AWS Route 53 — custom domain + DNS
- AWS Certificate Manager (ACM) — TLS certificate
- AWS Lambda — serverless compute for metrics pipeline
- AWS EventBridge — scheduled pipeline trigger
- AWS DynamoDB — metrics persistence
- AWS SES — automated email delivery
- AWS Secrets Manager — secure API key storage
- GitHub Actions — automated CI/CD pipeline with OIDC

## How It Was Built

### Infrastructure
All AWS infrastructure was provisioned manually via the AWS Console and configured to work together as a cohesive deployment pipeline. No IaC was used for this project.

### Frontend
Built locally using React, Vite, and TailwindCSS. Production builds are generated with `npm run build` and deployed to S3 via GitHub Actions on every push to `main`.

### CI/CD
GitHub Actions handles the full deployment workflow: authenticates to AWS via OIDC with no stored credentials, builds the Vite app, uploads to S3, and invalidates the CloudFront cache automatically.

### Serverless Pipeline
The metrics pipeline was built and deployed using AWS Lambda (Python), with EventBridge for scheduling, DynamoDB for persistence, SES for email delivery, and Secrets Manager for secure API key storage. CloudFront access logs are pulled from S3, filtered for bots and crawlers, and passed to the Claude API for summarization.

## Deployment (AWS)
This portfolio is deployed using the following AWS setup:

### S3 (Static Hosting)
- Stores production build files
- Static website hosting enabled

### CloudFront
- Origin: S3 website endpoint
- Viewer Protocol: Redirect HTTP to HTTPS
- Custom SSL certificate (ACM)
- Default root object: index.html
- Global edge caching + distribution

### Route 53
- A-records for:
  - catherinehagelis.com
  - www.catherinehagelis.com
- Alias to CloudFront distribution

### ACM
- Wildcard TLS certificate
- DNS validation via Route 53

## CI/CD (GitHub Actions)
This project uses a GitHub Actions workflow for automated deployments:

- Authenticates to AWS via OIDC, no hardcoded credentials or stored secrets
- Builds the Vite app on every push to `main`
- Uploads build output to the S3 bucket
- Invalidates CloudFront cache automatically
- Fully automated production deployments with no manual steps required

## Screenshots
<img width="1353" height="751" alt="Screenshot 2025-11-09 at 8 17 08 PM" src="https://github.com/user-attachments/assets/0c8e1a47-0c3f-41cc-bb6e-a74b3729ddde" />
