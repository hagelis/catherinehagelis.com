# Personal Portfolio Website

My personal portfolio website built with React, Vite, and TailwindCSS, showcasing my projects, skills, certifications, and background.  
Deployed on AWS cloud architecture with S3 static hosting, CloudFront CDN, Route 53 DNS, and ACM-managed HTTPS.
It also includes automated deployments powered by GitHub Actions.

## Features
• Clean, responsive UI built with React + TailwindCSS  
• Dynamic sections for Projects, Skills, Certifications, and Contact  
• Custom animations and modern gradient design  
• Fully custom domain: catherinehagelis.com  
• Secure HTTPS with automatic TLS via AWS Certificate Manager  
• Global content delivery using CloudFront CDN  
• Fast page loads with Vite asset optimization  
• Zero-server, highly available cloud hosting  
• Automated CI/CD using GitHub Actions  

## Tech Stack

### Client
• React  
• Vite  
• TailwindCSS  
• Lucide Icons  

### Cloud / Deployment
• AWS S3 — static file hosting  
• AWS CloudFront — CDN + HTTPS + caching  
• AWS Route 53 — custom domain + DNS  
• AWS Certificate Manager (ACM) — TLS certificate  
• GitHub Actions — automated CI/CD pipeline  


## Getting Started (Local Development)

### Prerequisites
• Node.js (v16+ recommended)  
• Git  

### 1. Clone the Repository
git clone https://github.com/hagelis/catherinehagelis.com  
cd catherinehagelis.com  

### 2. Install Dependencies
npm install  

### 3. Run the App Locally
npm run dev  

Then open:  
http://localhost:5173

## Deployment (AWS)

This portfolio is deployed using the following AWS setup:

### S3 (Static Hosting)
• Stores production build files  
• Static website hosting enabled  
• Public read access configured  

### CloudFront
• Origin: S3 website endpoint  
• Viewer Protocol: Redirect HTTP → HTTPS  
• Custom SSL certificate (ACM)  
• Default root object: index.html  
• Global edge caching + distribution  

### Route 53
• A-records for:  
  – catherinehagelis.com  
  – www.catherinehagelis.com  
• Alias → CloudFront distribution  

### ACM
• Wildcard TLS certificate  
• DNS validation via Route 53  

## CI/CD (GitHub Actions)

This project uses a GitHub Actions workflow for automated deployments:

• Builds the Vite app on every push to `main`  
• Uploads build output to the S3 bucket  
• Invalidates CloudFront cache automatically  
• Fully automated production deployments with no manual steps required  

## Screenshots
<img width="1353" height="751" alt="Screenshot 2025-11-09 at 8 17 08 PM" src="https://github.com/user-attachments/assets/0c8e1a47-0c3f-41cc-bb6e-a74b3729ddde" />

