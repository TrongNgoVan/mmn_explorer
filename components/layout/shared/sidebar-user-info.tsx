// Định nghĩa User đúng chuẩn, không dùng any
'use client';
interface User {
  avatar?: string;
  display_name?: string;
  username?: string;
  [key: string]: unknown;
}
import * as React from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';

export function SidebarUserInfo() {
  const [user, setUser] = React.useState<User | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [popoverPos, setPopoverPos] = React.useState<{ top: number; left: number } | null>(null);
  const [mounted, setMounted] = React.useState<boolean>(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (!mounted) return;
    fetch('/api/me/user')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        setUser(data && !data.error ? data : null);
        setLoading(false);
      });
  }, [mounted]);

  const handleLogin = () => {
    window.location.href = '/api/auth/login';
  };
  const handleLogout = async () => {
    await fetch('/api/auth/logout');
    setUser(null);
    window.location.href = '/';
  };

  // Xác định vị trí popover ngoài sidebar
  const handleUserInfoClick = (e: React.MouseEvent) => {
    setShowModal((v) => {
      if (!v) {
        // Lấy vị trí button trên viewport
        const rect = (e.target as HTMLElement).closest('button')?.getBoundingClientRect();
        if (rect) {
          setPopoverPos({
            // Đặt bottom popover ngang với top của button (nổi lên trên)
            top: rect.top - 180, // popover nổi lên trên nhiều hơn (tùy chỉnh chiều cao popover)
            left: rect.right + 16,
          });
        }
      }
      return !v;
    });
  };

  if (!mounted || loading) {
    return <div className="p-4 text-sm text-gray-400">Loading...</div>;
  }

  return (
    <div className="relative flex flex-col items-center gap-2 border-t border-gray-200 p-4">
      {user ? (
        <>
          <button
            className="flex w-full items-center gap-2 rounded p-2 hover:bg-gray-100"
            onClick={handleUserInfoClick}
            style={{ cursor: 'pointer' }}
          >
            <Image
              src={user.avatar || '/default-avatar.png'}
              alt="avatar"
              width={32}
              height={32}
              className="rounded-full border border-gray-300"
            />
            <span className="truncate text-sm font-semibold">{user.display_name || user.username || 'User'}</span>
          </button>
          {/* Popover user info ngoài sidebar */}
          {showModal &&
            popoverPos &&
            mounted &&
            typeof window !== 'undefined' &&
            createPortal(
              <div
                className="animate-fade-in fixed z-[9999] rounded-lg border border-gray-200 bg-white p-4 shadow-lg"
                style={{
                  top: popoverPos.top,
                  left: popoverPos.left,
                  boxShadow: '0 4px 24px #0001',
                  minWidth: 340,
                  maxWidth: 420,
                  width: 'auto',
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex flex-col gap-1 text-xs text-gray-700">
                  {Object.entries(user)
                    .filter(([key]) => key !== 'avatar' && key !== 'display_name')
                    .map(([key, value]) => (
                      <div key={key} className="flex justify-between gap-2">
                        <span className="font-semibold whitespace-nowrap capitalize">{key.replace(/_/g, ' ')}:</span>
                        <span className="text-right break-all">{String(value)}</span>
                      </div>
                    ))}
                </div>
              </div>,
              window.document.body
            )}
          <button
            onClick={handleLogout}
            className="mt-2 w-full cursor-pointer rounded bg-gradient-to-r from-purple-500 to-purple-700 py-1.5 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:scale-[1.04] hover:shadow-lg focus:ring-2 focus:ring-purple-400 focus:outline-none active:scale-95"
          >
            Logout
          </button>
        </>
      ) : (
        <button
          onClick={handleLogin}
          className="w-full cursor-pointer rounded bg-gradient-to-r from-purple-500 to-purple-700 py-1.5 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:scale-[1.04] hover:shadow-lg focus:ring-2 focus:ring-purple-400 focus:outline-none active:scale-95"
        >
          Login with Mezon
        </button>
      )}
    </div>
  );
}
