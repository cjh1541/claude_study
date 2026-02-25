"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        {/* 로고 */}
        <Link href="/" className="font-semibold">
          Web Kit
        </Link>

        {/* 데스크탑 네비게이션 */}
        <nav className="hidden md:flex gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            홈
          </Link>
          <Link
            href="/dashboard"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            대시보드
          </Link>
        </nav>

        {/* 우측: 다크모드 토글 + 모바일 메뉴 */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* 모바일 메뉴 */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4">
                <Link
                  href="/"
                  className="text-sm font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  홈
                </Link>
                <Link
                  href="/dashboard"
                  className="text-sm font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  대시보드
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
