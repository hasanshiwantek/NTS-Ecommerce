import RelatedProduct from "./components/Home/RelatedProducts";
import Banner from "./components/Home/Banner";

const Page = () => {
  return (
    <>
      <div className="flex flex-col gp-5">
        <Banner />
        <RelatedProduct />
      </div>
    </>
  );
};

export default Page;
