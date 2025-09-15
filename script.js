function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}


const featuredDestinations = [
    { name: "Paris", img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34" },
    { name: "Maldives", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
    { name: "New York", img: "https://images.unsplash.com/photo-1549924231-f129b911e442" },
    { name: "Dubai", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb" }
];

const carousel = document.getElementById("featured-carousel");
featuredDestinations.forEach(dest => {
    let slide = document.createElement("div");
    slide.classList.add("swiper-slide");
    slide.innerHTML = `<img src="${dest.img}" alt="${dest.name}"><h3>${dest.name}</h3>`;
    carousel.appendChild(slide);
});

new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: { el: ".swiper-pagination", clickable: true },
    breakpoints: {
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
    }
});


const packages = [
    { name: "Paris Getaway", price: "$999", img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34" },
    { name: "Maldives Luxury", price: "$1499", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
    { name: "NY City Lights", price: "$1299", img: "https://images.unsplash.com/photo-1549924231-f129b911e442" },
    { name: "Dubai Adventure", price: "$1199", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb" }
];


const packageList = document.getElementById("package-list");
packages.forEach(pkg => {
    let card = document.createElement("div");
    card.classList.add("package-card");
    card.innerHTML = `
    <img src="${pkg.img}" alt="${pkg.name}">
    <div class="content">
      <h3>${pkg.name}</h3>
      <p>Price: ${pkg.price}</p>
      <button>Book Now</button>
    </div>`;
    packageList.appendChild(card);
});


const map = L.map("travel-map").setView([20, 0], 2);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);


const markers = [
    { name: "Paris", coords: [48.8566, 2.3522] },
    { name: "Maldives", coords: [3.2028, 73.2207] },
    { name: "New York", coords: [40.7128, -74.0060] },
    { name: "Dubai", coords: [25.276987, 55.296249] }
];
markers.forEach(m => {
    L.marker(m.coords).addTo(map).bindPopup(`<b>${m.name}</b>`);
});