
import React from 'react';
import { Header } from './components/Header';
import { LoginBox } from './components/LoginBox';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      
      <main className="flex-grow flex items-center justify-center p-4 relative z-10">
        <LoginBox />
      </main>

      <Footer />
    </div>
  );
};

export default App;
