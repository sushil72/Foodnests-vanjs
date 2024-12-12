const { nav, button } = van.tags;

import { Router, navigateTo } from "./routes/router.js";

const Navbar = () => {
  return nav(
    button({ onclick: () => navigateTo("/") }, "Home"),
    button({ onclick: () => navigateTo("/cart") }, "Cart")
  );
};

// Mount the app to the DOM
van.add(document.body, Navbar(), Router());

window.onpopstate = () => (appState.val = window.location.pathname);
