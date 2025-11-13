import React from "react";
import AboutBanner from "../components/about/AboutBanner";
import GlobalSupplier from "../components/about/GlobalSupplier";
import AboutStats from "../components/about/AboutStats";
import AboutBrandSection from "../components/about/AboutBrandSection";
import SocialResponsibilitySection from "../components/about/SocialResponsibiltySection";
import GetInTouch from "../components/Home/GetInTouch";
import dynamic from "next/dynamic";
const AOSWrapper = dynamic(() => import("../components/animation/AOSWrapper"));
const page = () => {
  return (
    <main className="flex flex-col gap-30">
      <AOSWrapper animation="zoom-in" delay={100}>
        <AboutBanner />
      </AOSWrapper>
      <AOSWrapper animation="fade-up" delay={300}>
        <GlobalSupplier />
      </AOSWrapper>
      <AOSWrapper>
        <AboutStats />
      </AOSWrapper>
      <AOSWrapper>
        <AboutBrandSection />
      </AOSWrapper>
      <AOSWrapper>
        <SocialResponsibilitySection />
      </AOSWrapper>
      <AOSWrapper>
        <GetInTouch />
      </AOSWrapper>
    </main>
  );
};

export default page;








// import React from "react";
// import AboutBanner from "../components/about/AboutBanner";
// import GlobalSupplier from "../components/about/GlobalSupplier";
// import AboutStats from "../components/about/AboutStats";
// import AboutBrandSection from "../components/about/AboutBrandSection";
// import SocialResponsibilitySection from "../components/about/SocialResponsibiltySection";
// import GetInTouch from "../components/Home/GetInTouch";
// import dynamic from "next/dynamic";
// const AOSWrapper = dynamic(() => import("../components/animation/AOSWrapper"));
// const page = () => {
//   return (
//     <main className="flex flex-col gap-30">
//       <AOSWrapper animation="zoom-in" delay={100}>
//         <AboutBanner />
//       </AOSWrapper>
//       <AOSWrapper animation="fade-up" delay={300}>
//         <GlobalSupplier />
//       </AOSWrapper>
//       <AOSWrapper animation="fade-up" delay={500}>
//         <AboutStats />
//       </AOSWrapper>
//       <AOSWrapper animation="fade-up" delay={700}>
//         <AboutBrandSection />
//       </AOSWrapper>
//       <AOSWrapper animation="fade-up" delay={800}>
//         <SocialResponsibilitySection />
//       </AOSWrapper>
//       <AOSWrapper animation="fade-up" delay={900}>
//         <GetInTouch />
//       </AOSWrapper>
//     </main>
//   );
// };

// export default page;
