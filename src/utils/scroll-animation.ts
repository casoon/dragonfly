import { animate, stagger, scroll } from 'motion';

export interface ScrollAnimationOptions {
  target: string | HTMLElement | HTMLElement[];
  animation: 'fade' | 'slide' | 'scale' | 'rotate';
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
  delay?: number;
  threshold?: number;
  once?: boolean;
}

export class ScrollAnimation {
  private options: ScrollAnimationOptions;
  private observer: IntersectionObserver;
  private elements: HTMLElement[];

  constructor(options: ScrollAnimationOptions) {
    this.options = {
      duration: 0.5,
      delay: 0,
      threshold: 0.2,
      once: true,
      ...options
    };

    this.elements = this.getElements();
    this.observer = this.createObserver();
    this.observeElements();
  }

  private getElements(): HTMLElement[] {
    if (typeof this.options.target === 'string') {
      return Array.from(document.querySelectorAll(this.options.target));
    } else if (Array.isArray(this.options.target)) {
      return this.options.target;
    } else {
      return [this.options.target];
    }
  }

  private createObserver(): IntersectionObserver {
    return new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.animateElement(entry.target as HTMLElement);
            if (this.options.once) {
              this.observer.unobserve(entry.target);
            }
          }
        });
      },
      {
        threshold: this.options.threshold
      }
    );
  }

  private observeElements(): void {
    this.elements.forEach((element) => {
      this.observer.observe(element);
    });
  }

  private animateElement(element: HTMLElement): void {
    const { animation, direction, duration, delay } = this.options;

    switch (animation) {
      case 'fade':
        animate(
          element,
          { opacity: [0, 1] },
          { duration, delay }
        );
        break;
      case 'slide':
        const transform = this.getSlideTransform(direction);
        animate(
          element,
          { transform: [transform.start, transform.end] },
          { duration, delay }
        );
        break;
      case 'scale':
        animate(
          element,
          { scale: [0.8, 1] },
          { duration, delay }
        );
        break;
      case 'rotate':
        animate(
          element,
          { rotate: [-90, 0] },
          { duration, delay }
        );
        break;
    }
  }

  private getSlideTransform(direction?: string): { start: string; end: string } {
    switch (direction) {
      case 'up':
        return { start: 'translateY(100px)', end: 'translateY(0)' };
      case 'down':
        return { start: 'translateY(-100px)', end: 'translateY(0)' };
      case 'left':
        return { start: 'translateX(100px)', end: 'translateX(0)' };
      case 'right':
        return { start: 'translateX(-100px)', end: 'translateX(0)' };
      default:
        return { start: 'translateY(100px)', end: 'translateY(0)' };
    }
  }

  public destroy(): void {
    this.observer.disconnect();
  }
}

// Utility-Funktion für Stagger-Animationen
export function createStaggerAnimation(
  elements: HTMLElement[],
  options: Omit<ScrollAnimationOptions, 'target'>
): void {
  const animation = new ScrollAnimation({
    target: elements,
    ...options
  });
}

// Utility-Funktion für Scroll-basierte Animationen
export function createScrollAnimation(
  element: HTMLElement,
  options: {
    start: string;
    end: string;
    duration?: number;
  }
): void {
  scroll(
    animate(
      element,
      options,
      {
        duration: options.duration || 1
      }
    )
  );
} 