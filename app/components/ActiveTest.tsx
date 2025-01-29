export function ActiveTest({ title, progress }: { 
    title: string;
    progress: number;
  }) {
    return (
      <div className="bg-[#1D1D1D] p-6 rounded-xl">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-surface">{title}</h4>
          <span className="text-accent">{progress}%</span>
        </div>
        <div className="w-full bg-primary rounded-full h-2">
          <div 
            className="bg-secondary h-2 rounded-full" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    );
  }