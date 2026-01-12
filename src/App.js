import React, { useState, useEffect, useMemo } from 'react';

// --- 1. 基础图标组件 ---
const IconWrapper = ({ children, size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>{children}</svg>
);

const WalletIcon = (p) => <IconWrapper {...p}><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12h.01"/></IconWrapper>;
const CalendarIcon = (p) => <IconWrapper {...p}><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></IconWrapper>;
const CheckSquareIcon = (p) => <IconWrapper {...p}><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></IconWrapper>;
const UtensilsIcon = (p) => <IconWrapper {...p}><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></IconWrapper>;
const Trash2Icon = (p) => <IconWrapper {...p}><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></IconWrapper>;
const PlusIcon = (p) => <IconWrapper {...p}><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></IconWrapper>;
const ChevronLeftIcon = (p) => <IconWrapper {...p}><polyline points="15 18 9 12 15 6"/></IconWrapper>;
const ChevronRightIcon = (p) => <IconWrapper {...p}><polyline points="9 18 15 12 9 6"/></IconWrapper>;
const CoffeeIcon = (p) => <IconWrapper {...p}><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></IconWrapper>;
const SunIcon = (p) => <IconWrapper {...p}><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></IconWrapper>;
const MoonIcon = (p) => <IconWrapper {...p}><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></IconWrapper>;
const LayoutIcon = (p) => <IconWrapper {...p}><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></IconWrapper>;
const ReceiptIcon = (p) => <IconWrapper {...p}><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z"/><path d="M16 8h-6"/><path d="M16 12h-6"/><path d="M16 16h-6"/></IconWrapper>;
const TrendingUpIcon = (p) => <IconWrapper {...p}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></IconWrapper>;
const TrendingDownIcon = (p) => <IconWrapper {...p}><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/></IconWrapper>;
const HomeIcon = (p) => <IconWrapper {...p}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></IconWrapper>;
const PieChartIcon = (p) => <IconWrapper {...p}><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></IconWrapper>;
const ShoppingBagIcon = (p) => <IconWrapper {...p}><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></IconWrapper>;
const RefrigeratorIcon = (p) => <IconWrapper {...p}><path d="M5 2h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"/><line x1="5" y1="10" x2="19" y2="10"/><path d="M15 2v20"/></IconWrapper>;
const GiftIcon = (p) => <IconWrapper {...p}><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></IconWrapper>;
const ArrowRightIcon = (p) => <IconWrapper {...p}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></IconWrapper>;
const DownloadIcon = (p) => <IconWrapper {...p}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></IconWrapper>;
const EyeIcon = (p) => <IconWrapper {...p}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></IconWrapper>;
const EyeOffIcon = (p) => <IconWrapper {...p}><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></IconWrapper>;
const GlobeIcon = (p) => <IconWrapper {...p}><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></IconWrapper>;
const TargetIcon = (p) => <IconWrapper {...p}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></IconWrapper>;
const TrophyIcon = (p) => <IconWrapper {...p}><path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 4h10"/><path d="M17 4v3a5 5 0 0 1-5 5h0a5 5 0 0 1-5-5V4"/><path d="M5 9v2a2 2 0 0 0 2 2h0"/><path d="M19 11v-2a2 2 0 0 0-2-2h0"/></IconWrapper>;
const PenToolIcon = (p) => <IconWrapper {...p}><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></IconWrapper>;
const CameraIcon = (p) => <IconWrapper {...p}><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></IconWrapper>;
const ImageIcon = (p) => <IconWrapper {...p}><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></IconWrapper>;
const AlertCircleIcon = (p) => <IconWrapper {...p}><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></IconWrapper>;
const RefreshIcon = (p) => <IconWrapper {...p}><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></IconWrapper>;
const XIcon = (p) => <IconWrapper {...p}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></IconWrapper>;
const ArchiveRestoreIcon = (p) => <IconWrapper {...p}><rect width="20" height="20" x="2" y="2" rx="2"/><path d="M12 12v6"/><path d="m15 15-3 3-3-3"/><path d="M4 8h16"/><path d="M4 16h6"/></IconWrapper>;
const UploadCloudIcon = (p) => <IconWrapper {...p}><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M12 12v9"/><path d="m16 16-4-4-4 4"/></IconWrapper>;

const AppWrapper = ({ children }) => (
  <div className="flex justify-center min-h-screen bg-gray-100 font-sans">
    <div className="w-full max-w-[393px] bg-[#fdfcf8] min-h-screen shadow-2xl relative overflow-x-hidden">
      {children}
    </div>
  </div>
);

const Card = ({ children, className = "", title, icon: Icon, action, onClick }) => (
  <div onClick={onClick} className={`bg-[#fffbf0] rounded-2xl shadow-[2px_2px_0px_0px_rgba(234,224,200,1)] border border-[#efeadd] p-4 ${className} transition-all duration-300 ${onClick ? 'cursor-pointer active:scale-[0.98]' : ''}`}>
    {(title || Icon) && (
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#efeadd]/50 border-dashed">
        <div className="flex items-center gap-2 text-[#8c7b6d] font-bold text-sm md:text-base">
          {Icon && <Icon size={18} className="text-[#e6b422]" />}
          <h2>{title}</h2>
        </div>
        {action}
      </div>
    )}
    {children}
  </div>
);

const ImageModal = ({ src, onClose }) => {
  if (!src) return null;
  return (
    <div className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center p-4 animate-in fade-in duration-200" onClick={onClose}>
      <div className="relative max-w-full max-h-full">
        <img src={src} alt="Full view" className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl" />
        <button className="absolute -top-10 right-0 text-white p-2" onClick={onClose}><XIcon size={24}/></button>
      </div>
    </div>
  );
};

const RestoreModal = ({ isOpen, onClose, onRestore, onFileUpload, keys, t }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[999] bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-xl">
        <h3 className="text-lg font-bold text-[#6d5e50] mb-2 flex items-center gap-2"><ArchiveRestoreIcon className="text-[#e6b422]"/> {t.restoreTitle}</h3>
        <div className="mb-4">
            <label className="flex items-center justify-center w-full p-3 bg-[#fffbf0] border-2 border-dashed border-[#e6b422] rounded-xl text-sm text-[#e6b422] font-bold cursor-pointer hover:bg-[#fff9c4] transition-colors gap-2">
                <UploadCloudIcon size={18}/>
                <input type="file" accept=".json" className="hidden" onChange={onFileUpload} />
                {t.importFile}
            </label>
        </div>
        {keys.length > 0 && (
          <>
            <p className="text-xs text-[#8c7b6d] mb-2">{t.restoreDesc}</p>
            <div className="space-y-2 max-h-[200px] overflow-y-auto custom-scrollbar">
              {keys.map(key => (
                <button key={key} onClick={() => onRestore(key)} className="w-full p-3 bg-[#fdfcf8] border border-[#efeadd] rounded-xl text-left text-xs text-[#5c524b] hover:border-[#e6b422] active:bg-[#fffbf0] transition-colors truncate">
                  {key.replace('warmLifeApp_', '...')}
                </button>
              ))}
            </div>
          </>
        )}
        <button onClick={onClose} className="mt-4 w-full py-2 bg-gray-100 text-gray-500 rounded-xl text-sm font-bold hover:bg-gray-200">{t.cancel}</button>
      </div>
    </div>
  );
};

