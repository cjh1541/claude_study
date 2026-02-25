import {
  Zap,
  Palette,
  Smartphone,
  Shield,
  Package,
  Rocket,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "초고속 성능",
    description: "Next.js 16의 최신 최적화 기술로 번개 같은 속도를 경험하세요.",
    icon: Zap,
  },
  {
    title: "아름다운 UI",
    description: "shadcn/ui와 Tailwind CSS로 세련된 인터페이스를 쉽게 구성할 수 있습니다.",
    icon: Palette,
  },
  {
    title: "완전한 반응형",
    description: "모바일부터 데스크탑까지 모든 기기에서 완벽하게 동작합니다.",
    icon: Smartphone,
  },
  {
    title: "다크모드 지원",
    description: "next-themes로 사용자의 선호에 따라 자동으로 테마가 전환됩니다.",
    icon: Shield,
  },
  {
    title: "TypeScript 준비",
    description: "완전한 타입 안전성으로 개발 생산성을 극대화합니다.",
    icon: Package,
  },
  {
    title: "프로덕션 준비",
    description: "즉시 배포 가능한 완성도 있는 스타터킷입니다.",
    icon: Rocket,
  },
];

export function Features() {
  return (
    <section id="features" className="space-y-8 py-12 md:py-24">
      <div className="space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
          강력한 기능들
        </h2>
        <p className="max-w-2xl text-lg text-muted-foreground mx-auto">
          모던 웹 개발에 필요한 모든 것을 포함하고 있습니다.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3 pt-8">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <Card key={feature.title}>
              <CardHeader>
                <Icon className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
