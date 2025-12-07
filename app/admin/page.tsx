import DashboardHeader from './components/DashboardHeader'
import StatsGrid from './components/StatsGrid'
import UserDistribution from './components/UserDistribution'
import ProgramPerformance from './components/ProgramPerformance'
import RevenueChart from './components/RevenueChart'

export default function AdminDashboardPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto p-4 md:p-6">
        {/* Mobile এ extra top spacing যোগ করুন */}
        <div className="lg:hidden mt-16 mb-4">
          <DashboardHeader />
        </div>
        
        {/* Desktop এ normal spacing */}
        <div className="hidden lg:block">
          <DashboardHeader />
        </div>
        
        <div className="grid grid-cols- lg:grid-cols-3 gap-4 lg:gap-6 mt-4 lg:mt-6">
          {/* Left Column - Stats and Distribution */}
          <div className="lg:col-span-2 space-y-4 lg:space-y-6">
            <StatsGrid />
            <RevenueChart />
          </div>
          
          {/* Right Column - User Distribution and Performance */}
          <div className="space-y-4 lg:space-y-6">
            <UserDistribution />
            <ProgramPerformance />
          </div>
        </div>
      </div>
    </div>
  )
}