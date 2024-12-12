const { div, section, ul, li, h1, h2, p, span, input, button, img } = van.tags;

// import companyLogo from "../../public/images/company logo/logo.webp"

// Importing local files
import { navbar } from "./navbar.js";

// Importing stores values
import { isDark, handleDarkTheme } from "../store/darkTheme.js";

// Importing Routes
import { navigateTo } from "../routes/router.js";

export const header = () => {
  return () => div(
    { class: `${isDark.val ? "bg-black text-white" : "bg-white text-black"} fixed top-0 left-0 flex flex-col w-lvw py-2` },
    div(
      { class: "flex items-center gap-5 justify-around px-10" },
      img(
        {src: "../../public/images/company logo/logo.webp", alt: "logo", class: "h-10"}
      ),
      section(
        { class: "flex items-center px-2 border rounded-xl shadow-sm" },
        input({
          placeholder: "Lucknow, Uttar Pradesh, India",
          class: `${isDark.val ? "bg-black" : "bg-white"} text-sm w-[15rem] px-5 py-2 outline-none`,
        }),
        p("|"),
        input({
          placeholder: "Search",
          class: `${isDark.val ? "bg-black" : "bg-white"} text-sm w-[15rem] px-5 py-2 outline-none`,
        })
      ),
      p({ class: "text-gray-500 ml-auto" }, "Quick Links"),
      p({ class: "text-gray-500" }, "En Language"),
      p({ class: "text-gray-500" }, "My Account")
    ),
    div(
      { class: "flex gap-5 items-center" },
      button(
        {
          class: "text-orange-600 ml-auto",
          onclick: () => navigateTo("/cart"),
        },
        "Cart"
      ),
      button(
        {
          class: `${isDark.val ? "bg-white text-black" : "bg-orange-600 text-white"} px-5 rounded-full`,
          onclick: handleDarkTheme,
        },
        () => isDark.val
          ? img({ src: "../../public/images/dark theme/sun.webp", alt: "sun", class: "h-10" })
          : img({ src: "../../public/images/dark theme/Night.webp", alt: "moon", class: "h-10" })
      )
    ),
    navbar()
  );
};
