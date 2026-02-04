"use client";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8 flex flex-col items-center">
        <h1 className="text-2xl font-bold text-red-700 mb-6">Đăng nhập với Mezon</h1>
        <button
          className="px-8 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition text-lg"
          onClick={() => { window.location.href = "/api/auth/login"; }}
        >
          Đăng nhập
        </button>
      </div>
    </div>
  );
}
