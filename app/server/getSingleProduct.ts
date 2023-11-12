import { customFetch } from "@/lib/utils";

export const getSingleProduct = async (productId: string) => {
  try {
    const response = await customFetch(`/products/${productId}`);
    const data: Product = response.data.data;

    return data;
  } catch (error) {
    console.log(error);
  }
};
