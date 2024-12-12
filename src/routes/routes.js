import { home } from "../pages/Home Page/home.js";
import { cart } from "../pages/Cart/cart.js";

export const routes = {
  "/": () => home(),
  "/cart": () => cart(),
};
