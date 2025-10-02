// // file: components/layout/PageTransition.tsx
// "use client";

// import React from "react";
// import { usePathname } from "next/navigation";
// import { AnimatePresence, motion } from "framer-motion";

// export default function PageTransition({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const pathname = usePathname();

//   return (
//     <AnimatePresence mode="wait" initial={false}>
//       <motion.main
//         key={pathname}
//         className={`flex-grow ${
//           pathname.includes("/auth")
//             ? ""
//             : "py-2 lg:px-[7%] xl:px-[7%] 2xl:px-[6%] md:px-[7%] px-[7%]"
//         }`}
//         initial={{ opacity: 0, y: 15 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{}} // You can customize exit transition if needed
//         transition={{ duration: 0.4, ease: "easeOut" }}
//       >
//         {children}
//       </motion.main>
//     </AnimatePresence>
//   );
// }





// file: components/layout/PageTransition.tsx
"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.main
        key={pathname}
        className={`flex-grow ${
          pathname.includes("/auth")
            ? ""
            : "py-2 lg:px-[7%] xl:px-[3%] 2xl:px-[3%] md:px-[7%] px-[7%]"
        }`}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{}} // You can customize exit transition if needed
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}



