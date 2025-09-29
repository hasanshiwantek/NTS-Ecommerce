// // lib/api/categories.ts
const baseURL = process.env.NEXT_PUBLIC_API_URL;

export const fetchCategories = async () => {
  const res = await fetch(`${baseURL}/web/categories/categories`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      storeId: "4",
    },
    // ✅ ISR: cache once, refresh every 5 min
    next: { revalidate: 300},
  });

  if (!res.ok) throw new Error("Failed to fetch categories");

  const data = await res.json();
  console.log("Categories data: ",data.data);
  
  return data?.data || [];
};
