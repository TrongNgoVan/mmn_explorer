"use client";
import { SidebarUserInfo } from "./sidebar-user-info";
import React from "react";

export function Sidebar() {
  const [open, setOpen] = React.useState(false);

  // Chỉ toggle sidebar trên mobile (<=1024px)
  React.useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Kiểm tra nếu là desktop thì luôn hiển thị sidebar
  const isDesktop = typeof window !== 'undefined' ? window.innerWidth >= 1024 : true;

  return (
    <aside
      className="sidebar fixed top-0 left-0 h-full w-[260px] bg-white border-r border-gray-200 z-40 flex flex-col"
    >
      <div className="flex items-center h-16 px-6 border-b border-gray-100">
        <span className="font-bold text-lg text-red-700">HRM Cleaning Mezon</span>
      </div>
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-2">
          <li>
            <a href="/" className="block px-4 py-2 rounded hover:bg-gray-100 font-medium text-gray-700">
              Trang chủ
            </a>
          </li>
          <li>
            <a href="/employee" className="block px-4 py-2 rounded hover:bg-gray-100 font-medium text-gray-700">
              Nhân viên
            </a>
          </li>
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-100">
        <SidebarUserInfo />
      </div>
    </aside>
  );
}
