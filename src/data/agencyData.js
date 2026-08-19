import {
  IMG_HERO,
  IMG_DINER,
  IMG_SALON,
  IMG_MENU,
  IMG_HOTEL,
  IMG_VERDE,
  IMG_CORNER,
} from '../assets/images.js';

export const WHATSAPP_NUMBER = '919944747738';
export const DEFAULT_WA_MSG = 'Hi VIZHQO, I saw your website and I would like to know about your services.';

export function getWhatsAppUrl(customText) {
  const text = customText || DEFAULT_WA_MSG;
  return 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(text);
}

export const LOOKING_TO_CREATE = [
  { icon: '🟠', title: 'Build My Brand', desc: 'Logos, colors & visual identity', bg: '#FFF1EC', category: 'Branding', targetId: 'work' },
  { icon: '🌐', title: 'Build My Website', desc: 'Modern responsive landing pages', bg: '#EDF5FF', category: 'Websites', targetId: 'work' },
  { icon: '📱', title: 'Grow My Social Media', desc: 'Posters, carousels & banners', bg: '#FFF0F5', category: 'Posters', targetId: 'work' },
  { icon: '🎬', title: 'Create an Ad / Reel', desc: 'Retention video & sound editing', bg: '#F3EFFF', category: 'Reels & Video', targetId: 'work' },
  { icon: '🍽️', title: 'Upgrade My Restaurant', desc: 'Digital & print menu design', bg: '#E6FAF6', category: 'Menus', targetId: 'work' },
  { icon: '🏠', title: 'Promote My Property', desc: 'Real estate ads & promo videos', bg: '#FFF9E6', category: 'All', targetId: 'services' },
];

export const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    title: 'Artisan Dining Menu & Visual System',
    client: 'Copper & Clay Bistro',
    category: 'Menus',
    image: IMG_MENU,
    desc: 'Complete redesign of dining menu hierarchy, dish spotlights, and digital QR menu.',
    fullStory: 'Copper & Clay had average orders due to a text-heavy black-and-white menu. We re-engineered their menu structure, highlighting signature items and typography hierarchy, driving higher average spend per table.',
    result: '+34% Avg Ticket',
  },
  {
    id: 2,
    title: 'High-Retention Reels & Social Growth',
    client: 'Aura Aesthetics & Salon',
    category: 'Reels & Video',
    image: IMG_SALON,
    desc: 'Dynamic video cuts, motion graphics, and audio design engineered for viral Instagram reach.',
    fullStory: 'Crafted a weekly content system for Aura Aesthetics with high-energy cuts, before-and-after client reveals, and targeted call-to-actions that drove direct booking DMs.',
    result: '+180% Profile Visits',
  },
  {
    id: 3,
    title: 'Luxury Hospitality Brand Identity',
    client: 'Northside Grand Hotel',
    category: 'Branding',
    image: IMG_HOTEL,
    desc: 'Sophisticated typography, color system, stationery, and premium digital presence.',
    fullStory: 'Transformed Northside Hotel from a generic local stay into an upscale boutique destination with tailored logos, room keycards, signages, and social style guides.',
    result: 'Premium Positioning',
  },
  {
    id: 4,
    title: 'Late Night Diner Promotional Campaign',
    client: 'The Corner Diner',
    category: 'Posters',
    image: IMG_DINER,
    desc: 'Scroll-stopping event poster designed for street placement and Instagram feeds.',
    fullStory: 'High-contrast typography and appetizing food imagery built to capture nighttime traffic and increase weekend footfall by 40%.',
    result: '40% Footfall Increase',
  },
  {
    id: 5,
    title: 'Organic Skincare Social Brand Feed',
    client: 'Studio Verde Botanicals',
    category: 'Branding',
    image: IMG_VERDE,
    desc: 'Clean editorial aesthetic, product highlight carousels, and minimal packaging.',
    fullStory: 'Helped an organic startup build a cohesive pastel visual language that boosted consumer trust and retailer inquiries.',
    result: '120+ Retail Inquiries',
  },
  {
    id: 6,
    title: 'Streetwear Retail Launch Poster',
    client: 'Corner Store Apparel',
    category: 'Posters',
    image: IMG_CORNER,
    desc: 'Bold brutalist poster series for limited seasonal collection drop.',
    fullStory: 'Eye-catching street typography and layout designed to generate hype and sell out the launch batch in 48 hours.',
    result: 'Sold Out in 48h',
  },
];

