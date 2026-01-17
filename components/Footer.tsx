
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black/80 text-gray-500 text-[10px] p-8 text-center mt-auto">
      <div className="max-w-4xl mx-auto space-y-4">
        <div className="flex flex-wrap justify-center gap-4 text-xs">
          <a href="#" className="hover:underline">حول Roblox</a>
          <a href="#" className="hover:underline">الوظائف</a>
          <a href="#" className="hover:underline">الخصوصية</a>
          <a href="#" className="hover:underline">الشروط</a>
          <a href="#" className="hover:underline">المساعدة</a>
        </div>
        <p dir="ltr">© 2024 Roblox Corporation. Roblox, the Roblox logo and Powering Imagination are among our registered and unregistered trademarks in the U.S. and other countries.</p>
      </div>
    </footer>
  );
};
