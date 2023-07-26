import { defineConfig } from "vite";
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    // only need the root definition because the index.html is inside the src folder, if it was in the root, we wouldn't need it
    root: "src",
});