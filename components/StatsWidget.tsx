import React from 'react';
import { MOCK_STATS } from '../constants';
import { Network, Star, Handshake, CheckCircle } from 'lucide-react';

const iconMap = {
  network: Network,
  star: Star,
  handshake: Handshake,
  check: CheckCircle,
};

const StatsWidget: React.FC = () => {
  return (
    <div className="w-full bg-white rounded-t-3xl shadow-[0_-4px_20px_rgba(0,0,0,0.05)] p-6 pb-24 mt-12 min-h-[300px]">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-text-dark">La Tua Rete</h3>
        <span className="text-xs font-semibold text-primary bg-blue-50 px-2 py-1 rounded">Live</span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-4">
        {MOCK_STATS.map((stat) => {
          const Icon = iconMap[stat.icon];
          return (
            <div key={stat.id} className="bg-[#E8F4FD] rounded-2xl p-4 flex flex-col items-start justify-between min-h-[100px] border border-blue-100/50">
              <div className="bg-white p-2 rounded-xl shadow-sm mb-2">
                <Icon size={20} className="text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold text-primary leading-none mb-1">{stat.value}</div>
                <div className="text-xs text-text-light font-medium">{stat.label}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StatsWidget;