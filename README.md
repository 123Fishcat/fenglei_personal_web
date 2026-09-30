# 个人网站部署到 Vercel 指南

## 📋 前置条件

1. **GitHub 账号**：用于存储代码
2. **Vercel 账号**：用于部署网站（免费）
3. **Git 工具**：用于提交代码

## 🚀 部署步骤

### 步骤 1：初始化 Git 仓库

在 `E:\Personal_Web` 目录下打开命令行，运行：

```bash
# 初始化 Git 仓库
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: 个人求职网站"
```

### 步骤 2：创建 GitHub 仓库

1. 访问 [GitHub](https://github.com)
2. 点击右上角 "+" → "New repository"
3. 仓库名：`fengjunlei-personal-site`（或自定义）
4. 选择 "Public"（免费部署需要公开仓库）
5. 不要勾选 "Initialize this repository"
6. 点击 "Create repository"

### 步骤 3：推送到 GitHub

GitHub 会显示推送命令，复制并运行：

```bash
# 添加远程仓库（替换 YOUR_USERNAME 为您的 GitHub 用户名）
git remote add origin https://github.com/YOUR_USERNAME/fengjunlei-personal-site.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

### 步骤 4：在 Vercel 部署

1. 访问 [Vercel](https://vercel.com)
2. 点击 "Sign up" → 选择 "Continue with GitHub"
3. 授权 Vercel 访问您的 GitHub
4. 点击 "New Project"
5. 选择您刚创建的仓库：`fengjunlei-personal-site`
6. 配置项目：
   - **Project Name**：`fengjunlei-site`（或自定义）
   - **Framework Preset**：选择 "Other"
   - **Root Directory**：`./`（默认）
   - **Build and Output Settings**：保持默认
7. 点击 "Deploy"

### 步骤 5：等待部署完成

Vercel 会自动：
- ✅ 检测静态网站
- ✅ 构建项目
- ✅ 部署到全球 CDN
- ✅ 生成域名：`fengjunlei-site.vercel.app`

部署完成后，您会看到：
- 🎉 **Congratulations!** 消息
- 🔗 预览链接
- 📊 部署详情

## 🌐 自定义域名（可选）

如果您有自己的域名：

1. 在 Vercel 项目设置中点击 "Domains"
2. 输入您的域名：`www.fengjunlei.com`
3. 按照提示添加 DNS 记录：
   - **Type**：CNAME
   - **Name**：www
   - **Value**：cname.vercel-dns.com
4. 等待 DNS 生效（通常 5-30 分钟）

## 🔄 后续更新

每次修改网站后：

```bash
# 添加修改
git add .

# 提交
git commit -m "更新：描述您的修改"

# 推送
git push
```

Vercel 会自动重新部署！（约 1-2 分钟）

## 📁 项目文件结构

```
E:\Personal_Web\
├── index.html          # 主页面（古典风格）
├── index_backup.html   # 备份（粒子科技风）
├── classical.css       # 古典风格样式
├── site.css            # 粒子科技风样式（备份）
├── nav.js              # 导航栏脚本
├── vercel.json         # Vercel 配置文件
└── README.md           # 部署说明（本文件）
```

## 💡 部署建议

### ✅ 推荐做法
- 保持 `index.html` 作为主页
- 定期备份重要文件
- 使用语义化的 commit 信息
- 测试所有链接和功能

### ❌ 避免做法
- 不要提交敏感信息（密码、密钥）
- 不要提交大型媒体文件（使用 CDN）
- 不要使用绝对路径（使用相对路径）

## 🎯 部署后检查清单

- [ ] 网站可以正常访问
- [ ] 所有页面链接有效
- [ ] 移动端显示正常
- [ ] 主题切换功能正常
- [ ] 联系信息正确（深圳、电话、邮箱）
- [ ] 项目链接可点击

## 🔧 常见问题

### Q: 部署失败怎么办？
A: 检查：
- GitHub 仓库是否为 Public
- vercel.json 格式是否正确
- 文件名是否正确（index.html）

### Q: 如何回滚版本？
A: 在 Vercel 项目设置中：
- 点击 "Deployments"
- 选择要回滚的版本
- 点击 "Promote to Production"

### Q: 如何查看访问统计？
A: 在 Vercel 项目面板：
- 点击 "Analytics"
- 查看访问量、性能指标等

## 📞 技术支持

如遇问题，可以：
1. 查看 [Vercel 官方文档](https://vercel.com/docs)
2. 在 [Vercel 社区](https://github.com/vercel/vercel/discussions)提问
3. 检查部署日志中的错误信息

---

## 🎉 恭喜！

部署完成后，您的个人网站将可以通过以下地址访问：

**免费域名**：`https://fengjunlei-site.vercel.app`

**自定义域名**（如果配置）：`https://www.fengjunlei.com`

祝您求职顺利！🚀