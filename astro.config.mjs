// @ts-check
import { defineConfig } from 'astro/config';

// 仰韶 · 个人作品集 —— Astro 配置
// 雏形版只做纯静态单页，不引入任何 UI 库 / 集成插件，保持零额外依赖。
export default defineConfig({
  site: 'https://example.com',
  server: {
    host: true,   // 允许局域网访问，方便手机预览
    port: 4321,   // 默认端口；被占用时可改这里，或启动时加 --port
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
