export const metadata = {
  title: "技能记录 - 我的空间",
  description: "记录学习进度和技术成长",
};

// 技能数据
const skills = [
  {
    category: "前端开发",
    items: [
      { name: "JavaScript / TypeScript", level: 90, color: "bg-blue-500" },
      { name: "React / Next.js", level: 85, color: "bg-cyan-500" },
      { name: "Vue / Nuxt.js", level: 75, color: "bg-green-500" },
      { name: "HTML / CSS", level: 95, color: "bg-orange-500" },
      { name: "Tailwind CSS", level: 90, color: "bg-teal-500" },
    ],
  },
  {
    category: "后端开发",
    items: [
      { name: "Node.js", level: 80, color: "bg-green-600" },
      { name: "Python", level: 75, color: "bg-yellow-500" },
      { name: "MySQL / PostgreSQL", level: 70, color: "bg-blue-600" },
      { name: "MongoDB", level: 65, color: "bg-emerald-500" },
    ],
  },
  {
    category: "工具与平台",
    items: [
      { name: "Git / GitHub", level: 90, color: "bg-gray-600" },
      { name: "Docker", level: 70, color: "bg-blue-400" },
      { name: "Vercel / Netlify", level: 85, color: "bg-black" },
      { name: "VS Code", level: 95, color: "bg-blue-500" },
    ],
  },
  {
    category: "自动化与 AI",
    items: [
      { name: "n8n / Node-RED", level: 80, color: "bg-red-500" },
      { name: "API 集成", level: 85, color: "bg-purple-500" },
      { name: "Claude / ChatGPT", level: 75, color: "bg-emerald-400" },
      { name: "Webhook", level: 80, color: "bg-indigo-500" },
    ],
  },
];

// 学习时间线数据
const timeline = [
  {
    year: "2026",
    title: "深入自动化工作流",
    description: "学习 n8n 和 Node-RED，搭建多个自动化工作流，提升工作效率。",
    icon: "⚡",
  },
  {
    year: "2025",
    title: "掌握 Next.js 框架",
    description: "深入学习 Next.js，掌握服务端渲染、静态生成和 API 路由。",
    icon: "⚛️",
  },
  {
    year: "2025",
    title: "React 进阶学习",
    description: "深入学习 React Hooks、Context API 和状态管理，构建复杂应用。",
    icon: "📚",
  },
  {
    year: "2024",
    title: "前端工程化实践",
    description: "学习 Git 工作流、CI/CD 部署和性能优化最佳实践。",
    icon: "🔧",
  },
  {
    year: "2024",
    title: "JavaScript 深度学习",
    description: "掌握 ES6+ 特性、异步编程和模块化开发。",
    icon: "💡",
  },
  {
    year: "2023",
    title: "Web 开发入门",
    description: "学习 HTML、CSS 和 JavaScript 基础知识，完成第一个个人网站。",
    icon: "🌟",
  },
];

export default function Skills() {
  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        {/* 标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            技能记录
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            记录我的技术能力和学习成长历程
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* 技能进度条 */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              技术栈
            </h2>
            {skills.map((category) => (
              <div key={category.category}>
                <h3 className="text-lg font-medium text-zinc-700 dark:text-zinc-300 mb-4">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.items.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                          {skill.name}
                        </span>
                        <span className="text-sm text-zinc-500 dark:text-zinc-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-2.5">
                        <div
                          className={`${skill.color} h-2.5 rounded-full transition-all duration-500`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* 学习时间线 */}
          <div>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-8">
              学习时间线
            </h2>
            <div className="relative">
              {/* 时间线竖线 */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-zinc-200 dark:bg-zinc-700"></div>

              {/* 时间线项目 */}
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="relative pl-12">
                    {/* 时间点圆点 */}
                    <div className="absolute left-0 w-8 h-8 flex items-center justify-center">
                      <div className="w-3 h-3 bg-zinc-900 dark:bg-zinc-50 rounded-full ring-4 ring-zinc-100 dark:ring-zinc-800"></div>
                    </div>

                    {/* 时间线内容 */}
                    <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl">{item.icon}</span>
                        <span className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-zinc-600 dark:text-zinc-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
