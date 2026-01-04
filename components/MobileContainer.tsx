import React from 'react';

interface MobileContainerProps {
  children: React.ReactNode;
}

const MobileContainer: React.FC<MobileContainerProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full flex justify-center bg-gray-200">
      <div className="w-full max-w-[430px] h-[100dvh] bg-bg relative overflow-hidden shadow-2xl flex flex-col">
        {children}
      </div>
    </div>
  );
};

export default MobileContainer;