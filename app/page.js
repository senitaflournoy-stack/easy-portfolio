import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* 个人头像 */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-zinc-200 dark:border-zinc-800 shadow-lg">
            <Image
              src="/avatar.jpg"
              alt="个人头像"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* 个人简介 */}
        <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
          你好，我是开发者
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
          热爱技术，专注于前端开发和自动化工作流。在这里分享我的作品、技能学习记录和创意工作流。
        </p>

        {/* 快速链接 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/portfolio"
            className="px-8 py-3 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-full font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
          >
            查看作品集
          </Link>
          <Link
            href="https://mp.weixin.qq.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-zinc-900 dark:border-zinc-50 text-zinc-900 dark:text-zinc-50 rounded-full font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            关注公众号
          </Link>
        </div>

        {/* 功能预览卡片 */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Link
            href="/portfolio"
            className="p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-zinc-200 dark:border-zinc-800"
          >
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
              作品集
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              展示我的项目作品和创意设计
            </p>
          </Link>

          <Link
            href="/skills"
            className="p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-zinc-200 dark:border-zinc-800"
          >
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
              技能记录
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              记录学习进度和技术成长
            </p>
          </Link>

          <Link
            href="/workflows"
            className="p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-zinc-200 dark:border-zinc-800"
          >
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
              工作流
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              分享自动化工作流和工具
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
