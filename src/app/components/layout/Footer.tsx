// components/Footer/Footer.tsx
import FooterBottom from "../Footer//FooterBottom";
// import { fetchCategories } from "@/lib/api/category";

export default async function Footer() {
  // const categories = await fetchCategories();

  return (
    <footer>
      {/* <FooterBottom categories={categories} /> */}
      <FooterBottom />

    </footer>
  );
}
