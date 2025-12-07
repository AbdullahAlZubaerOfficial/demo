import DashboardHeader from './components/DashboardHeader'
import StatsGrid from './components/StatsGrid'
import UserDistribution from './components/UserDistribution'
import ProgramPerformance from './components/ProgramPerformance'
import RevenueChart from './components/RevenueChart'

export default function AdminDashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-4 md:p-6">
        <DashboardHeader />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {/* Left Column - Stats and Distribution */}
          <div className="lg:col-span-2 space-y-6">
            <StatsGrid />
            <RevenueChart />
          </div>
          
          {/* Right Column - User Distribution and Performance */}
          <div className="space-y-6">
            <UserDistribution />
            <ProgramPerformance />
          </div>
        </div>
      </div>
    </div>
  )
}