import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="space-y-6 py-12 md:py-24 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg border border-primary/20">
      <div className="space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
          지금 바로 시작하세요
        </h2>
        <p className="max-w-2xl text-lg text-muted-foreground mx-auto">
          웹 스타터킷으로 당신의 프로젝트를 빠르게 구축하고 성공에 도달하세요.
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row justify-center pt-4">
        <Button size="lg" asChild>
          <Link href="/dashboard">
            대시보드 보기
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <a href="#">문서 읽기</a>
        </Button>
      </div>
    </section>
  );
}
