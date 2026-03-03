import { defineCollection, z } from 'astro:content';



// 2. Blog Schema - 侧重于内容营销与流量抓取
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    category: z.enum([
      'Photography Tips & Guides',
      'Success Stories',
      'Dating Insights',
      'Behind the Scenes'
    ]),
    image: z.string().optional(),
    
    // --- 核心改动：定义数组结构 ---
    // 这里我们定义数组的每一项是一个对象，包含图片和内容块
    contentBlocks: z.array(z.object({
      image: z.string().optional(), // 可选图片
      imageAlt: z.string().optional(),
      text: z.string(), // HTML 字符串或纯文本
      // 布局标识：例如 "left" 表示图左文右，"right" 表示文左图右
      layout: z.enum(['left', 'right', 'full']).default('left'), 
    })).optional(),
    // ----------------------------

    seoTitle: z.string, 
    seoDescription: z.string,
  }),
});

export const collections = {
  'services': services,
  'blog': blogCollection,
};