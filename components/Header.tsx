
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-[#191B1D] h-12 flex items-center px-4 justify-between sticky top-0 z-50">
      <div className="flex items-center gap-6">
        <div className="w-24 h-6 bg-contain bg-no-repeat cursor-pointer ml-4" style={{ backgroundImage: "url('https://images.rbxcdn.com/ce391f1738734e5659850550424563a6.svg')" }}></div>
        <nav className="hidden lg:flex gap-5 text-[12px] font-bold text-white items-center">
          <a href="#" className="hover:text-gray-300">الرائجة</a>
          <a href="#" className="hover:text-gray-300">السوق</a>
          <a href="#" className="hover:text-gray-300">إنشاء</a>
          <a href="#" className="hover:text-gray-300">Robux</a>
        </nav>
      </div>
      
      <div className="flex-1 max-w-[400px] mx-6">
        <div className="relative">
          <input 
            type="text" 
            placeholder="البحث" 
            className="w-full bg-[#000000]/40 border border-gray-600 rounded-md px-3 py-1 text-xs focus:outline-none focus:border-[#00A2FF] text-white"
          />
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <button className="bg-transparent border border-white text-white px-4 py-1 rounded text-[12px] font-bold hover:bg-white/10 transition-all">
          تسجيل الدخول
        </button>
        <button className="bg-[#00A2FF] text-white px-4 py-1 rounded text-[12px] font-bold hover:bg-[#32B5FF] transition-all">
          إنشاء حساب
        </button>
      </div>
    </header>
  );
};
