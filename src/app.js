const { nav, button, p } = van.tags;

import { Router, navigateTo } from "./routes/router.js";

const Navbar = () => {
  return nav(
    { class: "flex items-center gap-10" },
    p("Go To Home Page -> "),
    button(
      {
        onclick: () => navigateTo("/"),
        class: "text-white bg-blue-600 px-5 py-2 rounded-xl shadow-lg"
      },
      "Home"
    ),
  );
};

// Mount the app to the DOM
van.add(document.body, Navbar(), Router());

window.onpopstate = () => (appState.val = window.location.pathname);
