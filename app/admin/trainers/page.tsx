import DashboardHeader from '../components/DashboardHeader'
import StatsOverview from './components/StatsOverview'
import TrainersTable from './components/TrainersTable'


export default function TrainersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto p-4 md:p-6">
        <DashboardHeader />
        
        {/* Header with tagline */}
        <div className="mt-6 mb-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
            <span className="text-sm font-semibold text-gray-700">
              NETWORKX • DAS BRAZIL - FÜR ZEHN 2016-2020
            </span>
          </div>
        </div>
        
        <div className="mt-6">
          <StatsOverview />
        </div>
        
        <div className="mt-6">
          <TrainersTable />
        </div>
      </div>
    </div>
  )
}