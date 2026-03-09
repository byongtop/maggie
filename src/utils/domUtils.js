
export function lockScroll(lock = true) {
  document.body.style.overflow = lock ? "hidden" : "";
  document.body.style.position = lock ? "relative" : "";
  document.body.style.height = lock ? "100vh" : "auto";
}

export function fadeOutElement(element, duration = 1500) {
  if (!element) return;
  element.style.transition = `opacity ${duration}ms ease, visibility ${duration}ms`;
  element.style.opacity = "0";
  element.style.visibility = "hidden";
  setTimeout(() => {
    element.style.display = "none";
  }, duration);
}
