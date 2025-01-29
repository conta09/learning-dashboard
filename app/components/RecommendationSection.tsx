export function RecommendationSection() {
    return (
      <div className="bg-[#1D1D1D] p-6 rounded-xl col-span-full">
        <h3 className="text-xl font-bold text-surface mb-4">AI Recommendations</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-primary rounded-lg">
            <span className="text-surface">Focus more on React Hooks</span>
            <button className="text-secondary hover:text-accent">View Details</button>
          </div>
          <div className="flex items-center justify-between p-3 bg-primary rounded-lg">
            <span className="text-surface">Practice state management</span>
            <button className="text-secondary hover:text-accent">View Details</button>
          </div>
        </div>
      </div>
    );
  }