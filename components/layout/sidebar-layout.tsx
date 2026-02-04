"use client";
import { Sidebar } from '../sidebar';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function SidebarLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/login';
  return (
    <>
      {!isLoginPage && <Sidebar />}
      <main
        style={{
          minHeight: '100vh',
          marginLeft: !isLoginPage ? 260 : 0,
          transition: 'margin-left 0.2s',
        }}
        className="main-content"
      >
        {children}
      </main>
    </>
  );
}
