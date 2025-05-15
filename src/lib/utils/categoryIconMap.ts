import type { categories } from "@/lib/types";

export const categoryStyleMap: Record<
  categories,
  { icon: string; color: string }
> = {
  café: { icon: "ph:coffee-duotone", color: "#9d3e0b" },
  bar: { icon: "ph:martini-duotone", color: "#49839c" },
  brewery: { icon: "ph:beer-stein-duotone", color: "#f97316" },
  hike: { icon: "ph:mountains-duotone", color: "#3a824c" },
  restaurant: { icon: "ph:fork-knife-duotone", color: "#ffc800" },
  shop: { icon: "ph:shopping-cart-duotone", color: "#9c59ee" },
  park: { icon: "ph:tree-duotone", color: "#22c55e" },
  other: { icon: "ph:map-pin-area", color: "#1ab734" },
};
