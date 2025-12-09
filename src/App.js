import React, { useState, useEffect, useMemo, useRef } from 'react';

// --- 1. 零依赖图标库 (内置SVG) ---
const IconBase = ({ size = 24, children, className = "", ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>{children}</svg>
);

const Icons = {
  Wallet: (p) => <IconBase {...p}><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12h.01"/></IconBase>,
  Calendar: (p) => <IconBase {...p}><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></IconBase>,
  CheckSquare: (p) => <IconBase {...p}><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></IconBase>,
  Utensils: (p) => <IconBase {...p}><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></IconBase>,
  Trash2: (p) => <IconBase {...p}><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></IconBase>,
  Plus: (p) => <IconBase {...p}><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></IconBase>,
  ChevronLeft: (p) => <IconBase {...p}><polyline points="15 18 9 12 15 6"/></IconBase>,
  ChevronRight: (p) => <IconBase {...p}><polyline points="9 18 15 12 9 6"/></IconBase>,
  Coffee: (p) => <IconBase {...p}><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></IconBase>,
  Sun: (p) => <IconBase {...p}><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></IconBase>,
  Moon: (p) => <IconBase {...p}><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></IconBase>,
  Layout: (p) => <IconBase {...p}><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></IconBase>,
  Receipt: (p) => <IconBase {...p}><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z"/><path d="M16 8h-6"/><path d="M16 12h-6"/><path d="M16 16h-6"/></IconBase>,
  TrendingUp: (p) => <IconBase {...p}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></IconBase>,
  TrendingDown: (p) => <IconBase {...p}><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/></IconBase>,
  Home: (p) => <IconBase {...p}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></IconBase>,
  PieChart: (p) => <IconBase {...p}><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></IconBase>,
  ShoppingBag: (p) => <IconBase {...p}><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></IconBase>,
  Refrigerator: (p) => <IconBase {...p}><path d="M5 2h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"/><line x1="5" y1="10" x2="19" y2="10"/><path d="M15 2v20"/></IconBase>,
  Gift: (p) => <IconBase {...p}><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></IconBase>,
  ArrowRight: (p) => <IconBase {...p}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></IconBase>,
  Download: (p) => <IconBase {...p}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></IconBase>,
  Eye: (p) => <IconBase {...p}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></IconBase>,
  EyeOff: (p) => <IconBase {...p}><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></IconBase>,
  Globe: (p) => <IconBase {...p}><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></IconBase>,
  Target: (p) => <IconBase {...p}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></IconBase>,
  Trophy: (p) => <IconBase {...p}><path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 4h10"/><path d="M17 4v3a5 5 0 0 1-5 5h0a5 5 0 0 1-5-5V4"/><path d="M5 9v2a2 2 0 0 0 2 2h0"/><path d="M19 11v-2a2 2 0 0 0-2-2h0"/></IconBase>,
  PenTool: (p) => <IconBase {...p}><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></IconBase>,
  Camera: (p) => <IconBase {...p}><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></IconBase>,
  Image: (p) => <IconBase {...p}><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></IconBase>
};

// --- 2. 多语言字典 ---
const TRANSLATIONS = {
  zh: {
    appTitle: "生活账本",
    slogan: "好好吃饭，好好生活。",
    backHome: "返回首页",
    totalExpense: "年度总支出 (已花)",
    totalBalance: "年度总结余 (预估)",
    exchangeRate: "汇率设置 (1 RMB)",
    supplies: "生活补给",
    inventory: "冰箱余粮",
    wishlist: "心愿清单",
    inventoryPlaceholder: "还有啥? (输入回车)",
    wishlistPlaceholder: "想买啥?",
    qty: "剩多少?",
    clickToManage: "点击管理库存与清单",
    fixedExp: "固定支出",
    income: "收入",
    dailyExp: "日常支出",
    monthly: "本月",
    month: "月",
    weekView: "周视图",
    weekGoal: "本周目标",
    addGoal: "添加新任务...",
    record: "记一笔",
    recordBtn: "记账",
    itemName: "项目名称",
    date: "日期",
    amount: "金额",
    mealPlan: "本周食谱",
    fixedMonthly: "本月固定收支",
    fixedType: "不随周变动",
    addFixed: "添加固定项目",
    expense: "支出",
    details: "本周明细",
    noDetails: "本周暂无消费记录",
    yearlyGoalsTitle: "年度目标与回忆",
    myGoals: "我的年度目标",
    addYearlyGoal: "立个 Flag (回车)",
    yearReview: "年度小结",
    reviewPlaceholder: "这一年过得怎么样？写点什么吧...",
    topPurchases: "高光消费 (Top 5)",
    topPurchasesSub: "看看钱都花哪了",
    modeExpenditure: "支出概览",
    modeBalance: "全能收支",
    photoGallery: "年度高光时刻 (12张)",
    photoGallerySub: "每月一张，记录生活",
    uploadPhoto: "上传本月照片"
  },
  jp: {
    appTitle: "生活家計簿",
    slogan: "よく食べ、よく生きる。",
    backHome: "ホームに戻る",
    totalExpense: "年間総支出 (実績)",
    totalBalance: "年間収支 (予想)",
    exchangeRate: "為替レート (1 RMB)",
    supplies: "生活用品",
    inventory: "冷蔵庫の中身",
    wishlist: "欲しいものリスト",
    inventoryPlaceholder: "他にある？(Enter)",
    wishlistPlaceholder: "何が欲しい？",
    qty: "残量は？",
    clickToManage: "在庫とリストを管理",
    fixedExp: "固定費",
    income: "収入",
    dailyExp: "生活費",
    monthly: "今月",
    month: "月",
    weekView: "週間ビュー",
    weekGoal: "今週の目標",
    addGoal: "タスクを追加...",
    record: "記帳する",
    recordBtn: "保存",
    itemName: "項目名",
    date: "日付",
    amount: "金額",
    mealPlan: "今週の献立",
    fixedMonthly: "月次固定収支",
    fixedType: "毎月固定",
    addFixed: "固定費を追加",
    expense: "支出",
    details: "今週の明細",
    noDetails: "記録はありません",
    yearlyGoalsTitle: "年間目標と振り返り",
    myGoals: "今年の目標",
    addYearlyGoal: "目標を追加 (Enter)",
    yearReview: "年間レビュー",
    reviewPlaceholder: "今年はどんな一年でしたか？",
    topPurchases: "高額出費 (Top 5)",
    topPurchasesSub: "何を買ったかな？",
    modeExpenditure: "支出のみ",
    modeBalance: "収支管理",
    photoGallery: "年間ハイライト (12枚)",
    photoGallerySub: "毎月のベストショット",
    uploadPhoto: "写真をアップ"
  },
  en: {
    appTitle: "Life Ledger",
    slogan: "Eat well, live well.",
    backHome: "Home",
    totalExpense: "Total Expense",
    totalBalance: "Total Balance",
    exchangeRate: "Exchange Rate (1 RMB)",
    supplies: "Supplies",
    inventory: "Pantry",
    wishlist: "Wishlist",
    inventoryPlaceholder: "Add item... (Enter)",
    wishlistPlaceholder: "Want to buy...",
    qty: "Qty?",
    clickToManage: "Manage Inventory & List",
    fixedExp: "Fixed",
    income: "Income",
    dailyExp: "Daily Exp",
    monthly: "Monthly",
    month: "Mon", 
    weekView: "Week View",
    weekGoal: "Weekly Goals",
    addGoal: "Add task...",
    record: "Add Transaction",
    recordBtn: "Save",
    itemName: "Item Name",
    date: "Date",
    amount: "Amount",
    mealPlan: "Meal Plan",
    fixedMonthly: "Monthly Fixed",
    fixedType: "Recurring",
    addFixed: "Add Fixed Item",
    expense: "Exp",
    details: "Weekly Details",
    noDetails: "No transactions yet",
    yearlyGoalsTitle: "Yearly Goals & Gallery",
    myGoals: "Yearly Goals",
    addYearlyGoal: "Add a Goal (Enter)",
    yearReview: "Yearly Review",
    reviewPlaceholder: "How was this year?",
    topPurchases: "Top Purchases",
    topPurchasesSub: "Where did the money go?",
    modeExpenditure: "Expense Only",
    modeBalance: "Full Balance",
    photoGallery: "Yearly Highlights",
    photoGallerySub: "One photo per month",
    uploadPhoto: "Upload Photo"
  }
};

// --- 3. 每日一句 ---
const DAILY_QUOTES = [
  "把钱花在刀刃上。", "好好吃饭，好好生活。", "今天的克制，是为了明天的自由。",
  "不积跬步，无以至千里。", "生活原本沉闷，但跑起来就有风。", "物尽其用，就是最大的惜福。",
  "每一笔支出，都是在为想要的生活投票。", "快乐不一定要很贵。"
];

// --- 4. 工具函数 ---
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

// 简单的图片压缩函数
const compressImage = (file, maxWidth = 500, quality = 0.7) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;
        if (width > maxWidth) {
          height *= maxWidth / width;
          width = maxWidth;
        }
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL('image/jpeg', quality));
      };
    };
  });
};