export const SERVICES_DATA = [
  {
    icon: '✨',
    title: 'Branding & Logo Design',
    desc: 'Memorable visual identities that make your business look established, credible, and trustworthy.',
    priceTag: 'From ₹999',
    badgeBg: '#FFF1EC',
    deliverables: ['Primary & secondary logo marks', 'High-res vector formats (SVG, PDF, PNG)', 'Brand color palette & font pairings', 'Social media profile kit'],
  },
  {
    icon: '🌐',
    title: 'Website Design & Development',
    desc: 'Modern, fast-loading websites designed to turn casual visitors into paying customers.',
    priceTag: 'From ₹4,999',
    badgeBg: '#EDF5FF',
    deliverables: ['100% responsive mobile-first UI', 'SEO & speed optimized code', 'Direct WhatsApp & call integration', 'Easy-to-edit setup'],
  },
  {
    icon: '🎨',
    title: 'Social Media & Carousel Design',
    desc: 'Scroll-stopping graphics, promotional posters, and multi-slide carousels tailored for Instagram.',
    priceTag: 'From ₹149',
    badgeBg: '#FFF0F5',
    deliverables: ['Feed posts & story formats', 'Consistent branded templates', 'Commercial rights included', 'Ready-to-post high-res files'],
  },
  {
    icon: '🎬',
    title: 'AI Video & High-Converting Reels',
    desc: 'Fast-paced promotional reels, product showcases, and video ads built for maximum retention.',
    priceTag: 'From ₹299',
    badgeBg: '#F3EFFF',
    deliverables: ['Hook & retention editing', 'Sound design & trending music sync', 'Animated subtitles / captions', 'Vertical 9:16 optimized format'],
  },
  {
    icon: '📋',
    title: 'Restaurant & Café Menu Design',
    desc: 'Editorial-grade menu designs that make ordering easy and elevate your food presentation.',
    priceTag: 'From ₹399',
    badgeBg: '#E6FAF6',
    deliverables: ['Print-ready high-resolution PDF', 'Digital QR menu version', 'Category layout & dish highlights', 'Editable price layout'],
  },
  {
    icon: '🏠',
    title: 'Real Estate & Property Marketing',
    desc: 'High-impact property posters, walkthrough promo videos, and ad creatives that attract buyers.',
    priceTag: 'From ₹499',
    badgeBg: '#FFF9E6',
    deliverables: ['Property feature highlight cards', 'Virtual walkthrough video edits', 'Ad-ready social formats', 'Fast 48-hour delivery'],
  },
];

export const WHY_PILLARS = [
  {
    number: '01',
    title: 'Creative Distinction',
    desc: 'No generic overused Canva templates. Every asset is customized to make your brand stand out from local competitors.',
  },
  {
    number: '02',
    title: 'Instant Credibility',
    desc: 'Professional presentation triggers instant buyer confidence and justifies higher pricing for your services.',
  },
  {
    number: '03',
    title: 'Accessible Pricing',
    desc: 'Agency-grade visual quality starting from ₹49 without huge retainers or hidden fees.',
  },
  {
    number: '04',
    title: '48-Hour Delivery',
    desc: 'Rapid turnaround times so your marketing never has to wait on slow freelancers.',
  },
];

export const PROCESS_STEPS = [
  { step: '01', title: 'Tell Us Your Idea', desc: 'Send a quick WhatsApp message describing your business, goal, and requirements in 2 minutes.' },
  { step: '02', title: 'We Create & Craft', desc: 'Our creative team designs your custom visuals and delivers initial concepts within 48 hours.' },
  { step: '03', title: 'You Review & Refine', desc: 'We refine and polish details based on your feedback until you are 100% satisfied.' },
  { step: '04', title: 'We Deliver & Launch', desc: 'Receive production-ready print, social, and digital files ready to post and attract customers.' },
];

export const PACKAGES_DATA = [
  {
    name: 'Starter Package',
    price: '6,999',
    desc: 'Perfect for local shops and emerging businesses going visible.',
    features: ['8 Custom Social Posters / month', 'Monthly Content Calendar', '1 Revision Round per asset', 'Print & Digital Formats', '48-Hr Turnaround'],
  },
  {
    name: 'Growth Package',
    price: '14,999',
    featured: true,
    desc: 'Built for restaurants, salons, and businesses actively scaling.',
    features: ['12 Social Posters + 6 Video Reels', 'Menu or Offer Banner Redesign', 'Growth Content Strategy', 'Priority 48-Hr Delivery', 'Dedicated Designer on WhatsApp'],
  },
  {
    name: 'Signature Package',
    price: '24,999',
    desc: 'Full-service creative department for hotels, startups & established brands.',
    features: ['Unlimited Posters / month', '12 Video Reels + Ad Creatives', 'Website Maintenance / Landing Page', 'Complete Brand Identity Polish', 'VIP 24-Hr Priority Support'],
  },
];

export const QUOTE_OPTIONS = [
  { id: 'poster', label: 'Poster Design', price: 149 },
  { id: 'reel', label: 'Reel Video Edit', price: 299 },
  { id: 'menu', label: 'Menu Design', price: 399 },
  { id: 'logo', label: 'Logo & Brand Kit', price: 999 },
  { id: 'website', label: 'Landing Page Website', price: 4999 },
  { id: 'ads', label: 'Paid Ad Creatives', price: 499 },
];

export const NICHES_DATA = [
  { icon: '🍽️', name: 'Restaurants & Cafés', desc: 'Appetizing menus, food reels, festival offer posters & table QR cards.' },
  { icon: '🏠', name: 'Real Estate Brands', desc: 'Property listings, walkthrough reels, elevation banners & brochure PDFs.' },
  { icon: '🛍️', name: 'Retail & Shops', desc: 'Product launch creatives, seasonal discount posters & catalog designs.' },
  { icon: '💇', name: 'Salons & Spas', desc: 'Price list menus, transformation reels, service brochures & Instagram feeds.' },
  { icon: '🏨', name: 'Hotels & Resorts', desc: 'Luxury branding, room service collateral, promotional videos & web pages.' },
  { icon: '🚀', name: 'Startups & D2C', desc: 'Pitch decks, brand identity, conversion websites & ad campaign reels.' },
  { icon: '👨‍💼', name: 'Personal Brands', desc: 'Podcast cover art, LinkedIn carousels, aesthetic reels & speaker kits.' },
  { icon: '🏢', name: 'Local Services', desc: 'Trust-building flyers, Google My Business banners & WhatsApp promo cards.' },
];
