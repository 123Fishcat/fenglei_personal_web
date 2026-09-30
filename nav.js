// ==========================================
// 导航栏脚本 - 固定顶栏 + 深色切换 + 滚动隐藏
// ==========================================

// 配置区域
const SITE_NAME = '冯俊磊';
const THEME_KEY = 'theme-preference';

const LINKS = [
  { text: '首页', href: '#home' },
  { text: '经历', href: '#experience' },
  { text: '项目', href: '#projects' },
  { text: '技能', href: '#skills' },
  { text: '关于', href: '#about' },
  { text: '联系', href: '#contact' }
];

// 创建导航栏HTML
function createNavbar() {
  const nav = document.createElement('nav');
  nav.className = 'navbar';
  nav.innerHTML = `
    <div class="nav-container">
      <a href="#home" class="nav-logo">${SITE_NAME}</a>

      <div class="nav-menu">
        ${LINKS.map(link => `
          <a href="${link.href}" class="nav-link">${link.text}</a>
        `).join('')}
      </div>

      <div class="nav-actions">
        <button class="theme-toggle" id="themeToggle" aria-label="切换主题">
          <span class="theme-icon">🌙</span>
        </button>
        <button class="nav-hamburger" id="hamburger" aria-label="菜单">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>

    <!-- 移动端菜单 -->
    <div class="mobile-menu" id="mobileMenu">
      ${LINKS.map(link => `
        <a href="${link.href}" class="mobile-link">${link.text}</a>
      `).join('')}
    </div>
  `;

  document.body.insertBefore(nav, document.body.firstChild);
}

// 创建导航栏样式
function createNavStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: rgba(250, 248, 242, 0.95);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(227, 223, 212, 0.5);
      z-index: 1000;
      transition: transform 0.3s ease;
      font-family: "Noto Serif SC", serif;
    }

    .navbar.hidden {
      transform: translateY(-100%);
    }

    [data-theme="dark"] .navbar {
      background: rgba(26, 31, 30, 0.95);
      border-bottom: 1px solid rgba(58, 63, 61, 0.5);
    }

    .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
      height: 64px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .nav-logo {
      font-size: 1.5rem;
      font-weight: 700;
      color: #55a2a0;
      text-decoration: none;
    }

    [data-theme="dark"] .nav-logo {
      color: #5a9e9c;
    }

    .nav-menu {
      display: flex;
      gap: 32px;
    }

    .nav-link {
      color: #555555;
      text-decoration: none;
      font-size: 0.95rem;
      font-weight: 500;
      transition: color 0.2s ease;
      position: relative;
    }

    .nav-link:hover,
    .nav-link.active {
      color: #55a2a0;
    }

    .nav-link.active::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      right: 0;
      height: 2px;
      background: #55a2a0;
      border-radius: 1px;
    }

    [data-theme="dark"] .nav-link {
      color: #b0aca3;
    }

    [data-theme="dark"] .nav-link:hover,
    [data-theme="dark"] .nav-link.active {
      color: #5a9e9c;
    }

    [data-theme="dark"] .nav-link.active::after {
      background: #5a9e9c;
    }

    .nav-actions {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .theme-toggle {
      background: none;
      border: none;
      cursor: pointer;
      padding: 8px;
      border-radius: 8px;
      transition: background 0.2s ease;
    }

    .theme-toggle:hover {
      background: rgba(85, 162, 160, 0.1);
    }

    .theme-icon {
      font-size: 1.25rem;
    }

    .nav-hamburger {
      display: none;
      flex-direction: column;
      gap: 5px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 8px;
    }

    .nav-hamburger span {
      display: block;
      width: 24px;
      height: 2px;
      background: #333333;
      transition: all 0.3s ease;
    }

    [data-theme="dark"] .nav-hamburger span {
      background: #e8e6e1;
    }

    .nav-hamburger.active span:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }

    .nav-hamburger.active span:nth-child(2) {
      opacity: 0;
    }

    .nav-hamburger.active span:nth-child(3) {
      transform: rotate(-45deg) translate(5px, -5px);
    }

    .mobile-menu {
      display: none;
      position: absolute;
      top: 64px;
      left: 0;
      right: 0;
      background: rgba(250, 248, 242, 0.98);
      backdrop-filter: blur(20px);
      padding: 24px;
      border-bottom: 1px solid rgba(227, 223, 212, 0.5);
    }

    [data-theme="dark"] .mobile-menu {
      background: rgba(26, 31, 30, 0.98);
      border-bottom: 1px solid rgba(58, 63, 61, 0.5);
    }

    .mobile-menu.active {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .mobile-link {
      color: #555555;
      text-decoration: none;
      font-size: 1.125rem;
      font-weight: 500;
      padding: 8px 0;
      transition: color 0.2s ease;
    }

    .mobile-link:hover {
      color: #55a2a0;
    }

    [data-theme="dark"] .mobile-link {
      color: #b0aca3;
    }

    [data-theme="dark"] .mobile-link:hover {
      color: #5a9e9c;
    }

    @media (max-width: 768px) {
      .nav-menu {
        display: none;
      }

      .nav-hamburger {
        display: flex;
      }
    }
  `;

  document.head.appendChild(style);
}

// 主题切换功能
function initTheme() {
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = themeToggle.querySelector('.theme-icon');

  // 获取保存的主题或默认深色
  const savedTheme = localStorage.getItem(THEME_KEY) || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  themeIcon.textContent = savedTheme === 'dark' ? '🌙' : '☀️';

  // 切换主题
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
    themeIcon.textContent = newTheme === 'dark' ? '🌙' : '☀️';
  });
}

// 滚动隐藏/显示导航栏
function initScrollBehavior() {
  let lastScrollY = window.scrollY;
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      // 向下滚动 - 隐藏
      navbar.classList.add('hidden');
    } else {
      // 向上滚动 - 显示
      navbar.classList.remove('hidden');
    }

    lastScrollY = currentScrollY;
  });
}

// 移动端菜单
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
  });

  // 点击链接关闭菜单
  const mobileLinks = mobileMenu.querySelectorAll('.mobile-link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('active');
    });
  });
}

// 高亮当前section
function initActiveSection() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');

        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, {
    rootMargin: '-20% 0px -80% 0px'
  });

  sections.forEach(section => {
    observer.observe(section);
  });
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
  createNavStyles();
  createNavbar();
  initTheme();
  initScrollBehavior();
  initMobileMenu();
  initActiveSection();
});