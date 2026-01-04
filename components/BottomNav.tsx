import React from 'react';
import { Tab } from '../types';
import { Home, Smartphone, Star, Handshake, Building2 } from 'lucide-react';

interface BottomNavProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: Tab.Connectors, icon: Home, label: 'Connectors' },
    { id: Tab.Billboard, icon: Smartphone, label: 'Billboard' },
    { id: Tab.Favorites, icon: Star, label: 'Favorites' },
    { id: Tab.Matchings, icon: Handshake, label: 'Matchings' },
    { id: Tab.Companies, icon: Building2, label: 'Companies' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 pb-safe pt-2 px-2 shadow-[0_-4px_20px_rgba(0,0,0,0.03)] z-50 rounded-t-2xl max-w-[430px] mx-auto">
      <div className="flex items-center justify-between px-2">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className="flex flex-col items-center justify-center py-2 px-1 min-w-[60px]"
            >
              <div className={`relative transition-all duration-200 ${isActive ? '-translate-y-1' : ''}`}>
                <Icon 
                    size={24} 
                    className={isActive ? 'text-primary fill-primary/10' : 'text-gray-400'} 
                    strokeWidth={isActive ? 2.5 : 2}
                />
                {isActive && <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />}
              </div>
              <span className={`text-[10px] mt-1 font-medium transition-colors ${isActive ? 'text-primary' : 'text-gray-400'}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
      {/* Safe area spacer for iPhone home indicator */}
      <div className="h-5 w-full"></div> 
    </div>
  );
};

export default BottomNav;