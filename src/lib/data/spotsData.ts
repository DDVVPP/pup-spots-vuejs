type categories =
  | "café"
  | "bar"
  | "brewery"
  | "hike"
  | "restaurant"
  | "shop"
  | "park"
  | "event"
  | "other";

export interface Location {
  id: string;
  name: string;
  address: string;
  categories: categories[];
  lat: number;
  lng: number;
  website?: string;
  photo?: string;
}

export const spotsData: Location[] = [
  {
    id: "spot_001",
    name: "The Black Cat",
    address: "123 Bark Street, Los Angeles, CA",
    categories: ["restaurant"],
    lat: 34.08479802534204,
    lng: -118.28485304127851,
    website: "https://goldenbonecafe.com",
  },
  {
    id: "spot_002",
    name: "Benny Boy Brewing",
    address: "2000 N Fuller Ave, Los Angeles, CA",
    categories: ["bar", "restaurant"],
    lat: 34.067107286164315,
    lng: -118.21478082618411,
  },
  {
    id: "spot_003",
    name: "Runyon Canyon Park",
    address: "123 Bark Street, Los Angeles, CA",
    categories: ["hike", "park"],
    lat: 34.11302093247954,
    lng: -118.351067068029,
  },
  {
    id: "spot_004",
    name: "The Urban Pet",
    address: "123 Bark Street, Los Angeles, CA",
    categories: ["shop"],
    lat: 34.09112068279182,
    lng: -118.28613817141176,
  },
  {
    id: "spot_005",
    name: "Bellevue Recreation Center",
    address: "123 Bark Street, Los Angeles, CA",
    categories: ["park"],
    lat: 34.084205198369446,
    lng: -118.28283473817264,
  },
  {
    id: "spot_006",
    name: "Nam Coffee Shop",
    address: "123 Bark Street, Los Angeles, CA",
    categories: ["café"],
    lat: 34.09574933596283,
    lng: -118.29570863613468,
  },
  {
    id: "spot_007",
    name: "MacLeod Ale Brewing Co.",
    address: "14741 Calvert St, Van Nuys, CA 91411",
    categories: ["brewery"],
    lat: 34.202721347869705,
    lng: -118.45488481839162,
    website: "https://www.macleodale.com/",
  },
  {
    id: "spot_008",
    name: "Three Weavers Brewing Company",
    address: "1031 W Manchester Blvd A-B, Inglewood, CA 90301",
    categories: ["brewery"],
    lat: 33.98021164875582,
    lng: -118.37039914997861,
    website: "https://www.threeweavers.la/",
  },
  {
    id: "spot_009",
    name: "Hermanito",
    address: "2024 Sawtelle Blvd, Los Angeles, CA 90025",
    categories: ["restaurant", "bar"],
    lat: 34.05221893449002,
    lng: -118.43653301160015,
    website: "https://www.barhermanito.com/",
  },
  {
    id: "spot_010",
    name: "Tail O' the Pup",
    address: "8512 Santa Monica Blvd, West Hollywood, CA 90069",
    categories: ["restaurant"],
    lat: 34.10981131763242,
    lng: -118.37188745934701,
    website: "http://tailothepup.com/",
  },
];
