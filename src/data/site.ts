export const business = {
  name: 'BGMG Infra Pvt Ltd',
  phoneDisplay: '+91 93152 43165',
  phone: '+919315243165',
  email: 'bgmginfra@gmail.com',
  address: 'Sector 12, Saini, Greater Noida West, Uttar Pradesh 203207',
  mapsUrl: 'https://maps.app.goo.gl/3hZ77q9FCSF7gdjb8?g_st=aw',
  whatsappUrl: 'https://wa.me/919315243165'
};

export const property = {
  type: 'Builder floor flat',
  configuration: '2 BHK',
  area: '1050 sq ft'
};

export type CatalogueCategory = 'Actual Property Photos' | 'Living Room' | 'Bedrooms' | 'Kitchen' | 'Bathroom' | 'Exterior and Elevation' | 'Floor Plans';

export interface CatalogueItem {
  id: string;
  image: string;
  title: string;
  category: CatalogueCategory;
  description: string;
  alt: string;
  source: string;
  actual: boolean;
  label?: string;
}

export const catalogue: CatalogueItem[] = [
  { id: 'kitchen-01', image: 'catalog/1.jpeg', title: 'Two-tone modular kitchen', category: 'Kitchen', description: 'Actual view showing L-shaped counters, high-gloss cabinetry and a tiled backsplash.', alt: 'Actual modular kitchen with white upper cabinets and charcoal lower cabinets', source: 'Supplied by BGMG Infra', actual: true },
  { id: 'living-01', image: 'catalog/2.jpeg', title: 'Living area with layered ceiling', category: 'Living Room', description: 'Actual interior view with warm cove lighting, a feature wall and glossy floor tiles.', alt: 'Actual unfurnished living room with layered ceiling lighting and feature wall', source: 'Supplied by BGMG Infra', actual: true },
  { id: 'bedroom-01', image: 'catalog/3.jpeg', title: 'Bright room with balcony access', category: 'Bedrooms', description: 'Actual room view with a ceiling fan, large glazed opening and balcony access.', alt: 'Actual bright unfurnished room with ceiling fan and glazed balcony doors', source: 'Supplied by BGMG Infra', actual: true },
  { id: 'living-02', image: 'catalog/4.jpeg', title: 'Living and kitchen connection', category: 'Living Room', description: 'Actual view showing the living feature wall, statement light and adjoining kitchen.', alt: 'Actual living room feature wall with warm ceiling light and adjoining kitchen', source: 'Supplied by BGMG Infra', actual: true },
  { id: 'bedroom-02', image: 'catalog/5.jpeg', title: 'Room with sculpted false ceiling', category: 'Bedrooms', description: 'Actual unfurnished room view with a sculpted ceiling and neutral finishes.', alt: 'Actual unfurnished room with curved false ceiling and grey floor tiles', source: 'Supplied by BGMG Infra', actual: true },
  { id: 'exterior-01', image: 'catalog/6.jpeg', title: 'Block T street view', category: 'Exterior and Elevation', description: 'Architectural visualisation of a multi-storey facade with balconies and ground-level commercial frontage.', alt: 'Architectural visualisation of Block T with balconies and ground-floor shops', source: 'Supplied design visual', actual: false, label: 'Illustrative Concept' },
  { id: 'plan-01', image: 'catalog/10.jpeg', title: 'Supplied 2 BHK typical-floor drawing', category: 'Floor Plans', description: 'A supplied drawing labelled 2-BHK. Its relationship to the advertised 1050 sq ft flat is not confirmed.', alt: 'Supplied typical floor drawing showing four 2 BHK units around a central lobby', source: 'Supplied plan drawing', actual: false, label: 'Requires Verification' },
  { id: 'exterior-02', image: 'catalog/8.jpeg', title: 'Block I elevation', category: 'Exterior and Elevation', description: 'Architectural visualisation featuring broad balconies and stilt-level parking.', alt: 'Architectural visualisation of Block I with balconies and stilt parking', source: 'Supplied design visual', actual: false, label: 'Illustrative Concept' },
  { id: 'exterior-03', image: 'catalog/9.jpeg', title: 'Corner elevation study', category: 'Exterior and Elevation', description: 'Architectural visualisation of a corner building with wraparound balconies.', alt: 'Architectural visualisation of a corner residential building with balconies', source: 'Supplied design visual', actual: false, label: 'Illustrative Concept' },
  { id: 'exterior-04', image: 'catalog/13.jpeg', title: 'Block T evening elevation', category: 'Exterior and Elevation', description: 'Architectural visualisation of a contemporary facade in evening light.', alt: 'Evening architectural visualisation of Block T residential facade', source: 'Supplied design visual', actual: false, label: 'Illustrative Concept' },
  { id: 'inspiration-01', image: 'catalog/14.jpeg', title: 'BGMG design moodboard', category: 'Exterior and Elevation', description: 'A supplied concept collage combining facade, living, dining, bedroom and kitchen ideas.', alt: 'Concept moodboard with contemporary building exteriors and interior design ideas', source: 'Supplied design visual', actual: false, label: 'Design Inspiration' }
];
