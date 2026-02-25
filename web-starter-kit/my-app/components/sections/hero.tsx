import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="space-y-6 pb-12 pt-16 md:pb-24 md:pt-32">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-center">
          <Badge variant="outline">🎉 웹 스타터킷 v1.0 출시</Badge>
        </div>

        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-center">
          모던 웹 개발을
          <br />
          <span className="text-primary">간단하게 시작하세요</span>
        </h1>

        <p className="max-w-2xl text-lg text-muted-foreground text-center mx-auto">
          Next.js 16, React 19, Tailwind CSS 4를 기반으로 구축된 완전한 스타터킷입니다.
          다크모드 지원과 반응형 디자인으로 즉시 프로젝트를 시작할 수 있습니다.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row justify-center">
          <Button size="lg" asChild>
            <Link href="/dashboard">
              시작하기
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#features">더 알아보기</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
