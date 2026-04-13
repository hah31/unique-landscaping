export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: 'patios',
    title: 'Patios',
    description:
      'Transform your backyard with a beautiful, durable concrete patio built to your exact specifications.',
    icon: '🏡',
  },
  {
    id: 'driveways',
    title: 'Driveways',
    description:
      'New installations and full replacements \u2014 built to handle Illinois winters and daily use for decades.',
    icon: '🚗',
  },
  {
    id: 'stamped-concrete',
    title: 'Stamped Concrete',
    description:
      'Get the look of natural stone, brick, or slate at a fraction of the cost. Custom patterns and colors.',
    icon: '✨',
  },
  {
    id: 'retaining-walls',
    title: 'Retaining Walls',
    description:
      'Functional and attractive walls that manage your landscape and prevent erosion.',
    icon: '🧱',
  },
  {
    id: 'walkways',
    title: 'Walkways',
    description:
      'Safe, level walkways that boost curb appeal and guide guests to your front door.',
    icon: '🚶',
  },
  {
    id: 'foundations',
    title: 'Basement Foundations',
    description:
      'Solid foundations you can trust \u2014 new construction, repairs, and waterproofing.',
    icon: '🏗️',
  },
  {
    id: 'snow-removal',
    title: 'Snow Removal',
    description:
      'Keep your property safe and accessible all winter. Reliable service when you need it most.',
    icon: '❄️',
  },
  {
    id: 'junk-removal',
    title: 'Junk Removal',
    description:
      'Fast, affordable cleanups for yards, construction debris, and property cleanouts.',
    icon: '🚛',
  },
];
