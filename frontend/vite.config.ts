import path from "path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "/campoal/",
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    preview: {
        port: 5173,
        host: true,
        strictPort: true,
    },
    server: {
        port: 5173,
        host: true,
        strictPort: true,
    },
})
