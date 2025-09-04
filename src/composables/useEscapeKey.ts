import { onMounted, onBeforeUnmount } from "vue";

const useEscapeKey = (onEscape: () => void) => {
  const handler = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onEscape();
    }
  };

  onMounted(() => window.addEventListener("keydown", handler));
  onBeforeUnmount(() => window.removeEventListener("keydown", handler));
};

export default useEscapeKey;
