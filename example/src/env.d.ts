/// <reference types="astro/client" />

interface Window {
  animate: typeof import('motion').animate;
  stagger: typeof import('motion').stagger;
} 