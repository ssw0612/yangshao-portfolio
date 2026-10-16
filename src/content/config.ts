/**
 * content/config.ts —— 文章集合（Content Collections）定义
 * ------------------------------------------------------------
 *  src/content/writings/ 里的每一个 .md 文件就是一篇文章。
 *  文件名 = 网址里的 slug（例如 liji-lita.md → /writings/liji-lita）。
 *  每篇文章开头 frontmatter 必须写：title / date / period / type / summary。
 *
 *  【怎么加一篇文章】在 src/content/writings/ 里新建一个 .md，
 *  开头照抄下面这段（改内容即可），下面写正文：
 *
 *  ---
 *  title: "文章标题"
 *  date: "2026-01-01"
 *  period: "高二"
 *  type: "essay"        ← essay 论述 / poem 诗歌 / interview 访谈
 *  summary: "一句话摘要，显示在卡片上。"
 *  ---
 */
import { defineCollection, z } from 'astro:content';

const writings = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    period: z.string(),
    type: z.string(),
    summary: z.string(),
  }),
});

export const collections = { writings };
