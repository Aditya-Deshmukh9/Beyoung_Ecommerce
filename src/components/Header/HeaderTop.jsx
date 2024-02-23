import { MapPin } from "lucide-react";
import React from "react";

function HeaderTop() {
  return (
    <div className="mx-auto p-4 py-2 text-[12px] font-semibold px-4 bg-black text-white">
      <div className="flex container items-center justify-between">
        <div className="flex">
          <MapPin />
          <h2>TRACK YOUR ORDER</h2>
        </div>
        <div className="flex gap-2">
          <h2>LOG IN</h2>
          <p>|</p>
          <h2>SIGNUP</h2>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
