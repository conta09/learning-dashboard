export function StatsCard({ title, value, trend }: { 
    title: string;
    value: string;
    trend: string;
  }) {
    return (
      <div className="bg-[#1D1D1D] p-6 rounded-xl hover:bg-opacity-80 transition-all">
        <h3 className="text-surface text-lg mb-2">{title}</h3>
        <div className="flex items-end justify-between">
          <span className="text-3xl font-bold text-accent">{value}</span>
          <span className="text-secondary">{trend}</span>
        </div>
      </div>
    );
  }