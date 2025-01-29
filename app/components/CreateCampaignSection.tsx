'use client';

export function CreateCampaignSection() {
  return (
    <div className="bg-[#1D1D1D] p-6 rounded-xl col-span-full lg:col-span-2">
      <h3 className="text-xl font-bold text-surface mb-4">New AI Test</h3>
      <div className="flex gap-4">
        <input 
          type="text" 
          placeholder="Enter subject/topic" 
          className="bg-primary text-surface rounded-lg p-3 flex-1"
        />
        <button className="bg-secondary text-primary px-6 py-3 rounded-lg hover:bg-opacity-90 transition">
          Create Test
        </button>
      </div>
    </div>
  );
}