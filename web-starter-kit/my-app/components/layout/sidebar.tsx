"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BarChart3,
  Settings,
  Users,
  FileText,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "대시보드", href: "/dashboard", icon: LayoutDashboard },
  { label: "분석", href: "/dashboard/analytics", icon: BarChart3 },
  { label: "사용자", href: "/dashboard/users", icon: Users },
  { label: "보고서", href: "/dashboard/reports", icon: FileText },
  { label: "설정", href: "/dashboard/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex flex-col w-64 border-r border-border/40 bg-background/50 h-screen">
      <div className="p-6">
        <h2 className="font-semibold text-lg">메뉴</h2>
      </div>

      <nav className="flex-1 px-3 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
              )}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-6 border-t border-border/40 text-xs text-muted-foreground">
        © 2026 Web Kit
      </div>
    </aside>
  );
}
