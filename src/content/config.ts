import { defineCollection, z } from 'astro:content';

// 1. Service Schema - 侧重于商业转化与功能属性
const services = defineCollection({
  type: 'content',
  schema: z.object({
    // --- 层级控制核心 ---
    level: z.number().default(1),        // 1:主服务, 2:专项, 3:地区
    parent: z.string().optional(), // 关联父级服务的 slug，例如 'benchtop-repair'
    hideInList: z.boolean().default(false), // 可选：是否在父级页面的列表中隐藏（有时候地区页太多，不想全部列出来）

    // --- 基础展示字段 (用于首页/列表页) ---
    no: z.string(),              // "01", "02"
    title: z.string(),           // "MAGNETIC IDENTITY"
    subtitle: z.string(),        // "磁场形象"
    desc: z.string(),            // 简短描述，用于首页卡片
    image: z.string(),           // 封面图 URL
    h1Title: z.string(), // 页面大标题：需更有吸引力，体现核心成果，如“助力某酒店实现全域网络覆盖，效率提升40%”。
    
    // --- 详情页功能字段 ---
    heroImage: z.string(),       // 详情页顶部高清大图
    features: z.array(z.string()), // 服务包含的要点 (e.g. ["2 Locations", "10 Retouched Photos"])
    order: z.number().default(1), // 用于手动控制显示顺序
    
    // --- 新增：左右交错模块数据 ---
    experienceModules: z.array(z.object({
      title: z.string(),
      description: z.string(),
      image: z.string(),
      imageAlt: z.string(),
      caption: z.string().optional(),
    })).optional(), // 设置为可选，防止旧数据报错
    
    // --- 核心 SEO 字段 ---
    seo: z.object({
      metaTitle: z.string().max(60),       // 针对搜索引擎的优化标题
      metaDescription: z.string().max(160), // 针对搜索引擎的描述
      keywords: z.string(),                 // 关键词标签
      canonicalURL: z.string().url().optional(), // 权威链接
      imageAlt: z.string(),                 // 封面图的 Alt 文本 (SEO 关键)
    }),

    // --- 状态控制 ---
    isPublished: z.boolean().default(true),

    // --- 问答模块 ---3到5个问答
    faq: z.array(z.object({
      question: z.string(), // 问题：建议包含用户常搜索的长尾词。
      answer: z.string(), // 回答：字数不限，需简洁明了，有助于获取谷歌“精选摘要”。
    })).optional(),
  }),
});

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