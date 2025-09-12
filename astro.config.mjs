import { defineConfig } from 'astro/config';

export default defineConfig({
    output: 'server',
    vite: 
    {
        resolve: 
        {
            alias: 
            {
                '@components': '/src/components',
                '@data': '/src/data',
                '@layouts': '/src/layouts',
                '@pages': '/src/pages',
                '@styles': '/src/styles'
            }
        }
    }
});
