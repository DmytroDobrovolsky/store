export type Product = {
  id: number;
  name: string;
  price: number;
  weight: number;
  image: string;
  model: string;
  delivery: string;
};

export type FormData = {
  name: string;
  price: string;
  weight: number;
  delivery: string;
};

export type OrderData = {
  id: number;
  name: string;
  weight: number;
  image: string;
  model: string;
  fullName: string;
  number: string;
  payment: string;
  url: string;
  price: number;
};

export type solanaCourse = {
  solana: number;
  usd: number;
};

export type Banners = {
  id: number;
  src: string;
};
