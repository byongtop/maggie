// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://roseisrose.com.au', // 确保这里填写了你的预览或正式域名
  vite: {
    plugins: [tailwindcss()],
  },

  output: 'static',

  // Astro 集成配置
  integrations: [mdx(), icon({
    // 这里的配置修复了括号缺失的问题
    include: {
      lucide: ['*'],
      ph: ['*']
    }
  }), sitemap()],
});