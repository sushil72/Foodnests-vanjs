const { div } = van.tags;

// router.js
import { routes } from "./routes.js";

const appState = van.state(""); // Holds the current route

function Router() {
  // Renders the component for the current route
  return div(() =>
    routes[appState.val] ? routes[appState.val]() : div("Page Not Found")
  );
}

// Updates the app state and rerenders the view
function navigateTo(path) {
  window.history.pushState({}, path, window.location.origin + path);
  appState.val = path; // Update the route state
}

export { Router, navigateTo };
