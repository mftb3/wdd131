// Product Array
const products = [
    { id: 1, name: "Product A" },
    { id: 2, name: "Product B" },
    { id: 3, name: "Product C" }
  ];
  
  // Populate Product Options
  const productSelect = document.getElementById("productName");
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.name;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
  
  // Display Last Modified Date
  document.getElementById("lastModified").textContent = document.lastModified;
  