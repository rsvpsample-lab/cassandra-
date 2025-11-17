# Wedding Invitation Website

## Overview
This project is a full-stack JavaScript application designed as a sophisticated and interactive wedding invitation website for a wedding on November 8, 2025. It features a responsive design with multiple content sections, including a hero section, slideshow, invitation details, countdown, love story, venue information, RSVP, FAQ, and an interactive quiz game. The site aims to provide an elegant and personalized digital invitation experience.

## User Preferences
- Background music should play automatically when clicking "Open Invitation" with NO control buttons
- Clean, sophisticated design without visual artifacts or decorative elements that interfere with images
- Elegant wedding-appropriate typography using Google Fonts

## System Architecture
The application is built as a full-stack JavaScript project. The frontend uses React with TypeScript, bundled by Vite, and styled with Tailwind CSS and shadcn/ui. Routing is managed by Wouter, and server state is handled by TanStack Query. The backend is an Express.js server with TypeScript, utilizing in-memory storage (MemStorage) for flexibility. The design emphasizes a pastel pink theme with an "old money aesthetic" and dark luxury styling for a sophisticated feel. Key features include an interactive hero section with an invitation opening animation, a background music integration that starts on user interaction, an interactive quiz game for invitation reveal that influences invitation design (premium vs. standard based on score), dark/light theme support, and SEO optimization. The site also includes detailed sections for the couple's story, wedding timeline, venue details (with Google Maps integration), an extensive entourage list, and an RSVP form.

## External Dependencies
- **Cloudinary CDN**: Used for hosting audio and image assets.
- **Google Fonts**: Utilized for elegant wedding-appropriate typography (Playfair Display, Cormorant Garamond, Inter).
- **Google Maps**: Integrated for displaying venue locations.