# Gitee Pages 部署指南

## 🎯 为什么选择 Gitee Pages？

✅ **免费** - 无需付费  
✅ **国内访问快** - 服务器在国内  
✅ **无需 VPN** - HR 直接访问  
✅ **自定义域名** - 免费二级域名  
✅ **简单易用** - 操作简单  

## 📋 前置条件

1. **Gitee 账号** - 已有：https://gitee.com/tingyu_com/
2. **Git 工具** - 已安装
3. **代码** - 已准备好

## 🚀 部署步骤

### 步骤 1：创建 Gitee 仓库

1. 访问：https://gitee.com/projects/new
2. 填写信息：
   - **仓库名称**：`personal-site` 或 `fengjunlei-site`
   - **仓库介绍**：个人求职网站
   - **是否开源**：✅ 公开（必须）
   - **初始化仓库**：❌ 不要勾选
3. 点击 "创建"

### 步骤 2：推送代码到 Gitee

在 `E:\Personal_Web` 目录下打开命令行：

```bash
# 初始化 Git（如果还没初始化）
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: 个人求职网站"

# 添加 Gitee 远程仓库（替换仓库名）
git remote add origin https://gitee.com/tingyu_com/personal-site.git

# 推送
git branch -M master
git push -u origin master
```

**注意**：Gitee 默认使用 `master` 分支，不是 `main`

### 步骤 3：启用 Gitee Pages

1. 访问您的仓库：`https://gitee.com/tingyu_com/personal-site`
2. 点击 "服务" → "Gitee Pages"
3. 配置：
   - **部署分支**：`master`
   - **部署目录**：`/`（根目录）
   - **HTTPS**：✅ 启用
4. 点击 "启动"

### 步骤 4：等待部署

- 首次部署需要审核（通常 1-5 分钟）
- 后续更新会自动部署
- 部署成功后会显示网址

### 步骤 5：获取网站地址

部署成功后，您将获得：

**免费域名**：
```
https://tingyu_com.gitee.io/personal-site
```

或

```
https://tingyu_com.gitee.io/personal-site/
```

## 📱 测试网站

在手机上访问：
```
https://tingyu_com.gitee.io/personal-site
```

✅ 应该可以正常访问，无需 VPN！

## 🔄 更新网站

每次修改后：

```bash
# 添加修改
git add .

# 提交
git commit -m "更新：描述修改内容"

# 推送（Gitee Pages 会自动重新部署）
git push
```

等待 1-2 分钟，网站自动更新！

## 📁 项目文件结构

```
personal-site/
├── index.html              ✅ 主页面
├── classical.css           ✅ 古典风格样式
├── nav.js                  ✅ 导航脚本
├── index_backup.html       📦 备份
├── site.css                📦 备份样式
├── vercel.json             📦 Vercel 配置（可以删除）
├── .gitignore              ✅ Git 配置
└── README.md               📖 说明文档
```

## 💡 优化建议

### 1. 删除不需要的文件
```bash
# 删除 Vercel 相关文件（Gitee 用不到）
git rm vercel.json
git rm DEPLOY_*.md
git commit -m "清理：删除 Vercel 部署文件"
git push
```

### 2. 修改 README
更新 README.md，说明是 Gitee Pages 部署

### 3. 绑定自定义域名（可选）
如果以后想用自定义域名：
- 在 Gitee Pages 设置中添加自定义域名
- 配置 DNS 解析
- 等待生效

## 🔧 常见问题

### Q: 部署失败怎么办？
A: 检查：
- 仓库是否为公开
- 是否有 index.html
- 分支名称是否正确（master）

### Q: 如何查看访问统计？
A: Gitee 目前不提供访问统计，可以：
- 使用第三方统计工具（如：百度统计、Google Analytics）
- 在网站中添加统计代码

### Q: 如何回滚版本？
A: 
```bash
# 查看提交历史
git log

# 回滚到指定版本
git reset --hard <commit_id>

# 强制推送
git push -f
```

### Q: 网站加载慢怎么办？
A: 
- 检查图片是否过大
- 压缩 CSS/JS 文件
- 使用 CDN 加速

## 📊 Gitee Pages vs Vercel

| 特性 | Gitee Pages | Vercel |
|------|-------------|--------|
| **价格** | 免费 | 免费 |
| **国内访问** | ✅ 快 | ⚠️ 可能需要 VPN |
| **自定义域名** | ✅ 免费 | ✅ 免费 |
| **HTTPS** | ✅ | ✅ |
| **自动部署** | ✅ | ✅ |
| **访问统计** | ❌ | ✅ |
| **全球 CDN** | ❌ 国内 | ✅ 全球 |

**推荐 Gitee Pages 的情况**：
- 主要面向国内用户（如 HR）
- 不想买域名
- 需要稳定访问

## 🎯 部署检查清单

- [ ] Gitee 仓库已创建（公开）
- [ ] 代码已推送到 Gitee
- [ ] Gitee Pages 已启用
- [ ] 部署成功，获得网址
- [ ] 手机可以正常访问
- [ ] 所有页面功能正常
- [ ] 联系信息正确（深圳、电话、邮箱）

## 📞 需要帮助？

- Gitee Pages 文档：https://gitee.com/help/articles/4136
- Gitee 帮助中心：https://gitee.com/help

---

## 🎉 完成！

部署成功后，您的网站地址是：

**https://tingyu_com.gitee.io/personal-site**

HR 可以直接访问，无需 VPN！

**准备好了吗？现在开始部署吧！** 🚀