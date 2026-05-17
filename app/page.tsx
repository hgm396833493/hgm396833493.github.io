import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// ===================== 产品配置（可直接改链接和排序）=====================
const products = [
  {
    id: 1,
    title: "产品一",
    desc: "功能强大的工具，适配多场景使用，手机端友好。",
    link: "https://xxx1.com", // 替换为你的链接
    detailLink: "/admin/product1" // 后台详情链接
  },
  {
    id: 2,
    title: "产品二",
    desc: "高效便捷，主打轻量化，移动端优化。",
    link: "https://xxx2.com",
    detailLink: "/admin/product2"
  },
  {
    id: 3,
    title: "产品三",
    desc: "专业级服务，支持多端同步，响应式布局。",
    link: "https://xxx3.com",
    detailLink: "/admin/product3"
  },
  {
    id: 4,
    title: "产品四",
    desc: "简洁易用，快速上手，适配手机/平板。",
    link: "https://xxx4.com",
    detailLink: "/admin/product4"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen py-8 md:py-12">
      <div className="content-auto">
        {/* 标题区 */}
        <header className="text-center mb-10 md:mb-16">
          <h1 className="text-2xl md:text-4xl font-bold mb-3">产品中心</h1>
          <p className="text-gray-500 text-sm md:text-base">精选优质产品，适配手机端，点击直达</p>
        </header>

        {/* 产品列表（手机2列，平板2列，桌面3列） */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {products.map((item) => (
            <Card key={item.id} className="card-hover">
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">{item.title}</CardTitle>
                <CardDescription className="text-sm">{item.desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-50">点击下方按钮访问</p>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row gap-2">
                <Button asChild className="btn-primary w-full sm:w-auto">
                  <Link href={item.link} target="_blank">访问产品</Link>
                </Button>
                <Button asChild variant="secondary" className="btn-outline w-full sm:w-auto">
                  <Link href={item.detailLink}>后台详情</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}