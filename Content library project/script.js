// const contentItems = document.querySelectorAll('#content-display .content-item');

// contentItems.forEach(item => {
//   const img = item.querySelector('img');
//   const src = img.getAttribute('data-src');

//   // Add event listener to load image when it comes into view
//   item.addEventListener('intersectionObserver', () => {
//     img.src = src;
//     img.removeAttribute('data-src');
//   });
// });

// // Create intersection observer
// const observer = new IntersectionObserver((entries, observer) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.dispatchEvent(new Event('intersectionObserver'));
//       observer.unobserve(entry.target);
//     }
//   });
// }, { threshold: 1.0 });

// // Observe content items
// contentItems.forEach(item => {
//   observer.observe(item);
// });