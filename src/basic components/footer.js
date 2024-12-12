const { div, section, ul, li, h1, h2, p, span } = van.tags;
import { isDark } from "../store/darkTheme.js";

export const footer = () => {
  console.log("in footer: ", isDark.val);
  return () =>
    div(
      {
        class: `${
          isDark.val ? "bg-black text-white" : "bg-white text-black"
        } mt-5 flex flex-col gap-5`,
      },
      div(
        { class: "flex items-center justify-around" },
        section(
          { class: "flex flex-col gap-3" },
          h1({ class: "font-bold text-xl" }, "Quick Links"),
          p({ class: "text-gray-500" }, "Careers"),
          p({ class: "text-gray-500" }, "Vendor Registration"),
          p({ class: "text-gray-500" }, "Privacy Policies"),
          p({ class: "text-gray-500" }, "Terms and Conditions"),
          p({ class: "text-gray-500" }, "FoodNEST(S)"),
          p({ class: "text-gray-500" }, "FAQ's")
        ),
        section(
          { class: "flex flex-col gap-3" },
          h1({ class: "font-bold text-xl" }, "Contact Us"),
          p({ class: "text-gray-500" }, "Lucknow"),
          p({ class: "text-gray-500" }, "7307180059"),
          p({ class: "text-gray-500" }, "contact@foodnests.com")
        ),
        section(
          { class: "flex flex-col gap-3" },
          h1({ class: "font-bold text-xl" }, "Find Our App On Mobile")
        ),
        section(
          { class: "flex flex-col gap-3" },
          h1({ class: "font-bold text-xl" }, "Payment Methods"),
          h2({ class: "font-bold text-xl" }, "Keep In Touch")
        )
      ),

      span({ class: "mx-auto" }, "2023-24 | All rights reserved")
    );
};
