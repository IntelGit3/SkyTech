document.addEventListener('DOMContentLoaded', function() {
    const el = {
        type: document.getElementById('typeSelect'),
        device: document.getElementById('deviceSelect'),
        qty: document.getElementById('quantityInput'),
        price: document.getElementById('priceInput'),
        total: document.getElementById('totalDisplay'),
        result: document.getElementById('resultBox'),
        form: document.getElementById('quotationForm')
    };

    el.type.addEventListener('change', () => {
        el.device.innerHTML = '<option value="">Select Device</option>';
        el.price.value = '';
        el.result.style.display = 'none';

        if (!el.type.value || typeof PRODUCTS_MASTER === 'undefined') return;

        const category = el.type.value;

        Object.keys(PRODUCTS_MASTER).forEach(key => {
            const product = PRODUCTS_MASTER[key];
            const searchKey = key.toLowerCase();
            let isMatch = false;

            if (category === 'ac' && (searchKey.includes('ac') || searchKey.includes('inverter') || searchKey.includes('media'))) isMatch = true;
            if (category === 'cctv' && (searchKey.includes('cctv') || searchKey.includes('hikvision') || searchKey.includes('camera'))) isMatch = true;
            if (category === 'network' && (searchKey.includes('tp') || searchKey.includes('net') || searchKey.includes('wifi') || searchKey.includes('router'))) isMatch = true;

            if (isMatch) {
                const opt = document.createElement('option');
                opt.value = key;
                opt.textContent = product.name;
                el.device.appendChild(opt);
            }
        });
    });

    el.device.addEventListener('change', () => {
        const item = PRODUCTS_MASTER[el.device.value];
        if (item) {
            const cleanPrice = item.price.toString().replace(/,/g, '').replace(/[^0-9.]/g, '');
            el.price.value = parseFloat(cleanPrice).toFixed(2);
        } else {
            el.price.value = '';
        }
    });

    el.form.addEventListener('submit', (e) => {
        e.preventDefault();

        const unitPrice = parseFloat(el.price.value);
        const count = parseInt(el.qty.value);

        if (isNaN(unitPrice) || isNaN(count) || count <= 0) {
            alert("කරුණාකර Device එකක් තෝරා ප්‍රමාණය (Quantity) ඇතුළත් කරන්න.");
            return;
        }


        let totalAmount = unitPrice * count;


        el.result.style.display = 'block';


        const formattedTotal = totalAmount.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });


        el.total.textContent = "Rs. " + formattedTotal;
    });
});