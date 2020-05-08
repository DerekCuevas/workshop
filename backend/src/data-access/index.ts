import { Product } from "./models/product";
import { Review } from "./models/review";
import mockProducts from "./mocks/products.json";
import mockReviews from "./mocks/reviews.json";

export async function getProducts(): Promise<Product[]> {
  return mockProducts as Product[];
}

export async function getProductById(id: string): Promise<Product | null> {
  return (mockProducts.find((p) => p.id === id) ?? null) as Product | null;
}

export async function getReviewsForProduct(
  productId: string
): Promise<Review[] | null> {
  return mockReviews.filter((r) => r.productId === productId);
}
