// redux/slices/currencySlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface CurrencyState {
  currencies: { code: string; name: string; symbol: string; rate: number }[];
  selectedCurrency: string;
  status: "idle" | "loading" | "failed";
}

const initialState: CurrencyState = {
  currencies: [],
  selectedCurrency: "USD",
  status: "idle",
};

// Async thunk to fetch all currencies
export const fetchCurrencies = createAsyncThunk(
  "currency/fetchCurrencies",
  async () => {
    const res = await axios.get("https://api.exchangerate.host/symbols"); // free API
    // Returns object of symbols like {USD: {description: "US Dollar", code: "USD"}, ...}
    const symbols = res.data.symbols;
    // Fetch rates
    const ratesRes = await axios.get("https://api.exchangerate.host/latest?base=USD");
    const rates = ratesRes.data.rates;

    const currencies = Object.keys(symbols).map((code) => ({
      code,
      name: symbols[code].description,
      symbol: code, // symbol ke liye code use kar sakte ho ya API me available ho
      rate: rates[code] || 1,
    }));

    return currencies;
  }
);

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setSelectedCurrency(state, action: PayloadAction<string>) {
      state.selectedCurrency = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrencies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCurrencies.fulfilled, (state, action) => {
        state.currencies = action.payload;
        state.status = "idle";
      })
      .addCase(fetchCurrencies.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { setSelectedCurrency } = currencySlice.actions;
export default currencySlice.reducer;
