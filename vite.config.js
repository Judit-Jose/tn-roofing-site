import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// Set this to true if you are hosting on GitHub Pages, or false for standard hosting (Netlify/Vercel)
const isGithubPages = process.env.VITE_GITHUB_PAGES === 'true';

// Replace 'tn-roofing-site' with your exact GitHub repository name if you use GitHub Pages
const repoName = 'tn-roofing-site';

export default defineConfig({
    plugins: [react()],
    base: isGithubPages ? `/${repoName}/` : '/',
    build: {
        outDir: 'dist',
        emptyOutDir: true,
    },
});
