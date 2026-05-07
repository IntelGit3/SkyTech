function loadComponent(id , file) {
    fetch(file)
        .then(res => res.text())
        .then(data => 
            document.getElementById(id).innerHTML = data
        );
}

loadComponent("navbar" , "Components/navbar.html");
loadComponent("footer" , "Components/footer.html");
loadComponent("product", "Components/product-item.html")
loadComponent("product-details",)