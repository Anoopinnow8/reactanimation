import { gsap } from 'gsap';

const GsapAnimation = (type, target, options = {}) => {
  switch (type) {
    case 'fadeIn':
      gsap.fromTo(
        target,
        { opacity: 0 },
        { opacity: 1, duration: options.duration || 1, ...options }
      );
      break;

    case 'fadeOut':
      gsap.to(target, { opacity: 0, duration: options.duration || 1, ...options });
      break;

    case 'scrollLeftToRight':
      gsap.fromTo(
        target,
        { x: '-100%', opacity: 0 },
        { x: '0%', opacity: 1, duration: options.duration || 1, ...options }
      );
      break;

    case 'popOut':
      gsap.fromTo(
        target,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: options.duration || 1, ...options }
      );
      break;

    default:
      console.warn('Unsupported animation type');
  }
};

export { GsapAnimation };
