"use client";
import React from "react";
import { Star, ShoppingCart, Plus, Minus } from "lucide-react";
import Image from "next/image";
import americanexpress from "@/assets/card-icon/american-express.png";
import debit from "@/assets/card-icon/debit-card.png";
import googlepay from "@/assets/card-icon/google-pay.png";
import paypal from "@/assets/card-icon/paypal.png";
import visa from "@/assets/card-icon/visa.png";
import freelogo from "@/assets/card-icon/freelogo.png";
import dhllogo from "@/assets/card-icon/dhllogo.png";
import upslogo from "@/assets/card-icon/upslogo.png";
import feedxlogo from "@/assets/card-icon/feedxlogo.png";
import cart from "@/assets/card-icon/shoppingCart.svg";
import { useAppDispatch } from "@/hooks/useReduxHooks";
import { toast } from "react-toastify";
import { addToCart } from "@/redux/slices/cartSlice";
import { useRouter } from "next/navigation";
const ProductMiddle = ({ product, quantity, increment, decrement }: any) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  return (
    <div className=" product-middle  flex flex-col h-full w-full  xl:w-[38%] 2xl:w-[36.4%]">
      <div>
        <div className="flex flex-col xl:gap-2.5 2xl:gap-3 gap-3">
          {/* <h6 className="h6-regular">{product?.brand?.name}</h6> */}
          <h1
            className="
    font-bold uppercase 
    text-[14px] leading-9 2xl:leading-11 tracking-[0.0075em] text-[#000000] 
    xl:text-[16.8px] 
    2xl:text-[21px]
  "
          >
            {product?.name || "N/A"}
          </h1>

          {/* Rating */}
          <div className="flex items-center space-x-3">
            {product?.rating && (
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            )}
            <h6 className="xl:text-[11.3px] 2xl:text-[14.2px] text-[#121e4d]">
              {product?.rating || "N/A " + " Ratings"}
            </h6>
            <h6 className="xl:text-[11.3px] 2xl:text-[14.2px] text-[#121e4d]">
              {product.reviews || "N/A " + " Reviews"}
            </h6>
          </div>
        </div>

        {/* Price */}
        <div className="flex flex-col 2xl:gap-[4px] xl:gap-[3.1px] xl:mt-4 2xl:mt-6">
          <div className="flex flex-col items-start">
            <h2 className="xl:text-[13.3px] 2xl:text-[16.6px] font-bold text-[#000000]">
              Was ${Number(product?.price || 0).toFixed(2)}
            </h2>
            <h5 className="xl:text-[16.8px] 2xl:text-[21px] font-bold text-[#ff482e]">
              Now $
              {product?.msrp && product.msrp > 0
                ? Number(product.msrp).toFixed(2)
                : "N/A"}{" "}
              <span className="xl:text-[13.3px] 2xl:text-[16.6px] text-[#d40511]">
                You save{" "}
                {(
                  Number(product?.price || 0) - Number(product.msrp || 0)
                ).toFixed(2)}
              </span>
            </h5>
          </div>

          {/* Secure Methods */}
          <div className="flex flex-wrap items-center xl:mt-4 2xl:mt-6">
            <span className="xl:text-[10.2px] 2xl:[12.8px] text-[#000000]">
              Secure methods:
            </span>
            {/* <div className="flex items-center gap-2">
              <Image src={visa} alt="Visa" />
              <Image src={debit} alt="Debit" />
              <Image src={paypal} alt="PayPal" />
              <Image src={americanexpress} alt="AmEx" />
              <Image src={googlepay} alt="GooglePay" />
            </div> */}
          </div>
        </div>

        {/* Shipping Info */}
        <div className="2xl:gap-[16px]  xl:gap-[12px] bg-[#F5F5F5] xl:mt-4 2xl:mt-6 px-4 xl:h-[4.2rem] 2xl:h-[5.3rem] rounded-md flex flex-col sm:flex-row items-center justify-between gap-3">
          <Image
            src={freelogo}
            alt="Free Shipping"
            className="w-14 h-w-14 object-contain"
          />
          <div className="flex-1 text-center sm:text-left ">
            <h5 className="text-[#000000] font-bold xl:text-[11.2px] 2xl:text-[14px]">
              Free shipping Up to 10 lbs
            </h5>
            <p className="xl:text-[8.4px] 2xl:text-[10.5px] text-[#000000]">
              Get your orders delivered without extra cost.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Image src={dhllogo} alt="DHL" className="w-16 h-10" />
            <Image src={upslogo} alt="UPS" className="w-16 h-10" />
            <Image src={feedxlogo} alt="FedEx" className="w-20 h-10" />
          </div>
        </div>

        {/* SKU / Availability / Quantity */}
        <div className="flex flex-col gap-1 w-full mt-3">
          <div className="flex xl:gap-14 2xl:gap-16">
            <h5 className="xl:text-[11.2px] 2xl:text-[14px] w-[18%] text-[#000000]">
              Manufacture
            </h5>
            <h5 className="xl:text-[11.2px] 2xl:text-[14px] text-[#000000]">
              {product?.brand?.name || "N/A"}
            </h5>
          </div>
          <div className="flex xl:gap-14 2xl:gap-16">
            <h5 className="xl:text-[11.2px] 2xl:text-[14px] w-[18%] text-[#000000]">
              Mfr Part#
            </h5>
            <h5 className="xl:text-[11.2px] 2xl:text-[14px] text-[#000000]">
              {product?.sku || "N/A"}
            </h5>
          </div>
          <div className="flex xl:gap-14 2xl:gap-16">
            <h5 className="xl:text-[11.2px] 2xl:text-[14px] w-[18%] text-[#000000]">
              Availability
            </h5>
            <h5 className="xl:text-[11.2px] 2xl:text-[14px] text-[#000000]">
              {product?.availabilityText || "N/A"}
            </h5>
          </div>
          <div className="flex xl:gap-14 2xl:gap-16">
            <h5 className="xl:text-[11.2px] 2xl:text-[14px] w-[18%] text-[#000000]">
              Weight
            </h5>
            <h5 className="xl:text-[11.2px] 2xl:text-[14px] text-[#000000]">
              {product?.dimensions?.weight || "N/A"}
            </h5>
          </div>
          <div className="flex xl:gap-14 2xl:gap-16">
            <h5 className="xl:text-[11.2px] 2xl:text-[14px] w-[18%] text-[#000000]">
              Shipping
            </h5>
            <h5 className="xl:text-[11.2px] 2xl:text-[14px] text-[#000000]">
              {product?.fixedShippingCost || "N/A"}
            </h5>
          </div>

          <div className="flex xl:gap-2.5 xl:mt-4 2xl:mt-6">
            <div
              className="
      flex items-center justify-center 
      w-24 h-10                
      md:w-28 md:h-11             
      lg:w-32 lg:h-12            
      xl:w-[30.1%] xl:h-[3.2rem]    
      2xl:w-[30%] 2xl:h-[48px]  
      border border-gray-300
    "
            >
              <button
                onClick={decrement}
                className="
        flex items-center justify-center
        w-8 h-8 text-gray-700      
        md:w-9 md:h-9
        lg:w-10 lg:h-10
        xl:w-[48.8px] xl:h-[40px]
        2xl:w-[35%] 2xl:h-[48px]
        hover:text-red-500 transition
      "
              >
                <Minus width={15} height={15} />
              </button>

              <span
                className="
        flex items-center justify-center font-semibold
        text-sm sm:text-base md:text-lg
        w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12
        xl:w-[48.8px] xl:h-[40px] 2xl:w-[35%] 2xl:h-[48px]
        border-x border-gray-300
      "
              >
                {quantity}
              </span>

              <button
                onClick={increment}
                className="
        flex items-center justify-center
        w-8 h-8 text-gray-700
        md:w-9 md:h-9
        lg:w-10 lg:h-10
        xl:w-[48.8px] xl:h-[40px]
        2xl:w-[35%] 2xl:h-[48px]
        hover:text-green-600 transition
      "
              >
                <Plus width={15} height={15} />
              </button>
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => {
                dispatch(addToCart({ ...product, quantity }));
                toast.success(`${product.name} added to cart (${quantity})!`);
              }}
              className="
      bg-[#F15939] 
      hover:border-[#F15939] hover:bg-white hover:text-[#F15939] 
      font-bold text-[13px] xl:text-[11.2px] 2xl:text-[14px] 
      text-white border border-[#F15939] 
     flex items-center justify-center space-x-2 transition 
      w-full lg:w-[40rem] xl:w-[50rem] 2xl:w-[67.9%]
    "
            >
              <ShoppingCart
                className="w-5 h-5 sm:w-6 sm:h-6 2xl:w-7 2xl:h-7"
                fill="white"
              />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center xl:mt-4 2xl:mt-6 xl:h-[38.4px] 2xl:h-[48.1px]">
        {/* Buy Now */}
        <button
          onClick={() => {
            dispatch(addToCart(product));
            setTimeout(() => {
              router.push("/cart");
            }, 2000);
          }}
          className="
      text-[14px] xl:text-[11.2px] 2xl:text-[14px] 
      font-bold  
      bg-[#121e4d] text-white
      hover:text-[#F15939] hover:bg-white hover:border-[#F15939] 
    flex items-center justify-center space-x-2 transition 
      w-full lg:w-[20rem] xl:w-full 2xl:w-[100%] h-full border
    "
        >
          <span>Buy Now</span>
        </button>
      </div>

      {/* Note */}
      <div className="xl:mt-6 2xl:mt-8">
        <p className="xl:text-[11.2px] 2xl:text-[14px] text-[#000000]">
          <span className="text-red-600 ">*</span> All Business Entities,
          Corporations, Public & Private School Systems, Governmental
          Organizations, Colleges, Universities & Libraries are welcome to
          submit purchase orders.
        </p>
      </div>
    </div>
  );
};

export default ProductMiddle;
