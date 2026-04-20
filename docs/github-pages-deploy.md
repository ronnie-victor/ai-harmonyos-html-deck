# GitHub Pages 部署说明

这个项目已经配置好 GitHub Pages 自动部署。

## 已配置内容

- `vite.config.js`
  - 在 GitHub Actions 中自动识别仓库名
  - 如果仓库名是 `<user>.github.io`，使用根路径 `/`
  - 如果仓库名是普通仓库，自动使用 `/<repo-name>/`
- `.github/workflows/deploy-github-pages.yml`
  - 推送到 `main` 后自动构建并发布

## 发布方式

### 方式 1：用户站点仓库

仓库名：

```text
<github-username>.github.io
```

访问地址：

```text
https://<github-username>.github.io/
```

### 方式 2：普通仓库

仓库名示例：

```text
ai-harmonyos-html-deck
```

访问地址：

```text
https://<github-username>.github.io/ai-harmonyos-html-deck/
```

## GitHub 仓库设置

仓库创建并推送完成后，在 GitHub 仓库中打开：

```text
Settings -> Pages
```

把 Source 设置为：

```text
GitHub Actions
```

## 本地命令

```powershell
npm install
npm run build
npm test
```

## 推送后自动部署

只要把代码推到：

```text
main
```

GitHub Actions 会自动执行构建和发布。
