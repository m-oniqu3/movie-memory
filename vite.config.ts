import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        notfound: resolve(__dirname, "index.html"),
        account: resolve(__dirname, "src/pages/account.html"),
        browse: resolve(__dirname, "src/pages/browse.html"),
        memories: resolve(__dirname, "src/pages/memories.html"),
        movies: resolve(__dirname, "src/pages/movies.html"),
        search: resolve(__dirname, "src/pages/search.html"),
        tvshows: resolve(__dirname, "src/pages/tvshows.html"),
      },
    },
  },
});
