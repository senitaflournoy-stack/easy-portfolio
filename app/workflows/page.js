import Image from "next/image";

export const metadata = {
  title: "工作流 - 我的空间",
  description: "展示自动化工作流和工具",
};

// 工作流数据
const workflows = [
  {
    id: 1,
    title: "公众号文章自动同步",
    description: "监控公众号新文章，自动同步到个人博客和社交媒体平台。",
    platform: "n8n",
    status: "运行中",
    icon: "📝",
    triggers: ["Webhook", "定时任务"],
    nodes: 8,
    lastRun: "2026-03-12",
  },
  {
    id: 2,
    title: "GitHub 通知聚合",
    description: "聚合 GitHub 仓库的 issues、PRs 和 commit 通知，发送到企业微信。",
    platform: "Node-RED",
    status: "运行中",
    icon: "🔔",
    triggers: ["GitHub Webhook"],
    nodes: 12,
    lastRun: "2026-03-11",
  },
  {
    id: 3,
    title: "数据备份自动化",
    description: "定期备份数据库和文件到云存储，自动清理过期备份。",
    platform: "n8n",
    status: "运行中",
    icon: "💾",
    triggers: ["定时任务 (每天 2:00)"],
    nodes: 6,
    lastRun: "2026-03-12 02:00",
  },
  {
    id: 4,
    title: "AI 内容生成工作流",
    description: "基于输入的关键词，使用 Claude API 生成文章草稿并保存到文档。",
    platform: "n8n",
    status: "开发中",
    icon: "🤖",
    triggers: ["手动触发", "Webhook"],
    nodes: 10,
    lastRun: "-",
  },
  {
    id: 5,
    title: "邮件分类与归档",
    description: "自动分类邮件，提取重要信息并存入数据库，定期发送日报。",
    platform: "Node-RED",
    status: "运行中",
    icon: "📧",
    triggers: ["IMAP", "定时任务"],
    nodes: 15,
    lastRun: "2026-03-12 09:30",
  },
  {
    id: 6,
    title: "网站监控告警",
    description: "监控多个网站的健康状态，异常时发送告警到企业微信和邮件。",
    platform: "n8n",
    status: "运行中",
    icon: "👁️",
    triggers: ["定时任务 (每 5 分钟)"],
    nodes: 7,
    lastRun: "2026-03-12 14:35",
  },
];

// 平台配置
const platforms = {
  n8n: {
    name: "n8n",
    color: "bg-orange-500",
    bgColor: "bg-orange-50 dark:bg-orange-900/20",
    textColor: "text-orange-700 dark:text-orange-400",
  },
  "Node-RED": {
    name: "Node-RED",
    color: "bg-red-500",
    bgColor: "bg-red-50 dark:bg-red-900/20",
    textColor: "text-red-700 dark:text-red-400",
  },
};

export default function Workflows() {
  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        {/* 标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            工作流
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            展示我创建的自动化工作流，提升工作效率，解放双手
          </p>
        </div>

        {/* 平台说明 */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800">
            <span className="text-orange-500 font-bold">n8n</span>
            <span className="text-sm text-zinc-600 dark:text-zinc-400">
              可视化工作流自动化平台
            </span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800">
            <span className="text-red-500 font-bold">Node-RED</span>
            <span className="text-sm text-zinc-600 dark:text-zinc-400">
              物联网与数据处理流程工具
            </span>
          </div>
        </div>

        {/* 工作流列表 */}
        <div className="grid md:grid-cols-2 gap-6">
          {workflows.map((workflow) => {
            const platformConfig = platforms[workflow.platform] || platforms.n8n;
            const statusColor =
              workflow.status === "运行中"
                ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                : "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400";

            return (
              <div
                key={workflow.id}
                className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-shadow"
              >
                {/* 头部 */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{workflow.icon}</span>
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                        {workflow.title}
                      </h3>
                      <span
                        className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${platformConfig.bgColor} ${platformConfig.textColor}`}
                      >
                        {platformConfig.name}
                      </span>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-full ${statusColor}`}
                  >
                    {workflow.status}
                  </span>
                </div>

                {/* 描述 */}
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                  {workflow.description}
                </p>

                {/* 工作流截图占位 */}
                <div className="relative h-40 bg-zinc-100 dark:bg-zinc-800 rounded-lg mb-4 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-zinc-400 dark:text-zinc-600">
                      工作流截图
                    </span>
                  </div>
                </div>

                {/* 信息网格 */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-zinc-500 dark:text-zinc-400">
                      触发方式：
                    </span>
                    <div className="text-zinc-900 dark:text-zinc-50 mt-1">
                      {workflow.triggers.map((t, i) => (
                        <span key={i} className="block">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-zinc-500 dark:text-zinc-400">
                      节点数量：
                    </span>
                    <div className="text-zinc-900 dark:text-zinc-50 mt-1">
                      {workflow.nodes} 个节点
                    </div>
                  </div>
                  <div className="col-span-2">
                    <span className="text-zinc-500 dark:text-zinc-400">
                      最后运行：
                    </span>
                    <div className="text-zinc-900 dark:text-zinc-50 mt-1">
                      {workflow.lastRun}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 使用提示 */}
        <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
            💡 工作流说明
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400">
            以上工作流均为我实际使用和开发的自动化解决方案。如果你对某个工作流感兴趣，或者有自动化需求，欢迎通过公众号联系我讨论。
          </p>
        </div>
      </div>
    </div>
  );
}
