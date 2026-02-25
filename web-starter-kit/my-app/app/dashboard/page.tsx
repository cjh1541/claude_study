"use client";

import { Sidebar } from "@/components/layout/sidebar";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Users, TrendingUp, Activity, Clock } from "lucide-react";

const stats = [
  {
    title: "총 사용자",
    value: "2,543",
    icon: Users,
    description: "전월 대비 +8%",
  },
  {
    title: "총 수익",
    value: "$45,231",
    icon: TrendingUp,
    description: "전월 대비 +12%",
  },
  {
    title: "활성 세션",
    value: "573",
    icon: Activity,
    description: "지금 온라인",
  },
  {
    title: "평균 시간",
    value: "23분 45초",
    icon: Clock,
    description: "세션당 평균",
  },
];

const recentActivities = [
  { id: 1, user: "John Doe", action: "계정 생성", time: "2분 전" },
  { id: 2, user: "Jane Smith", action: "결제 완료", time: "15분 전" },
  { id: 3, user: "Mike Johnson", action: "프로필 업데이트", time: "1시간 전" },
  { id: 4, user: "Sarah Williams", action: "문의 제출", time: "2시간 전" },
];

export default function Dashboard() {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <main className="flex-1 overflow-y-auto">
        {/* Top Navigation */}
        <div className="border-b border-border/40 bg-background/50 sticky top-0 z-40">
          <div className="flex h-16 items-center justify-between px-6">
            <div>
              <h1 className="text-2xl font-bold">대시보드</h1>
              <p className="text-sm text-muted-foreground">
                환영합니다! 여기서 통계를 확인할 수 있습니다.
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
          {/* Stats Cards */}
          <div className="grid gap-4 md:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <Card key={stat.title}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      {stat.title}
                    </CardTitle>
                    <Icon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <p className="text-xs text-muted-foreground">
                      {stat.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Recent Activities */}
          <Card>
            <CardHeader>
              <CardTitle>최근 활동</CardTitle>
              <CardDescription>
                지난 24시간 동안의 활동 기록
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, idx) => (
                  <div key={activity.id}>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-sm">{activity.user}</p>
                        <p className="text-xs text-muted-foreground">
                          {activity.action}
                        </p>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {activity.time}
                      </p>
                    </div>
                    {idx < recentActivities.length - 1 && (
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
