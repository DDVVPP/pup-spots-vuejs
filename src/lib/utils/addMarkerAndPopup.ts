import mapboxgl from "mapbox-gl";
import { createApp, h } from "vue";
import { Icon as PinIcon } from "@iconify/vue";

import type { Location, PopupRef } from "@/lib/types";
import { categoryStyleMap } from "./categoryIconMap";
import { closePopup } from "./closePopup";

export function addMarker(
  pin: Location,
  map: mapboxgl.Map,
  currentPopup: PopupRef
) {
  const el = document.createElement("div");
  el.style.cursor = "pointer";

  const icon = h(PinIcon, {
    icon: "ph:map-pin-area-fill",
    width: 30,
    height: 30,
    color: "#f73f79",
  });

  createApp({ render: () => icon }).mount(el);

  const marker = new mapboxgl.Marker(el)
    .setLngLat([pin.lng, pin.lat])
    .addTo(map);

  marker.getElement().addEventListener("click", (e) => {
    e.stopPropagation();
    closePopup(currentPopup);

    const popupContent = `
    <div class="text-xs flex max-w-[170px] gap-y-2 flex-col">
      <header class="flex items-center gap-x-2">
        <p class="font-bold text-brand-corral leading-tight">${pin.name}</p>
        <div class="flex gap-x-1 items-center">
          ${pin.categories
            .map((cat) => {
              const { icon, color } = categoryStyleMap[cat];
              return `
                <div style="
                  width: 20px;
                  height: 20px;
                  background: white;
                  border: 1px solid ${color};
                  border-radius: 9999px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  flex-shrink: 0;
                ">
                  <iconify-icon icon="${icon}" width="12" height="12" style="color: ${color};"></iconify-icon>
                </div>`;
            })
            .join("")}
          </div>
      </header>
    </div>
  `;

    const popup = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false,
      offset: 17,
    })
      .setLngLat([pin.lng, pin.lat])
      .setHTML(popupContent)
      .addTo(map);

    currentPopup.value = popup;
  });

  map.on("click", () => {
    closePopup(currentPopup);
  });
}
