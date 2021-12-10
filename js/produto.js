
const produtosJSON = {
    "produtos":[
        {
            "title": "Quadro em aquarela Ipê-Amarelo",
            "price": "50.00",
            "image": "./img/produto-0.jpg",
            "category": "Quadro"
        },
        {
            "title": "Quadro em aquarela Araucária",
            "price": "50.00",
            "image": "./img/produto-1.jpg",
            "category": "Quadro"
        },
        {
            "title": "Adesivo Trevo",
            "price": "1.00",
            "image": "./img/produto-2.jpg",
            "category": "Adesivo"

        },
        {
            "title": "Adesivo Beija-Flor",
            "price": "1.00",
            "image": "./img/produto-3.jpg",
            "category": "Adesivvo"

        },
        {
            "title": "Adesivo Agua-Viva",
            "price": "1.00",
            "image": "./img/produto-4.jpg",
            "category": "Adesivo"

        },
        {
            "title": "Adesivo Mariposa",
            "price": "2.00",
            "image": "./img/produto-5.jpg",
            "category": "Adesivo"

        },
        {
            "title": "Adesivo Libelula",
            "price": "1.00",
            "image": "./img/produto-6.jpg",
            "category": "Adesivo"

        },
        {
            "title": "Adesivo Araucária",
            "price": "1.00",
            "image": "./img/produto-7.jpg",
            "category": "Adesivo"

        },
        {
            "title": "Adesivo Ametista com Lavanda",
            "price": "2.00",
            "image": "./img/produto-8.jpg",
            "category": "Adesivo"

        },
        {
            "title": "Adesivo Cogumelo",
            "price": "2.00",
            "image": "./img/produto-9.jpg",
            "category": "Adesivo"

        },
        {
            "title": "Asa de Monarca MDF",
            "price": "20.00",
            "image": "./img/produto-10.jpg",
            "category": "MDF"

        },
        {
            "title": "Fases da Lua MDF",
            "price": "30.00",
            "image": "./img/produto-11.jpg",
            "category": "MDF"

        }
    ]
};

const getProducts = ()=>{
    const dataJSON = JSON.stringify(produtosJSON);
    const data = JSON.parse(dataJSON);
    const produtos = data.produtos;
    return produtos;
}
// Display produtos
const displayProdutos = (produtos, center)=>{
    let display = produtos.map(({title,image,price})=>`<div class="product">
    <div class="product-header">
        <img src=${image} alt="">
    </div>
    <div class="product-footer">
        <h3>${title}</h3>
        <div class="rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
        </div>
        <div class="product-price">
            <h4>$${price}</h4>
        </div>
        <ul>
            
            <li>
                <span>Breve descrissão do produto</span>
            </li>
            <li>
                <a class="add-cart" href="#">
                    <i class="fas fa-shopping-basket"></i>
                </a>
            </li>
            
        </ul>
    </div>
</div>`
);
    display = display.join("");
    center.innerHTML = display;
};
// Filtering
const catContainer = document.querySelector(".sort-category");
const productCenter = document.querySelector(".product-center")
const filterBtns = [...document.querySelectorAll(".filter-btn")];

if(catContainer){
    catContainer.addEventListener('click', e=>{
        const target = e.target.closest(".section-title");
        if(!target) return;

        const id = target.dataset.id;
        const products = getProducts();

        if(id){
            filterBtns.forEach(btn=>{
                btn.classList.remove("active");
            });
        }
        target.classList.add("active");
        const menuCat = products.filter(product => product.category === id);
        productCenter.classList.add("animate__animated", "animate__backInUp");
        setTimeout(()=>{
            productCenter.classList.remove("animate__animated", "animate__backInUp");
        }, 1000);
        displayProdutos(menuCat, productCenter);
    });
    
}

const filterArray = type =>{
    const products = getProducts();
    return products.filter(product => product.category === type);
};

const shopCenter = document.querySelector(".shop-center");

window.addEventListener("DOMContentLoaded", ()=>{
    const products = getProducts();
    const defaultProducts = filterArray("Quadro");
    displayProdutos(defaultProducts, productCenter);
    displayProdutos(products, shopCenter);
});