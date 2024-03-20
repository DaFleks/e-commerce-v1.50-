import { getAllProducts } from "@/lib/productFetchers";
import Product from "./ProductListing";
import clsx from "clsx";
import { Product as ProductType } from "@/lib/types";

const ProductList = async ({ className, page = 1 }: { className?: string; page?: number }) => {
  const { products } = await getAllProducts(JSON.stringify({ p: page?.toString() }));
  return (
    <section className={clsx(`grid grid-cols-2 xl:grid-cols-4 gap-4`, className)}>
      {products.splice(0, 4).map((product: ProductType) => (
        <Product key={product._id} product={product} />
      ))}
    </section>
  );
};

export default ProductList;
