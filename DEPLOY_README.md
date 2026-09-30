# 个人网站部署工具

## 📁 文件说明

本目录包含部署到 Vercel 的所有必要文件：

### 部署文件
- `vercel.json` - Vercel 配置文件（自动创建）
- `.gitignore` - Git 忽略文件（自动创建）
- `deploy.bat` - Windows 一键部署脚本
- `DEPLOY_QUICK_START.md` - 快速部署指南
- `README.md` - 完整部署文档

### 网站文件
- `index.html` - 主页面（古典风格）
- `index_backup.html` - 备份（粒子科技风）
- `classical.css` - 古典风格样式
- `site.css` - 粒子科技风样式（备份）
- `nav.js` - 导航栏脚本

## 🚀 快速开始

### Windows 用户：

**方式 1：双击运行**
1. 打开 `E:\Personal_Web` 文件夹
2. 双击 `deploy.bat`
3. 按照提示操作

**方式 2：命令行**
1. 在 `E:\Personal_Web` 打开 CMD
2. 运行：`deploy.bat`

### Mac/Linux 用户：

在终端中运行：
```bash
chmod +x deploy.sh
./deploy.sh
```

## 📋 完整步骤

### 前置准备：

1. **安装 Git**（如果未安装）
   - 下载：https://git-scm.com/downloads
   - 安装后重启命令行

2. **GitHub 账号**
   - 访问：https://github.com
   - 注册或登录

3. **Vercel 账号**
   - 访问：https://vercel.com
   - 用 GitHub 登录

### 部署流程：

**第 1 步：本地准备**（运行 deploy.bat 或手动执行）
```bash
git init
git add .
git commit -m "Initial commit"
```

**第 2 步：创建 GitHub 仓库**
1. 访问 https://github.com/new
2. 仓库名：`fengjunlei-personal-site`
3. 选择 Public
4. 不要初始化
5. 创建后复制仓库地址

**第 3 步：推送到 GitHub**
```bash
git remote add origin https://github.com/YOUR_USERNAME/fengjunlei-personal-site.git
git branch -M main
git push -u origin main
```

**第 4 步：在 Vercel 部署**
1. 访问 https://vercel.com
2. New Project → 选择仓库 → Deploy
3. 等待 1-2 分钟

**完成！** 🎉
- 网站地址：`https://fengjunlei-site.vercel.app`

## 💡 常见问题

**Q: Git 未安装？**
A: 访问 https://git-scm.com/downloads 下载安装

**Q: 提示输入用户名密码？**
A: 输入您的 GitHub 用户名和个人访问令牌（不是密码）
   - 令牌创建：GitHub → Settings → Developer settings → Personal access tokens

**Q: 部署失败？**
A: 检查：
   - 仓库是否为 Public
   - 文件是否提交完整
   - 查看 Vercel 部署日志

**Q: 如何更新网站？**
```bash
git add .
git commit -m "更新描述"
git push
# Vercel 会自动重新部署
```

## 📚 更多帮助

- 快速指南：[DEPLOY_QUICK_START.md](DEPLOY_QUICK_START.md)
- 完整文档：[README.md](README.md)
- Vercel 文档：https://vercel.com/docs
- Git 教程：https://git-scm.com/book/zh/v2

## ✅ 部署检查清单

- [ ] Git 已安装
- [ ] GitHub 账号已注册
- [ ] Vercel 账号已创建
- [ ] 运行 deploy.bat 完成本地准备
- [ ] GitHub 仓库已创建
- [ ] 代码已推送到 GitHub
- [ ] Vercel 部署成功
- [ ] 网站可以访问
- [ ] 所有功能正常

---

**有问题？查看 [DEPLOY_QUICK_START.md](DEPLOY_QUICK_START.md) 或运行 deploy.bat 按提示操作。**