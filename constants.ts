import { Ship, Bus, Car, Bike } from 'lucide-react';

export const SIGNUP_LINK = "https://script.google.com/macros/s/AKfycbx4tFHGNr6OqKx_GT9CgMaGQRUTnNiFZTnMIEzhiiuVlAIn0od38JuziAgS9y2tmTsc4A/exec";

export const SERVICES = [
  {
    id: 'boat',
    title: 'Ganga Boat Ride',
    description: 'Experience the divine Ganga Aarti from the water or take a serene sunrise ride along the ghats.',
    icon: Ship,
    price: '', // Prices removed as requested
    image: 'https://picsum.photos/id/10/800/600', // Scenic water
    features: ['Private & Shared', 'Sunrise/Sunset', 'Guide Included']
  },
  {
    id: 'rickshaw',
    title: 'E-Rickshaw Tour',
    description: 'Navigate the narrow lanes (Galies) of Kashi effortlessly. Eco-friendly and affordable.',
    icon: Bike,
    price: '',
    image: 'https://picsum.photos/id/146/800/600', // Street vibe
    features: ['Temple Hop', 'Market Tours', 'Zero Emission']
  },
  {
    id: 'car',
    title: 'Private Taxi',
    description: 'Comfortable AC cabs for Sarnath day trips, airport transfers, or city tours.',
    icon: Car,
    price: '',
    image: 'https://picsum.photos/id/111/800/600', // Vintage/Car feel
    features: ['AC Sedan/SUV', 'Airport Pickup', 'Outstation']
  },
  {
    id: 'bus',
    title: 'Pilgrim Bus',
    description: 'Affordable group travel for major temples including Kashi Vishwanath and Sankat Mochan.',
    icon: Bus,
    price: '',
    image: 'https://picsum.photos/id/184/800/600', // Road trip
    features: ['Group Discounts', 'AC Coach', 'Daily Routes']
  }
];

export const TESTIMONIALS = [
  {
    name: "Aditi Sharma",
    role: "Pilgrim from Delhi",
    text: "Booking a boat for the evening Aarti was so seamless. The guide was knowledgeable and the view was spiritual."
  },
  {
    name: "John & Sarah",
    role: "Tourists from UK",
    text: "The E-Rickshaw tour is a must! We saw parts of Varanasi we would have never found on our own."
  },
  {
    name: "Rahul Verma",
    role: "Local Explorer",
    text: "Most affordable car rentals in the city. Used them for a Sarnath trip, driver was very polite."
  }
];
