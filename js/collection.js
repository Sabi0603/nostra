import { products } from "./product.js";

const filterOpen = document.getElementById("filterOpen");
const filterSlide = document.getElementById("filterSlide");
const filterClose = document.getElementById("filterClose");


filterOpen.addEventListener("click", () => {
    filterSlide.classList.remove("-translate-x-full");
    filterSlide.classList.add("translate-x-0");
});

filterClose.addEventListener("click", () => {
    filterSlide.classList.remove("translate-x-0");
    filterSlide.classList.add("-translate-x-full");
});


// COLLECTION VIEW
const collectionView = document.getElementById("collectionView");
const productImageClass = "w-full aspect-[3/4] object-cover"

function renderProducts(products) {
    collectionView.innerHTML = "";

    products.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.classList.add("bg-white", "rounded-2xl", "shadow", "p-4", "relative");
        productCard.innerHTML = `
        <img class="${productImageClass}" src="${product.image}">
        <h4 class="mt-3 font-bold">${product.name}</h4>
        <p class="text-sm">₹ ${product.price}</p>
        `;
        collectionView.appendChild(productCard);
    });
}

renderProducts(products);

// FILTER LOGICS

// GETTING CHECKED CHECKBOXES
const sortBy = document.getElementById("sortBy");
const occasionCheck = document.querySelectorAll("input[name='occasion']");
const colorCheck = document.querySelectorAll("input[name='colors']");
const arrivalCheck = document.querySelectorAll("input[name='arrival']");

function getSelected(checkboxes) {
    const selected = [];

    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            selected.push(checkbox.value);
        }
    });
    return selected;
}

// APPLY FILTERS
function applyFilters() {
    let filteredProducts = [...products];
    const occasionSelected = getSelected(occasionCheck);
    const colorSelected = getSelected(colorCheck);
    const arrivalSelected = getSelected(arrivalCheck);


    // FILTER FOR OCCASIONS
    if (occasionSelected.length > 0) {
        filteredProducts = filteredProducts.filter((product) => {
            return occasionSelected.includes(product.occasion);
        });
    }

    // FILTER FOR COLORS
    if (colorSelected.length > 0) {
        filteredProducts = filteredProducts.filter((product) => {
            return colorSelected.includes(product.color);
        });
    }

    // FILTER FOR ARRIVALS
    if (arrivalSelected.length > 0) {
        filteredProducts = filteredProducts.filter((product) => {
            return arrivalSelected.includes(product.arrival);
        });
    }

    // FILTER FOR SORT BY
    if (sortBy.value === "price-asc") {
        filteredProducts.sort((a, b) => a.price - b.price);
    }

    if (sortBy.value === "price-desc") {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    // FILTERS GET NOTHING
    if (filteredProducts.length === 0) {
        const pClass = "col-span-full flex flex-col gap-5 items-center justify-center h-[calc(100vh-120px)]";
        collectionView.innerHTML = `
            <div class="${pClass}">
                <i class="fa-regular fa-face-frown text-5xl"></i>
                <p class"text-center text-2xl text-gray-500">Expected Collection Not Available</p>
            </div>
        `;
        return;
    }

    renderProducts(filteredProducts);
}

// EVENT LISTENERS
sortBy.addEventListener("change", applyFilters);

occasionCheck.forEach((checkbox) => {
    checkbox.addEventListener("change", applyFilters);
});

colorCheck.forEach((checkbox) => {
    checkbox.addEventListener("change", applyFilters);
});

arrivalCheck.forEach((checkbox) => {
    checkbox.addEventListener("change", applyFilters);
});