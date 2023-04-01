export const initLazyload = [loadImages()];

// Lazy loading images
function loadImages() {
  const imgTargets = document.querySelectorAll("img[data-src]");

  const loadImg = function (entries, observer) {
    const [entry] = entries;
    console.log(entry);

    if (!entry.isIntersecting) return;

    // Replace src with data-src
    entry.target.src = entry.target.dataset.src;
  };

  const imgObserver = new IntersectionObserver(loadImg, {
    root: null,
    threshold: 0,
  });

  imgTargets.forEach((img) => imgObserver.observe(img));
}
