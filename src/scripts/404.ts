const path = window.location.pathname;

const validPaths = [
  { path: "/", directTo: "/index.html" },
  { path: "/index.html", directTo: "/index.html" },
  { path: "/browse", directTo: "/browse.html" },
  { path: "/account", directTo: "/account.html" },
  { path: "/account.html", directTo: "/account.html" },
  { path: "/search", directTo: "/search.html" },
  { path: "/search.html", directTo: "/search.html" },
  { path: "/memories", directTo: "/memories.html" },
  { path: "/memories.html", directTo: "/memories.html" },
  { path: "/browse.html", directTo: "/browse.html" },
  { path: "/tvshows", directTo: "/tvshows.html" },
  { path: "/tvshows.html", directTo: "/tvshows.html" },
  { path: "/movies", directTo: "/movies.html" },
  { path: "/movies.html", directTo: "/movies.html" },
];

const validPath = validPaths.find((validPath) => validPath.path === path);

if (validPath && path !== validPath.directTo) {
  window.location.href = validPath.directTo;
} else if (!validPath) {
  window.location.href = "/404.html";
}
