// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
<<<<<<< HEAD
  site: 'https://roseisrose.com.au', // 确保这里填写了你的预览或正式域名
  // Vite 插件配置，用于支持 Tailwind CSS v4
=======
  // Vite 插件配置，用于支持 Tailwind CSS v4  
>>>>>>> bf915a2cf3eff50b7a755a97649afe06cc59fde7
  vite: {
    plugins: [tailwindcss()],
  },

  // Astro 集成配置
  integrations: [
    mdx(),
    icon({
      // 这里的配置修复了括号缺失的问题
      include: {
        lucide: ['*'],
        ph: ['*']
      }
    })
  ],
});
