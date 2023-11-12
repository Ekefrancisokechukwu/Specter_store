type Product = {
  id: number;
  attributes: {
    title: string;
    company: string;
    description: string;
    featured: boolean;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    category: string;
    image: string;
    price: number;
    shipping: false;
  };
};

type Paginate = {
  page: 1;
  pageCount: 3;
  pageSize: 10;
  total: 22;
};

type CartProduct = {
  cartID: number;
  title: string;
  price: number;
  image: sring;
  company: string;
  quantity: number;
};
