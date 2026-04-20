import { defineConfig } from 'vite';

function resolveBase() {
  if (process.env.GITHUB_ACTIONS !== 'true') {
    return '/';
  }

  const repository = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
  if (!repository || repository.endsWith('.github.io')) {
    return '/';
  }

  return `/${repository}/`;
}

export default defineConfig({
  base: resolveBase()
});
