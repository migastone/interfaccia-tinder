import React from 'react';
import { Profile } from '../types';
import { Star, Info, X, MapPin } from 'lucide-react';

interface ProfileCardProps {
  profile: Profile;
  isFront?: boolean;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile, isFront = true }) => {
  // Format name: "Alessandro Bianchi" -> "Alessandro B."
  const nameParts = profile.name.split(' ');
  const formattedName = nameParts.length > 1 
    ? `${nameParts[0]} ${nameParts[nameParts.length - 1].charAt(0)}.`
    : profile.name;

  // Initials for placeholder
  const initials = nameParts.length > 1
    ? `${nameParts[0].charAt(0)}${nameParts[nameParts.length - 1].charAt(0)}`
    : profile.name.substring(0, 2).toUpperCase();

  return (
    <div className="relative w-full h-full bg-card rounded-3xl shadow-soft border border-gray-100 overflow-hidden flex flex-col">
      
      {/* --- Top Badges Row --- */}
      <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-start z-20">
        {/* Affinity Score (Top Left) - Multi-line */}
        <div className="bg-blue-50/90 backdrop-blur-sm px-3 py-2 rounded-2xl border border-blue-100 shadow-sm flex flex-col items-center min-w-[80px]">
          <span className="text-primary/70 font-semibold text-[10px] uppercase tracking-wider mb-0.5">Affinity</span>
          <span className="text-primary font-bold text-lg leading-none">{profile.affinityScore}%</span>
        </div>

         {/* Location (Top Center) */}
        <div className="absolute left-1/2 -translate-x-1/2 top-4 flex items-center gap-1.5 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full border border-gray-100 shadow-sm mt-1">
          <MapPin size={14} className="text-gray-500" />
          <span className="text-gray-600 font-semibold text-xs">{profile.distance}km</span>
        </div>

        {/* Reliability Score (Top Right) - Multi-line */}
        <div className="bg-yellow-50/90 backdrop-blur-sm px-3 py-2 rounded-2xl border border-yellow-100 shadow-sm flex flex-col items-center min-w-[80px]">
           <span className="text-yellow-600/70 font-semibold text-[10px] uppercase tracking-wider mb-0.5">Reliability</span>
           <span className="text-yellow-600 font-bold text-lg leading-none">{profile.reliabilityScore}%</span>
        </div>
      </div>

      {/* --- Main Content Area --- */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 pt-16 pb-2 space-y-2">
        {/* Profile Image - Increased size (w-32 h-32 is 128px, approx 30% larger than w-24 96px) */}
        <div className="relative">
          <div className="w-32 h-32 rounded-full p-[4px] bg-gradient-to-tr from-blue-100 to-blue-50 shadow-md flex items-center justify-center bg-white">
            {profile.imageUrl ? (
               <img
                src={profile.imageUrl}
                alt={profile.name}
                className="w-full h-full rounded-full object-cover border-2 border-white"
              />
            ) : (
              <div className="w-full h-full rounded-full bg-blue-100 flex items-center justify-center border-2 border-white text-primary font-bold text-3xl">
                {initials}
              </div>
            )}
          </div>
        </div>

        {/* Text Details - Increased sizes */}
        <div className="text-center w-full space-y-1">
          <h2 className="text-2xl font-bold text-text-dark leading-tight">{formattedName}</h2>
          
          <p className="text-text-body font-medium text-base">{profile.role}</p>
          <p className="text-text-light text-xs font-medium uppercase tracking-wide">{profile.industry}</p>
          
          {/* Connector Info */}
          <div className="flex flex-col items-center gap-1 mt-1.5">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-gray-100 text-gray-800">
               Type: {profile.connectorType}
            </span>
            <span className="text-xs text-gray-500">
              Esperienza: <span className="font-semibold text-primary">{profile.matchingCount} Matching</span>
            </span>
          </div>
        </div>
      </div>

      {/* --- Bottom Action Bar --- */}
      <div className="h-24 w-full px-6 pb-6 flex items-center justify-between z-20">
        <button 
            className="w-16 h-16 rounded-full bg-white shadow-xl border border-red-50 flex items-center justify-center text-red-500 transition-transform active:scale-90"
            aria-label="Discard"
        >
          <X size={32} strokeWidth={3} />
        </button>

        <button 
            className="w-12 h-12 rounded-full bg-blue-50 text-primary flex items-center justify-center mb-1 shadow-md active:scale-95 border border-blue-100"
            aria-label="Details"
        >
          <Info size={24} strokeWidth={2.5} />
        </button>

        <button 
            className="w-16 h-16 rounded-full bg-white shadow-xl border border-yellow-50 flex items-center justify-center text-accent transition-transform active:scale-90"
            aria-label="Favorite"
        >
          <div className="bg-accent/10 p-2 rounded-full">
            <Star size={28} fill="currentColor" className="text-accent" />
          </div>
        </button>
      </div>

      {/* Decorative gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none -z-0" />
    </div>
  );
};

export default ProfileCard;