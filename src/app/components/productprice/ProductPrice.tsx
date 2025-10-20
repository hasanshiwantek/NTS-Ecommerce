import { useAppSelector } from "@/hooks/useReduxHooks";
import { RootState } from "@/redux/store";

const ProductPrice: React.FC<{ price: number }> = ({ price }) => {
  const { selectedCurrency, currencies } = useAppSelector((state: RootState) => state.currency);

  const rate = currencies.find((c) => c.code === selectedCurrency)?.rate || 1;

const currencySymbols: Record<string, string> = {
  AED: "د.إ", AFN: "؋", ALL: "L", AMD: "֏", ANG: "ƒ", AOA: "Kz",
  ARS: "$", AUD: "A$", AWG: "ƒ", AZN: "₼", BAM: "KM", BBD: "B$",
  BDT: "৳", BGN: "лв", BHD: ".د.ب", BIF: "FBu", BMD: "BD$", BND: "B$",
  BOB: "Bs.", BRL: "R$", BSD: "B$", BTN: "Nu.", BWP: "P", BYN: "Br",
  BZD: "BZ$", CAD: "C$", CDF: "FC", CHF: "CHF", CLP: "$", CNY: "¥",
  COP: "$", CRC: "₡", CUP: "$", CVE: "$", CZK: "Kč", DJF: "Fdj",
  DKK: "kr", DOP: "RD$", DZD: "دج", EGP: "£", ERN: "Nfk", ETB: "Br",
  EUR: "€", FJD: "FJ$", FKP: "£", FOK: "kr", GBP: "£", GEL: "₾",
  GGP: "£", GHS: "GH₵", GIP: "£", GMD: "D", GNF: "FG", GTQ: "Q",
  GYD: "$", HKD: "HK$", HNL: "L", HRK: "kn", HTG: "G", HUF: "Ft",
  IDR: "Rp", ILS: "₪", IMP: "£", INR: "₹", IQD: "ع.د", IRR: "﷼",
  ISK: "kr", JEP: "£", JMD: "J$", JOD: "د.ا", JPY: "¥", KES: "KSh",
  KGS: "лв", KHR: "៛", KID: "A$", KMF: "CF", KRW: "₩", KWD: "د.ك",
  KYD: "CI$", KZT: "₸", LAK: "₭", LBP: "ل.ل", LKR: "Rs", LRD: "L$",
  LSL: "L", LYD: "ل.د", MAD: "د.م.", MDL: "L", MGA: "Ar", MKD: "ден",
  MMK: "K", MNT: "₮", MOP: "MOP$", MRU: "UM", MUR: "₨", MVR: "Rf",
  MWK: "MK", MXN: "$", MYR: "RM", MZN: "MT", NAD: "N$", NGN: "₦",
  NIO: "C$", NOK: "kr", NPR: "₨", NZD: "NZ$", OMR: "ر.ع.", PAB: "B/.",
  PEN: "S/.", PGK: "K", PHP: "₱", PKR: "₨", PLN: "zł", PYG: "₲",
  QAR: "﷼", RON: "lei", RSD: "дин", RUB: "₽", RWF: "FRw", SAR: "﷼",
  SBD: "$", SCR: "₨", SDG: "£", SEK: "kr", SGD: "S$", SHP: "£",
  SLE: "Le", SLL: "Le", SOS: "Sh.So.", SRD: "$", SSP: "£", STN: "Db",
  SYP: "£", SZL: "E", THB: "฿", TJS: "ЅМ", TMT: "m", TND: "د.ت",
  TOP: "T$", TRY: "₺", TTD: "TT$", TVD: "A$", TWD: "NT$", TZS: "Sh",
  UAH: "₴", UGX: "Sh", USD: "$", UYU: "$U", UZS: "so'm", VES: "Bs.S",
  VND: "₫", VUV: "VT", WST: "T", XAF: "FCFA", XCD: "EC$", XDR: "SDR",
  XOF: "CFA", XPF: "₣", YER: "﷼", ZAR: "R", ZMW: "ZK", ZWL: "Z$"
};


 const symbol = currencySymbols[selectedCurrency] || selectedCurrency;

  return (
    <h2 className="xl:text-[13.3px] 2xl:text-[16.6px] font-bold text-[#000000]">
      {symbol} {(price * rate).toFixed(2)}
    </h2>
  );
};

export default ProductPrice;
