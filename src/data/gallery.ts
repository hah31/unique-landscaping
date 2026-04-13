export interface GalleryItem {
  id: string;
  alt: string;
  category: string;
  placeholder: boolean;
}

export const galleryItems: GalleryItem[] = [
  {
    id: 'driveway-broom-1',
    alt: 'Broom-finished concrete driveway and sidewalks in Bensenville, IL',
    category: 'Driveways',
    placeholder: true,
  },
  {
    id: 'stamped-patio-1',
    alt: 'Stamped concrete patio with decorative pattern in DuPage County',
    category: 'Stamped Concrete',
    placeholder: true,
  },
  {
    id: 'patio-walkway-1',
    alt: 'Concrete patio and walkway broom-finished in Bensenville, IL',
    category: 'Patios',
    placeholder: true,
  },
  {
    id: 'driveway-broom-2',
    alt: 'New broom-finished concrete driveway installation',
    category: 'Driveways',
    placeholder: true,
  },
  {
    id: 'retaining-wall-1',
    alt: 'Concrete retaining wall for residential landscaping',
    category: 'Retaining Walls',
    placeholder: true,
  },
  {
    id: 'walkway-1',
    alt: 'Concrete walkway leading to front entrance in Bensenville',
    category: 'Walkways',
    placeholder: true,
  },
];
