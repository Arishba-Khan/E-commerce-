export default function handler(req, res) {
    const products = [
        {
            id: 1,
            name: "Mocha",
            price: 340,
            image:
            "/assets/c2.jpg",
        },

        {
            id: 2,
            name: "Expresso",
            price: 360,
            image:
            "/assets/c3.jpg",
        },
        
        {
            id: 3,
            name: "Cappuccino",
            price: 400,
            image:
            "/assets/c4.jpg",
        },
        
        
        {
            id: 4,
            name: "Orange Juice",
            price: 450,
            image:
            "/assets/j4.jpg",
        },

        
        {
            id: 5,
            name: "Watermelon",
            price: 350,
            image:
            "/assets/j6.jpg",
        },

        
        {
            id: 6,
            name: "Orange Juice",
            price: 400,
            image:
            "/assets/j7.jpg",
        },

        
        {
            id: 7,
            name: "Green Tea",
            price: 450,
            image:
            "/assets/tea1.jpg",
        },

        
        {
            id: 8,
            name: "Black Tea",
            price: 350,
            image:
            "/assets/tea2.jpg",
        },

        
        {
            id: 9,
            name: "Black tea",
            price: 400,
            image:
            "/assets/tea3.jpg",
        },

        
        {
            id: 10,
            name: "Pineapple Juice",
            price: 400,
            image:
            "/assets/j8.jpg",
        },
        
        
        {
            id: 11,
            name: "Orange Juice",
            price: 400,
            image:
            "/assets/j9.jpg",
        },

        
        {
            id: 12,
            name: "Mint Juice",
            price: 400,
            image:
            "/assets/j10.jpg",
        },
    ];

    res.status(200).json(products);
}