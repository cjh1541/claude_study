"use client";

import { Sidebar } from "@/components/layout/sidebar";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { TrendingUp, Users, Zap, Clock } from "lucide-react";

const analyticsData = [
  {
    title: "페이지뷰",
    value: "12,584",
    icon: TrendingUp,
    description: "전일 대비 +5.2%",
  },
  {
    title: "방문자",
    value: "3,842",
    icon: Users,
    description: "전일 대비 +2.3%",
  },
  {
    title: "이탈률",
    value: "34.2%",
    icon: Zap,
    description: "전일 대비 -1.2%",
  },
  {
    title: "평균 체류시간",
    value: "4분 32초",
    icon: Clock,
    description: "페이지당 평균",
  },
];

const hourlyData = [
  { hour: "00:00", views: 120 },
  { hour: "06:00", views: 280 },
  { hour: "12:00", views: 450 },
  { hour: "18:00", views: 520 },
  { hour: "23:59", views: 230 },
];

export default function Analytics() {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <main className="flex-1 overflow-y-auto">
        {/* Top Navigation */}
        <div className="border-b border-border/40 bg-background/50 sticky top-0 z-40">
          <div className="flex h-16 items-center justify-between px-6">
            <div>
              <h1 className="text-2xl font-bold">분석</h1>
              <p className="text-sm text-muted-foreground">
                사이트 성능 및 방문자 통계를 확인하세요.
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
          {/* Analytics Cards */}
          <div className="grid gap-4 md:grid-cols-4">
            {analyticsData.map((metric) => {
              const Icon = metric.icon;
              return (
                <Card key={metric.title}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      {metric.title}
                    </CardTitle>
                    <Icon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{metric.value}</div>
                    <p className="text-xs text-muted-foreground">
                      {metric.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Hourly Data */}
          <Card>
            <CardHeader>
              <CardTitle>시간별 페이지뷰</CardTitle>
              <CardDescription>
                지난 24시간 페이지뷰 현황
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {hourlyData.map((data, idx) => (
                  <div key={data.hour}>
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm font-medium">{data.hour}</p>
                      <p className="text-sm text-muted-foreground">{data.views}회</p>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div
                        className="bg-accent h-2 rounded-full"
                        style={{ width: `${(data.views / 520) * 100}%` }}
                      />
                    </div>
                    {idx < hourlyData.length - 1 && (
                      <Separator className="mt-4" />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
