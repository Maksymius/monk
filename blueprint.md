# Blueprint: «Научись быть» Landing Page

## Project Overview

This document outlines the development plan for a landing page for the "Научись быть" course. The goal is to create a modern, responsive, and engaging single-page website to attract users and encourage them to sign up for a free lesson. The project will be built using HTML, CSS, and vanilla JavaScript, with a focus on modern web standards, performance, and visual appeal.

## Implemented Features (v1.0)

*   **Structure & Content:** All 12 sections from the technical specification are implemented in the HTML.
*   **Basic Design:** The initial color palette, typography, and layout are styled.
*   **Core Functionality:** A basic loader, parallax effect, and functional forms with alerts are in place.

## v2.0 Design & UX Enhancement Plan

This update focuses on elevating the design and user experience with modern aesthetics and interactive "wow" effects.

### 1. Update Image Paths
*   **Action:** Replace placeholder image URLs in `index.html` with the actual images provided in the `img/` directory.

### 2. Enhanced Design & Visuals
*   **Typography:**
    *   **Action:** Integrate Google Fonts (`Montserrat` for headings, `Roboto` for body text) to create a more professional and modern feel.
*   **Colors & Textures:**
    *   **Action:** Add a subtle noise texture to dark backgrounds for a premium, tactile feel.
    *   **Action:** Introduce soft "glow" effects on interactive elements like buttons and icons to create a sense of depth and interactivity.
*   **Animations & Effects ("Wow" Factors):
    *   **Scroll-Triggered Animations:** Implement a "reveal" animation for sections and cards. Elements will elegantly fade and slide into view as the user scrolls down the page.
    *   **Enhanced Parallax:** The parallax effect will be refined for a smoother, more immersive experience.
    *   **Interactive Cursor:** A custom cursor glow effect will be added to follow the user's mouse, making the interaction feel more engaging.
    *   **3D Card Tilt:** Course and feature cards will have a 3D tilt effect on hover, making them feel more tangible and interactive.
    *   **Button Hover Effect:** The main CTA button will have an enhanced gradient animation and glow on hover.

### 3. Improved Functionality & UX
*   **Forms:**
    *   **Action:** Form validation will be improved to provide instant visual feedback by highlighting invalid fields, rather than using disruptive alerts.
*   **Performance:**
    *   **Action:** Animations and effects will be optimized using CSS transforms and `will-change` to ensure a smooth, performant experience.

## Current Development Plan

The following steps will be taken to implement the v2.0 enhancements:

1.  **Update HTML:** Modify `index.html` to use the new local image paths and add a container for the cursor effect.
2.  **Update CSS:** Heavily revise `style.css` to:
    *   Import and apply the new Google Fonts.
    *   Add styles for the noise texture and glow effects.
    *   Implement the scroll-reveal animation classes.
    *   Create the 3D tilt effect for cards.
    *   Redesign forms for better UX.
3.  **Update JavaScript:** Revise `main.js` to:
    *   Implement the logic for the scroll-triggered reveal animations.
    *   Add the script for the interactive cursor glow.
    *   Update form validation logic to provide visual feedback.
4.  **Final Review:** Thoroughly test the enhanced page for performance, responsiveness, and cross-browser compatibility.
