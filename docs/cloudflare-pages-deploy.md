# Cloudflare Pages 部署说明

这个项目是标准静态站，不需要 `404.html`。

## 推荐方式

优先使用 Cloudflare Pages 的 Git 集成。后续只要推代码，站点会自动重新构建。

Cloudflare Pages 中填写以下参数：

- Production branch：你的主分支，例如 `main`
- Framework preset：`Vite`
- Build command：`npm run build`
- Build output directory：`dist`
- Root directory：留空

项目根目录已经添加：

- `.node-version`：`22.16.0`

这样 Cloudflare Pages 构建时会固定到 Node 22。

## 本地直传方式

如果你不想先连 Git，可以直接用 CLI 部署。

### 1. 登录 Cloudflare

```powershell
npm run cf:pages:login
```

### 2. 创建 Pages 项目

```powershell
npm run cf:pages:create
```

建议项目名直接使用：

```text
ai-harmonyos-html-deck
```

### 3. 构建并上传

```powershell
npm run cf:pages:deploy
```

这条命令会先执行：

```powershell
npm run build
```

然后把 `dist` 上传到 Cloudflare Pages。

## 本地预览 Pages 效果

```powershell
npm run cf:pages:dev
```

## 说明

- 这个演示是单页静态站，使用的是 hash 导航，不依赖 `404.html`
- 如果后面换域名，可以在 Cloudflare Pages 控制台里直接绑定自定义域名
- 如果后面改成 Git 集成，保持 `build` 输出仍然是 `dist` 即可
