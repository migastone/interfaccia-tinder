import { Profile, StatMetric } from './types';

const INDUSTRIES = [
  'IT & Telecommunications',
  'Finance & Banking',
  'Healthcare & Pharma',
  'Marketing & Advertising',
  'Retail & E-commerce',
  'Automotive',
  'Energy & Utilities',
  'Consulting'
];

const ROLES = [
  'Senior Product Designer',
  'Marketing Director',
  'Frontend Developer',
  'HR Manager',
  'CTO',
  'Project Manager',
  'Sales Executive',
  'Data Scientist',
  'Business Analyst',
  'Legal Counsel'
];

const NAMES = [
  'Alessandro Bianchi', 'Giulia Rossi', 'Marco Verdi', 'Sofia Esposito', 'Luca Moretti',
  'Elena Ferrari', 'Francesco Romano', 'Chiara Colombo', 'Matteo Ricci', 'Anna Marino',
  'Davide Greco', 'Sara Bruno', 'Simone Gallo', 'Martina Conti', 'Lorenzo De Luca',
  'Valentina Costa', 'Andrea Giordano', 'Silvia Rizzo', 'Federico Lombardi', 'Beatrice Barbieri'
];

export const MOCK_PROFILES: Profile[] = Array.from({ length: 20 }, (_, i) => {
  // Alternate gender for photos based on index (rough approximation)
  const isFemale = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19].includes(i);
  const gender = isFemale ? 'women' : 'men';
  // Use a fixed set of IDs to ensure consistency across re-renders
  const imgId = i + 10; 
  
  return {
    id: (i + 1).toString(),
    name: NAMES[i],
    role: ROLES[i % ROLES.length],
    company: `Company ${String.fromCharCode(65 + i)}`,
    location: ['Milano', 'Roma', 'Torino', 'Napoli', 'Firenze'][i % 5],
    imageUrl: `https://randomuser.me/api/portraits/${gender}/${imgId}.jpg`,
    affinityScore: Math.floor(Math.random() * (99 - 60) + 60), // 60-99%
    reliabilityScore: Math.floor(Math.random() * (100 - 40) + 40), // 40-100%
    industry: INDUSTRIES[i % INDUSTRIES.length],
    connectorType: i % 3 === 0 ? 'Premium' : 'Standard',
    matchingCount: Math.floor(Math.random() * 20) + 1,
    distance: Math.floor(Math.random() * 150) + 5,
  };
});

export const MOCK_STATS: StatMetric[] = [
  {
    id: '1',
    label: 'Connessioni Attive',
    value: 48,
    icon: 'network',
  },
  {
    id: '2',
    label: 'Il Tuo Rating',
    value: '8.7/10',
    icon: 'star',
  },
  {
    id: '3',
    label: 'Match Completati',
    value: 12,
    icon: 'handshake',
  },
  {
    id: '4',
    label: 'Tasso Risposta',
    value: '94%',
    icon: 'check',
  },
];