const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

function setActiveLink() {
  navLinks.forEach(link => link.classList.remove("active"));
  navLinks.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add("active");
    }
  });
}
setActiveLink();

function filterItems(category) {
  const items = document.querySelectorAll('.item');
  items.forEach(item => {
    item.style.display = (category === 'all' || item.classList.contains(category)) ? 'block' : 'none';
  });
}
window.onload = () => filterItems('all');

  function filterItems(category) {
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
      if (category === 'all' || item.classList.contains(category)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }
  window.onload = () => filterItems('all');
