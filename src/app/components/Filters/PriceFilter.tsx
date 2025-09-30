// components/Filters/PriceFilter.tsx

"use client";

import { useState } from "react";

export default function PriceFilter() {
  const [min, setMin] = useState(250);
  const [max, setMax] = useState(8000);

  return (
    <div className="space-y-3">
      <div className="flex items-center space-x-2">
        <input
          type="number"
          value={min}
          onChange={(e) => setMin(Number(e.target.value))}
          className="w-22 border rounded px-2 py-1 text-sm"
        />
        <span>—</span>
        <input
          type="number"
          value={max}
          onChange={(e) => setMax(Number(e.target.value))}
          className="w-22 border rounded px-2 py-1 text-sm"
        />
      </div>

      {/* Dummy slider */}
      <div className="relative">
        <input
          type="range"
          min={0}
          max={10000}
          value={min}
          onChange={(e) => setMin(Number(e.target.value))}
          className="w-full accent-orange-500"
        />
        <input
          type="range"
          min={0}
          max={10000}
          value={max}
          onChange={(e) => setMax(Number(e.target.value))}
          className="w-full accent-orange-500 -mt-2"
        />
      </div>

      <button className="!w-full !py-1.5 !rounded !text-base btn-outline-primary">
        Confirm
      </button>
    </div>
  );
}