// --- 常量 ---
const DAILY_QUOTES = [
  "把钱花在刀刃上。", "好好吃饭，好好生活。", "今天的克制，是为了明天的自由。",
  "不积跬步，无以至千里。", "生活原本沉闷，但跑起来就有风。", "物尽其用，就是最大的惜福。",
  "每一笔支出，都是在为想要的生活投票。", "快乐不一定要很贵。"
];

const TRANSLATIONS = {
  zh: {
    appTitle: "生活账本", backHome: "返回", totalExpense: "年度支出 (预估)",
    totalBalance: "年度结余 (预估)", exchangeRate: "汇率 (1 RMB)", supplies: "生活补给",
    inventory: "冰箱", wishlist: "心愿", inventoryPlaceholder: "余粮...",
    wishlistPlaceholder: "想买...", qty: "剩?", clickToManage: "点击管理",
    fixedExp: "固定", income: "收入", dailyExp: "日常", monthly: "月",
    month: "月", weekView: "周视图", weekGoal: "本周目标", addGoal: "添加任务...",
    record: "记一笔", recordBtn: "记账", itemName: "项目名称", date: "日期", amount: "金额",
    mealPlan: "食谱", fixedMonthly: "固定收支", fixedType: "每月",
    addFixed: "添加固定项", expense: "支出", details: "明细", noDetails: "暂无记录",
    yearlyGoalsTitle: "年度目标", myGoals: "我的目标", addYearlyGoal: "立 Flag...",
    yearReview: "小结", reviewPlaceholder: "写点什么...",
    topPurchases: "高光消费 (Top 5)", topPurchasesSub: "钱花哪了", modeExpenditure: "支出模式",
    modeBalance: "收支模式", photoGallery: "年度回忆", photoGallerySub: "每月一张 (点击大图)",
    uploadPhoto: "上传", urgentMemo: "紧急待办", addUrgent: "加急事...", switchCurrency: "切换显示",
    actualBreakdown: "实际构成", weeklyTotal: "本周合计 (JPY)", breakdown: "构成",
    monthRate: "本月汇率 (1RMB=)", restoreData: "恢复数据", restoreTitle: "数据恢复中心", restoreDesc: "检测到本地有历史备份",
    cancel: "取消", restoreSuccess: "恢复成功！", importFile: "从文件导入 (.json)", importSuccess: "文件导入成功！"
  },
  jp: {
    appTitle: "生活家計簿", backHome: "戻る", totalExpense: "年間支出 (予想)",
    totalBalance: "年間収支 (予想)", exchangeRate: "レート(1RMB)", supplies: "生活用品",
    inventory: "冷蔵庫", wishlist: "心願", inventoryPlaceholder: "在庫...",
    wishlistPlaceholder: "欲しい...", qty: "残?", clickToManage: "管理する",
    fixedExp: "固定費", income: "収入", dailyExp: "生活費", monthly: "月",
    month: "月", weekView: "週間", weekGoal: "今週の目標", addGoal: "タスク...",
    record: "記帳", recordBtn: "保存", itemName: "項目名", date: "日付", amount: "金額",
    mealPlan: "献立", fixedMonthly: "固定収支", fixedType: "毎月",
    addFixed: "固定費追加", expense: "支出", details: "明細", noDetails: "記録なし",
    yearlyGoalsTitle: "年間目標", myGoals: "今年の目標", addYearlyGoal: "目標追加...",
    yearReview: "年間レビュー", reviewPlaceholder: "一言...",
    topPurchases: "高額出費", topPurchasesSub: "何買った?", modeExpenditure: "支出のみ",
    modeBalance: "収支管理", photoGallery: "年間写真", photoGallerySub: "毎月の記録",
    uploadPhoto: "写真", urgentMemo: "緊急メモ", addUrgent: "急用...", switchCurrency: "通貨切替",
    actualBreakdown: "実数内訳", weeklyTotal: "今週合計 (JPY)", breakdown: "内訳",
    monthRate: "今月レート", restoreData: "復元", restoreTitle: "データ復元", restoreDesc: "履歴データが見つかりました",
    cancel: "キャンセル", restoreSuccess: "復元完了！", importFile: "ファイルから復元 (.json)", importSuccess: "インポート成功！"
  },
  en: {
    appTitle: "Life Ledger", backHome: "Back", totalExpense: "Total Exp (Est.)",
    totalBalance: "Total Bal (Est.)", exchangeRate: "Rate(1RMB)", supplies: "Supplies",
    inventory: "Pantry", wishlist: "Wishlist", inventoryPlaceholder: "Add...",
    wishlistPlaceholder: "Item...", qty: "Qty", clickToManage: "Manage",
    fixedExp: "Fixed", income: "Income", dailyExp: "Daily", monthly: "Month",
    month: "Mon", weekView: "Week", weekGoal: "Goals", addGoal: "Task...",
    record: "Add", recordBtn: "Save", itemName: "Item", date: "Date", amount: "Amt",
    mealPlan: "Meals", fixedMonthly: "Monthly Fixed", fixedType: "Recurring",
    addFixed: "Add Fixed", expense: "Exp", details: "Details", noDetails: "Empty",
    yearlyGoalsTitle: "Yearly", myGoals: "Goals", addYearlyGoal: "Add...",
    yearReview: "Yearly Review", reviewPlaceholder: "Notes...",
    topPurchases: "Top 5", topPurchasesSub: "Spending", modeExpenditure: "Exp Only",
    modeBalance: "Balance", photoGallery: "Gallery", photoGallerySub: "Monthly pic",
    uploadPhoto: "Upload", urgentMemo: "Urgent", addUrgent: "Urgent...", switchCurrency: "Switch",
    actualBreakdown: "Actual Breakdown", weeklyTotal: "Weekly Total (JPY)", breakdown: "Breakdown",
    monthRate: "Month Rate", restoreData: "Restore", restoreTitle: "Data Recovery", restoreDesc: "Found legacy data",
    cancel: "Cancel", restoreSuccess: "Restored!", importFile: "Import from file (.json)", importSuccess: "Imported Successfully!"
  }
};

// --- 工具函数 ---
const getMonday = (d) => {
  d = new Date(d);
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1);
  const monday = new Date(d.setDate(diff));
  monday.setHours(0, 0, 0, 0);
  return monday;
};

const getWeekId = (date) => {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() + 4 - (d.getDay() || 7));
  const year = d.getFullYear();
  const weekNo = Math.ceil((((d - new Date(year, 0, 1)) / 86400000) + 1) / 7);
  return `${year}-w${weekNo}`;
};

