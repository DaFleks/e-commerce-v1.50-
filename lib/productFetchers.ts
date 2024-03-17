import paramString from "./paramString";
import wait from "./wait";

export const getAllProducts = async (params?: string) => {
  const response = await fetch(`${process.env.API_URL}/api/products${params ? paramString(params) : ""}`, {
    method: "GET",
    cache: "no-cache",
  });

  if (response.status === 200) {
    const { products, count, totalPages } = await response.json();
    return { status: response.status, products: products, count: count, totalPages: totalPages };
  }

  return { status: response.status, products: [], count: 0, totalPages: 1 };
};

export const createProduct = async (values: string) => {
  const response = await fetch(`${process.env.API_URL}/api/products`, {
    method: "POST",
    body: values,
    cache: "no-cache",
  });

  return response.status;
};

export const getProductById = async (_id: string) => {
  const response = await fetch(`${process.env.API_URL}/api/products/${_id}`, {
    method: "GET",
    cache: "no-cache",
  });

  if (response.status === 200) {
    const { product, status } = await response.json();
    return { product: product, status: status };
  }

  return { product: {}, status: response.status };
};

export const updateProductById = async (_id: string, values: string) => {
  const response = await fetch(`${process.env.API_URL}/api/products/${_id}`, {
    method: "PUT",
    body: values,
    cache: "no-cache",
  });

  return response.status;
};

export const deleteProductById = async (_id: string) => {
  const response = await fetch(`${process.env.API_URL}/api/products/${_id}`, {
    method: "DELETE",
    cache: "no-cache",
  });

  return response.status;
};

export const changeActiveProductById = async (_id: string, currentActiveValue: boolean) => {
  const response = await fetch(`${process.env.API_URL}/api/products/${_id}`, {
    method: "PATCH",
    body: JSON.stringify({ isActive: currentActiveValue }),
    cache: "no-cache",
  });

  return { status: response.status };
};
