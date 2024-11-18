import React from "react";

type OverviewCardProps = {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  change?: string; // e.g., "12% increase from last month"
};

const OverviewCard: React.FC<OverviewCardProps> = ({ title, value, icon, change }) => {
  return (
    <div className="bg-white p-6 rounded-md shadow flex items-center gap-4">
      {/* Icon */}
      <div className="bg-orange-100 text-orange-500 p-3 rounded-full">{icon}</div>

      {/* Details */}
      <div>
        <h4 className="text-gray-500 text-sm">{title}</h4>
        <h3 className="text-2xl font-semibold">{value}</h3>
        {change && <p className="text-sm text-green-500">{change}</p>}
      </div>
    </div>
  );
};

export default OverviewCard;
