function loadComponent(id, file) {
    fetch(file)
        .then(res => res.text())
        .then(data => document.getElementById(id).innerHTML = data);
}

loadComponent("navbar", "components/navbar.html");
loadComponent("footer", "components/footer.html");
loadComponent("product", "components/product-item.html");
loadComponent("product-details", "Productjs/products-data.js");