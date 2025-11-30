// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
import { defineConfig } from 'vite' ;
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],

  build: {
    chunkSizeWarningLimit: 1000, // optional
  },

  server: {
    proxy: {
      "/api": {
        target: "https://quiz-backend-aixd.onrender.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