// --- 5. 组件 ---
const Card = ({ children, className = "", title, icon: IconComponent, action, onClick }) => (
  <div onClick={onClick} className={`bg-[#fffbf0] rounded-3xl shadow-[4px_4px_0px_0px_rgba(234,224,200,1)] border-2 border-[#efeadd] p-4 md:p-5 ${className} transition-all duration-300 ${onClick ? 'cursor-pointer hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(234,224,200,1)] active:translate-y-0 active:shadow-none' : ''}`}>
    {(title || IconComponent) && (
      <div className="flex items-center justify-between mb-3 pb-2 border-b-2 border-[#efeadd]/50 border-dashed">
        <div className="flex items-center gap-2 text-[#8c7b6d] font-bold text-base md:text-lg">
          {IconComponent && <IconComponent size={18} className="text-[#e6b422]" />}
          <h2>{title}</h2>
        </div>
        {action}
      </div>
    )}
    {children}
  </div>
);

// --- 6. 主程序 ---
export default function App() {
  const [view, setView] = useState('year');
  const [selectedYear, setSelectedYear] = useState(2025);
  const [currentDate, setCurrentDate] = useState(new Date()); 
  const [exchangeRate, setExchangeRate] = useState(20.5);
  const [showBalance, setShowBalance] = useState(false);
  const [quote, setQuote] = useState("把钱花在刀刃上。");
  const [lang, setLang] = useState('zh');

  // 数据
  const [fixedItems, setFixedItems] = useState([{ id: 1, name: '房租', amount: 76910, currency: 'JPY', type: 'expense' }, { id: 2, name: '话费', amount: 2732, currency: 'JPY', type: 'expense' }]);
  const [allTodos, setAllTodos] = useState({}); 
  const [allMeals, setAllMeals] = useState({});
  const [transactions, setTransactions] = useState([{ id: 1, date: formatDateISO(new Date()), name: '超市采购', amount: 1949, currency: 'JPY' }]);
  const [inventory, setInventory] = useState([{ id: 1, name: '辛拉面', quantity: '3包' }]);
  const [wishlist, setWishlist] = useState([{ id: 1, name: 'Switch', price: 6500, note: '' }]);
  const [yearlyGoals, setYearlyGoals] = useState([{id: 1, text: '坚持记账', completed: false}]);
  const [yearlyReview, setYearlyReview] = useState("");
  // 新增：月度照片存储 { "2025-0": "base64...", "2025-1": "..." }
  const [monthlyPhotos, setMonthlyPhotos] = useState({});

  const STORAGE_KEY = 'warmLifeApp_v22_photos'; 
  const t = TRANSLATIONS[lang]; 

  useEffect(() => {
    try {
      const savedData = localStorage.getItem(STORAGE_KEY);
      if (savedData) {
        const parsed = JSON.parse(savedData);
        if(parsed.fixedItems) setFixedItems(parsed.fixedItems);
        if(parsed.allTodos) setAllTodos(parsed.allTodos);
        if(parsed.allMeals) setAllMeals(parsed.allMeals);
        if(parsed.transactions) setTransactions(parsed.transactions);
        if(parsed.exchangeRate) setExchangeRate(parsed.exchangeRate);
        if(parsed.inventory) setInventory(parsed.inventory);
        if(parsed.wishlist) setWishlist(parsed.wishlist);
        if(parsed.showBalance !== undefined) setShowBalance(parsed.showBalance);
        if(parsed.lang) setLang(parsed.lang);
        if(parsed.yearlyGoals) setYearlyGoals(parsed.yearlyGoals);
        if(parsed.yearlyReview) setYearlyReview(parsed.yearlyReview);
        if(parsed.monthlyPhotos) setMonthlyPhotos(parsed.monthlyPhotos);
      }
      setQuote(DAILY_QUOTES[Math.floor(Math.random() * DAILY_QUOTES.length)]);
    } catch (e) { console.error(e); }
  }, []);

  useEffect(() => {
    const dataToSave = { fixedItems, allTodos, allMeals, transactions, exchangeRate, inventory, wishlist, showBalance, lang, yearlyGoals, yearlyReview, monthlyPhotos };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
  }, [fixedItems, allTodos, allMeals, transactions, exchangeRate, inventory, wishlist, showBalance, lang, yearlyGoals, yearlyReview, monthlyPhotos]);

  const toggleLang = () => {
    if (lang === 'zh') setLang('jp');
    else if (lang === 'jp') setLang('en');
    else setLang('zh');
  };

  const exportData = () => {
    const dataStr = localStorage.getItem(STORAGE_KEY);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Backup_${formatDateISO(new Date())}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // 处理照片上传
  const handlePhotoUpload = async (e, monthIndex) => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      const compressedDataUrl = await compressImage(file);
      const key = `${selectedYear}-${monthIndex}`;
      setMonthlyPhotos(prev => ({ ...prev, [key]: compressedDataUrl }));
    } catch (err) {
      alert("图片处理失败，请重试");
    }
  };

  const toJPY = (amount, currency) => {
    const val = parseFloat(amount);
    return isNaN(val) ? 0 : (currency === 'RMB' ? val * exchangeRate : val);
  };

  const currentWeekStart = getMonday(currentDate);
  const currentWeekEnd = new Date(currentWeekStart);
  currentWeekEnd.setDate(currentWeekEnd.getDate() + 6);
  const currentWeekId = getWeekId(currentWeekStart);
  
  const currentTodos = allTodos[currentWeekId] || [];
  const defaultMeals = { Mon: {b:'',l:'',d:''}, Tue: {b:'',l:'',d:''}, Wed: {b:'',l:'',d:''}, Thu: {b:'',l:'',d:''}, Fri: {b:'',l:'',d:''}, Sat: {b:'',l:'',d:''}, Sun: {b:'',l:'',d:''} };
  const currentMeals = allMeals[currentWeekId] || defaultMeals;
  
  const currentTransactions = transactions.filter(t => {
    const tDate = new Date(t.date);
    return tDate >= currentWeekStart && tDate <= new Date(currentWeekEnd.getTime() + 86400000 - 1);
  }).sort((a, b) => new Date(b.date) - new Date(a.date));

  const weekStats = useMemo(() => {
    const fixedExpense = fixedItems.filter(i => i.type === 'expense').reduce((sum, i) => sum + toJPY(i.amount, i.currency), 0);
    const fixedIncome = fixedItems.filter(i => i.type === 'income').reduce((sum, i) => sum + toJPY(i.amount, i.currency), 0);
    const weeklyDaily = currentTransactions.reduce((sum, i) => sum + toJPY(i.amount, i.currency), 0);
    return { fixedExpense, fixedIncome, weeklyDaily };
  }, [fixedItems, currentTransactions, exchangeRate]);

  const getMonthStats = (year, monthIndex) => {
    const fixedExpense = fixedItems.filter(i => i.type === 'expense').reduce((sum, i) => sum + toJPY(i.amount, i.currency), 0);
    const fixedIncome = fixedItems.filter(i => i.type === 'income').reduce((sum, i) => sum + toJPY(i.amount, i.currency), 0);
    const monthlyDaily = transactions.filter(t => {
      const d = new Date(t.date);
      return d.getFullYear() === year && d.getMonth() === monthIndex;
    }).reduce((sum, i) => sum + toJPY(i.amount, i.currency), 0);
    return { fixedExpense, fixedIncome, monthlyDaily, totalExpense: fixedExpense + monthlyDaily, balance: fixedIncome - (fixedExpense + monthlyDaily) };
  };

  const annualStats = useMemo(() => {
    let totalExp = 0, totalBal = 0;
    Array.from({length: 12}).forEach((_, i) => {
      const s = getMonthStats(selectedYear, i);
      totalExp += s.totalExpense;
      totalBal += s.balance;
    });
    return { totalExpense: totalExp, totalBalance: totalBal };
  }, [selectedYear, fixedItems, transactions, exchangeRate]);

  const topPurchases = useMemo(() => {
    return [...transactions]
      .filter(t => new Date(t.date).getFullYear() === selectedYear)
      .sort((a, b) => toJPY(b.amount, b.currency) - toJPY(a.amount, a.currency))
      .slice(0, 5);
  }, [transactions, selectedYear, exchangeRate]);

  const changeWeek = (offset) => { const d = new Date(currentDate); d.setDate(d.getDate() + offset * 7); setCurrentDate(d); };
  const handleMonthClick = (idx) => { 
    const d = new Date(selectedYear, idx, 1); 
    if (new Date().getFullYear()===selectedYear && new Date().getMonth()===idx) setCurrentDate(new Date()); else setCurrentDate(d);
    setView('week'); 
  };
  const toggleTodo = (id) => setAllTodos({...allTodos, [currentWeekId]: currentTodos.map(t=>t.id===id?{...t,completed:!t.completed}:t)});
  const deleteTodo = (id) => setAllTodos({...allTodos, [currentWeekId]: currentTodos.filter(t=>t.id!==id)});
  const updateMeal = (d, type, v) => setAllMeals({...allMeals, [currentWeekId]: {...currentMeals, [d]: {...currentMeals[d], [type]: v}}});
  const addTrans = (e) => {
    e.preventDefault(); const fd = new FormData(e.target);
    setTransactions([{id: Date.now(), date: fd.get('date'), name: fd.get('name'), amount: parseFloat(fd.get('amount')), currency: fd.get('currency')}, ...transactions]);
    e.target.reset();
  };
  const addFixed = (e) => {
    e.preventDefault(); const fd = new FormData(e.target);
    setFixedItems([...fixedItems, {id: Date.now(), name: fd.get('name'), amount: parseFloat(fd.get('amount')), currency: fd.get('currency'), type: fd.get('type')}]);
    e.target.reset();
  };
  const addYGoal = (e) => {
    if(e.key==='Enter' && e.target.value.trim()) { setYearlyGoals([...yearlyGoals, {id: Date.now(), text: e.target.value, completed: false}]); e.target.value=''; }
  };

  // --- Views ---

  // 1. Goals & Photos View
  if (view === 'goals') {
    return (
      <div className="min-h-screen bg-[#fdfcf8] text-[#5c524b] font-sans pb-20 selection:bg-[#ffe4a0]">
        <div className="bg-[#f2e6ce] sticky top-0 z-10 shadow-sm border-b border-[#e6dcc0] py-3 px-4">
           <div className="max-w-3xl mx-auto">
             <button onClick={() => setView('year')} className="flex items-center gap-2 text-[#8c7b6d] font-bold text-sm hover:text-[#5c524b] transition-colors"><Icons.Home size={16}/> {t.backHome}</button>
           </div>
         </div>
         <div className="max-w-3xl mx-auto px-4 mt-8 space-y-6">
            <div className="mb-6">
              <h1 className="text-3xl font-black text-[#6d5e50] flex items-center gap-3"><Icons.Target size={28} className="text-[#e6b422]" /> {t.yearlyGoalsTitle}</h1>
              <p className="text-[#8c7b6d] mt-2 text-sm">{selectedYear}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
               <Card title={t.myGoals} icon={Icons.CheckSquare} className="bg-white">
                  <div className="space-y-3 min-h-[200px]">
                     {yearlyGoals.map(g => (
                       <div key={g.id} className="flex items-start gap-3 p-2 bg-[#fdfcf8] rounded-xl border border-[#f7f3e8]">
                          <input type="checkbox" checked={g.completed} onChange={() => setYearlyGoals(yearlyGoals.map(yg=>yg.id===g.id?{...yg,completed:!yg.completed}:yg))} className="mt-1 accent-[#e6b422]" />
                          <span className={`flex-1 ${g.completed?'line-through text-[#b09f8d]':''}`}>{g.text}</span>
                          <button onClick={()=>setYearlyGoals(yearlyGoals.filter(yg=>yg.id!==g.id))} className="text-[#dccab0] hover:text-[#e07a5f]"><Icons.Trash2 size={16}/></button>
                       </div>
                     ))}
                     <div className="relative mt-4"><div className="absolute left-3 top-3 text-[#dccab0]"><Icons.Plus size={16}/></div><input onKeyDown={addYGoal} placeholder={t.addYearlyGoal} className="w-full pl-9 pr-4 py-2.5 bg-[#fdfcf8] border-2 border-dashed border-[#dccab0] rounded-xl text-sm focus:outline-none focus:border-[#e6b422]" /></div>
                  </div>
               </Card>

               {/* 照片墙 */}
               <Card title={t.photoGallery} icon={Icons.Camera} className="bg-white">
                  <div className="text-xs text-[#b09f8d] mb-4">{t.photoGallerySub}</div>
                  <div className="grid grid-cols-3 gap-2">
                    {Array.from({ length: 12 }).map((_, i) => {
                      const photoKey = `${selectedYear}-${i}`;
                      const photo = monthlyPhotos[photoKey];
                      return (
                        <div key={i} className="aspect-square bg-[#fdfcf8] rounded-lg border border-[#f7f3e8] relative overflow-hidden flex items-center justify-center group">
                          {photo ? (
                            <img src={photo} alt={`${i+1}月`} className="w-full h-full object-cover" />
                          ) : (
                            <span className="text-xs text-[#dccab0] font-bold">{i+1}</span>
                          )}
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                             <span className="text-white text-xs">{i+1}{t.month}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
               </Card>

               <div className="space-y-6">
                 <Card title={t.yearReview} icon={Icons.PenTool} className="bg-white">
                    <textarea value={yearlyReview} onChange={(e)=>setYearlyReview(e.target.value)} placeholder={t.reviewPlaceholder} className="w-full h-32 p-3 bg-[#fdfcf8] border border-[#efeadd] rounded-xl text-sm focus:outline-none focus:border-[#e6b422] resize-none" />
                 </Card>
                 <Card title={t.topPurchases} icon={Icons.Trophy} className="bg-white">
                    <div className="text-xs text-[#b09f8d] mb-2">{t.topPurchasesSub}</div>
                    <div className="space-y-2">
                       {topPurchases.map(item => (
                         <div key={item.id} className="flex justify-between items-center text-sm p-2 bg-[#fdfcf8] rounded-lg border border-[#f7f3e8]">
                            <span className="truncate flex-1 pr-2">{item.name}</span>
                            <span className="font-mono text-[#e07a5f] font-bold">{item.amount} {item.currency}</span>
                         </div>
                       ))}
                       {topPurchases.length===0 && <div className="text-center text-xs text-[#dccab0] py-4">No data</div>}
                    </div>
                 </Card>
               </div>
            </div>
         </div>
      </div>
    );
  }

  // 2. Supplies View
  if (view === 'supplies') {
    return (
      <div className="min-h-screen bg-[#fdfcf8] text-[#5c524b] font-sans pb-20 selection:bg-[#ffe4a0]">
         <div className="bg-[#f2e6ce] sticky top-0 z-10 shadow-sm border-b border-[#e6dcc0] py-3 px-4">
           <div className="max-w-3xl mx-auto">
             <button onClick={() => setView('year')} className="flex items-center gap-2 text-[#8c7b6d] font-bold text-sm hover:text-[#5c524b] transition-colors"><Icons.Home size={16}/> {t.backHome}</button>
           </div>
         </div>
         <div className="max-w-3xl mx-auto px-4 mt-8 space-y-6">
            <div className="mb-6">
              <h1 className="text-3xl font-black text-[#6d5e50] flex items-center gap-3"><Icons.ShoppingBag size={28} className="text-[#e6b422]" /> {t.supplies}</h1>
              <p className="text-[#8c7b6d] mt-2 text-sm">{t.clickToManage}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
               <Card title={t.inventory} icon={Icons.Refrigerator} className="h-full bg-white">
                  <div className="space-y-3 min-h-[300px]">
                     <div className="flex flex-col gap-2">
                        {inventory.map(item => (
                          <div key={item.id} className="flex items-center gap-2 p-3 bg-[#fdfcf8] rounded-xl border border-[#f7f3e8] group transition-all hover:border-[#e6b422]/50">
                             <input value={item.name} readOnly className="flex-1 text-sm text-[#5c524b] bg-transparent outline-none font-medium" />
                             <input value={item.quantity} onChange={(e) => setInventory(inventory.map(i=>i.id===item.id?{...i,quantity:e.target.value}:i))} placeholder={t.qty} className="w-20 text-xs text-right text-[#b09f8d] bg-transparent outline-none placeholder-[#dccab0] focus:text-[#e6b422]" />
                             <button onClick={() => setInventory(inventory.filter(i=>i.id!==item.id))} className="text-[#dccab0] hover:text-[#e07a5f]"><Icons.Trash2 size={16}/></button>
                          </div>
                        ))}
                     </div>
                     <div className="relative mt-4"><div className="absolute left-3 top-3 text-[#dccab0]"><Icons.Plus size={18}/></div><input onKeyDown={addInventory} placeholder={t.inventoryPlaceholder} className="w-full pl-10 pr-4 py-3 bg-[#fdfcf8] border-2 border-dashed border-[#dccab0] rounded-xl text-sm text-[#5c524b] placeholder-[#dccab0] focus:border-[#e6b422] outline-none transition-all focus:bg-white" /></div>
                  </div>
               </Card>
               <Card title={t.wishlist} icon={Icons.Gift} className="h-full bg-white">
                  <div className="space-y-3 min-h-[300px]">
                     <div className="flex flex-col gap-2">
                        {wishlist.map(item => (
                          <div key={item.id} className="flex justify-between items-center p-3 bg-[#fdfcf8] rounded-xl border border-[#f7f3e8] group transition-all hover:border-[#e6b422]/50">
                             <div className="flex flex-col"><span className="text-sm font-medium text-[#5c524b]">{item.name}</span>{item.price && <span className="text-xs text-[#e6b422] font-mono font-bold mt-0.5">¥{item.price}</span>}</div>
                             <button onClick={() => deleteWishlist(item.id)} className="text-[#dccab0] hover:text-[#e07a5f]"><Icons.Trash2 size={16}/></button>
                          </div>
                        ))}
                     </div>
                     <form onSubmit={addWishlist} className="flex gap-2 mt-4">
                        <input name="name" placeholder={t.wishlistPlaceholder} required className="flex-1 p-3 bg-[#fdfcf8] border-2 border-dashed border-[#dccab0] rounded-xl text-sm outline-none focus:border-[#e6b422] focus:bg-white transition-all" />
                        <input name="price" type="number" placeholder="¥" className="w-20 p-3 bg-[#fdfcf8] border-2 border-dashed border-[#dccab0] rounded-xl text-sm outline-none focus:border-[#e6b422] focus:bg-white transition-all" />
                        <button className="bg-[#e6b422] text-white rounded-xl w-12 flex items-center justify-center hover:bg-[#d4a51e] shadow-sm"><Icons.Plus size={20}/></button>
                     </form>
                  </div>
               </Card>
            </div>
         </div>
      </div>
    );
  }

  // 3. Year View
  if (view === 'year') {
    return (
      <div className="min-h-screen bg-[#fdfcf8] text-[#5c524b] font-sans pb-20 selection:bg-[#ffe4a0]">
        <div className="bg-[#f2e6ce] sticky top-0 z-10 shadow-sm border-b border-[#e6dcc0] py-4 px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-0">
             <div>
               <h1 className="text-2xl md:text-3xl font-black text-[#6d5e50] flex items-center gap-2"><Icons.Wallet size={24} className="text-[#e6b422]" /> {t.appTitle}</h1>
               <div className="text-[#8c7b6d] text-xs md:text-sm mt-1 ml-1 opacity-80">{quote}</div>
             </div>
             <div className="flex items-center gap-3">
               <button onClick={toggleLang} className="bg-white/80 p-2.5 rounded-full text-[#8c7b6d] border border-[#efeadd] hover:text-[#e6b422] hover:bg-white transition-colors font-bold text-xs" title="Switch Language"><Icons.Globe size={18}/></button>
               <button onClick={() => setView('goals')} className="bg-white/80 p-2.5 rounded-full text-[#8c7b6d] border border-[#efeadd] hover:text-[#e6b422] hover:bg-white transition-colors" title={t.yearlyGoalsTitle}><Icons.Target size={20}/></button>
               <button onClick={() => setShowBalance(!showBalance)} className="bg-white/80 p-2.5 rounded-full text-[#8c7b6d] border border-[#efeadd] hover:text-[#e6b422] hover:bg-white transition-colors" title="Toggle Mode">{showBalance ? <Icons.Eye size={20}/> : <Icons.EyeOff size={20}/>}</button>
               <button onClick={exportData} className="bg-white/80 p-2.5 rounded-full text-[#8c7b6d] border border-[#efeadd] hover:text-[#e6b422] hover:bg-white transition-colors" title="Backup"><Icons.Download size={20}/></button>
               <div className="flex items-center justify-between gap-4 bg-white/50 px-4 py-2 rounded-full border border-[#efeadd]">
                  <button onClick={() => setSelectedYear(selectedYear - 1)} className="hover:text-[#e6b422]"><Icons.ChevronLeft size={20}/></button>
                  <span className="text-lg font-bold font-mono text-[#5c524b]">{selectedYear}</span>
                  <button onClick={() => setSelectedYear(selectedYear + 1)} className="hover:text-[#e6b422]"><Icons.ChevronRight size={20}/></button>
               </div>
             </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 mt-6">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="md:col-span-2 bg-[#4a403a] text-[#f2e6ce] p-6 rounded-3xl shadow-lg flex flex-col justify-between min-h-[160px]">
                 <div>
                   <div className="flex items-center gap-2 text-sm opacity-80 mb-2"><Icons.PieChart size={16}/> {showBalance ? t.totalBalance : t.totalExpense}</div>
                   <div className={`text-3xl lg:text-4xl font-mono font-bold tracking-tight truncate ${showBalance && annualStats.totalBalance < 0 ? 'text-[#e07a5f]' : 'text-[#e6b422]'}`}>¥{Math.round(showBalance ? annualStats.totalBalance : annualStats.totalExpense).toLocaleString()}</div>
                 </div>
                 <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-1">
                   <div className="text-xs opacity-60">{t.exchangeRate}</div>
                   <div className="flex items-baseline gap-2"><span className="text-sm font-bold">≈</span><input type="number" value={exchangeRate} onChange={(e)=>setExchangeRate(e.target.value)} className="w-16 bg-transparent border-b border-[#e6b422] text-center font-mono font-bold outline-none text-[#e6b422]" /><span className="text-xs opacity-60">JPY</span></div>
                 </div>
              </div>
              <div onClick={() => setView('supplies')} className="md:col-span-1 bg-white rounded-3xl border-2 border-[#efeadd] shadow-sm p-5 cursor-pointer hover:-translate-y-1 hover:shadow-md transition-all group flex flex-col justify-between">
                 <div>
                    <div className="flex items-center justify-between mb-3"><div className="flex items-center gap-2 text-[#8c7b6d] font-bold text-base"><Icons.ShoppingBag size={18} className="text-[#e6b422]"/> {t.supplies}</div><Icons.ArrowRight size={16} className="text-[#dccab0] group-hover:text-[#e6b422] transition-colors"/></div>
                    <div className="space-y-3">
                       <div className="flex items-center justify-between text-sm"><span className="text-[#5c524b] flex items-center gap-2"><Icons.Refrigerator size={14} className="text-[#b09f8d]"/> {t.inventory}</span><span className="font-mono font-bold text-[#e6b422] bg-[#fffbf0] px-2 py-0.5 rounded-md">{inventory.length}</span></div>
                       <div className="flex items-center justify-between text-sm"><span className="text-[#5c524b] flex items-center gap-2"><Icons.Gift size={14} className="text-[#b09f8d]"/> {t.wishlist}</span><span className="font-mono font-bold text-[#e6b422] bg-[#fffbf0] px-2 py-0.5 rounded-md">{wishlist.length}</span></div>
                    </div>
                 </div>
                 <div className="text-xs text-[#dccab0] mt-3 text-center border-t border-dashed border-[#efeadd] pt-2">{t.clickToManage}</div>
              </div>
           </div>

           <h3 className="text-[#8c7b6d] font-bold text-lg mb-4 flex items-center gap-2"><Icons.Calendar size={18}/> {selectedYear} {t.monthly} <span className="text-xs bg-[#efeadd] text-[#8c7b6d] px-2 py-0.5 rounded-full ml-2">{showBalance ? t.modeBalance : t.modeExpenditure}</span></h3>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
             {Array.from({ length: 12 }).map((_, index) => {
               const stats = getMonthStats(selectedYear, index);
               const isFuture = selectedYear > new Date().getFullYear() || (selectedYear === new Date().getFullYear() && index > new Date().getMonth());
               const isDeficit = stats.balance < 0;
               const photoKey = `${selectedYear}-${index}`;
               const hasPhoto = !!monthlyPhotos[photoKey];

               return (
                 <Card key={index} className={`relative overflow-hidden group hover:border-[#e6b422] h-[130px] flex flex-col justify-between ${isFuture ? 'opacity-60 grayscale-[0.3]' : ''}`}>
                    <div className="flex justify-between items-start z-10">
                       <div className="flex flex-col" onClick={() => handleMonthClick(index)}>
                          <span className={`text-2xl md:text-3xl font-black transition-colors ${showBalance ? (isDeficit ? 'text-[#e07a5f]/80' : 'text-[#e6dcc0] group-hover:text-[#7ca982]/30') : 'text-[#e6dcc0] group-hover:text-[#e6b422]/20'}`}>{index + 1}<span className="text-sm md:text-base ml-0.5 font-bold opacity-60">{t.month}</span></span>
                       </div>
                       
                       {/* 拍照按钮 */}
                       <div className="relative">
                          <input 
                            type="file" 
                            accept="image/*" 
                            className="absolute inset-0 opacity-0 cursor-pointer z-20 w-8 h-8"
                            onChange={(e) => handlePhotoUpload(e, index)}
                          />
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center shadow-sm transition-all ${hasPhoto ? 'bg-[#e6b422] text-white' : 'bg-[#fffbf0] text-[#dccab0] hover:text-[#e6b422] border border-[#efeadd]'}`}>
                             {hasPhoto ? <Icons.Image size={14} /> : <Icons.Camera size={14} />}
                          </div>
                       </div>
                    </div>

                    <div className="space-y-1 mt-1 z-10" onClick={() => handleMonthClick(index)}>
                       {showBalance ? (
                         <>
                           <div className="flex justify-between text-[10px] text-[#b09f8d]"><span>{t.income}</span><span className="font-mono">+{stats.fixedIncome.toLocaleString()}</span></div>
                           <div className="flex justify-between text-[10px] text-[#b09f8d]"><span>{t.expense}</span><span className="font-mono">-{Math.round(stats.totalExpense).toLocaleString()}</span></div>
                           <div className="h-px bg-[#efeadd] my-1 border-t border-dashed border-[#dccab0]/50"></div>
                           <div className="flex justify-between text-xs md:text-sm font-bold text-[#5c524b]"><span className="text-[10px] self-center text-[#8c7b6d]">±</span><span className={`font-mono ${isDeficit ? 'text-[#e07a5f]' : 'text-[#7ca982]'}`}>¥{Math.round(stats.balance).toLocaleString()}</span></div>
                         </>
                       ) : (
                         <>
                           <div className="flex justify-between text-[10px] text-[#b09f8d]"><span>{t.fixedExp}</span><span className="font-mono">{stats.fixedExpense.toLocaleString()}</span></div>
                           <div className="flex justify-between text-[10px] text-[#b09f8d]"><span>{t.dailyExp}</span><span className="font-mono">{Math.round(stats.monthlyDaily).toLocaleString()}</span></div>
                           <div className="h-px bg-[#efeadd] my-1 border-t border-dashed border-[#dccab0]/50"></div>
                           <div className="flex justify-between text-xs md:text-sm font-bold text-[#5c524b]"><span className="text-[10px] self-center text-[#8c7b6d]">¥</span><span className="font-mono text-[#e07a5f]">¥{Math.round(stats.totalExpense).toLocaleString()}</span></div>
                         </>
                       )}
                    </div>
                 </Card>
               );
             })}
           </div>
        </div>
      </div>
    );
  }

  // 4. Week View
  return (
    <div className="min-h-screen bg-[#fdfcf8] text-[#5c524b] font-sans pb-20 selection:bg-[#ffe4a0]">
      <div className="bg-[#f2e6ce] sticky top-0 z-10 shadow-sm border-b border-[#e6dcc0]">
        <div className="max-w-3xl mx-auto px-4 py-3">
          <button onClick={() => setView('year')} className="flex items-center gap-1 text-[#8c7b6d] text-sm font-bold hover:text-[#5c524b] mb-2 transition-colors"><Icons.Home size={16}/> {t.backHome}</button>
          <div className="flex justify-between items-center bg-white/60 p-2 rounded-2xl border border-[#efeadd]">
            <button onClick={() => changeWeek(-1)} className="p-2 hover:bg-[#e4d4b2] rounded-full transition-colors"><Icons.ChevronLeft size={20}/></button>
            <div className="text-center">
              <div className="text-[10px] font-bold text-[#b09f8d] uppercase tracking-wider mb-0.5">{t.weekView}</div>
              <div className="flex items-center gap-2 text-lg font-black text-[#6d5e50]"><Icons.Calendar size={18} className="text-[#e6b422]" />{formatDateShort(currentWeekStart)} - {formatDateShort(currentWeekEnd)}</div>
            </div>
            <button onClick={() => changeWeek(1)} className="p-2 hover:bg-[#e4d4b2] rounded-full transition-colors"><Icons.ChevronRight size={20}/></button>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 mt-6 space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
           <div className="bg-white rounded-3xl p-5 border-2 border-[#efeadd] shadow-[4px_4px_0px_0px_rgba(234,224,200,1)] col-span-2 md:col-span-1">
              <div className="text-[#8c7b6d] text-sm font-bold mb-1">{t.details}</div>
              <div className="text-2xl md:text-3xl font-black text-[#e6b422] font-mono tracking-tight">¥{Math.round(weekStats.weeklyDaily).toLocaleString()}</div>
              <div className="text-xs text-[#b09f8d] mt-1 font-mono">≈ {Math.round(weekStats.weeklyDaily / exchangeRate)} RMB</div>
           </div>
           <div className="bg-[#fffbf0] rounded-3xl p-5 border-2 border-[#efeadd] shadow-[4px_4px_0px_0px_rgba(234,224,200,1)] col-span-2">
              <div className="flex justify-between items-center mb-2"><div className="text-[#8c7b6d] text-sm font-bold">{t.fixedMonthly}</div><div className="text-xs text-[#b09f8d] bg-[#efeadd]/50 px-2 py-1 rounded">{t.fixedType}</div></div>
              <div className="flex gap-8">
                <div className="flex flex-col"><span className="text-xs text-[#b09f8d] flex items-center gap-1"><Icons.TrendingDown size={10}/> {t.fixedExp}</span><span className="text-lg md:text-xl font-bold font-mono text-[#e07a5f]">¥{weekStats.fixedExpense.toLocaleString()}</span></div>
                {showBalance && weekStats.fixedIncome > 0 && <div className="flex flex-col"><span className="text-xs text-[#b09f8d] flex items-center gap-1"><Icons.TrendingUp size={10}/> {t.income}</span><span className="text-lg md:text-xl font-bold font-mono text-[#7ca982]">¥{weekStats.fixedIncome.toLocaleString()}</span></div>}
              </div>
           </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <Card title={t.weekGoal} icon={Icons.CheckSquare} className="min-h-[300px]">
              <div className="space-y-3">
                {currentTodos.map(todo => (
                  <div key={todo.id} className="group flex items-start gap-3 bg-[#fdfcf8] p-2 rounded-xl transition-all hover:bg-white border border-transparent hover:border-[#efeadd]">
                    <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} className="mt-1 accent-[#e6b422]" />
                    <span className={`flex-1 text-sm ${todo.completed ? 'text-[#b09f8d] line-through' : 'text-[#5c524b]'}`}>{todo.text}</span>
                    <button onClick={() => deleteTodo(todo.id)} className="text-[#dccab0] hover:text-[#e07a5f] opacity-0 group-hover:opacity-100"><Icons.Trash2 size={16}/></button>
                  </div>
                ))}
                <div className="relative mt-4"><div className="absolute left-3 top-3 text-[#dccab0]"><Icons.Plus size={16}/></div><input placeholder={t.addGoal} onKeyDown={handleAddTodo} className="w-full pl-9 pr-4 py-2.5 bg-[#fdfcf8] border-2 border-[#efeadd] rounded-xl text-sm focus:outline-none focus:border-[#e6b422]" /></div>
              </div>
            </Card>

            <Card title={t.record} icon={Icons.Receipt}>
              <form onSubmit={addTransaction} className="space-y-3">
                <div className="flex gap-2">
                  <input name="date" type="date" defaultValue={formatDateISO(currentDate)} className="w-1/3 md:w-auto p-3 bg-white border-2 border-[#efeadd] rounded-xl text-sm text-[#5c524b] outline-none" />
                  <input name="name" placeholder={t.itemName} required className="flex-1 p-3 bg-white border-2 border-[#efeadd] rounded-xl text-sm outline-none" />
                </div>
                <div className="flex gap-2">
                  <input name="amount" type="number" step="0.01" placeholder="0.00" required className="flex-1 p-3 bg-white border-2 border-[#efeadd] rounded-xl text-sm outline-none" />
                  <select name="currency" className="w-20 bg-white border-2 border-[#efeadd] rounded-xl text-sm outline-none"><option value="JPY">JPY</option><option value="RMB">RMB</option></select>
                </div>
                <button type="submit" className="w-full py-3 bg-[#e6b422] text-white font-bold rounded-xl shadow-md hover:bg-[#d4a51e] flex justify-center items-center gap-2"><Icons.Plus size={18}/> {t.recordBtn}</button>
              </form>
            </Card>

            <div className="bg-white rounded-3xl border-2 border-[#efeadd] p-4">
              <h3 className="text-[#8c7b6d] font-bold text-sm mb-3 pl-1 flex items-center gap-2"><Icons.Layout size={16}/> {t.details}</h3>
              <div className="space-y-2 max-h-[400px] overflow-y-auto custom-scrollbar">
                {currentTransactions.map(tr => (
                  <div key={tr.id} className="flex justify-between items-center p-3 rounded-xl bg-[#fdfcf8] border border-[#f7f3e8]">
                    <div className="flex flex-col"><span className="text-sm font-bold text-[#5c524b]">{tr.name}</span><span className="text-[10px] text-[#b09f8d]">{tr.date.slice(5).replace('-','.')}</span></div>
                    <div className="text-right"><div className="font-mono font-bold text-[#6d5e50] text-base">{tr.amount} <span className="text-[10px]">{tr.currency}</span></div>{tr.currency === 'RMB' && <div className="text-[10px] text-[#b09f8d]">≈ {Math.round(tr.amount * exchangeRate)} JPY</div>}</div>
                  </div>
                ))}
                {currentTransactions.length === 0 && <div className="text-center py-8 text-[#dccab0] text-sm">{t.noDetails}</div>}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card title={t.mealPlan} icon={Icons.Utensils}>
              <div className="space-y-3">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                  <div key={day} className="bg-white rounded-xl p-3 border border-[#efeadd] shadow-sm">
                    <div className="flex items-center gap-2 mb-2"><span className="text-xs font-bold text-white bg-[#e07a5f] px-2 py-0.5 rounded-full">{[t.month, 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}</span></div>
                    <div className="grid grid-cols-3 gap-2">
                      {['b', 'l', 'd'].map((type) => (
                        <div key={type} className="relative group">
                          <input value={currentMeals[day][type]} onChange={(e) => updateMeal(day, type, e.target.value)} placeholder={type==='b'?'早':type==='l'?'午':'晚'} className="w-full text-xs p-2 bg-[#fdfcf8] rounded-lg border border-transparent hover:border-[#dccab0] focus:border-[#e6b422] focus:bg-white outline-none text-center" />
                          <div className="absolute right-1 top-1.5 opacity-20 pointer-events-none">{type==='b'?<Icons.Coffee size={10}/>:type==='l'?<Icons.Sun size={10}/>:<Icons.Moon size={10}/>}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card title={t.addFixed} icon={Icons.Wallet}>
              <div className="space-y-2 mb-4">
                {fixedItems.map(item => (
                  <div key={item.id} className="flex justify-between items-center text-sm p-2 bg-white rounded-lg border border-[#f7f3e8]"><span className="text-[#5c524b]">{item.name}</span><div className="flex items-center gap-2"><div className="text-right"><span className={`block font-mono font-bold ${item.type === 'income' ? 'text-[#7ca982]' : 'text-[#e07a5f]'}`}>{item.type === 'income' ? '+' : '-'} {item.amount} <span className="text-[10px] text-[#b09f8d]">{item.currency}</span></span>{item.currency === 'RMB' && <span className="block text-[10px] text-[#b09f8d] text-right">≈ {Math.round(item.amount * exchangeRate)} JPY</span>}</div><button onClick={() => setFixedItems(fixedItems.filter(i => i.id !== item.id))} className="text-[#dccab0] hover:text-[#e07a5f]"><Icons.Trash2 size={12}/></button></div></div>
                ))}
              </div>
              <form onSubmit={addFixed} className="grid grid-cols-4 gap-2">
                 <input name="name" placeholder={t.itemName} required className="col-span-4 p-2 bg-white border border-[#efeadd] rounded-lg text-xs outline-none" />
                 <input name="amount" type="number" placeholder="金额" required className="col-span-2 p-2 bg-white border border-[#efeadd] rounded-lg text-xs outline-none" />
                 <select name="currency" className="col-span-1 p-2 bg-white border border-[#efeadd] rounded-lg text-xs outline-none"><option value="JPY">JPY</option><option value="RMB">RMB</option></select>
                 <select name="type" className="col-span-1 p-2 bg-white border border-[#efeadd] rounded-lg text-xs outline-none"><option value="expense">{t.expense}</option><option value="income">{t.income}</option></select>
                 <button className="col-span-4 p-2 bg-[#8c7b6d] text-white text-xs rounded-lg hover:bg-[#6d5e50] font-bold">{t.addFixed}</button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
