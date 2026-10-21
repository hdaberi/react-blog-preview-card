# Frontend Mentor - Blog preview card solution

This is a solution to the [Blog preview card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blog-preview-card-ckPaj01IcS). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [AI Collaboration](#ai-collaboration)
- [Author](#hdaberi)

## Overview

### The challenge

Users should be able to:

- See hover and focus states for all interactive elements on the page (such as the title hover effect and active states).
- View an optimal layout for the interface depending on their device's screen size (Responsive design from mobile 375px to desktop 1440px).

### Screenshot

![](./src/assets/images/preview.jpg)

### Links

- Solution URL: [GitHub Repository](https://github.com/hdaberi/react-blog-preview-card)


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties (`:root` variables)
- Flexbox & Modern CSS Layouts
- Mobile-first workflow
- Clean, accessible typography using Google Fonts (Figtree)

### What I learned

In this challenge, I practiced implementing strict design requirements using CSS custom variables for consistent colors and typography. I also focused on accessible hover/focus states and hard-shadow card styles.

Here is how I structured the CSS variables in `:root`:

```css
:root {
  --color-primary: hsl(47, 88%, 63%);
  --color-white: hsl(0, 0%, 100%);
  --color-gray-500: hsl(0, 0%, 42%);
  --color-gray-950: hsl(0, 0%, 7%);
  --font-family: 'Figtree', sans-serif;
  --shadow-box: 8px 8px 0px var(--color-gray-950);
}