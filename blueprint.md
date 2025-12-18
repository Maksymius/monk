# Project Blueprint: "Научись быть" (Learn to Be)

## Overview
A modern, minimalist web application for a self-development course called "Научись быть". The site focuses on mindfulness, habit-breaking, and self-discovery. It uses a high-contrast, immersive design with parallax effects, animations, and a focus on typography.

## Current Features
- **Hero Section:** High-impact landing with parallax background.
- **Content Sections:** Quotes from Alice in Wonderland, course information, and philosophy.
- **Interactive Elements:**
    - Custom cursor glow effect.
    - Reveal animations on scroll.
    - Parallax backgrounds.
    - Custom SVG loader.
- **Forms:**
    - "Get Offer" form (collects emails).
    - "Contact" form (collects name, email, phone).
- **Backend:**
    - Firebase integration (Firestore) for storing form submissions.

## Style & Design
- **Typography:** Montserrat (headings) and Roboto (body text).
- **Color Palette:** Dark theme with light sections for contrast. Vibrant gradients and deep shadows.
- **Effects:** Parallax scrolling, scroll-triggered reveals, custom cursor tracking.

## Planned Changes: Admin Dashboard
The goal is to create a secure admin panel to view and manage leads.

### 1. Create `admin.html`
- A hidden page for administrators.
- Secure login interface using Firebase Authentication.
- Responsive dashboard layout.

### 2. Implement Admin Functionality (`js/admin.js`)
- **Authentication:** Login form to authenticate via Firebase.
- **Data Retrieval:** Fetch `contact-requests` and `offer-requests` from Firestore.
- **Data Display:** Present requests in searchable/sortable tables.
- **Security:** Ensure only authorized users can access the data (logic in JS + Firestore rules).

### 3. Styling (`css/admin.css` or additions to `style.css`)
- Styles for login form.
- Styles for data tables and dashboard layout.

### 4. Firestore Security Rules
- Update `firestore.rules` to protect the collections from unauthorized reads.

---

## Action Plan (Current Task)
1. **Create `admin.html`** with a login form and a hidden dashboard container.
2. **Create `js/admin.js`** to handle logic:
    - Check auth state.
    - Handle login.
    - Fetch and render Firestore data.
3. **Update `css/style.css`** with styles for the admin dashboard.
4. **Update `js/firebase-config.js`** to ensure all necessary Firebase services are initialized.
