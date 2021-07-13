const btns = document.querySelectorAll('.product-button');


btns.forEach(elem => {
    elem.addEventListener('click', (event) => {
        const product = event.target;
        const { id, nameproduct } = product.dataset;

        setStoreBasket(id, nameproduct);
    })
});

const setStoreBasket = (id, nameProduct) => {
    let storebasketJson = localStorage.getItem('store') || '[]';
    let storebasket = JSON.parse(storebasketJson);

    for (const product of storebasket) {
        console.log(product);
        if (product.id === id) {
            product.quantity = product.quantity + 1;

            storebasketJson = JSON.stringify(storebasket);
            localStorage.setItem('store', storebasketJson);
            return;
        }
    }

    storebasket.push({id: id, product: nameProduct, quantity: 1});
    storebasketJson = JSON.stringify(storebasket);
    localStorage.setItem('store', storebasketJson);
}