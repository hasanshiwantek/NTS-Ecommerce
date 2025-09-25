"use client";
 
import React from "react";
 
const ProductOverview = () => {
  return (
    <section className="!p-6 !bg-white !text-gray-900 !px-[5%]">
      <div className="max-w-full">
        {/* Main Overview Heading */}
        <h1 className="!text-3xl !font-bold !mb-4 ">Overview</h1>
 
        {/* Intro Paragraph */}
        <p className="p-primary !mb-6 !leading-relaxed  !max-w-3xl">
          Introducing the <strong>PA905U - Targus 720KB External Floppy Drive</strong>, a
          versatile solution for your data storage needs. This compact device is designed
          for both PC and Mac users, offering seamless connectivity and reliable
          performance.
        </p>
 
        {/* Key Features */}
        <section className="!mb-8">
          <h2 className="!text-2xl !font-semibold !mb-3">Key Features:</h2>
          <ul className="!list-disc !list-inside !space-y-2 ">
            <li className="li-primary">
              <span className="!font-semibold ">Storage Capacity:</span> 720KB, perfect
              for transferring files and backups.
            </li>
            <li className="li-primary">
              <span className="!font-semibold">Compatibility:</span> Works with PC
              (1.44MB) and Mac (1.4MB) systems.
            </li>
            <li className="li-primary">
              <span className="!font-semibold">Connection Type:</span> Equipped with a
              4-pin Type A Male connector for easy plug-and-play functionality.
            </li>
            <li className="li-primary">
              <span className="!font-semibold">Hot-Swappable:</span> Allows you to
              connect and disconnect without shutting down your computer, ensuring
              convenience.
            </li>
            <li className="li-primary">
              <span className="!font-semibold">Compact Design:</span> The 3.5-inch size
              makes it portable and easy to store.
            </li>
          </ul>
        </section>
 
        {/* Closing Paragraph */}
        <p className="!mb-10 !leading-relaxed p-primary ">
          Whether you're archiving important documents or accessing legacy data, the{" "}
          <strong>PA905U</strong> is your go-to external floppy drive.
        </p>
 
        {/* New Product Section */}
        <section className="!mt-8 border ">
            <div  className="bg-[#F5F6FA] p-2 ">
          <h2 className="!text-2xl !font-semibold !mb-2 ">
            Z9PR-D12-(ASMB6-IKVM)
          </h2>
            </div>
 
          {/* Key-Value Details */}
          <dl className="!space-y-4 p-2 ">
            {[
              ["Brand", "Western Digital"],
              ["Weight", "5 lbs"],
              ["Capacity", "1TB"],
              ["Type", "External HDD"],
              ["Interface", "USB 3.0"],
              ["Color", "Black"],
              ["Speed", "5400 RPM"],
            ].map(([key, value]) => (
              <div
                key={key}
                className="!grid !grid-cols-[200px_1fr] !items-center !border-b !border-gray-300 !pb-2"
              >
                <dt className="!font-medium !text-gray-700 li-primary">{key}</dt>
                <dd className="!text-gray-900 !text-center li-primary">{value}</dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </section>
  );
};
 
export default ProductOverview;
 
 