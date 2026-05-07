function loadComponent(id, file) {
    if (!file) return;
    const target = document.getElementById(id);
    if (!target) return;
    fetch(file)
        .then(res => {
            if (!res.ok) throw new Error(res.status + ' ' + res.statusText);
            return res.text();
        })
        .then(data => target.innerHTML = data)
        .catch(err => console.error('Error loading component', file, err));
}

loadComponent("navbar", "components/navbar.html");
loadComponent("footer", "components/footer.html");
loadComponent("product", "components/product-item.html");