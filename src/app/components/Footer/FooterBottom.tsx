// import React from "react";
// import Link from "next/link";

// interface Category {
//   id: number;
//   name: string;
//   slug: string;
//   subcategories?: Category[];
// }

// const FooterBottom = ({ categories }: { categories: Category[] }) => {
//   return (
//     <footer className="bg-[#484848] text-white">
//       {/* 🔹 Newsletter Section */}
//       <section className="py-6 bg-[#585858]">
//         <div className="max-w-10/12 mx-auto px-4 sm:px-6 lg:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
//           <div className="text-center md:text-left">
//             <h4 className="text-2xl md:text-3xl font-semibold mb-2">
//               Subscribe to our Newsletter
//             </h4>
//             <p className="!text-gray-300 text-sm md:text-base">
//               Get the latest updates on new products and upcoming sales
//             </p>
//           </div>

//           <form className="w-full md:w-1/2 flex items-center">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="w-full px-4 py-2 border border-white text-[#333] bg-white focus:outline-none rounded-dm text-sm md:text-base"
//             />
//             <button type="submit" className="btn-primary !p-2 !rounded-sm">
//               Subscribe
//             </button>
//           </form>
//         </div>
//       </section>

//       {/* 🔹 Dynamic Categories Section */}
//       <section className="max-w-10/12 mx-auto px-4 sm:px-6 lg:px-6 py-10 border-b border-gray-700">
//         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
//           {categories?.map((category) => (
//             <nav key={category.id} aria-label={category.name}>
//               <h4 className="text-lg font-semibold mb-4">{category.name}</h4>
//               <ul className="space-y-2 text-gray-300 text-base">
//                 {category.subcategories?.length ? (
//                   category.subcategories.map((sub) => (
//                     <li key={sub.id}>
//                       <Link
//                         href={`/category/${sub.slug}`}
//                         className="hover:text-white"
//                       >
//                         {sub.name}
//                       </Link>
//                     </li>
//                   ))
//                 ) : (
//                   <li>
//                     <Link
//                       href={`/category/${category.slug}`}
//                       className="hover:text-white"
//                     >
//                       {category.name}
//                     </Link>
//                   </li>
//                 )}
//               </ul>
//             </nav>
//           ))}
//         </div>
//       </section>

//       {/* 🔹 Info Section (static content) */}
//       <section className="max-w-10/12 mx-auto px-4 sm:px-6 lg:px-6 py-10">
//         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
//           <nav aria-label="Customer Services">
//             <h4 className="text-lg font-semibold mb-4">Customer Services</h4>
//             <ul className="space-y-2 text-gray-300 text-sm">
//               <li><Link href="#">Refund policy</Link></li>
//               <li><Link href="#">Warranty</Link></li>
//               <li><Link href="#">Exchange policy</Link></li>
//             </ul>
//           </nav>

//           <nav aria-label="My Account">
//             <h4 className="text-lg font-semibold mb-4">My Account</h4>
//             <ul className="space-y-2 text-gray-300 text-base">
//               <li><Link href="#">Sign in</Link></li>
//               <li><Link href="#">Sign up</Link></li>
//               <li><Link href="#">My cart</Link></li>
//             </ul>
//           </nav>

//           <section aria-label="Contact Us">
//             <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
//             <ul className="space-y-2 text-gray-300 text-base">
//               <li><a href="mailto:contact@newtownspares.com">contact@newtownspares.com</a></li>
//               <li><a href="tel:+4122123345677">+41 22 123345677</a></li>
//             </ul>
//           </section>

//           <address className="not-italic">
//             <h4 className="text-lg font-semibold mb-4">Address</h4>
//             <p className="!text-gray-300 text-base">123 Lakeview Avenue, Zurich</p>
//             <p className="!text-gray-300 text-base">Switzerland</p>
//           </address>
//         </div>
//       </section>

//       <div className="p-3 text-center text-base bg-[#585858]">
//         <p className="!text-white">
//           &copy; New Town Spares {new Date().getFullYear()}. All rights reserved.
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default FooterBottom;












