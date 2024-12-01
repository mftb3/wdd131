const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
      },
      {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
      },
      {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
      },
      {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
      },
      {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
      },
      // Add more temple objects here...
    ];
  
  // Dynamically display temple cards
  function displayTemples(temples) {
    const container = document.getElementById("temples-container");
    container.innerHTML = ""; // Clear existing content
  
    temples.forEach((temple) => {
      const card = document.createElement("div");
      card.className = "temple-card";
      card.innerHTML = `
        <figure>
          <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
          <figcaption>
            <h3>${temple.templeName}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area} sq ft</p>
          </figcaption>
        </figure>
      `;
      container.appendChild(card);
    });
  }
  
  // Filter temples based on navigation links
  document.getElementById("filter-old").addEventListener("click", () => {
    const oldTemples = temples.filter(
      (temple) => new Date(temple.dedicated).getFullYear() < 1900
    );
    displayTemples(oldTemples);
  });
  
  document.getElementById("filter-new").addEventListener("click", () => {
    const newTemples = temples.filter(
      (temple) => new Date(temple.dedicated).getFullYear() > 2000
    );
    displayTemples(newTemples);
  });
  
  document.getElementById("filter-large").addEventListener("click", () => {
    const largeTemples = temples.filter((temple) => temple.area > 90000);
    displayTemples(largeTemples);
  });
  
  document.getElementById("filter-small").addEventListener("click", () => {
    const smallTemples = temples.filter((temple) => temple.area < 10000);
    displayTemples(smallTemples);
  });
  
  document.getElementById("filter-home").addEventListener("click", () => {
    displayTemples(temples);
  });
  
  // Display all temples on page load
  displayTemples(temples);
  
  // Update footer year and last modified date
  document.getElementById("currentyear").textContent = new Date().getFullYear();
  document.getElementById(
    "lastModified"
  ).textContent = `Last Modified: ${document.lastModified}`;
  