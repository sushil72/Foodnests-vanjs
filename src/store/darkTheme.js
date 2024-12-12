// state.js
const isDark = van.state(false); // Create a global state to store fetched data
console.log("in store: ", isDark.val);

export { isDark };
