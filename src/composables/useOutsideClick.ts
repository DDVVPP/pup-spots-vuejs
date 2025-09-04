import { onMounted, onBeforeUnmount, type Ref } from "vue";

const useOutsideClick = (
  ref: Ref<HTMLDivElement | null>,
  onClick: () => void
) => {
  const handleOutSideClick = (event: MouseEvent) => {
    if (ref.value && !ref.value?.contains(event.target as Element)) {
      onClick();
    }
  };

  onMounted(() => {
    window.addEventListener("mousedown", handleOutSideClick);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("mousedown", handleOutSideClick);
  });
};

export default useOutsideClick;
