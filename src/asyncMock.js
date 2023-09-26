const products = [
    {
        id: '1',
        name: 'Iphone 12 mini',
        price: 1000,
        img: 'https://www.iplace.com.uy/ccstore/v1/images/?source=/file/v7288717645452748777/products/100000797001.00-usado-iphone-12-mini-azul-apple-64gb-100000797001.jpg&quality=0.8&outputFormat=JPEG',
        stock: 62,
        description: 'Iphone 12 mini 128GB azul'
    },
    {
        id: '2', name: 'Iphone 12', price: 1300, img: 'https://www.iplace.com.uy/ccstore/v1/images/?source=/file/v3878258681382390317/products/100000174.00-iphone12-apple-azul-128-mgje3lz-a.jpg&quality=0.8&outputFormat=JPEG',stock: 50, description: 'Iphone 12 256GB azul'
    },
    {
        id: '3', name: 'Iphone 12 Pro', price: 1600, img: 'https://m.media-amazon.com/images/I/51n-83C8HYL._AC_SL1000_.jpg',stock: 36, description: 'Iphone 12 Pro 512GB negro'
    },
]

const productsByCategory = {
    category1: [
    {
        id: '4',
        name: 'Iphone 12 mini 64GB',
        price: 900,
        img: '',
        stock: 20,
        description: 'Iphone 12 mini 64GB'
    },
    {
        id: '5',
        name: 'Iphone 12',
        price: 1400,
        img: '',
        stock: 20,
        description: 'Iphone 12 128GB'
    }
],

    category2: [
    {
        id: '5',
        name: 'Tablet SAMSUNG 4G A7 Lite',
        price: 250,
        img: '',
        stock: 30,
        description: 'Tablet SAMSUNG 4G A7 Lite'
    },
      //Seguir..
    ],

    category3: [
        {
            id: '5',
            name: 'HP i7 16GB 512SSD',
            price: 250,
            img: '',
            stock: 10,
            description: 'Tablet SAMSUNG 4G A7 Lite'
        },
          //Seguir..
        ], 
    // Más productos y cat...
};

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        resolve(products.find(prod => prod.id === productId))
        }, 500)
}


export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
    const productsInCategory = productsByCategory[category] || [];
    resolve(productsInCategory);
    });
};