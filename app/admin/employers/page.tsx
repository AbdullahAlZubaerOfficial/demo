import DashboardHeader from '../components/DashboardHeader'
import EmployersTable from './components/EmployersTable'
import StatsOverview from './components/StatsOverview'

export default function EmployersPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto p-4 md:p-6">
        <DashboardHeader />
        
        <div className="mt-6">
          <StatsOverview />
        </div>
        
        <div className="mt-6">
          <EmployersTable />
        </div>
      </div>
    </div>
  )
}