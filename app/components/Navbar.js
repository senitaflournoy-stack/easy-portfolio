"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // 检测系统主题偏好或已保存的主题
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark);
    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const newIsDark = !prev;
      const newTheme = newIsDark ? "dark" : "light";

      if (newIsDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }

      localStorage.setItem("theme", newTheme);
      return newIsDark;
    });
  };

  const navItems = [
    { name: "首页", href: "/" },
    { name: "作品集", href: "/portfolio" },
    { name: "技能记录", href: "/skills" },
    { name: "工作流", href: "/workflows" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
            我的空间
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
            aria-label="切换主题"
          >
            {isDark ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </nav>
  );
}