const FooterBottom = () => {

  return (
    <footer className="bg-[#484848] text-white ">
      {/* 🔹 Newsletter Section */}
      <section className="py-6 border-b border-white-700 bg-[#585858]">
        <div className="max-w-10/12 mx-auto px-4 sm:px-6 lg:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Heading + text */}
          <div className="text-center md:text-left">
            <h4 className="text-2xl md:text-3xl font-semibold mb-2">
              Subscribe to our Newsletter
            </h4>
            <p className="!text-gray-300 text-sm md:text-base">
              Get the latest updates on new products and upcoming sales
            </p>
          </div>

          {/* Right: Input */}
          <form className="w-full md:w-1/2 flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-white bg-transparent text-white focus:outline-none rounded-l-md text-sm md:text-base"
            />
            <button type="submit" className="btn-primary ">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* 🔹 Product Categories Section */}
      <section className="max-w-10/12 mx-auto px-4 sm:px-6 lg:px-6 py-10 border-b border-gray-700">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Categories */}
          <nav aria-label="Categories">
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-gray-300 text-base">
              <li>
                <a href="#" className="hover:text-white">
                  Hard drive
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  SSD
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Routers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Wifi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Monitors
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Keyboards
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Webcams
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Printers
                </a>
              </li>
            </ul>
          </nav>

          {/* Hard Drive */}
          <nav aria-label="Hard Drive">
            <h4 className="text-lg font-semibold mb-4">Hard drive</h4>
            <ul className="space-y-2 text-gray-300 text-base">
              <li>
                <a href="#" className="hover:text-white">
                  HDD
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  External Drive
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  NAS
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Hybrid SSHD
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Portable SSD
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  RAID array
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  M.2 NVME
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  SATA SSD
                </a>
              </li>
            </ul>
          </nav>

          {/* SSD */}
          <nav aria-label="SSD">
            <h4 className="text-lg font-semibold mb-4">SSD</h4>
            <ul className="space-y-2 text-gray-300 text-base">
              <li>
                <a href="#" className="hover:text-white">
                  NVME
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  M.2 SSD
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  SATA SSD
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  PCIe SSD
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  SAS SSD
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  U.2 SSD
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  External SSD
                </a>
              </li>
            </ul>
          </nav>

          {/* Monitors */}
          <nav aria-label="Monitors">
            <h4 className="text-lg font-semibold mb-4">Monitors</h4>
            <ul className="space-y-2 text-gray-300 text-base">
              <li>
                <a href="#" className="hover:text-white">
                  Gaming
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Professional
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Curved
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  4K
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Portable
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Ultra-wide
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>

      {/* 🔹 Info Section */}
      <section className="max-w-10/12 mx-auto px-4 sm:px-6 lg:px-6 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Customer Services */}
          <nav aria-label="Customer Services">
            <h4 className="text-lg font-semibold mb-4">Customer Services</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Refund policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Warranty
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Exchange policy
                </a>
              </li>
            </ul>
          </nav>

          {/* My Account */}
          <nav aria-label="My Account">
            <h4 className="text-lg font-semibold mb-4">My Account</h4>
            <ul className="space-y-2 text-gray-300 text-base">
              <li>
                <a href="#" className="hover:text-white">
                  Sign in
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Sign up
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  My cart
                </a>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <section aria-label="Contact Us">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-300 text-base">
              <li>
                <a
                  href="mailto:contact@albatross.com"
                  className="hover:text-white"
                >
                  contact@albatross.com
                </a>
              </li>
              <li>
                <a href="tel:+4122123345677" className="hover:text-white">
                  +41 22 123345677
                </a>
              </li>
            </ul>
          </section>

          {/* Address */}
          <address className="not-italic">
            <h4 className="text-lg font-semibold mb-4">Address</h4>
            <p className="!text-gray-300 text-base">
              123 Lakeview Avenue, Zurich
            </p>
            <p className="!text-gray-300 text-base">Switzerland</p>
          </address>
        </div>
      </section>
      <div className="border-t border-white-700 p-3 text-center  text-base bg-[#585858]">
        <p className="!text-gray-400">
          &copy; newtownspares 2025. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterBottom;
