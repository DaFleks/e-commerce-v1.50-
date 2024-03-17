import { getAllProducts } from "@/lib/productFetchers";
import Product from "./Product";
import { Separator } from "./ui/separator";
import clsx from "clsx";

const Products = async ({ className, page = 1 }: { className?: string; page?: number }) => {
  const { products } = await getAllProducts(JSON.stringify({ p: page?.toString() }));
  return (
    <section className={clsx(`grid grid-cols-2 xl:grid-cols-5 gap-4`, className)}>
      {products.splice(0, 5).map((product: any) => (
        <Product
          key={product._id}
          _id={product._id}
          title={product.title}
          image={product.image}
          sku={product.sku}
          price={product.price}
          description={product.description.length < 55 ? product.description : product.description.substring(0, 55) + "..."}
        />
      ))}
    </section>
  );
};

export default Products;
