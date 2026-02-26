"use client";

import { Sidebar } from "@/components/layout/sidebar";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { User, Bell, Lock } from "lucide-react";

export default function Settings() {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <main className="flex-1 overflow-y-auto">
        {/* Top Navigation */}
        <div className="border-b border-border/40 bg-background/50 sticky top-0 z-40">
          <div className="flex h-16 items-center justify-between px-6">
            <div>
              <h1 className="text-2xl font-bold">설정</h1>
              <p className="text-sm text-muted-foreground">
                계정 및 애플리케이션 설정을 관리하세요.
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
        <div className="p-6 space-y-6 max-w-4xl">
          {/* Profile Settings */}
          <Card>
            <CardHeader className="flex flex-row items-center gap-3">
              <User className="h-5 w-5 text-muted-foreground" />
              <div>
                <CardTitle>프로필 설정</CardTitle>
                <CardDescription>
                  개인 정보 및 프로필 내용을 수정하세요.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">이름</label>
                    <input
                      type="text"
                      defaultValue="John Doe"
                      className="w-full px-3 py-2 rounded-md border border-border/40 text-sm bg-background"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">이메일</label>
                    <input
                      type="email"
                      defaultValue="john.doe@example.com"
                      className="w-full px-3 py-2 rounded-md border border-border/40 text-sm bg-background"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">자기소개</label>
                  <textarea
                    defaultValue="웹 개발자로 활동 중입니다."
                    className="w-full px-3 py-2 rounded-md border border-border/40 text-sm bg-background"
                    rows={4}
                  />
                </div>
                <button className="px-4 py-2 rounded-md bg-accent text-accent-foreground hover:bg-accent/90 transition-colors text-sm font-medium">
                  저장
                </button>
              </div>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card>
            <CardHeader className="flex flex-row items-center gap-3">
              <Bell className="h-5 w-5 text-muted-foreground" />
              <div>
                <CardTitle>알림 설정</CardTitle>
                <CardDescription>
                  받을 알림의 종류를 선택하세요.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-md border border-border/40">
                  <div>
                    <p className="font-medium text-sm">이메일 알림</p>
                    <p className="text-xs text-muted-foreground">중요한 변경사항을 이메일로 받습니다.</p>
                  </div>
                  <input type="checkbox" defaultChecked className="h-4 w-4" />
                </div>
                <div className="flex items-center justify-between p-3 rounded-md border border-border/40">
                  <div>
                    <p className="font-medium text-sm">뉴스레터</p>
                    <p className="text-xs text-muted-foreground">주간 뉴스레터 구독</p>
                  </div>
                  <input type="checkbox" defaultChecked className="h-4 w-4" />
                </div>
                <div className="flex items-center justify-between p-3 rounded-md border border-border/40">
                  <div>
                    <p className="font-medium text-sm">푸시 알림</p>
                    <p className="text-xs text-muted-foreground">브라우저 푸시 알림을 받습니다.</p>
                  </div>
                  <input type="checkbox" className="h-4 w-4" />
                </div>
                <button className="px-4 py-2 rounded-md bg-accent text-accent-foreground hover:bg-accent/90 transition-colors text-sm font-medium">
                  저장
                </button>
              </div>
            </CardContent>
          </Card>

          {/* Security Settings */}
          <Card>
            <CardHeader className="flex flex-row items-center gap-3">
              <Lock className="h-5 w-5 text-muted-foreground" />
              <div>
                <CardTitle>보안 설정</CardTitle>
                <CardDescription>
                  계정 보안 관련 설정을 관리하세요.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 rounded-md border border-border/40">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-sm">비밀번호</p>
                      <p className="text-xs text-muted-foreground">마지막 변경: 3개월 전</p>
                    </div>
                    <button className="px-3 py-1 rounded text-sm border border-border/40 hover:bg-accent/10 transition-colors">
                      변경
                    </button>
                  </div>
                </div>
                <div className="p-3 rounded-md border border-border/40">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-sm">2단계 인증</p>
                      <p className="text-xs text-muted-foreground">현재: 비활성화</p>
                    </div>
                    <button className="px-3 py-1 rounded text-sm border border-border/40 hover:bg-accent/10 transition-colors">
                      설정
                    </button>
                  </div>
                </div>
                <div className="p-3 rounded-md border border-border/40">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-sm">활성 세션</p>
                      <p className="text-xs text-muted-foreground">1개 기기에서 접속 중</p>
                    </div>
                    <button className="px-3 py-1 rounded text-sm border border-border/40 hover:bg-accent/10 transition-colors">
                      관리
                    </button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
