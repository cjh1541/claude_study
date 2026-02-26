"use client";

import { Sidebar } from "@/components/layout/sidebar";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    role: "관리자",
    joinDate: "2024-01-15",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "편집자",
    joinDate: "2024-02-20",
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike.johnson@example.com",
    role: "사용자",
    joinDate: "2024-03-10",
  },
  {
    id: 4,
    name: "Sarah Williams",
    email: "sarah.williams@example.com",
    role: "사용자",
    joinDate: "2024-04-05",
  },
  {
    id: 5,
    name: "Tom Brown",
    email: "tom.brown@example.com",
    role: "뷰어",
    joinDate: "2024-05-12",
  },
];

const roleColors: Record<string, string> = {
  관리자: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  편집자: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  사용자: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  뷰어: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200",
};

export default function Users() {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <main className="flex-1 overflow-y-auto">
        {/* Top Navigation */}
        <div className="border-b border-border/40 bg-background/50 sticky top-0 z-40">
          <div className="flex h-16 items-center justify-between px-6">
            <div>
              <h1 className="text-2xl font-bold">사용자</h1>
              <p className="text-sm text-muted-foreground">
                가입한 사용자 목록을 관리하세요.
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
          {/* Users List */}
          <Card>
            <CardHeader>
              <CardTitle>가입한 사용자</CardTitle>
              <CardDescription>
                총 {users.length}명의 사용자가 등록되어 있습니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="border-b border-border/40">
                    <tr>
                      <th className="text-left py-3 px-4 font-semibold">이름</th>
                      <th className="text-left py-3 px-4 font-semibold">이메일</th>
                      <th className="text-left py-3 px-4 font-semibold">역할</th>
                      <th className="text-left py-3 px-4 font-semibold">가입일</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, idx) => (
                      <tr key={user.id} className={idx !== users.length - 1 ? "border-b border-border/40" : ""}>
                        <td className="py-3 px-4 font-medium">{user.name}</td>
                        <td className="py-3 px-4 text-muted-foreground">{user.email}</td>
                        <td className="py-3 px-4">
                          <span
                            className={`inline-block px-2 py-1 rounded text-xs font-semibold ${
                              roleColors[user.role] || roleColors.뷰어
                            }`}
                          >
                            {user.role}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-muted-foreground">{user.joinDate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
