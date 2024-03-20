import Highlight from "@/components/Highlight";
import ProductList from "@/components/ProductList";
import SectionHeader from "@/components/SectionHeader";
import { getProductById } from "@/lib/productFetchers";
import { HeadsetIcon, SparklesIcon, TruckIcon } from "lucide-react";
import Product from "@/components/Product";

const page = async ({ params }: { params: { _id: string } }) => {
  const { product } = await getProductById(params._id);
  return (
    <div className="p-4">
      <Product product={product} />

      {/* HIGHLIGHTS */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 text-white text-center text-2xl font-semibold mb-8">
        <Highlight
          icon={<TruckIcon size={64} />}
          title="RAPID SHIPPING"
          text="Expedited shipping options with reliable tracking to ensure prompt delivery of orders."
        />
        <Highlight icon={<HeadsetIcon size={64} />} title="DEDICATED CUSTOMER SUPPORT" text="Responsive customer support through various channels." />
        <Highlight
          icon={<SparklesIcon size={64} />}
          title="PERSONALIZED EXPERIENCE"
          text="Recommendations and exclusive promotions based on customer preferences and purchase history."
        />
      </div>

      {/* OTHER PRODUCTS */}
      {/* <div className="mb-4">
        <SectionHeader className="mb-4" title="Browse These Hot Finds!" />
        <ProductList page={3} />
      </div> */}
    </div>
  );
};

export default page;
