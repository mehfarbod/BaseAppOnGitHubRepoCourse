import { useState } from "react";

const NAV_LINKS = [
  { label: "صفحه اصلی", href: "#" },
  { label: "دوره‌ها", href: "#", active: true },
  { label: "برنامه‌های آموزشی", href: "#" },
  { label: "ویدیوهای آموزشی", href: "#" },
  { label: "گالری", href: "#" },
  { label: "درباره‌ی ما", href: "#" },
  { label: "تماس با ما", href: "#" },
];

type CourseStatus = "active" | "upcoming";
type FilterTab = "all" | "active" | "upcoming";

interface Course {
  id: number;
  title: string;
  description: string;
  grade: string;
  sessions: string;
  schedule: string;
  capacity: string;
  instructor: string;
  initials: string;
  status: CourseStatus;
  bgColor: string;
  icon: string;
}

const COURSES: Course[] = [
  {
    id: 1,
    title: "کلاس تقویتی ریاضی",
    description: "تقویت مفاهیم پایه و آمادگی برای امتحانات مدرسه",
    grade: "پایه دهم",
    sessions: "۱۲ جلسه",
    schedule: "شنبه‌ها، ساعت ۱۶",
    capacity: "ظرفیت ۲۰ نفر",
    instructor: "خانم احمدی",
    initials: "ا",
    status: "active",
    bgColor: "#DBE7C1",
    icon: "math",
  },
  {
    id: 2,
    title: "کارگاه مهارت‌های زندگی",
    description: "آموزش مهارت‌های اجتماعی، تصمیم‌گیری و خودشناسی",
    grade: "پایه‌های دهم و یازدهم",
    sessions: "۸ جلسه",
    schedule: "دوشنبه‌ها، ساعت ۱۵",
    capacity: "ظرفیت ۲۵ نفر",
    instructor: "خانم رضایی",
    initials: "ر",
    status: "active",
    bgColor: "#BFD7EA",
    icon: "life",
  },
  {
    id: 3,
    title: "آمادگی آزمون‌های نهایی",
    description: "مرور جامع مباحث و تمرین آزمون‌های استاندارد",
    grade: "پایه دوازدهم",
    sessions: "۱۶ جلسه",
    schedule: "یکشنبه‌ها، ساعت ۱۴",
    capacity: "ظرفیت ۱۸ نفر",
    instructor: "خانم موسوی",
    initials: "م",
    status: "active",
    bgColor: "#EEF2F7",
    icon: "exam",
  },
  {
    id: 4,
    title: "کارگاه پژوهش و المپیاد",
    description: "آشنایی با روش تحقیق علمی و آمادگی برای المپیادهای علمی",
    grade: "پایه‌های دهم تا دوازدهم",
    sessions: "۱۰ جلسه",
    schedule: "چهارشنبه‌ها، ساعت ۱۵",
    capacity: "ظرفیت ۱۵ نفر",
    instructor: "خانم کریمی",
    initials: "ک",
    status: "upcoming",
    bgColor: "#DBE7C1",
    icon: "research",
  },
  {
    id: 5,
    title: "کارگاه هنر و خلاقیت",
    description: "کشف استعداد‌های هنری و پرورش خلاقیت در فضایی آزاد",
    grade: "پایه‌های دهم و یازدهم",
    sessions: "۱۰ جلسه",
    schedule: "سه‌شنبه‌ها، ساعت ۱۶",
    capacity: "ظرفیت ۲۰ نفر",
    instructor: "خانم صادقی",
    initials: "ص",
    status: "upcoming",
    bgColor: "#EEF2F7",
    icon: "art",
  },
  {
    id: 6,
    title: "دوره زبان انگلیسی",
    description: "تقویت مهارت‌های گفتاری، نوشتاری و درک مطلب زبان انگلیسی",
    grade: "پایه‌های دهم تا دوازدهم",
    sessions: "۱۴ جلسه",
    schedule: "پنجشنبه‌ها، ساعت ۱۳",
    capacity: "ظرفیت ۲۲ نفر",
    instructor: "خانم نجفی",
    initials: "ن",
    status: "active",
    bgColor: "#BFD7EA",
    icon: "language",
  },
];

