import React from 'react';
import { User, Share2, CreditCard, MessageSquare, Settings, UserX, LogOut } from 'lucide-react';

interface UserMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const UserMenu: React.FC<UserMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const menuItems = [
    { icon: User, label: 'Account' },
    { icon: Share2, label: 'Relationship Footprint' },
    { icon: CreditCard, label: 'Subscription' },
    { icon: MessageSquare, label: 'Messages' },
    { icon: Settings, label: 'Settings' },
    { icon: UserX, label: 'Discarded Profiles' },
  ];

  return (
    <>
      {/* Backdrop to close menu when clicking outside */}
      <div 
        className="fixed inset-0 z-[50]" 
        onClick={onClose}
      ></div>

      {/* Menu Container */}
      <div className="absolute top-20 right-4 w-64 bg-white rounded-xl shadow-xl border border-gray-100 z-[60] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="py-2">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button 
                key={index}
                className="w-full px-5 py-3 flex items-center gap-3 hover:bg-gray-50 transition-colors text-left"
              >
                <Icon size={18} className="text-text-body" />
                <span className="text-sm font-medium text-text-body">{item.label}</span>
              </button>
            );
          })}
          
          <div className="h-px bg-gray-100 my-1 mx-4"></div>
          
          <button className="w-full px-5 py-3 flex items-center gap-3 hover:bg-red-50 transition-colors text-left group">
            <LogOut size={18} className="text-red-500 group-hover:text-red-600" />
            <span className="text-sm font-medium text-red-500 group-hover:text-red-600">Sign Out</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default UserMenu;