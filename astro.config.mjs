import { defineConfig } from 'astro/config';

export default defineConfig({

    trailingSlash: "never",
    
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
                '@scripts': '/src/scripts',
                '@styles': '/src/styles'
            }
        }
    }
});