const formatDateShort = (date) => `${date.getMonth() + 1}.${date.getDate()}`;
const formatDateISO = (date) => {
  const offset = date.getTimezoneOffset();
  date = new Date(date.getTime() - (offset*60*1000));
  return date.toISOString().split('T')[0];
};
const formatDateTiny = (isoString) => {
  if (!isoString) return "--.--";
  const d = new Date(isoString);
  const yy = d.getFullYear().toString().slice(-2);
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${yy}.${mm}.${dd}`;
};

const compressImage = (file) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      const img = new Image();
      img.src = e.target.result;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let w = img.width, h = img.height;
        if(w > 800) { h *= 800/w; w=800; }
        canvas.width = w; canvas.height = h;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, w, h);
        resolve(canvas.toDataURL('image/jpeg', 0.8));
      }
    };
  });
};

// --- 主程序 ---
export default function App() {
  const [view, setView] = useState('year'); 
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [currentDate, setCurrentDate] = useState(new Date()); 
  const [exchangeRate, setExchangeRate] = useState(20.5);
  const [monthlyRates, setMonthlyRates] = useState({}); 
  const [showBalance, setShowBalance] = useState(false);
  const [quote, setQuote] = useState("把钱花在刀刃上。");
  const [lang, setLang] = useState('zh');
  const [displayCurrency, setDisplayCurrency] = useState('JPY'); 
  const [recordDate, setRecordDate] = useState(formatDateISO(new Date()));
  const [previewImage, setPreviewImage] = useState(null); 
  const [restoreModalOpen, setRestoreModalOpen] = useState(false);
  const [foundLegacyKeys, setFoundLegacyKeys] = useState([]);

  // 固定支出分月存储 { '2025-0': [...] }
  const [fixedItemsByMonth, setFixedItemsByMonth] = useState({});

  const [allTodos, setAllTodos] = useState({}); 
  const [allMeals, setAllMeals] = useState({});
  const [transactions, setTransactions] = useState([{ id: 1, date: formatDateISO(new Date()), name: '超市采购', amount: 1949, currency: 'JPY' }]);
  const [inventory, setInventory] = useState([{ id: 1, name: '辛拉面', quantity: '3包' }]);
  const [wishlist, setWishlist] = useState([{ id: 1, name: 'Switch', price: '6500', note: '蹲打折' }]);
  const [yearlyGoals, setYearlyGoals] = useState([{id: 1, text: '坚持记账', completed: false}]);
  const [yearlyReview, setYearlyReview] = useState("");
  const [monthlyPhotos, setMonthlyPhotos] = useState({});
  const [urgentTodos, setUrgentTodos] = useState([{ id: 1, text: '交学费', completed: false }]);
  const [goalsByYear, setGoalsByYear] = useState({ [new Date().getFullYear()]: [{id: 1, text: '坚持记账', completed: false}] });

  const t = TRANSLATIONS[lang]; 
  const STORAGE_KEY = 'warmLifeApp_MASTER_DB_V2'; // 保持 Key 不变以保留数据
  const LEGACY_KEYS = [
    'warmLifeApp_MASTER_DB_FINAL',
    'warmLifeApp_MASTER_DB',
    'warmLifeApp_v110_auto_year_final',
    'warmLifeApp_v105_jump_fix' // Add previous key if needed
  ];

  // 默认固定支出模板 (包含 AppleCare, iCloud 等)
  const defaultFixedTemplate = [
    { id: 1, name: '房租', amount: 76910, currency: 'JPY', type: 'expense' },
    { id: 2, name: '话费', amount: 2732, currency: 'JPY', type: 'expense' },
    { id: 3, name: '电费', amount: 0, currency: 'JPY', type: 'expense' },
    { id: 4, name: '煤气费', amount: 0, currency: 'JPY', type: 'expense' },
    { id: 5, name: '交通费', amount: 0, currency: 'JPY', type: 'expense' },
    { id: 6, name: '医保', amount: 0, currency: 'JPY', type: 'expense' },
    { id: 7, name: 'AppleCare+', amount: 1740, currency: 'JPY', type: 'expense' },
    { id: 8, name: 'iCloud', amount: 450, currency: 'JPY', type: 'expense' },
    { id: 9, name: '兼职收入', amount: 0, currency: 'JPY', type: 'income' }
  ];

  useEffect(() => {
    try {
      let savedData = localStorage.getItem(STORAGE_KEY);
      const foundKeys = LEGACY_KEYS.filter(k => localStorage.getItem(k));
      setFoundLegacyKeys(foundKeys);

      if (!savedData && foundKeys.length > 0) {
         savedData = localStorage.getItem(foundKeys[0]);
      }

      if (savedData) {
        const parsed = JSON.parse(savedData);
        // 数据迁移逻辑
        if (parsed.fixedItems && Array.isArray(parsed.fixedItems)) {
            const migratedFixed = {};
            for (let i = 0; i < 12; i++) {
                migratedFixed[`${new Date().getFullYear()}-${i}`] = parsed.fixedItems;
            }
            setFixedItemsByMonth(migratedFixed);
        } else if (parsed.fixedItemsByMonth) {
            setFixedItemsByMonth(parsed.fixedItemsByMonth);
        }

        if(parsed.allTodos) setAllTodos(parsed.allTodos);
        if(parsed.allMeals) setAllMeals(parsed.allMeals);
        if(parsed.transactions) setTransactions(parsed.transactions);
        if(parsed.exchangeRate) setExchangeRate(parsed.exchangeRate);
        if(parsed.monthlyRates) setMonthlyRates(parsed.monthlyRates);
        if(parsed.inventory) setInventory(parsed.inventory);
        if(parsed.wishlist) setWishlist(parsed.wishlist);
        if(parsed.showBalance !== undefined) setShowBalance(parsed.showBalance);
        if(parsed.lang) setLang(parsed.lang);
        if(parsed.goalsByYear) setGoalsByYear(parsed.goalsByYear);
        else if(parsed.yearlyGoals) setGoalsByYear({ [new Date().getFullYear()]: parsed.yearlyGoals }); 
        if(parsed.yearlyReview) setYearlyReview(parsed.yearlyReview);
        if(parsed.monthlyPhotos) setMonthlyPhotos(parsed.monthlyPhotos);
        if(parsed.urgentTodos) setUrgentTodos(parsed.urgentTodos);
      }
      setQuote(DAILY_QUOTES[Math.floor(Math.random() * DAILY_QUOTES.length)]);
    } catch (e) { console.error("Init error", e); }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ fixedItemsByMonth, allTodos, allMeals, transactions, exchangeRate, monthlyRates, inventory, wishlist, showBalance, lang, goalsByYear, yearlyReview, monthlyPhotos, urgentTodos }));
  }, [fixedItemsByMonth, allTodos, allMeals, transactions, exchangeRate, monthlyRates, inventory, wishlist, showBalance, lang, goalsByYear, yearlyReview, monthlyPhotos, urgentTodos]);

  const handleManualRestore = (key) => {
    try {
      const savedData = localStorage.getItem(key);
      if (savedData) {
        const parsed = JSON.parse(savedData);
        if (parsed.fixedItems && Array.isArray(parsed.fixedItems)) {
            const migratedFixed = {};
            for (let i = 0; i < 12; i++) migratedFixed[`${new Date().getFullYear()}-${i}`] = parsed.fixedItems;
            setFixedItemsByMonth(migratedFixed);
        } else if (parsed.fixedItemsByMonth) {
            setFixedItemsByMonth(parsed.fixedItemsByMonth);
        }
        if(parsed.transactions) setTransactions(parsed.transactions);
        if(parsed.allTodos) setAllTodos(parsed.allTodos);
        if(parsed.inventory) setInventory(parsed.inventory);
        if(parsed.wishlist) setWishlist(parsed.wishlist);
        if(parsed.urgentTodos) setUrgentTodos(parsed.urgentTodos);
        if(parsed.monthlyPhotos) setMonthlyPhotos(parsed.monthlyPhotos);
        alert(t.restoreSuccess);
        setRestoreModalOpen(false);
      }
    } catch (e) { alert("Error"); }
  };

  const handleFileImport = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target.result);
        if (parsed.fixedItems || parsed.transactions || parsed.fixedItemsByMonth) {
           if(window.confirm("Sure?")) {
              if (parsed.fixedItems && Array.isArray(parsed.fixedItems)) {
                  const migratedFixed = {};
                  for (let i = 0; i < 12; i++) migratedFixed[`${new Date().getFullYear()}-${i}`] = parsed.fixedItems;
                  setFixedItemsByMonth(migratedFixed);
              } else if (parsed.fixedItemsByMonth) {
                  setFixedItemsByMonth(parsed.fixedItemsByMonth);
              }
              if(parsed.transactions) setTransactions(parsed.transactions);
              if(parsed.allTodos) setAllTodos(parsed.allTodos);
              if(parsed.allMeals) setAllMeals(parsed.allMeals);
              if(parsed.exchangeRate) setExchangeRate(parsed.exchangeRate);
              if(parsed.inventory) setInventory(parsed.inventory);
              if(parsed.wishlist) setWishlist(parsed.wishlist);
              if(parsed.urgentTodos) setUrgentTodos(parsed.urgentTodos);
              if(parsed.monthlyPhotos) setMonthlyPhotos(parsed.monthlyPhotos);
              if(parsed.goalsByYear) setGoalsByYear(parsed.goalsByYear);
              localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
              alert(t.importSuccess);
              setRestoreModalOpen(false);
           }
        } else { alert("Invalid file"); }
      } catch (err) { alert("Error"); }
    };
    reader.readAsText(file);
  };

  const getRateForMonth = (year, monthIndex) => {
    const key = `${year}-${monthIndex}`;
    return monthlyRates[key] !== undefined ? monthlyRates[key] : exchangeRate;
  };

  const getFixedItemsForMonth = (year, monthIndex) => {
      const key = `${year}-${monthIndex}`;
      return fixedItemsByMonth[key] || defaultFixedTemplate;
  };
  const updateFixedItemForMonth = (year, monthIndex, itemId, field, value) => {
      const key = `${year}-${monthIndex}`;
      const currentList = [...(fixedItemsByMonth[key] || defaultFixedTemplate)];
      const updatedList = currentList.map(item => item.id === itemId ? { ...item, [field]: value } : item);
      setFixedItemsByMonth({ ...fixedItemsByMonth, [key]: updatedList });
  };
  const addFixedItemForMonth = (year, monthIndex, newItem) => {
      const key = `${year}-${monthIndex}`;
      const currentList = [...(fixedItemsByMonth[key] || defaultFixedTemplate)];
      setFixedItemsByMonth({ ...fixedItemsByMonth, [key]: [...currentList, newItem] });
  };
  const deleteFixedItemForMonth = (year, monthIndex, itemId) => {
      const key = `${year}-${monthIndex}`;
      const currentList = [...(fixedItemsByMonth[key] || defaultFixedTemplate)];
      setFixedItemsByMonth({ ...fixedItemsByMonth, [key]: currentList.filter(i => i.id !== itemId) });
  };

  const toJPY = (amount, currency, rate) => { 
    const val = parseFloat(amount); 
    return isNaN(val) ? 0 : (currency === 'RMB' ? val * rate : val); 
  };
  
  const formatMoney = (amountInJPY) => {
    const safe = Math.abs(isNaN(amountInJPY) ? 0 : amountInJPY);
    if (displayCurrency === 'JPY') return `¥${Math.round(safe).toLocaleString()}`;
    return `¥${Math.round(safe / exchangeRate).toLocaleString()} RMB`;
  };
  
  const formatMoneySimple = (val) => `¥${Math.round(Math.abs(isNaN(val)?0:val)).toLocaleString()}`;

  const currentWeekStart = getMonday(currentDate);
  const currentWeekEnd = new Date(currentWeekStart);
  currentWeekEnd.setDate(currentWeekEnd.getDate() + 6);
  const currentWeekId = getWeekId(currentWeekStart);
  const currentTodos = allTodos[currentWeekId] || [];
  const currentMeals = allMeals[currentWeekId] || { Mon: {b:'',l:'',d:''}, Tue: {b:'',l:'',d:''}, Wed: {b:'',l:'',d:''}, Thu: {b:'',l:'',d:''}, Fri: {b:'',l:'',d:''}, Sat: {b:'',l:'',d:''}, Sun: {b:'',l:'',d:''} };
  const currentTransactions = (transactions || []).filter(t => {
    const tDate = new Date(t.date);
    return tDate >= currentWeekStart && tDate <= new Date(currentWeekEnd.getTime() + 86400000 - 1);
  }).sort((a, b) => new Date(b.date) - new Date(a.date));

  // Stats
  const weekStats = useMemo(() => {
    let jpyTotal = 0, rmbTotal = 0;
    currentTransactions.forEach(t => {
      const amt = parseFloat(t.amount) || 0;
      if (t.currency === 'JPY') jpyTotal += amt; else rmbTotal += amt;
    });
    const thisMonthRate = getRateForMonth(currentDate.getFullYear(), currentDate.getMonth());
    const currentFixedItems = getFixedItemsForMonth(currentDate.getFullYear(), currentDate.getMonth());
    const fixedExpense = currentFixedItems.filter(i => i.type === 'expense').reduce((sum, i) => sum + toJPY(i.amount, i.currency, thisMonthRate), 0);
    const fixedIncome = currentFixedItems.filter(i => i.type === 'income').reduce((sum, i) => sum + toJPY(i.amount, i.currency, thisMonthRate), 0);
    const weeklyDailyTotalJPY = jpyTotal + (rmbTotal * thisMonthRate);
    return { fixedExpense, fixedIncome, weeklyDailyTotalJPY, jpyTotal, rmbTotal, thisMonthRate };
  }, [fixedItemsByMonth, currentTransactions, monthlyRates, exchangeRate, currentDate]);

  const getMonthStats = (year, monthIndex) => {
    const rate = getRateForMonth(year, monthIndex);
    const items = getFixedItemsForMonth(year, monthIndex);
    const fixedExpense = items.filter(i => i.type === 'expense').reduce((sum, i) => sum + toJPY(i.amount, i.currency, rate), 0);
    const fixedIncome = items.filter(i => i.type === 'income').reduce((sum, i) => sum + toJPY(i.amount, i.currency, rate), 0);
    const monthlyDaily = (transactions || []).filter(t => {
      const d = new Date(t.date);
      return d.getFullYear() === year && d.getMonth() === monthIndex;
    }).reduce((sum, i) => sum + toJPY(i.amount, i.currency, rate), 0);
    return { fixedExpense, fixedIncome, monthlyDaily, totalExpense: fixedExpense + monthlyDaily, balance: fixedIncome - (fixedExpense + monthlyDaily) };
  };

  const annualStats = useMemo(() => {
    let expJPY = 0, expRMB = 0, incJPY = 0, incRMB = 0;
    let totalExpConverted = 0, totalIncConverted = 0;
    Array.from({length: 12}).forEach((_, i) => {
       const stats = getMonthStats(selectedYear, i);
       totalExpConverted += stats.totalExpense;
       totalIncConverted += stats.fixedIncome;
       const items = getFixedItemsForMonth(selectedYear, i);
       items.forEach(item => {
           const amount = parseFloat(item.amount) || 0;
           if(item.type === 'expense') {
               if(item.currency === 'JPY') expJPY += amount; else expRMB += amount;
           } else {
               if(item.currency === 'JPY') incJPY += amount; else incRMB += amount;
           }
       });
    });
    (transactions || []).filter(t => new Date(t.date).getFullYear() === selectedYear).forEach(t => {
      const amount = parseFloat(t.amount) || 0;
      if (t.currency === 'JPY') expJPY += amount; else expRMB += amount;
    });
    return { expJPY, expRMB, incJPY, incRMB, totalExpConverted, totalBalConverted: totalIncConverted - totalExpConverted };
  }, [selectedYear, fixedItemsByMonth, transactions, monthlyRates, exchangeRate]);

  const topPurchases = useMemo(() => {
    return [...(transactions || [])].filter(t => new Date(t.date).getFullYear() === selectedYear).sort((a, b) => toJPY(b.amount, b.currency, exchangeRate) - toJPY(a.amount, a.currency, exchangeRate)).slice(0, 5);
  }, [transactions, selectedYear, exchangeRate]);

  const currentYearGoals = useMemo(() => goalsByYear[selectedYear] || [], [goalsByYear, selectedYear]);
  const activeYearGoals = currentYearGoals.filter(g => !g.completed);
  const completedYearGoals = currentYearGoals.filter(g => g.completed);
  const activeUrgentTodos = urgentTodos.filter(t => !t.completed);
  const completedUrgentTodos = urgentTodos.filter(t => t.completed);

  // Actions
  const changeWeek = (offset) => { const d = new Date(currentDate); d.setDate(d.getDate() + offset * 7); setCurrentDate(d); };
  const handleMonthClick = (idx) => { const today = new Date(); if (today.getFullYear() === selectedYear && today.getMonth() === idx) setCurrentDate(today); else setCurrentDate(new Date(selectedYear, idx, 1)); setView('week'); };
  const handleAddTodo = (e) => { if(e.key === 'Enter' && e.target.value.trim()) { setAllTodos({...allTodos, [currentWeekId]: [...currentTodos, { id: Date.now(), text: e.target.value, completed: false }]}); e.target.value = ''; } };
  const toggleTodo = (id) => setAllTodos({...allTodos, [currentWeekId]: currentTodos.map(t=>t.id===id?{...t,completed:!t.completed}:t)});
  const deleteTodo = (id) => setAllTodos({...allTodos, [currentWeekId]: currentTodos.filter(t=>t.id!==id)});
  const updateMeal = (d, type, v) => setAllMeals({...allMeals, [currentWeekId]: {...currentMeals, [d]: {...currentMeals[d], [type]: v}}});
  const addTransaction = (e) => { e.preventDefault(); const fd = new FormData(e.target); const dateVal = recordDate || formatDateISO(new Date()); setTransactions([{id: Date.now(), date: dateVal, name: fd.get('name'), amount: parseFloat(fd.get('amount')), currency: fd.get('currency')}, ...transactions]); e.target.reset(); setRecordDate(dateVal); };
  const deleteTransaction = (id) => setTransactions(transactions.filter(t => t.id !== id));
  const addFixedItem = (e) => { e.preventDefault(); const fd = new FormData(e.target); const newItem = {id: Date.now(), name: fd.get('name'), amount: parseFloat(fd.get('amount')), currency: fd.get('currency'), type: fd.get('type')}; addFixedItemForMonth(currentDate.getFullYear(), currentDate.getMonth(), newItem); e.target.reset(); };
  const addInventory = (e) => { if(e.key==='Enter'){ setInventory([...inventory, {id: Date.now(), name: e.target.value, quantity: ''}]); e.target.value=''; } };
  const updateInventoryQty = (id, val) => setInventory(inventory.map(i => i.id === id ? { ...i, quantity: val } : i));
  const deleteInventory = (id) => setInventory(inventory.filter(i => i.id !== id));
  const addWishlist = (e) => { e.preventDefault(); const fd = new FormData(e.target); setWishlist([...wishlist, {id: Date.now(), name: fd.get('name'), price: fd.get('price'), note: ''}]); e.target.reset(); };
  const deleteWishlist = (id) => setWishlist(wishlist.filter(w => w.id !== id));
  const addYGoal = (e) => { if(e.key==='Enter' && e.target.value.trim()){ const newGoal = {id: Date.now(), text: e.target.value, completed: false}; setGoalsByYear(prev => ({ ...prev, [selectedYear]: [...(prev[selectedYear] || []), newGoal] })); e.target.value=''; } };
  const toggleYGoal = (id) => { setGoalsByYear(prev => ({ ...prev, [selectedYear]: prev[selectedYear].map(g => g.id === id ? { ...g, completed: !g.completed } : g) })); };
  const deleteYGoal = (id) => { setGoalsByYear(prev => ({ ...prev, [selectedYear]: prev[selectedYear].filter(g => g.id !== id) })); };
  const handlePhotoUpload = async (e, monthIndex) => { const file = e.target.files[0]; if(file) { try { const url = await compressImage(file); setMonthlyPhotos(prev => ({...prev, [`${selectedYear}-${monthIndex}`]: url})); } catch(err) { alert("Error"); } } };
  const toggleLang = () => { if (lang === 'zh') setLang('jp'); else if (lang === 'jp') setLang('en'); else setLang('zh'); };
  const addUrgentTodo = (e) => { if(e.key==='Enter' && e.target.value.trim()){ setUrgentTodos([...urgentTodos, {id: Date.now(), text: e.target.value, completed: false}]); e.target.value=''; }};
  const toggleUrgent = (id) => setUrgentTodos(urgentTodos.map(t=>t.id===id?{...t,completed:!t.completed}:t));
  const deleteUrgent = (id) => setUrgentTodos(urgentTodos.filter(t=>t.id!==id));
  const setRateForMonth = (val) => { const key = `${currentDate.getFullYear()}-${currentDate.getMonth()}`; setMonthlyRates(prev => ({ ...prev, [key]: parseFloat(val) })); };
  const exportData = () => { const dataStr = localStorage.getItem(STORAGE_KEY); const blob = new Blob([dataStr], { type: "application/json" }); const url = URL.createObjectURL(blob); const link = document.createElement('a'); link.href = url; link.download = `Backup_${formatDateISO(new Date())}.json`; document.body.appendChild(link); link.click(); document.body.removeChild(link); };

  // --- Views ---

  // 1. Supplies (生活补给)
  if (view === 'supplies') return (
    <AppWrapper>
       <div className="bg-[#f2e6ce] sticky top-0 z-50 shadow-sm border-b border-[#e6dcc0] py-3 px-4">
         <button onClick={() => setView('year')} className="flex items-center gap-2 text-[#8c7b6d] font-bold text-sm hover:text-[#5c524b]"><HomeIcon size={16}/> {t.backHome}</button>
       </div>
       <div className="px-4 mt-6 space-y-6 pb-20">
          <div className="mb-4"><h1 className="text-2xl font-black text-[#6d5e50] flex items-center gap-3"><span className="text-[#e6b422]"><ShoppingBagIcon size={24}/></span> {t.supplies}</h1></div>
          <div className="flex flex-col gap-6">
             <Card title={t.inventory} icon={RefrigeratorIcon} className="bg-white">
                <div className="space-y-3">
                   {inventory.map(item => (
                     <div key={item.id} className="flex items-center gap-2 p-3 bg-[#fdfcf8] rounded-xl border border-[#f7f3e8] group">
                        <input value={item.name} readOnly className="flex-1 text-sm bg-transparent outline-none font-medium" />
                        <input value={item.quantity} onChange={(e) => updateInventoryQty(item.id, e.target.value)} placeholder={t.qty} className="w-16 text-xs text-right text-[#b09f8d] bg-transparent outline-none placeholder-[#dccab0] focus:text-[#e6b422]" />
                        <button onClick={() => deleteInventory(item.id)} className="text-[#dccab0] hover:text-[#e07a5f]"><Trash2Icon size={16}/></button>
                     </div>
                   ))}
                   <div className="relative mt-2"><div className="absolute left-3 top-3 text-[#dccab0]"><PlusIcon size={16}/></div><input onKeyDown={addInventory} placeholder={t.inventoryPlaceholder} className="w-full pl-9 pr-4 py-2.5 bg-[#fdfcf8] border-2 border-dashed border-[#dccab0] rounded-xl text-sm focus:border-[#e6b422] outline-none transition-all focus:bg-white" /></div>
                </div>
             </Card>
             <Card title={t.wishlist} icon={GiftIcon} className="bg-white">
                <div className="space-y-3">
                   {wishlist.map(item => (
                     <div key={item.id} className="flex justify-between items-center p-3 bg-[#fdfcf8] rounded-xl border border-[#f7f3e8] group">
                        <div className="flex flex-col"><span className="text-sm font-medium">{item.name}</span><span className="text-xs text-[#e6b422] font-mono font-bold mt-0.5">{item.price}</span></div>
                        <button onClick={() => deleteWishlist(item.id)} className="text-[#dccab0] hover:text-[#e07a5f]"><Trash2Icon size={16}/></button>
                     </div>
                   ))}
                   <form onSubmit={addWishlist} className="flex gap-2 mt-2">
                      <input name="name" placeholder={t.wishlistPlaceholder} required className="flex-1 p-2 bg-[#fdfcf8] border-2 border-dashed border-[#dccab0] rounded-xl text-sm outline-none focus:border-[#e6b422] focus:bg-white" />
                      <input name="price" type="text" placeholder="¥..." className="w-20 p-2 bg-[#fdfcf8] border-2 border-dashed border-[#dccab0] rounded-xl text-sm outline-none focus:border-[#e6b422] focus:bg-white" />
                      <button className="bg-[#e6b422] text-white rounded-xl w-10 flex items-center justify-center hover:bg-[#d4a51e] shadow-sm"><PlusIcon size={18}/></button>
                   </form>
                </div>
             </Card>
          </div>
       </div>
    </AppWrapper>
  );

  // 2. Goals
  if (view === 'goals') return (
    <AppWrapper>
      <div className="bg-[#f2e6ce] sticky top-0 z-50 shadow-sm border-b border-[#e6dcc0] py-3 px-4">
         <div className="max-w-3xl mx-auto">
           <button onClick={() => setView('year')} className="flex items-center gap-2 text-[#8c7b6d] font-bold text-sm hover:text-[#5c524b]"><HomeIcon size={16}/> {t.backHome}</button>
         </div>
       </div>
       <div className="px-4 mt-6 space-y-6 pb-20">
          <div className="mb-4"><h1 className="text-2xl font-black text-[#6d5e50] flex items-center gap-3"><span className="text-[#e6b422]"><TargetIcon size={24}/></span> {t.yearlyGoalsTitle}</h1></div>
          <div className="flex flex-col gap-6">
             <Card title={t.myGoals} icon={CheckSquareIcon} className="bg-white">
                <div className="space-y-3">
                   {activeYearGoals.map(g => (
                     <div key={g.id} className="flex items-start gap-3 p-2 bg-[#fdfcf8] rounded-xl border border-[#f7f3e8]">
                        <input type="checkbox" checked={g.completed} onChange={() => toggleYGoal(g.id)} className="mt-1 accent-[#e6b422]" />
                        <span className={`flex-1 text-sm text-[#5c524b]`}>{g.text}</span>
                        <button onClick={()=>deleteYGoal(g.id)} className="text-[#dccab0] hover:text-[#e07a5f]"><Trash2Icon size={16}/></button>
                     </div>
                   ))}
                   <div className="relative mt-2"><div className="absolute left-3 top-3 text-[#dccab0]"><PlusIcon size={16}/></div><input onKeyDown={addYGoal} placeholder={t.addYearlyGoal} className="w-full pl-9 pr-4 py-2.5 bg-[#fdfcf8] border-2 border-dashed border-[#dccab0] rounded-xl text-sm focus:outline-none focus:border-[#e6b422]" /></div>
                   {completedYearGoals.length > 0 && (
                      <details className="mt-4 group">
                         <summary className="flex items-center gap-2 text-xs text-[#b09f8d] cursor-pointer select-none">
                            <ChevronRightIcon size={12} className="group-open:rotate-90 transition-transform"/>
                            {t.completedGoals} ({completedYearGoals.length})
                         </summary>
                         <div className="mt-2 space-y-2 pl-4 border-l border-dashed border-[#efeadd]">
                            {completedYearGoals.map(g => (
                              <div key={g.id} className="flex items-start gap-2 text-xs text-[#b09f8d]">
                                 <input type="checkbox" checked={g.completed} onChange={() => toggleYGoal(g.id)} className="mt-0.5 accent-[#e6b422]" />
                                 <span className="flex-1 line-through">{g.text}</span>
                                 <button onClick={()=>deleteYGoal(g.id)} className="text-[#dccab0] hover:text-[#e07a5f]"><Trash2Icon size={12}/></button>
                              </div>
                            ))}
                         </div>
                      </details>
                   )}
                </div>
             </Card>
             <Card title={t.photoGallery} icon={CameraIcon} className="bg-white">
                <div className="text-xs text-[#b09f8d] mb-4">{t.photoGallerySub}</div>
                <div className="grid grid-cols-3 gap-2">
                  {Array.from({ length: 12 }).map((_, i) => {
                    const photoKey = `${selectedYear}-${i}`;
                    const photo = monthlyPhotos[photoKey];
                    return (
                      <div 
                        key={i} 
                        onClick={() => photo && setPreviewImage(photo)}
                        className={`aspect-square bg-[#fdfcf8] rounded-lg border border-[#f7f3e8] relative overflow-hidden flex items-center justify-center group ${photo ? 'cursor-pointer' : ''}`}
                      >
                        {photo ? <img src={photo} className="w-full h-full object-cover" /> : <span className="text-xs text-[#dccab0] font-bold">{i+1}</span>}
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity pointer-events-none">
                           <span className="text-white text-xs">{i+1}{t.month}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
             </Card>
             <div className="flex flex-col gap-6">
               <Card title={t.yearReview} icon={PenToolIcon} className="bg-white">
                  <textarea value={yearlyReview} onChange={(e)=>setYearlyReview(e.target.value)} placeholder={t.reviewPlaceholder} className="w-full h-32 p-3 bg-[#fdfcf8] border border-[#efeadd] rounded-xl text-sm focus:outline-none focus:border-[#e6b422] resize-none" />
               </Card>
               <Card title={t.topPurchases} icon={TrophyIcon} className="bg-white">
                  <div className="text-xs text-[#b09f8d] mb-2">{t.topPurchasesSub}</div>
                  <div className="space-y-2">
                     {topPurchases.map(item => (
                       <div key={item.id} className="flex justify-between items-center text-sm p-2 bg-[#fdfcf8] rounded-lg border border-[#f7f3e8]">
                          <span className="truncate flex-1 pr-2">{item.name}</span>
                          <span className="font-mono text-[#e07a5f] font-bold">{formatMoney(toJPY(item.amount, item.currency))}</span>
                       </div>
                     ))}
                  </div>
               </Card>
             </div>
          </div>
       </div>
    </AppWrapper>
  );

  // 3. Year View (Home)
  if (view === 'year') return (
    <AppWrapper>
      <div className="bg-[#f2e6ce] sticky top-0 z-50 shadow-sm border-b border-[#e6dcc0] py-4 px-4">
        <div className="flex flex-col gap-4">
           <div className="flex justify-between items-start">
             <div>
               <h1 className="text-xl font-black text-[#6d5e50] flex items-center gap-2"><span className="text-[#e6b422]"><WalletIcon size={22}/></span> {t.appTitle}</h1>
               <div className="text-[#8c7b6d] text-xs mt-1 ml-1 opacity-80 max-w-[180px] leading-tight">{quote}</div>
             </div>
             <div className="flex items-center gap-2">
               <button onClick={toggleLang} className="bg-white/80 p-2 rounded-full text-[#8c7b6d] border border-[#efeadd] hover:text-[#e6b422] font-bold text-xs"><GlobeIcon size={18}/></button>
               <button onClick={() => setView('goals')} className="bg-white/80 p-2 rounded-full text-[#8c7b6d] border border-[#efeadd] hover:text-[#e6b422]"><TargetIcon size={18}/></button>
               <button onClick={() => setShowBalance(!showBalance)} className="bg-white/80 p-2 rounded-full text-[#8c7b6d] border border-[#efeadd] hover:text-[#e6b422]">{showBalance ? <EyeIcon size={18}/> : <EyeOffIcon size={18}/>}</button>
               <button onClick={exportData} className="bg-white/80 p-2 rounded-full text-[#8c7b6d] border border-[#efeadd] hover:text-[#e6b422]"><DownloadIcon size={18}/></button>
               <button onClick={() => setRestoreModalOpen(true)} className="bg-white/80 p-2 rounded-full text-[#e07a5f] border border-[#efeadd] hover:bg-[#fffbf0]"><ArchiveRestoreIcon size={18}/></button>
             </div>
           </div>
           
           <div className="flex items-center justify-between gap-4 bg-white/50 px-4 py-2 rounded-full border border-[#efeadd]">
              <button onClick={() => setSelectedYear(selectedYear - 1)} className="hover:text-[#e6b422]"><ChevronLeftIcon size={20}/></button>
              <span className="text-lg font-bold font-mono text-[#5c524b]">{selectedYear}</span>
              <button onClick={() => setSelectedYear(selectedYear + 1)} className="hover:text-[#e6b422]"><ChevronRightIcon size={20}/></button>
           </div>
        </div>
      </div>
      
      <div className="px-4 mt-4 pb-20">
         
         {/* 1. 总支出卡片 (Top) */}
         <div className="flex flex-col gap-4 mb-4">
            <div className="bg-[#4a403a] text-[#f2e6ce] p-5 rounded-3xl shadow-lg flex flex-col justify-between min-h-[140px] relative overflow-hidden">
               <div>
                 <div className="flex items-center gap-2 text-xs opacity-80 mb-2"><PieChartIcon size={14}/> {showBalance ? t.totalBalance : t.totalExpense}</div>
                 <div className={`text-2xl sm:text-3xl font-mono font-bold tracking-tight break-all ${showBalance && annualStats.totalBalConverted < 0 ? 'text-[#e07a5f]' : 'text-[#e6b422]'}`} style={{maxWidth: '100%'}}>
                    {formatMoney(showBalance ? annualStats.totalBalConverted : annualStats.totalExpConverted)}
                 </div>
               </div>
               
               {/* 实际构成 (Actual Breakdown) */}
               <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-1 relative z-10">
                 <div className="text-[10px] opacity-60 mb-1">{t.actualBreakdown}:</div>
                 <div className="flex flex-col gap-0.5 font-mono text-sm">
                    <div className="flex justify-between">
                       <span>JPY</span>
                       <span>¥{Math.abs((showBalance ? annualStats.incJPY - annualStats.expJPY : annualStats.expJPY)).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                       <span>CNY</span>
                       <span>¥{Math.abs((showBalance ? annualStats.incRMB - annualStats.expRMB : annualStats.expRMB)).toLocaleString()}</span>
                    </div>
                 </div>
                 
                 <div className="flex justify-between items-end mt-3">
                   <div className="flex items-baseline gap-2">
                      <span className="text-xs opacity-60">1 RMB ≈</span>
                      <input type="number" value={exchangeRate} onChange={(e)=>setExchangeRate(e.target.value)} className="w-12 bg-transparent border-b border-[#e6b422] text-center font-mono font-bold outline-none text-[#e6b422]" />
                      <span className="text-xs opacity-60">JPY</span>
                   </div>
                   <button onClick={() => setDisplayCurrency(displayCurrency === 'JPY' ? 'CNY' : 'JPY')} className="bg-white/20 px-2 py-1 rounded text-xs hover:bg-white/30 transition-colors flex items-center gap-1">
                      <RefreshIcon size={12}/> {displayCurrency}
                   </button>
                 </div>
               </div>
            </div>
         </div>

         {/* 2. 紧急备忘录 (Middle) */}
         <div className="mb-4">
             <div className="bg-[#fff9c4] rounded-xl border border-[#f9e79f] p-3 shadow-sm">
                <div className="flex items-center gap-2 text-[#d4ac0d] font-bold text-sm mb-2">
                   <AlertCircleIcon size={16}/> {t.urgentMemo}
                </div>
                <div className="space-y-1">
                   {activeUrgentTodos.map(todo => (
                     <div key={todo.id} className="flex items-start gap-2 text-sm">
                        <input type="checkbox" checked={todo.completed} onChange={() => toggleUrgent(todo.id)} className="mt-1 accent-[#f1c40f]" />
                        <span className="flex-1">{todo.text}</span>
                        <button onClick={() => deleteUrgent(todo.id)} className="text-[#f9e79f] hover:text-[#d4ac0d]"><Trash2Icon size={14}/></button>
                     </div>
                   ))}
                   <input onKeyDown={addUrgentTodo} placeholder={t.addUrgent} className="w-full bg-transparent border-b border-dashed border-[#f9e79f] text-sm focus:outline-none placeholder-[#f9e79f] focus:border-[#d4ac0d] mt-2" />
                   
                   {completedUrgentTodos.length > 0 && (
                      <details className="mt-2 group">
                         <summary className="flex items-center gap-1 text-[10px] text-[#d4ac0d]/60 cursor-pointer select-none">
                            <ChevronRightIcon size={10} className="group-open:rotate-90 transition-transform"/>
                            {t.completedGoals} ({completedUrgentTodos.length})
                         </summary>
                         <div className="mt-1 pl-3 border-l border-[#f9e79f] space-y-1">
                            {completedUrgentTodos.map(todo => (
                              <div key={todo.id} className="flex items-start gap-2 text-sm opacity-50">
                                  <input type="checkbox" checked={todo.completed} onChange={() => toggleUrgent(todo.id)} className="mt-1 accent-[#f1c40f]" />
                                  <span className="flex-1 line-through">{todo.text}</span>
                                  <button onClick={() => deleteUrgent(todo.id)} className="text-[#f9e79f] hover:text-[#d4ac0d]"><Trash2Icon size={14}/></button>
                              </div>
                            ))}
                         </div>
                      </details>
                   )}
                </div>
             </div>
         </div>

         {/* 3. 生活补给入口 (Bottom) */}
         <div onClick={() => setView('supplies')} className="bg-white rounded-3xl border-2 border-[#efeadd] shadow-sm p-5 cursor-pointer hover:shadow-md transition-all group mb-6">
            <div className="flex items-center justify-between mb-3"><div className="flex items-center gap-2 text-[#8c7b6d] font-bold text-base"><ShoppingBagIcon size={18}/> {t.supplies}</div><ArrowRightIcon size={16} className="text-[#dccab0] group-hover:text-[#e6b422] transition-colors"/></div>
            <div className="space-y-3">
               <div className="flex items-center justify-between text-sm"><span className="text-[#5c524b] flex items-center gap-2"><RefrigeratorIcon size={14} className="text-[#b09f8d]"/> {t.inventory}</span><span className="font-mono font-bold text-[#e6b422] bg-[#fffbf0] px-2 py-0.5 rounded-md">{inventory.length}</span></div>
               <div className="flex items-center justify-between text-sm"><span className="text-[#5c524b] flex items-center gap-2"><GiftIcon size={14} className="text-[#b09f8d]"/> {t.wishlist}</span><span className="font-mono font-bold text-[#e6b422] bg-[#fffbf0] px-2 py-0.5 rounded-md">{wishlist.length}</span></div>
            </div>
            <div className="text-xs text-[#dccab0] mt-3 text-center border-t border-dashed border-[#efeadd] pt-2">{t.clickToManage}</div>
         </div>

         {/* 4. 月份列表 (Last) */}
         <h3 className="text-[#8c7b6d] font-bold text-lg mb-4 flex items-center gap-2"><CalendarIcon size={18}/> {selectedYear} {t.monthly} <span className="text-xs bg-[#efeadd] text-[#8c7b6d] px-2 py-0.5 rounded-full ml-2">{showBalance ? t.modeBalance : t.modeExpenditure}</span></h3>
         
         <div className="grid grid-cols-2 gap-3">
           {Array.from({ length: 12 }).map((_, index) => {
             const stats = getMonthStats(selectedYear, index);
             const isFuture = selectedYear > new Date().getFullYear() || (selectedYear === new Date().getFullYear() && index > new Date().getMonth());
             const photo = monthlyPhotos[`${selectedYear}-${index}`];
             const isDeficit = stats.balance < 0;
             return (
               <Card key={index} className={`relative overflow-hidden group hover:border-[#e6b422] h-[160px] flex flex-col justify-between ${isFuture ? 'opacity-60 grayscale-[0.3]' : ''}`}>
                  <div className="flex justify-between items-start z-10">
                     <div className="flex flex-col" onClick={() => handleMonthClick(index)}>
                        <span className={`text-2xl font-black transition-colors ${showBalance ? (isDeficit ? 'text-[#e07a5f]/80' : 'text-[#e6dcc0] group-hover:text-[#7ca982]/30') : 'text-[#e6dcc0] group-hover:text-[#e6b422]/20'}`}>{index + 1}<span className="text-sm ml-0.5 font-bold opacity-60">{t.month}</span></span>
                     </div>
                     <div className="relative">
                        <input type="file" accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer z-20 w-8 h-8" onChange={(e) => handlePhotoUpload(e, index)} />
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shadow-sm transition-all ${photo ? 'bg-[#e6b422] text-white' : 'bg-[#fffbf0] text-[#dccab0] hover:text-[#e6b422] border border-[#efeadd]'}`}>{photo ? <ImageIcon size={14}/> : <CameraIcon size={14}/>}</div>
                     </div>
                  </div>
                  <div className="space-y-1 mt-1 z-10" onClick={() => handleMonthClick(index)}>
                     {showBalance ? (
                       <>
                         <div className="flex justify-between text-[10px] text-[#b09f8d]"><span>{t.income}</span><span className="font-mono">{formatMoneySimple(stats.fixedIncome)}</span></div>
                         <div className="flex justify-between text-[10px] text-[#b09f8d]"><span>{t.expense}</span><span className="font-mono">{formatMoneySimple(stats.totalExpense)}</span></div>
                         <div className="h-px bg-[#efeadd] my-1 border-t border-dashed border-[#dccab0]/50"></div>
                         <div className="flex justify-between text-xs font-bold text-[#5c524b]"><span className="text-[10px] self-center text-[#8c7b6d]">±</span><span className={`font-mono ${isDeficit ? 'text-[#e07a5f]' : 'text-[#7ca982]'}`}>{formatMoneySimple(stats.balance)}</span></div>
                       </>
                     ) : (
                       <>
                         <div className="flex justify-between text-[10px] text-[#b09f8d]"><span>{t.fixedExp}</span><span className="font-mono">{formatMoneySimple(stats.fixedExpense)}</span></div>
                         <div className="flex justify-between text-[10px] text-[#b09f8d]"><span>{t.dailyExp}</span><span className="font-mono">{formatMoneySimple(stats.monthlyDaily)}</span></div>
                         <div className="h-px bg-[#efeadd] my-1 border-t border-dashed border-[#dccab0]/50"></div>
                         <div className="flex justify-between text-xs font-bold text-[#5c524b]"><span className="text-[10px] self-center text-[#8c7b6d]">总</span><span className="font-mono text-[#e07a5f]">{formatMoneySimple(stats.totalExpense)}</span></div>
                       </>
                     )}
                  </div>
               </Card>
             );
           })}
         </div>
         
      </div>
      <ImageModal src={previewImage} onClose={() => setPreviewImage(null)} />
      <RestoreModal isOpen={restoreModalOpen} onClose={() => setRestoreModalOpen(false)} onRestore={handleManualRestore} onFileUpload={handleFileImport} keys={foundLegacyKeys} t={t} />
    </AppWrapper>
  );
}
