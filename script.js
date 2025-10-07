let isDark = false;

function themeToggle() {
  isDark = isDark ? false : true;
  document.getElementsByTagName("meta")[2].content = isDark ? "dark" : "light";
}
