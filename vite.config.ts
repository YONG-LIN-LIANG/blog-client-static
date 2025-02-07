import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: "/blog-client-static",
//   resolve: {
//     alias: {
//       "@": "/src",
//     },
//   },
// });

export default defineConfig(({ mode }) => {
  const isProduction = mode === "production";
  return {
    plugins: [react()],
    base: isProduction ? "/blog-client-static/" : "/",
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  };
});
