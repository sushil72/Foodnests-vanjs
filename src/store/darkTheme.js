// state.js
const isDark = van.state(false); // Create a global state to store fetched data

const handleDarkTheme = () => {
  isDark.val = !isDark.val;
};

export { isDark, handleDarkTheme };
