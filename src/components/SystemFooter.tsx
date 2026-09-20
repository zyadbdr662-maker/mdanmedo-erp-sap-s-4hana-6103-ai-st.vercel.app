import React from "react";
import { BzmtLogo } from "./BzmtLogo";
import { Scale, ShieldCheck, Lock, RotateCcw, Cookie, FileText } from "lucide-react";

export type LegalDocTab = "TERMS" | "PRIVACY" | "DISCLAIMER" | "REFUND" | "COOKIES";

interface SystemFooterProps {
  className?: string;
  isCompact?: boolean;
  onOpenLegalDocuments?: (tab?: LegalDocTab) => void;
}

export const SystemFooter: React.FC<SystemFooterProps> = ({
  className = "",
  isCompact = false,
  onOpenLegalDocuments,
}) => {
  const currentYear = new Date().getFullYear();

  if (isCompact) {
    return (
      <footer
        id="system-main-footer"
        className={`w-full border-t border-slate-800/80 bg-[#0a2540] text-slate-400 select-none transition-colors py-2 px-4 text-[11px] ${className}`}
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 flex-wrap justify-center lg:justify-start font-medium">
            <BzmtLogo size="sm" variant="monogram" />
            <span className="text-slate-200 font-bold tracking-wide">جميع الحقوق محفوظة ©</span>
            <span className="text-[#d4af37] font-semibold font-sans tracking-wide">Bin Ziyad Group & MeDo Tech (BZMT)</span>
          </div>
          <div className="flex items-center gap-3 text-[10px] text-slate-500">
            <span className="flex items-center gap-1.5 text-emerald-400/90 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              IFRS / ZATCA
            </span>
            <span>|</span>
            <span>SAP/MeDO ERP Suite {currentYear}</span>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer
      id="system-main-footer"
      className={`w-full border-t border-[#d4af37]/20 bg-[#0a2540] text-white pt-12 pb-6 px-6 select-none transition-colors ${className}`}
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
        {/* Section 1: Brand & Contact */}
        <div className="flex flex-col items-center space-y-6">
          <div className="flex flex-col items-center gap-3 justify-center">
            <BzmtLogo size="md" variant="monogram" />
            <div className="text-center">
              <span className="text-2xl font-black block text-white leading-tight">MeDo ERP</span>
              <span className="text-sm text-slate-300 font-medium">ميدو تك للحلول البرمجية</span>
            </div>
          </div>
          <div className="space-y-4 text-[15px] w-full">
            <p className="flex items-center justify-center gap-3 group">
              <span className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-lg group-hover:border-[#d4af37]/50 transition-colors">📞</span>
              <span className="hover:text-[#d4af37] transition-colors tracking-wide" dir="ltr">+967 773 586 047</span>
            </p>
            <p className="flex items-center justify-center gap-3 group">
              <span className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-lg group-hover:border-[#d4af37]/50 transition-colors">📧</span>
              <span className="hover:text-[#d4af37] transition-colors tracking-wide">bdr.zyad@yandex.com</span>
            </p>
            <p className="flex items-center justify-center gap-3 group">
              <span className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-lg group-hover:border-[#d4af37]/50 transition-colors">🏠</span>
              <span className="hover:text-[#d4af37] transition-colors tracking-wide">اليمن - صنعاء / عدن</span>
            </p>
            <p className="flex items-center justify-center gap-3 group">
              <span className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-lg group-hover:border-[#d4af37]/50 transition-colors">🌐</span>
              <span className="hover:text-[#d4af37] transition-colors tracking-wide">www.medo-erp.com</span>
            </p>
          </div>
        </div>

        {/* Section 2: Quick Links */}
        <div className="flex flex-col items-center space-y-5">
          <h4 className="text-xl font-bold text-[#d4af37] pb-2 border-b border-[#d4af37]/20 inline-block">روابط سريعة</h4>
          <div className="flex flex-col gap-4 text-[15px] items-center">
            <button className="hover:text-[#d4af37] transition-colors flex items-center gap-2 text-center">🏠 الرئيسية</button>
            <button className="hover:text-[#d4af37] transition-colors flex items-center gap-2 text-center">🏢 عن الشركة</button>
            <button className="hover:text-[#d4af37] transition-colors flex items-center gap-2 text-center">📦 وحدات النظام</button>
            <button className="hover:text-[#d4af37] transition-colors flex items-center gap-2 text-center">📰 المدونة</button>
            <button className="hover:text-[#d4af37] transition-colors flex items-center gap-2 text-center">💰 الأسعار</button>
            <button className="hover:text-[#d4af37] transition-colors flex items-center gap-2 text-center">📞 اتصل بنا</button>
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent("open_patent_certificate"))}
              className="hover:text-[#d4af37] transition-colors flex items-center gap-2 text-center font-bold"
            >
              🏅 شهادة الابتكار
            </button>
          </div>
        </div>

        {/* Section 3: Legal Documents */}
        <div className="flex flex-col items-center space-y-5">
          <h4 className="text-xl font-bold text-[#d4af37] pb-2 border-b border-[#d4af37]/20 inline-block">الوثائق القانونية</h4>
          <div className="flex flex-col gap-4 text-[15px] items-center">
            <button onClick={() => onOpenLegalDocuments?.("TERMS")} className="hover:text-[#d4af37] transition-colors flex items-center gap-2 text-center">📜 شروط الاستخدام</button>
            <button onClick={() => onOpenLegalDocuments?.("PRIVACY")} className="hover:text-[#d4af37] transition-colors flex items-center gap-2 text-center">🔒 سياسة الخصوصية</button>
            <button onClick={() => onOpenLegalDocuments?.("DISCLAIMER")} className="hover:text-[#d4af37] transition-colors flex items-center gap-2 text-center">🛡️ إخلاء المسؤولية</button>
            <button onClick={() => onOpenLegalDocuments?.("REFUND")} className="hover:text-[#d4af37] transition-colors flex items-center gap-2 text-center">💰 سياسة الاسترداد</button>
            <button onClick={() => onOpenLegalDocuments?.("COOKIES")} className="hover:text-[#d4af37] transition-colors flex items-center gap-2 text-center">🍪 ملفات الارتباط</button>
          </div>
        </div>

        {/* Section 4: Security & Standards */}
        <div className="flex flex-col items-center space-y-5">
          <h4 className="text-xl font-bold text-[#d4af37] pb-2 border-b border-[#d4af37]/20 inline-block">المعايير والأمان</h4>
          <div className="space-y-4 w-full">
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-[#d4af37]/30 space-y-3 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
              <div className="flex items-center gap-2 justify-center text-[#d4af37] font-black text-sm uppercase tracking-wider">
                <Lock className="w-4 h-4 text-[#d4af37] fill-[#d4af37]/20" />
                <span>نظام مشفر بالكامل</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed font-medium">
                تشفير AES-256 GCM عسكري لكافة البيانات المالية والحساسة مع حماية Sovereign Cloud.
              </p>
            </div>
            <div className="flex flex-col gap-3 items-center">
              <div className="flex items-center gap-2 text-xs font-bold text-white bg-slate-900/50 p-2 rounded-xl border border-slate-800 justify-center w-full max-w-[240px]">
                <div className="w-6 h-6 bg-white rounded flex items-center justify-center p-0.5 shrink-0">
                  <img src="https://zatca.gov.sa/ar/About/LegalRequirements/Fatoora/PublishingImages/FatooraLogo.png" alt="ZATCA" className="w-full h-full object-contain" />
                </div>
                <span>متوافق مع هيئة الزكاة والجمارك (ZATCA)</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-300 justify-center">
                <Scale className="w-4 h-4 text-[#d4af37]" />
                <span>مطابق لمعايير IFRS المحاسبية</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-300 justify-center">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>الامتثال لـ ISO, GDPR, SOC2</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="max-w-7xl mx-auto mt-12 pt-10 border-t border-slate-800/80 flex flex-col items-center justify-center gap-10">
        {/* Social Icons - Centered */}
        <div className="flex items-center justify-center gap-[20px] text-2xl order-1">
          <span className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-900/50 border border-slate-800 hover:border-[#d4af37] hover:scale-110 hover:bg-[#d4af37]/10 transition-all cursor-pointer text-[24px] shadow-lg">📘</span>
          <span className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-900/50 border border-slate-800 hover:border-[#d4af37] hover:scale-110 hover:bg-[#d4af37]/10 transition-all cursor-pointer text-[24px] shadow-lg">💼</span>
          <span className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-900/50 border border-slate-800 hover:border-[#d4af37] hover:scale-110 hover:bg-[#d4af37]/10 transition-all cursor-pointer text-[24px] shadow-lg">𝕏</span>
          <span className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-900/50 border border-slate-800 hover:border-[#d4af37] hover:scale-110 hover:bg-[#d4af37]/10 transition-all cursor-pointer text-[24px] shadow-lg">🎥</span>
          <span className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-900/50 border border-slate-800 hover:border-[#d4af37] hover:scale-110 hover:bg-[#d4af37]/10 transition-all cursor-pointer text-[24px] shadow-lg">💬</span>
        </div>

        {/* Deployment & Version Metadata Block */}
        <div className="w-full max-w-4xl mx-auto p-4 rounded-2xl bg-slate-900/90 border border-[#d4af37]/30 text-right font-sans text-xs space-y-2 shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-800">
            <div className="flex items-center gap-2 text-[#d4af37] font-black text-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>ℹ️ معلومات الإصدار والنشر الرسمي المعتمد (Live Auto-Deploy)</span>
            </div>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/40 text-[11px] font-bold">
              ✅ حالة النشر: محدّث ومتزامن تلقائياً
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1 text-slate-300">
            <div>
              <span className="text-slate-400 block text-[10px]">رقم الإصدار:</span>
              <span className="font-mono font-bold text-white">v4.5.2026</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px]">تاريخ النشر المعتمد:</span>
              <span className="font-mono font-bold text-[#d4af37]">20/09/2026</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px]">رقم البناء (Build):</span>
              <span className="font-mono font-bold text-slate-200">BUILD-SAP-6103-REL-2026</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px]">دورة التحديث:</span>
              <span className="font-mono font-bold text-emerald-400">Vercel ⚡ Auto-Deploy</span>
            </div>
          </div>
          <div className="pt-2 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400 border-t border-slate-800/80">
            <span className="font-mono text-blue-300 break-all select-all font-semibold">
              🌐 الرابط الرسمي المعتمد: https://mdanmedo-erp-sap-s-4hana-6103-ai-st.vercel.app
            </span>
            <button
              onClick={() => {
                navigator.clipboard?.writeText("https://mdanmedo-erp-sap-s-4hana-6103-ai-st.vercel.app");
                alert("تم نسخ الرابط الرسمي المعتمد بنجاح!");
              }}
              className="px-2.5 py-1 bg-[#d4af37]/20 hover:bg-[#d4af37]/30 text-[#d4af37] border border-[#d4af37]/40 rounded-lg font-bold text-[11px] transition-all cursor-pointer"
            >
              📋 نسخ الرابط الرسمي
            </button>
          </div>
        </div>

        {/* Copyright & Logo - Centered Stack */}
        <div className="flex flex-col items-center gap-6 order-2 text-center">
          <BzmtLogo size="lg" variant="monogram" />
          <div className="space-y-2">
            <p className="text-[16px] text-white font-bold tracking-wide">© {currentYear} ميدو تك للحلول البرمجية - MeDo Tech</p>
            <p className="text-[14px] text-slate-400 font-medium">
              جميع الحقوق محفوظة - <span className="text-[#d4af37] font-bold">Bin Ziyad Group (BZG)</span>
            </p>
            <p className="text-[12px] text-slate-500 font-sans tracking-widest mt-2 uppercase">Advanced Cloud ERP Systems Architecture</p>
          </div>
        </div>
      </div>
    </footer>
  );
};


