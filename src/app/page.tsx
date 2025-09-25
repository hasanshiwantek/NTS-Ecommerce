import RelatedProduct from "./components/Home/RelatedProducts";
import Banner from "./components/Home/Banner";

const Page = () => {
  return (
    <>
      <main className="flex flex-col gp-5" role="main">
        <Banner />
        <RelatedProduct />
      </main>
    </>
  );
};

export default Page;
