const path = window.location.pathname;
console.log("path: ", path);

const validPaths = [
  { path: "/", directTo: "/index.html" },
  { path: "/index.html", directTo: "/index.html" },
  { path: "/src/pages/account.html", directTo: "./../pages/account.html" },
  { path: "/src/pages/search.html", directTo: "./../pages/search.html" },
  { path: "/src/pages/memories.html", directTo: "./../pages/memories.html" },
  { path: "/src/pages/browse.html", directTo: "./../pages/browse.html" },
  { path: "/src/pages/tvshows.html", directTo: "./../pages/tvshows.html" },
  { path: "/src/pages/movies.html", directTo: "./../pages/movies.html" },
];

const validPath = validPaths.find((validPath) => validPath.path === path);

if (validPath && path !== validPath.path) {
  window.location.href = validPath.directTo;
} else if (!validPath) {
  window.location.href = "./../pages/404.html";
}
