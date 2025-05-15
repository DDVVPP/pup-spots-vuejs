import mapboxgl from "mapbox-gl";
import { createApp, h } from "vue";
import { Icon } from "@iconify/vue";

import type { Location } from "@/lib/data/spotsData";

export function addMarker(pin: Location, map: mapboxgl.Map) {
  const el = document.createElement("div");

  const icon = h(Icon, {
    icon: "ph:map-pin-area-fill",
    width: 30,
    height: 30,
    color: "#f73f79",
  });

  createApp({ render: () => icon }).mount(el);

  const marker = new mapboxgl.Marker(el)
    .setLngLat([pin.lng, pin.lat])
    .addTo(map);

  const popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false,
    offset: 17,
  }).setHTML(`
    <div class="text-xs w-[200px] flex flex-col gap-y-1">
      <p class="font-bold text-brand-corral">${pin.name}</p>
      <p class="text-slate-600 text-wrap text-[11px]">${pin.address}</p>
    </div>
  `);

  marker.getElement().addEventListener("mouseenter", () => {
    popup.setLngLat([pin.lng, pin.lat]).addTo(map);
  });

  marker.getElement().addEventListener("mouseleave", () => {
    popup.remove();
  });
}
