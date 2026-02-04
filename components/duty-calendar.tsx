"use client";
import React, { useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import type { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import viLocale from "@fullcalendar/core/locales/vi";

// Dữ liệu giả lập (copy từ user)
const dutyData = [
  { stt: "1", name: "Mai Hồng Mận", email: "man.maihong@ncc.asia", mezon_user_id: "1940048388468772864", date: "01/12/2025", note: "" },
  { stt: "2", name: "Đặng Văn Đạt", email: "dat.dangvan@ncc.asia", mezon_user_id: "1940048388468772864", date: "01/12/2025", note: "" },
  { stt: "3", name: "Trần Ngân Hà", email: "ha.tranngan@ncc.asia", mezon_user_id: "1840671876997713920", date: "02/12/2025", note: "" },
  { stt: "4", name: "Trần Hoàng Thìn", email: "thin.tranhoang@ncc.asia", mezon_user_id: "1840669672182124544", date: "02/12/2025", note: "" },
  { stt: "5", name: "Phạm Văn Khánh", email: "khanh.phamvan@ncc.asia", mezon_user_id: "1780085418822209536", date: "03/12/2025", note: "" },
  { stt: "6", name: "Nguyễn Hữu Tuấn ", email: "tuan.nguyenhuu@ncc.asia", mezon_user_id: "1783441468711505920", date: "03/12/2025", note: "" },
  { stt: "7", name: "Phạm Minh Tuấn", email: "tuan.phamminh2@ncc.asia", mezon_user_id: "1782303543722512384", date: "04/12/2025", note: "Lau cửa kính ra vào" },
  { stt: "8", name: "Nguyễn Thành Đôn", email: "don.nguyenthanh@ncc.asia", mezon_user_id: "1946167706600345600", date: "04/12/2025", note: "" },
  { stt: "9", name: "Nguyễn Xuân Quân", email: "quan.nguyenxuan@ncc.asia", mezon_user_id: "1833044269397446656", date: "05/12/2025", note: "" },
  { stt: "10", name: "Nguyễn Viết Hoàng", email: "hoang.nguyenviet2@ncc.asia", mezon_user_id: "1831540707106492416", date: "05/12/2025", note: "" },
  { stt: "11", name: "Nguyễn Văn Thịnh", email: "thinh.nguyenvan@ncc.asia", mezon_user_id: "1783443471286145024", date: "08/12/2025", note: "" },
  { stt: "12", name: "Nguyễn Thu Hằng", email: "hang.nguyenthu@ncc.asia", mezon_user_id: "1783442595926511616", date: "08/12/2025", note: "" },
  { stt: "13", name: "Nguyễn Trường Sơn", email: "son.nguyentruong1@ncc.asia", mezon_user_id: "1810223235401256960", date: "09/12/2025", note: "" },
  { stt: "14", name: "Nguyễn Thị Thanh Ngà", email: "nga.nguyenthithanh@ncc.asia", mezon_user_id: "1782303705618452480", date: "09/12/2025", note: "" },
  { stt: "15", name: "Nguyễn Thị Mai Trinh", email: "trinh.nguyenthimai@ncc.asia", mezon_user_id: "1831524472864116736", date: "10/12/2025", note: "" },
  { stt: "16", name: "Phạm Huyền Đức", email: "duc.phamhuyen@ncc.asia", mezon_user_id: "1825732987325517824", date: "10/12/2025", note: "" },
  { stt: "17", name: "Nguyễn Tạ Quyền", email: "quyen.nguyenta@ncc.asia", mezon_user_id: "1831634827619602432", date: "11/12/2025", note: "" },
  { stt: "18", name: "Nguyễn Sinh Hải", email: "hai.nguyensinh@ncc.asia", mezon_user_id: "1807983162756698112", date: "11/12/2025", note: "" },
  { stt: "19", name: "Nguyễn Quốc Vinh", email: "vinh.nguyenquoc3@ncc.asia", mezon_user_id: "1783444369026584576", date: "12/12/2025", note: "Lau cửa kính ra vào" },
  { stt: "20", name: "Nguyễn Nam Phong", email: "phong.nguyennam@ncc.asia", mezon_user_id: "1779485079098101760", date: "12/12/2025", note: "" },
  { stt: "21", name: "Phạm Thế Tình", email: "tinh.phamthe@ncc.asia", mezon_user_id: "1930090353453436928", date: "15/12/2025", note: "Vệ sinh lò vi sóng, tủ lạnh" },
  { stt: "22", name: "Nguyễn Hoài Sơn", email: "son.nguyenhoai@ncc.asia", mezon_user_id: "1795277119710826496", date: "15/12/2025", note: "" },
  { stt: "23", name: "Nguyễn Đức Chính", email: "chinh.nguyenduc@ncc.asia", mezon_user_id: "1823998475507863552", date: "16/12/2025", note: "" },
  { stt: "24", name: "Nguyễn Đình Toàn ", email: "toan.nguyendinh@ncc.asia", mezon_user_id: "1986634093076418560", date: "16/12/2025", note: "" },
  { stt: "25", name: "Nguyễn Đình Minh Thông", email: "thong.nguyendinhminh@ncc.asia", mezon_user_id: "1983278895796850688", date: "17/12/2025", note: "" },
  { stt: "26", name: "Nguyễn Đình Hoàng", email: "hoang.nguyendinh@ncc.asia", mezon_user_id: "1783443441674358784", date: "17/12/2025", note: "" },
  { stt: "27", name: "Mai Hoài Thanh", email: "thanh.maihoai@ncc.asia", mezon_user_id: "1831538106453463040", date: "18/12/2025", note: "" },
  { stt: "28", name: "Lê Văn Thành", email: "thanh.levan@ncc.asia", mezon_user_id: "1783441673976549376", date: "18/12/2025", note: "" },
  { stt: "29", name: "Nguyễn Đình Hiếu", email: "hieu.nguyendinh@ncc.asia", mezon_user_id: "1783441990394843136", date: "19/12/2025", note: "" },
  { stt: "30", name: "Nguyễn Công Dũng", email: "dung.nguyencong@ncc.asia", mezon_user_id: "1929365076809093120", date: "19/12/2025", note: "" },
  { stt: "31", name: "Lê Xuân Huy", email: "huy.lexuan@ncc.asia", mezon_user_id: "1826814768338440192", date: "22/12/2025", note: "" },
  { stt: "32", name: "Lê Đức Anh", email: "anh.leduc1@ncc.asia", mezon_user_id: "1783438504739475456", date: "22/12/2025", note: "" },
  { stt: "33", name: "Hoàng Phương Nguyên", email: "nguyen.hoangphuong@ncc.asia", mezon_user_id: "1783442196159008768", date: "23/12/2025", note: "Lau cửa kính ra vào" },
  { stt: "34", name: "Đặng Cao Trí", email: "tri.dangcao@ncc.asia", mezon_user_id: "1952194848102551552", date: "23/12/2025", note: "" },
  { stt: "35", name: "Dương Phúc Hậu", email: "hau.duongphuc@ncc.asia", mezon_user_id: "1946197154334773248", date: "24/12/2025", note: "Vệ sinh lò vi sóng, tủ lạnh" },
  { stt: "36", name: "Cù Mạnh Tuấn Tài", email: "tai.cumanhtuan@ncc.asia", mezon_user_id: "1826122746413715456", date: "24/12/2025", note: "" },
  { stt: "37", name: "Chu Văn Giá", email: "gia.chuvan@ncc.asia", mezon_user_id: "1821743062989148160", date: "25/12/2025", note: "" },
  { stt: "38", name: "Mai Hồng Mận", email: "man.maihong@ncc.asia", mezon_user_id: "1827994776956309504", date: "25/12/2025", note: "" },
  { stt: "39", name: "Đặng Văn Đạt", email: "dat.dangvan@ncc.asia", mezon_user_id: "1840678415796015104", date: "26/12/2025", note: "" },
  { stt: "40", name: "Trần Ngân Hà", email: "ha.tranngan@ncc.asia", mezon_user_id: "1840671876997713920", date: "26/12/2025", note: "" },
  { stt: "41", name: "Trần Hoàng Thìn", email: "thin.tranhoang@ncc.asia", mezon_user_id: "1840669672182124544", date: "29/12/2025", note: "" },
  { stt: "42", name: "Phạm Văn Khánh", email: "khanh.phamvan@ncc.asia", mezon_user_id: "1780085418822209536", date: "29/12/2025", note: "" },
  { stt: "43", name: "Nguyễn Hữu Tuấn ", email: "tuan.nguyenhuu@ncc.asia", mezon_user_id: "1783441468711505920", date: "30/12/2025", note: "" },
  { stt: "44", name: "Phạm Minh Tuấn", email: "tuan.phamminh2@ncc.asia", mezon_user_id: "1782303543722512384", date: "30/12/2025", note: "" },
  { stt: "45", name: "Nguyễn Thành Đôn", email: "don.nguyenthanh@ncc.asia", mezon_user_id: "1946167706600345600", date: "31/12/2025", note: "" },
  { stt: "46", name: "Nguyễn Xuân Quân", email: "quan.nguyenxuan@ncc.asia", mezon_user_id: "1833044269397446656", date: "31/12/2025", note: "" },
];

// Chuyển đổi dữ liệu sang format FullCalendar
function parseDateVN(dateStr: string) {
  // "25/11/2025" => "2025-11-25"
  const [d, m, y] = dateStr.split("/");
  return `${y}-${m.padStart(2, "0")}-${d.padStart(2, "0")}`;
}

const events = dutyData.map((d) => ({
  title: d.name + (d.note ? ` (${d.note})` : ""),
  start: parseDateVN(d.date),
  allDay: true,
  extendedProps: d,
  backgroundColor: '#f87171',
  borderColor: '#f87171',
}));


import { useState } from "react";

export default function DutyCalendar() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const calendarRef = useRef<any>(null);

  // Lấy danh sách người trực theo ngày
  // Chuyển selectedDate về dạng dd/mm/yyyy để so sánh với dữ liệu
  function toVNDate(dateStr: string) {
    // yyyy-mm-dd => dd/mm/yyyy
    const [y, m, d] = dateStr.split("-");
    return `${d}/${m}/${y}`;
  }

  const selectedList = selectedDate
    ? dutyData.filter(d => d.date === toVNDate(selectedDate))
    : [];

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow p-4 my-8">
      <h2 className="text-2xl font-bold text-red-700 mb-4">Lịch trực nhật văn phòng</h2>
      <FullCalendar
        ref={calendarRef}
        {...({
          plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
          initialView: 'dayGridMonth',
          headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          },
          locales: [viLocale],
          locale: 'vi',
          events: events,
          height: 'auto',
          eventDisplay: 'block',
          eventContent: renderEventContent,
          dateClick: (info: any) => {
            setSelectedDate(info.dateStr);
            setShowModal(true);
          },
          dayCellDidMount: (arg: any) => {
            arg.el.style.cursor = 'pointer';
          }
        } as CalendarOptions)}
      />

      {/* Modal hiển thị danh sách người trực */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 relative">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-red-600 text-2xl font-bold"
              onClick={() => setShowModal(false)}
              aria-label="Đóng"
            >×</button>
            <h3 className="text-xl font-bold text-red-700 mb-4 text-center">Danh sách trực nhật</h3>
            <div className="mb-2 text-center text-gray-700 font-semibold">
              Ngày: <span className="text-base text-red-700">{selectedDate && selectedDate.split('-').reverse().join('/')}</span>
            </div>
            {selectedList.length === 0 ? (
              <div className="text-center text-gray-500">Không có ai trực ngày này.</div>
            ) : (
              <ul className="divide-y divide-gray-200">
                {selectedList.map((d, idx) => (
                  <li key={d.stt} className="py-2 flex flex-col gap-1">
                    <span className="font-semibold text-gray-900">{d.name}</span>
                    <span className="text-xs text-gray-500">{d.email}</span>
                    {d.note && <span className="text-xs text-red-600 font-medium">Lưu ý: {d.note}</span>}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function renderEventContent(eventInfo: any) {
  const d = eventInfo.event.extendedProps;
  return (
    <div className="truncate text-xs font-semibold px-2 py-1 rounded flex items-center gap-2" style={{background: eventInfo.backgroundColor || '#f87171', color: '#fff'}}>
      <span>{eventInfo.event.title}</span>
    </div>
  );
}
