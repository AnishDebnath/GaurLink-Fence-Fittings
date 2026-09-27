export interface ServiceCity {
  id: string;
  name: string;
  query: string;
  zoom: number;
}

export const SERVICE_CITIES: ServiceCity[] = [
  { id: 'usa', name: 'USA NATIONWIDE', query: 'United States', zoom: 4 },
  { id: 'texas', name: 'HOUSTON, TX (HQ)', query: 'Houston, TX', zoom: 10 },
  { id: 'dallas', name: 'DALLAS / FT WORTH', query: 'Dallas, TX', zoom: 10 },
  { id: 'atlanta', name: 'ATLANTA, GA', query: 'Atlanta, GA', zoom: 10 },
  { id: 'chicago', name: 'CHICAGO, IL', query: 'Chicago, IL', zoom: 10 },
  { id: 'los-angeles', name: 'LOS ANGELES, CA', query: 'Los Angeles, CA', zoom: 10 },
  { id: 'philadelphia', name: 'PHILADELPHIA, PA', query: 'Philadelphia, PA', zoom: 10 },
  { id: 'kansas-city', name: 'KANSAS CITY, MO', query: 'Kansas City, MO', zoom: 10 },
  { id: 'phoenix', name: 'PHOENIX, AZ', query: 'Phoenix, AZ', zoom: 10 },
  { id: 'tampa', name: 'TAMPA, FL', query: 'Tampa, FL', zoom: 10 },
];
