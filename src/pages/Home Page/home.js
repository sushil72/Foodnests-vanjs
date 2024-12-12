const { div } = van.tags;

import { header } from "../../basic components/header.js";
import { TodoApp } from "./todo.js";
import { footer } from "../../basic components/footer.js";

export const home = () => {
  return div(header(), TodoApp(), footer());
};
