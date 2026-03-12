import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "作品集 - 我的空间",
  description: "展示个人项目和创意作品",
};

// 模拟作品数据
const projects = [
  {
    id: 1,
    title: "个人博客系统",
    description: "基于 Next.js 开发的现代化博客系统，支持 Markdown 编辑、评论系统和标签分类。",
    tags: ["Next.js", "React", "Tailwind CSS"],
    image: "/project1.jpg",
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "自动化工作流平台",
    description: "集成 n8n 和 Node-RED 的可视化工作流编排平台，支持定时任务和 webhook 触发。",
    tags: ["n8n", "Node-RED", "Docker"],
    image: "/project2.jpg",
    link: "#",
    github: "#",
  },
  {
    id: 3,
    title: "数据可视化仪表板",
    description: "实时数据监控仪表板，支持多种图表类型和自定义配置。",
    tags: ["D3.js", "ECharts", "WebSocket"],
    image: "/project3.jpg",
    link: "#",
    github: "#",
  },
  {
    id: 4,
    title: "在线代码编辑器",
    description: "支持多种编程语言的在线代码编辑器，提供代码高亮和实时预览功能。",
    tags: ["Monaco Editor", "CodeMirror", "React"],
    image: "/project4.jpg",
    link: "#",
    github: "#",
  },
  {
    id: 5,
    title: "微信小程序商城",
    description: "完整的电商小程序，包含商品展示、购物车、订单管理和支付功能。",
    tags: ["微信小程序", "UniApp", "后端API"],
    image: "/project5.jpg",
    link: "#",
    github: "#",
  },
  {
    id: 6,
    title: "智能客服机器人",
    description: "基于大语言模型的智能客服系统，支持多轮对话和知识库检索。",
    tags: ["AI", "LangChain", "OpenAI API"],
    image: "/project6.jpg",
    link: "#",
    github: "#",
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            作品集
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            这里展示我的个人项目和创意作品，涵盖前端开发、自动化工具和数据分析等领域。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-zinc-200 dark:border-zinc-800"
            >
              {/* 项目封面图 */}
              <div className="relative h-48 bg-zinc-100 dark:bg-zinc-800">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* 项目内容 */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                  {project.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* 技术标签 */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* 操作按钮 */}
                <div className="flex gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-lg font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors text-sm"
                  >
                    查看项目
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-lg font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-sm"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
