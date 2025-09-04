import { type Ref } from "vue";
import { type InferType } from "yup";
import { rawAddSpotSchema } from "./schemas";

export type categories =
  | "café"
  | "bar"
  | "brewery"
  | "hike"
  | "restaurant"
  | "shop"
  | "park"
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

export type PopupRef = Ref<mapboxgl.Popup | null>;

export type AddASpotFormData = InferType<typeof rawAddSpotSchema>;
