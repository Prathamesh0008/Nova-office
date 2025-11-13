import React from "react";

export default function LoadingScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">

        {/* Spinning ring with brand color */}
        <div className="w-14 h-14 border-4 border-[#314977]/20 border-t-[#314977] rounded-full animate-spin"></div>

        {/* Text */}
        <p className="text-sm font-medium text-[#314977] tracking-wide">
          Loading, please wait…
        </p>

      </div>
    </div>
  );
}
