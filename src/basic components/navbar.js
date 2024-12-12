const { div, p } = van.tags;

export const navbar = () => {
  const navOptions = [
    {
      option: "Chinese",
    },
    {
      option: "Firangi Khana Peena (Continental Dishes)",
    },
    {
      option: "Cookies",
    },
    {
      option: "Hot n cold Beverages",
    },
    {
      option: "Regional Flavours",
    },
    {
      option: "Subscriptions (Tiffins/Meals)",
    },
    {
      option: "Combos",
    },
    {
      option: "Rice Treats",
    },
    {
      option: "Thali",
    },
    {
      option: "Party Mania",
    },
    {
      option: "Rotis & Parathas",
    },
    {
      option: "All Time Nashta",
    },
    {
      option: "Dry Curries",
    },
    {
      option: "Biryanis & More",
    },
    {
      option: "Veg Curries",
    },
    {
      option: "Non-Veg Curries",
    },
    {
      option: "Dal Darbar",
    },
    {
      option: "Sattvic & Vrat Food",
    },
    {
      option: "Snacks & Chakna",
    },
    {
      option: "Cakes & Bakes",
    }
  ];

  return () => div(
    { class: "relative tracking-wider font-semibold text-sm text-gray-500 bg-gray-100 flex gap-10 items-center px-10 py-1 border border-gray-300" },
    div(
      { class: "absolute left-5 bg-white shadow-md rounded-full" },
      "left arrow"
    ),
    navOptions.map(item => p(
        item?.option
      )
    ),
    div(
      { class: "absolute right-5 bg-white shadow-md rounded-full" },
      "right arrow"
    ),
  )
}