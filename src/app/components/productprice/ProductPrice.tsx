import { useAppSelector } from "@/hooks/useReduxHooks";
import { RootState } from "@/redux/store";

const ProductPrice: React.FC<{ price: number }> = ({ price }) => {
  const { selectedCurrency, currencies } = useAppSelector((state: RootState) => state.currency);

  const currencyData = currencies.find(c => c.code === selectedCurrency);
  const convertedPrice = currencyData ? price * currencyData.rate : price;
  const symbol = currencyData ? currencyData.symbol : "$";

  return (
    <h2 className="xl:text-[13.3px] 2xl:text-[16.6px] font-bold text-[#000000]">
      {symbol} {convertedPrice.toFixed(2)}
    </h2>
  );
};

export default ProductPrice;
