import type { Location } from "./spotsData";

export function convertToGeoJSON(spots: Location[]): GeoJSON.FeatureCollection {
  return {
    type: "FeatureCollection",
    features: spots.map((spot) => ({
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [spot.lng, spot.lat],
      },
      properties: {
        id: spot.id,
        name: spot.name,
        address: spot.address,
        categories: spot.categories,
        website: spot.website,
        photo: spot.photo,
      },
    })),
  };
}
