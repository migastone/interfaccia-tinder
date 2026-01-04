import React, { useState } from 'react';
import MobileContainer from './components/MobileContainer';
import SwipeDeck from './components/SwipeDeck';
import StatsWidget from './components/StatsWidget';
import BottomNav from './components/BottomNav';
import UserMenu from './components/UserMenu';
import { MOCK_PROFILES } from './constants';
import { Tab } from './types';
import { Bell, Home } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.Connectors);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <MobileContainer>
      {/* Top Header */}
      <header className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white via-bg/95 to-transparent z-40 px-6 pt-10 flex items-center justify-between pointer-events-none">
         {/* Left: Home Icon */}
         <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-primary border border-gray-100 pointer-events-auto active:scale-95 transition-transform">
             <Home size={22} />
         </button>

         {/* Right: Notifications & Profile */}
         <div className="flex gap-3 pointer-events-auto relative">
             <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-600 border border-gray-100 relative active:scale-95 transition-transform">
                <Bell size={20} />
                <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
             </button>
             
             {/* Profile Trigger */}
             <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="w-10 h-10 rounded-full border-2 border-white shadow-sm overflow-hidden bg-gray-200 cursor-pointer active:scale-95 transition-transform"
             >
                <img src="https://picsum.photos/seed/me/200/200" alt="Profile" className="w-full h-full object-cover" />
             </button>
         </div>
      </header>

      {/* User Dropdown Menu */}
      <UserMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* Main Content Scrollable Area */}
      <div className="flex-1 overflow-y-auto no-scrollbar pt-28 pb-20 bg-bg">
        {activeTab === Tab.Connectors ? (
           <div className="flex flex-col items-center">
              {/* Swipe Section */}
              <div className="w-full px-2 mb-2 z-10">
                <SwipeDeck profiles={MOCK_PROFILES} />
              </div>
              
              {/* Stats Section */}
              <StatsWidget />
           </div>
        ) : (
            <div className="flex flex-col items-center justify-center h-full text-gray-400">
                <p>Placeholder for {activeTab}</p>
            </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </MobileContainer>
  );
};

export default App;