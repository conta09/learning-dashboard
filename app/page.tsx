import { BentoGrid } from './components/BentoGrid';
import { StatsCard } from './components/StatsCard';
import { ActiveTest } from './components/ActiveTest';
import { CreateCampaignSection } from './components/CreateCampaignSection';
import { ProgressChart } from './components/ProgressChart';
import { RecommendationSection } from './components/RecommendationSection';
import { Sidebar } from './components/Sidebar';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-primary text-white">
      <Sidebar />
      
      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Top Navigation */}
        <nav className="bg-dark p-4 flex justify-between items-center">
          <div className="flex-1" /> {/* Spacer */}
          <div className="flex items-center space-x-4">
            <span className="text-surface">Account Overview</span>
            <div className="w-8 h-8 bg-secondary rounded-full"></div>
          </div>
        </nav>

        <div className="container mx-auto p-6">
          <h2 className="text-3xl font-bold mb-8 text-surface">
            Let's create campaigns for your amazing progress!
          </h2>

          <BentoGrid>
            <CreateCampaignSection />
            <StatsCard title="Total Tests" value="325" trend="+12%" />
            <StatsCard title="Avg Score" value="82.4%" trend="+3.2%" />
            <ActiveTest title="React Fundamentals" progress={75} />
            <ProgressChart />
            <RecommendationSection />
          </BentoGrid>
        </div>
      </div>
    </div>
  );
}