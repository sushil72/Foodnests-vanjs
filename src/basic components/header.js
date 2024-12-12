const { div, section, ul, li, h1, h2, p, span, input, button } = van.tags;

// Importing local files
import { navbar } from "./navbar.js";
import { isDark } from "../store/darkTheme.js";

// Importing Routes
import { navigateTo } from "../routes/router.js";

export const header = () => {
  const handleDarkTheme = () => {
    isDark.val = !isDark.val;
  };

  return div(
    { class: "fixed top-0 left-0 bg-white flex flex-col w-lvw py-2" },
    div(
      { class: "flex items-center gap-5 justify-around px-10" },
      h1({ class: "text-2xl" }, "FoodNEST(S)"),
      section(
        { class: "flex items-center px-2 border rounded-xl shadow-sm" },
        input({
          placeholder: "Lucknow, Uttar Pradesh, India",
          class: "text-sm w-[15rem] px-5 py-2 outline-none",
        }),
        p("|"),
        input({
          placeholder: "Search",
          class: "text-sm w-[15rem] px-5 py-2 outline-none",
        })
      ),
      p({ class: "text-gray-500 ml-auto" }, "Quick Links"),
      p({ class: "text-gray-500" }, "En Language"),
      p({ class: "text-gray-500" }, "My Account")
    ),
    button(
      {
        class: "text-orange-600 ml-auto px-10",
        onclick: () => navigateTo("/cart"),
      },
      "Cart"
    ),
    () =>
      button(
        {
          class: `${
            isDark.val ? "bg-red-500 text-black" : "bg-blue-600 text-white"
          }`,
          // class: "bg-black text-white",
          onclick: handleDarkTheme,
        },
        "Dark Theme"
      ),
    navbar()
  );
};
