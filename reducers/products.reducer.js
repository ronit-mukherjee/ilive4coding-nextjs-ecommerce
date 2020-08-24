export const productsInitialState = {
  100: {
    id: 100,
    name: "Men's Leather Jacket",
    mrp: 999,
    selling_price: 799,
    currency: "₹",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    stock_qty: 100,
    sold_qty: 50,
    featured_image: "img-pro-01.jpg",
    images: [
      {
        big: "big-img-01.jpg",
        small: "smp-img-01.jpg",
      },
      {
        big: "big-img-02.jpg",
        small: "smp-img-02.jpg",
      },
      {
        big: "big-img-03.jpg",
        small: "smp-img-03.jpg",
      },
    ],
    sizes: ["S", "M", "L", "XL", "XXL", "XXXL"],
    tags: ["top-featured", "best-seller"],
  },
  101: {
    id: 101,
    name: "Women's Floral Gown",
    mrp: 599,
    selling_price: 499,
    currency: "₹",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    stock_qty: 100,
    sold_qty: 50,
    featured_image: "img-pro-02.jpg",
    images: [
      {
        big: "big-img-01.jpg",
        small: "smp-img-01.jpg",
      },
      {
        big: "big-img-02.jpg",
        small: "smp-img-02.jpg",
      },
      {
        big: "big-img-03.jpg",
        small: "smp-img-03.jpg",
      },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    tags: ["best-seller"],
  },
};

const productsReducer = (state = productsInitialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productsReducer;
