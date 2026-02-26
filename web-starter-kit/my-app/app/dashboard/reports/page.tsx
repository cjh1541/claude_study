"use client";

import { Sidebar } from "@/components/layout/sidebar";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Download, FileText } from "lucide-react";

const reports = [
  {
    id: 1,
    title: "2025년 1월 월간 보고서",
    description: "사이트 분석, 방문자 통계 및 성과 지표",
    date: "2025-02-01",
    size: "2.4 MB",
  },
  {
    id: 2,
    title: "2025년 Q1 분기별 보고서",
    description: "분기별 성능 분석 및 트렌드",
    date: "2025-04-01",
    size: "3.2 MB",
  },
  {
    id: 3,
    title: "사용자 행동 분석 보고서",
    description: "사용자 경로 분석 및 인게이지먼트 메트릭",
    date: "2025-01-20",
    size: "1.8 MB",
  },
  {
    id: 4,
    title: "마케팅 캠페인 성과 보고서",
    description: "캠페인별 ROI 및 전환율 분석",
    date: "2025-01-15",
    size: "2.1 MB",
  },
  {
    id: 5,
    title: "기술 성능 분석 보고서",
    description: "웹사이트 속도, 가동시간 및 오류 분석",
    date: "2025-01-10",
    size: "1.5 MB",
  },
];

export default function Reports() {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <main className="flex-1 overflow-y-auto">
        {/* Top Navigation */}
        <div className="border-b border-border/40 bg-background/50 sticky top-0 z-40">
          <div className="flex h-16 items-center justify-between px-6">
            <div>
              <h1 className="text-2xl font-bold">보고서</h1>
              <p className="text-sm text-muted-foreground">
                생성된 보고서를 다운로드하고 확인하세요.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="search"
                placeholder="검색..."
                className="hidden sm:block px-3 py-2 rounded-md border border-border/40 text-sm bg-background"
              />
              <ThemeToggle />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Reports Grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {reports.map((report) => (
              <Card key={report.id} className="flex flex-col">
                <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-muted-foreground" />
                    <CardTitle className="text-base">{report.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 space-y-4">
                  <div>
                    <CardDescription>{report.description}</CardDescription>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between text-sm">
                    <p className="text-muted-foreground">{report.date}</p>
                    <p className="text-muted-foreground">{report.size}</p>
                  </div>
                  <button className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-accent text-accent-foreground hover:bg-accent/90 transition-colors text-sm font-medium">
                    <Download className="h-4 w-4" />
                    다운로드
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
