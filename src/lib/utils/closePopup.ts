import type { PopupRef } from "@/lib/types";

export const closePopup = (popupRef: PopupRef) => {
  if (popupRef.value) {
    popupRef.value?.remove(); // Removes the popup from the map visually
    popupRef.value = null; // Clears the Vue reference
  }
};
