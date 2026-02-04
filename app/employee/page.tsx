"use client";
import { useEffect, useState } from "react";

export default function EmployeeListPage() {
  const [employees, setEmployees] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEmployees() {
      try {
        const res = await fetch("/api/employee");
        if (res.ok) {
          const data = await res.json();
          setEmployees(data);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchEmployees();
  }, []);

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow p-6 my-8">
      <h2 className="text-2xl font-bold text-red-700 mb-4">Danh sách nhân viên</h2>
      {loading ? (
        <div>Đang tải...</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-3 py-2">STT</th>
                <th className="border px-3 py-2">Họ</th>
                <th className="border px-3 py-2">Tên</th>
                <th className="border px-3 py-2">Email</th>
                <th className="border px-3 py-2">Mezon User ID</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp, idx) => (
                <tr key={emp.mezonUserId || idx} className="even:bg-gray-50">
                  <td className="border px-3 py-2 text-center">{idx + 1}</td>
                  <td className="border px-3 py-2">{emp.lastName}</td>
                  <td className="border px-3 py-2">{emp.firstName}</td>
                  <td className="border px-3 py-2">{emp.email}</td>
                  <td className="border px-3 py-2">{emp.mezonUserId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
