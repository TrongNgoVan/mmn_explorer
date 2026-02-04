"use client";
import { useEffect, useState } from "react";
import DutyCalendar from "../components/duty-calendar";

export default function HomePage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch("/api/me/user");
        if (res.ok) {
          const user = await res.json();
          localStorage.setItem("mezon_user", JSON.stringify(user));
          setIsAuthenticated(true);
        } else {
          localStorage.removeItem("mezon_user");
          window.location.href = "/login";
        }
      } catch {
        localStorage.removeItem("mezon_user");
        window.location.href = "/login";
      }
    }
    fetchUser();
  }, []);

  if (!isAuthenticated) return null;

  return <DutyCalendar />;
}
