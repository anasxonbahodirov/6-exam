// const url = 'https://raw.githubusercontent.com/diyor011/apibest/master/api.json';
// const productsWrapper = document.querySelector('.products');
// const searchInput = document.getElementById('searchInput');

// let allProducts = [];



//     const getData = async () => {
//         try {
//             const response = await fetch(url);
//             const products = await response.json();
//             if (!response.ok) {
//                 throw new Error(response.message);
//             }
//             return products;

//         } catch (err) {
//             return err.message;
//         }
//     }

//     const drawProducts = async () => {
//         const products = await getData();
//         for (let product of products) {
//             productsWrapper.innerHTML += 
//      `  <div class='card'>
//          <img class='name' src='${product.pic}'/>    
//           <p class='price'>${product.name}</p>
//           <p class='price'>${product.desc1}</p>
//           <p class='price'>${product.fulldesc}</p>
//           <p class = 'price'>${product.price}</p>
       
       
         
//         </div>`
//         }
//     }

    


//     drawProducts();


// const filterProducts = () => {
//     const searchTerm = searchInput.value.toLowerCase();
//     const filteredProducts = allProducts.filter(product => product.name.toLowerCase().includes(searchTerm));
//     drawProducts(filteredProducts);
// }

// const init = async () => {
//     allProducts = await getData();
//     drawProducts(allProducts);
// }

// searchInput.addEventListener('input', filterProducts);

// init();

















// const url = 'https://raw.githubusercontent.com/diyor011/apibest/master/api.json';
// const productsWrapper = document.querySelector('.products');
// const searchInput = document.getElementById('searchInput');

// let allProducts = [];

// // API dan mahsulotlarni olish funksiyasi
// const getData = async () => {
//     try {
//         const response = await fetch(url);
//         const products = await response.json();
//         if (!response.ok) {
//             throw new Error(response.message);
//         }
//         return products;
//     } catch (err) {
//         return err.message;
//     }
// }

// // Mahsulotlarni chiqarish funksiyasi
// const drawProducts = (products) => {
//     productsWrapper.innerHTML = ''; // Har safar tozalaymiz
//     for (let product of products) {
//         productsWrapper.innerHTML += 
//         `<div class='card'>
//             <img class='name' src='${product.pic}' alt='${product.name}'/>    
//             <p class='name'>${product.name}</p>
//             <p class='desc'>${product.desc1}</p>
//             <p class='fulldesc'>${product.fulldesc}</p>
//             <p class='price'>${product.price}</p>
//         </div>`;
//     }
// }

// // Filterlash funksiyasi
// const filterProducts = () => {
//     const searchTerm = searchInput.value.toLowerCase();
//     const filteredProducts = allProducts.filter(product => product.name.toLowerCase().includes(searchTerm));
//     drawProducts(filteredProducts);
// }

// // API dan mahsulotlarni olib kelamiz va birinchi marta barcha mahsulotlarni chiqaramiz
// const init = async () => {
//     allProducts = await getData();
//     drawProducts(allProducts);
// }

// // Qidiruv maydonida har bir harf kiritilganda filterni yangilash
// searchInput.addEventListener('input', filterProducts);

// // Sahifani yuklash bilan mahsulotlarni ko'rsatish
// init();




















const url = 'https://raw.githubusercontent.com/diyor011/apibest/master/api.json';
const productsWrapper = document.querySelector('.products');
const searchInput = document.querySelector('#searchInput'); // Ensure this matches your actual input element

let allProducts = []; // Array to store the fetched products

const getData = async () => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }
        const products = await response.json();
        return products;
    } catch (err) {
        console.error(err.message);
        return [];
    }
}

const filterProducts = (products, query) => {
    return products.filter(product => product.name.toLowerCase().includes(query.toLowerCase()));
};

const displayProducts = (products) => {
    const productHTML = products.map(product => `
        <div class='card'>
            <img class='name' src='${product.pic}' alt='${product.name}'/>    
            <p class='price'>${product.name}</p>
            <p class='price'>${product.price}</p>
            <p class='price'>${product.fulldesc}</p>
            <p class='price'>${product.category}</p>
        </div>
    `).join('');
    
    productsWrapper.innerHTML = productHTML;
};

const init = async () => {
    allProducts = await getData(); // Fetch and store all products
    displayProducts(allProducts); // Display all products initially

    searchInput.addEventListener('input', (event) => {
        const query = event.target.value;
        const filteredProducts = filterProducts(allProducts, query);
        displayProducts(filteredProducts); // Display filtered products
    });
};

init();
