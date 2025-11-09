# Personal Portfolio Website

A modern personal website built with React, Vite, and TailwindCSS. The site is deployed on AWS using S3 and CloudFront, with DNS managed through Route 53 and HTTPS provided by AWS Certificate Manager. This project serves as a professional portfolio and a demonstration of front-end development and practical cloud deployment skills.

## Features

- Clean, responsive UI built with React, Vite, and TailwindCSS  
- Hosted on Amazon S3 as a static site  
- Distributed globally using Amazon CloudFront  
- Custom domain managed through Amazon Route 53  
- HTTPS enabled through AWS Certificate Manager  
- Fully automated deployment pipeline using GitHub Actions  
- Secure authentication between GitHub and AWS using IAM OIDC  

## Tech Stack

**Client:** React, Vite, TailwindCSS  
**Cloud:** AWS S3, CloudFront, Route 53, ACM  
**CI/CD:** GitHub Actions (OIDC-based authentication)  

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)  
- Git  

### Local Setup

To run the project locally:

Clone the repository

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The site will be available at:

```
http://localhost:5173
```

## Deployment Pipeline (Informational Only)

This project uses an automated CI/CD pipeline for *my own deployment process*.  
The pipeline runs in GitHub Actions whenever changes are pushed to the `main` branch.

The workflow performs:  

1. Installs dependencies  
2. Builds the production bundle using Vite  
3. Syncs the built files to an Amazon S3 bucket  
4. Invalidates the associated CloudFront distribution so updated files propagate globally  

All AWS authentication is handled using GitHub’s OIDC integration, allowing secure, keyless access without storing long-lived credentials.  

NOTE: This section is provided for informational purposes only to describe the architecture and deployment strategy used for this project.


## Hosting Overview

This project uses the following AWS services:

- **Amazon S3** for static file hosting  
- **Amazon CloudFront** for CDN distribution and HTTPS termination  
- **Amazon Route 53** for DNS and domain management  
- **AWS Certificate Manager** for TLS certificates  
- **GitHub Actions** for continuous deployment  

## Screenshot:


## License

This project is for personal use and professional demonstration.
