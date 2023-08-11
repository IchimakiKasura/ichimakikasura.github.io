import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve("./index.html"),
        old2: resolve("./Old2/index.html"),
        old: resolve("./Old2/Old/old.html")
      }
    }
  }
})