function CourseIcon({ type }: { type: string }) {
  const iconClass = "w-10 h-10 opacity-60";

  if (type === "math") return (
    <svg className={iconClass} viewBox="0 0 40 40" fill="none">
      <text x="4" y="30" fontSize="28" fontFamily="serif" fill="#194342">∑</text>
    </svg>
  );
  if (type === "life") return (
    <svg className={iconClass} viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="14" r="7" stroke="#3F5D3E" strokeWidth="2"/>
      <path d="M8 36c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="#3F5D3E" strokeWidth="2"/>
    </svg>
  );
  if (type === "exam") return (
    <svg className={iconClass} viewBox="0 0 40 40" fill="none">
      <rect x="8" y="6" width="24" height="28" rx="3" stroke="#17324D" strokeWidth="2"/>
      <path d="M14 14h12M14 20h12M14 26h8" stroke="#17324D" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
  if (type === "research") return (
    <svg className={iconClass} viewBox="0 0 40 40" fill="none">
      <circle cx="17" cy="17" r="9" stroke="#3F5D3E" strokeWidth="2"/>
      <path d="M23.5 23.5L32 32" stroke="#3F5D3E" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  );
  if (type === "art") return (
    <svg className={iconClass} viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="12" stroke="#B86F5B" strokeWidth="2"/>
      <circle cx="14" cy="17" r="2.5" fill="#194342"/>
      <circle cx="20" cy="13" r="2.5" fill="#3F5D3E"/>
      <circle cx="26" cy="17" r="2.5" fill="#BFD7EA"/>
      <path d="M14 26c3-4 9-4 12 0" stroke="#B86F5B" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
  // language
  return (
    <svg className={iconClass} viewBox="0 0 40 40" fill="none">
      <path d="M6 10h14M6 17h10M6 24h12" stroke="#17324D" strokeWidth="2" strokeLinecap="round"/>
      <path d="M22 18l4-8 4 8M23.5 15.5h5" stroke="#17324D" strokeWidth="2" strokeLinecap="round"/>
      <path d="M26 22c-2 3-4 5-6 5M26 22c2 3 4 5 6 5" stroke="#17324D" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function CourseCard({ course }: { course: Course }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#FFFFFF",
        border: "1px solid #DBE7C1",
        borderRadius: "18px",
        boxShadow: hovered ? "0 8px 32px rgba(25,67,66,0.10)" : "none",
        transition: "box-shadow 0.22s ease, transform 0.22s ease",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* Visual area */}
      <div
        style={{
          background: course.bgColor,
          height: "128px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div style={{
          width: 60,
          height: 60,
          borderRadius: 16,
          background: "rgba(255,255,255,0.55)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <CourseIcon type={course.icon} />
        </div>

        {/* Status badge */}
        <span style={{
          position: "absolute",
          top: 14,
          left: 14,
          padding: "3px 11px",
          borderRadius: 999,
          fontSize: 12,
          fontWeight: 600,
          background: course.status === "active" ? "#194342" : "#EEF2F7",
          color: course.status === "active" ? "#ffffff" : "#667085",
          border: course.status === "active" ? "none" : "1px solid #DBE7C1",
          letterSpacing: "0.01em",
        }}>
          {course.status === "active" ? "در حال ثبت‌نام" : "به‌زودی"}
        </span>
      </div>

      {/* Card body */}
      <div style={{ padding: "20px 20px 18px", display: "flex", flexDirection: "column", flex: 1 }}>
        <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1F2933", margin: 0, marginBottom: 6, lineHeight: 1.5 }}>
          {course.title}
        </h3>
        <p style={{ fontSize: 13.5, color: "#667085", margin: 0, marginBottom: 16, lineHeight: 1.7 }}>
          {course.description}
        </p>

        {/* Metadata */}
        <div style={{ display: "flex", flexDirection: "column", gap: 7, marginBottom: 16 }}>
          {[
            { icon: "grade", label: course.grade },
            { icon: "sessions", label: course.sessions },
            { icon: "schedule", label: course.schedule },
            { icon: "capacity", label: course.capacity },
          ].map((item) => (
            <div key={item.icon} style={{ display: "flex", alignItems: "center", gap: 7 }}>
              <MetaIcon type={item.icon} />
              <span style={{ fontSize: 12.5, color: "#667085" }}>{item.label}</span>
            </div>
          ))}
        </div>

        {/* Instructor */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          paddingTop: 12,
          marginBottom: 16,
          borderTop: "1px solid #EEF2F7",
        }}>
          <div style={{
            width: 28,
            height: 28,
            borderRadius: "50%",
            background: "#DBE7C1",
            color: "#194342",
            fontSize: 12,
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            {course.initials}
          </div>
          <span style={{ fontSize: 12.5, color: "#667085" }}>مدرس: خانم {course.instructor}</span>
        </div>

        {/* CTA */}
        <div style={{ marginTop: "auto" }}>
          <button style={{
            width: "100%",
            padding: "10px 0",
            borderRadius: 10,
            border: course.status === "active" ? "none" : "1px solid #DBE7C1",
            background: course.status === "active" ? "#194342" : "#FAF8F3",
            color: course.status === "active" ? "#ffffff" : "#194342",
            fontSize: 13.5,
            fontWeight: 600,
            cursor: "pointer",
            fontFamily: "Vazirmatn, sans-serif",
            transition: "background 0.18s",
          }}
            onMouseEnter={(e) => {
              if (course.status === "active") {
                (e.target as HTMLButtonElement).style.background = "#3F5D3E";
              }
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLButtonElement).style.background = course.status === "active" ? "#194342" : "#FAF8F3";
            }}
          >
            {course.status === "active" ? "مشاهده دوره" : "مشاهده جزئیات"}
          </button>
        </div>
      </div>
    </div>
  );
}

function MetaIcon({ type }: { type: string }) {
  const s = { width: 15, height: 15, color: "#194342", flexShrink: 0 };
  if (type === "grade") return (
    <svg style={s} viewBox="0 0 20 20" fill="none">
      <path d="M10 2L3 7v11h5v-5h4v5h5V7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  );
  if (type === "sessions") return (
    <svg style={s} viewBox="0 0 20 20" fill="none">
      <rect x="3" y="4" width="14" height="13" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M7 2v4M13 2v4M3 9h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
  if (type === "schedule") return (
    <svg style={s} viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M10 6v4l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  return (
    <svg style={s} viewBox="0 0 20 20" fill="none">
      <path d="M13 9a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M3 17c0-3.314 3.134-6 7-6s7 2.686 7 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function Header({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: (v: boolean) => void }) {
  return (
    <header style={{
      background: "#ffffff",
      borderBottom: "1px solid #DBE7C1",
      position: "sticky",
      top: 0,
      zIndex: 100,
    }}>
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "0 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 64,
      }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 36,
            height: 36,
            borderRadius: 10,
            background: "#194342",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 2L3 7l7 4 7-4-7-5z" fill="#DBE7C1"/>
              <path d="M3 7v6l7 5 7-5V7" stroke="#DBE7C1" strokeWidth="1.2" fill="none"/>
            </svg>
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#194342", lineHeight: 1.2 }}>شاهد حضرت خدیجه (س)</div>
            <div style={{ fontSize: 10.5, color: "#667085" }}>سامانه آموزشی</div>
          </div>
        </div>

        {/* Desktop nav */}
        <nav style={{ display: "flex", gap: 4, alignItems: "center" }} className="hidden-mobile">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: 13.5,
                fontWeight: link.active ? 600 : 400,
                color: link.active ? "#194342" : "#1F2933",
                textDecoration: "none",
                padding: "6px 11px",
                borderRadius: 8,
                background: link.active ? "#DBE7C1" : "transparent",
                transition: "background 0.15s",
                fontFamily: "Vazirmatn, sans-serif",
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div style={{ display: "flex", gap: 10, alignItems: "center" }} className="hidden-mobile">
          <button style={{
            padding: "8px 18px",
            borderRadius: 9,
            border: "1.5px solid #194342",
            background: "transparent",
            color: "#194342",
            fontSize: 13,
            fontWeight: 600,
            cursor: "pointer",
            fontFamily: "Vazirmatn, sans-serif",
          }}>
            ورود به سامانه
          </button>
          <button style={{
            padding: "8px 18px",
            borderRadius: 9,
            border: "none",
            background: "#B86F5B",
            color: "#ffffff",
            fontSize: 13,
            fontWeight: 600,
            cursor: "pointer",
            fontFamily: "Vazirmatn, sans-serif",
          }}>
            پیش‌ثبت‌نام
          </button>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="show-mobile"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 6,
          }}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {menuOpen ? (
              <path d="M4 4l14 14M18 4L4 18" stroke="#194342" strokeWidth="2" strokeLinecap="round"/>
            ) : (
              <path d="M3 6h16M3 11h16M3 16h16" stroke="#194342" strokeWidth="2" strokeLinecap="round"/>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: "#ffffff",
          borderTop: "1px solid #DBE7C1",
          padding: "16px 24px",
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: 14,
                fontWeight: link.active ? 600 : 400,
                color: link.active ? "#194342" : "#1F2933",
                textDecoration: "none",
                padding: "10px 12px",
                borderRadius: 8,
                background: link.active ? "#DBE7C1" : "transparent",
                fontFamily: "Vazirmatn, sans-serif",
              }}
            >
              {link.label}
            </a>
          ))}
          <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
            <button style={{
              flex: 1,
              padding: "10px",
              borderRadius: 9,
              border: "1.5px solid #194342",
              background: "transparent",
              color: "#194342",
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "Vazirmatn, sans-serif",
            }}>
              ورود به سامانه
            </button>
            <button style={{
              flex: 1,
              padding: "10px",
              borderRadius: 9,
              border: "none",
              background: "#B86F5B",
              color: "#ffffff",
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "Vazirmatn, sans-serif",
            }}>
              پیش‌ثبت‌نام
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <div style={{
      background: "#194342",
      minHeight: 240,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Subtle decoration */}
      <div style={{
        position: "absolute",
        right: "-60px",
        top: "-60px",
        width: 220,
        height: 220,
        borderRadius: "50%",
        border: "1px solid rgba(219,231,193,0.15)",
      }} />
      <div style={{
        position: "absolute",
        right: "-30px",
        top: "-30px",
        width: 140,
        height: 140,
        borderRadius: "50%",
        border: "1px solid rgba(219,231,193,0.10)",
      }} />
      <div style={{
        position: "absolute",
        left: "-80px",
        bottom: "-80px",
        width: 260,
        height: 260,
        borderRadius: "50%",
        border: "1px solid rgba(219,231,193,0.10)",
      }} />

      <div style={{ textAlign: "center", zIndex: 1, padding: "40px 24px" }}>
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          background: "rgba(219,231,193,0.18)",
          border: "1px solid rgba(219,231,193,0.3)",
          borderRadius: 999,
          padding: "4px 14px",
          marginBottom: 18,
        }}>
          <span style={{ fontSize: 12, color: "#DBE7C1", fontWeight: 500 }}>شاهد حضرت خدیجه (س)</span>
        </div>
        <h1 style={{
          fontSize: "clamp(24px, 4vw, 38px)",
          fontWeight: 700,
          color: "#ffffff",
          margin: 0,
          marginBottom: 14,
          lineHeight: 1.4,
        }}>
          دوره‌های آموزشی
        </h1>
        <p style={{
          fontSize: "clamp(13px, 2vw, 15.5px)",
          color: "rgba(219,231,193,0.85)",
          margin: 0,
          maxWidth: 540,
          lineHeight: 1.8,
          fontWeight: 400,
        }}>
          دوره‌های آموزشی و مهارتی مدرسه را ببینید و بر اساس پایه و وضعیت ثبت‌نام، دوره مناسب خود را پیدا کنید.
        </p>
      </div>
    </div>
  );
}

const TABS: { id: FilterTab; label: string }[] = [
  { id: "all", label: "همه دوره‌ها" },
  { id: "active", label: "در حال ثبت‌نام" },
  { id: "upcoming", label: "دوره‌های آینده" },
];

export default function App() {
  const [activeFilter, setActiveFilter] = useState<FilterTab>("all");
  const [menuOpen, setMenuOpen] = useState(false);

  const filtered = COURSES.filter((c) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "active") return c.status === "active";
    return c.status === "upcoming";
  });

  return (
    <div style={{ minHeight: "100vh", background: "#FAF8F3" }}>
      <style>{`
        .hidden-mobile { display: flex; }
        .show-mobile { display: none; }
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        .course-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 1024px) {
          .course-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .course-grid { grid-template-columns: 1fr; }
        }
        .filter-scroll {
          display: flex;
          gap: 10px;
        }
        @media (max-width: 640px) {
          .filter-scroll {
            overflow-x: auto;
            padding-bottom: 4px;
          }
        }
      `}</style>

      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />

      {/* Filter section */}
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "40px 24px 0",
      }}>
        <div style={{ marginBottom: 18 }}>
          <span style={{ fontSize: 12.5, color: "#667085", fontWeight: 500 }}>دسته‌بندی دوره‌ها</span>
        </div>
        <div className="filter-scroll">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              style={{
                padding: "9px 22px",
                borderRadius: 10,
                border: activeFilter === tab.id ? "none" : "1.5px solid #DBE7C1",
                background: activeFilter === tab.id ? "#194342" : "#FAF8F3",
                color: activeFilter === tab.id ? "#ffffff" : "#194342",
                fontSize: 13.5,
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "Vazirmatn, sans-serif",
                whiteSpace: "nowrap",
                transition: "all 0.16s",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Courses grid */}
      <main style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "32px 24px 80px",
      }}>
        {filtered.length === 0 ? (
          <div style={{
            textAlign: "center",
            padding: "80px 24px",
            color: "#667085",
            fontSize: 15,
          }}>
            در حال حاضر دوره‌ای در این دسته وجود ندارد.
          </div>
        ) : (
          <div className="course-grid">
            {filtered.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer style={{
        background: "#194342",
        color: "#DBE7C1",
        padding: "48px 24px 24px",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 36,
            marginBottom: 36,
          }}>
            {/* School info */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <div style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background: "rgba(219,231,193,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                    <path d="M10 2L3 7l7 4 7-4-7-5z" fill="#DBE7C1"/>
                    <path d="M3 7v6l7 5 7-5V7" stroke="#DBE7C1" strokeWidth="1.2" fill="none"/>
                  </svg>
                </div>
                <span style={{ fontWeight: 700, fontSize: 14 }}>شاهد حضرت خدیجه (س)</span>
              </div>
              <p style={{ fontSize: 13, lineHeight: 2, color: "rgba(219,231,193,0.7)", margin: 0 }}>
                دبیرستان دخترانه شاهد حضرت خدیجه (س) با هدف پرورش استعدادهای علمی و مهارتی دانش‌آموزان.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 style={{ fontSize: 14, fontWeight: 700, marginBottom: 14, color: "#ffffff" }}>دسترسی سریع</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {["دوره‌ها", "برنامه‌های آموزشی", "گالری", "درباره‌ی ما"].map((item) => (
                  <a key={item} href="#" style={{
                    fontSize: 13,
                    color: "rgba(219,231,193,0.7)",
                    textDecoration: "none",
                    fontFamily: "Vazirmatn, sans-serif",
                  }}>
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 style={{ fontSize: 14, fontWeight: 700, marginBottom: 14, color: "#ffffff" }}>تماس با ما</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { icon: "📍", text: "تهران، خیابان آموزش، کوچه مدرسه" },
                  { icon: "📞", text: "۰۲۱-۱۲۳۴۵۶۷۸" },
                  { icon: "✉️", text: "info@khadijeh-school.ir" },
                ].map((item) => (
                  <div key={item.icon} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                    <span style={{ fontSize: 13 }}>{item.icon}</span>
                    <span style={{ fontSize: 12.5, color: "rgba(219,231,193,0.7)", lineHeight: 1.6 }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{
            borderTop: "1px solid rgba(219,231,193,0.2)",
            paddingTop: 20,
            textAlign: "center",
            fontSize: 12,
            color: "rgba(219,231,193,0.5)",
          }}>
            © ۱۴۰۳ دبیرستان شاهد حضرت خدیجه (س) — تمامی حقوق محفوظ است.
          </div>
        </div>
      </footer>
    </div>
  );
}
