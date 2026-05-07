function loadComponent(id, file) {
    if (!file) return;
    fetch(file)
        .then(res => {
            if (!res.ok) throw new Error(res.status + ' ' + res.statusText);
            return res.text();
        })
        .then(data => document.getElementById(id).innerHTML = data)
        .catch(err => console.error('Error loading component', file, err));
}

loadComponent("navbar", "components/navbar.html");
loadComponent("footer", "components/footer.html");
loadComponent("product", "components/product-item.html");