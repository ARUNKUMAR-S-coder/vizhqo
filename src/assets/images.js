// Portfolio images — file-based imports (replaces the old 900KB base64 bundle)
import artisanMenu from './images/artisan-menu.jpg';
import socialGrowth from './images/social-growth.jpg';
import lateNightDiner from './images/late-night-diner.jpg';
import streetwearLaunch from './images/streetwear-launch.jpg';
import lumeaOrganics from './images/lumea-organics.jpg';
import artisanHospitality from './images/artisan-hospitality.jpg';

// Re-export legacy hero from the old base64 file
export { IMG_HERO } from './images.legacy.js';

// Map new images to the portfolio slots used by components
export const IMG_MENU   = artisanMenu;            // Artisan Dining — menu design
export const IMG_SALON  = socialGrowth;           // Social growth infographic
export const IMG_DINER  = lateNightDiner;         // Late Night Diner poster
export const IMG_HOTEL  = artisanHospitality;     // Artisan Hospitality
export const IMG_VERDE  = lumeaOrganics;          // Lumea Organics
export const IMG_CORNER = streetwearLaunch;       // Streetwear Launch poster
