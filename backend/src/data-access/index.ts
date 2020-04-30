import { Product } from "./models/product";
import mockProducts from "./mocks/products.json";

export async function getProducts(): Promise<Product[]> {
  return mockProducts;
}

export async function getProductById(id: string): Promise<Product | null> {
  return mockProducts.find((p) => p.id === id) ?? null;
}
