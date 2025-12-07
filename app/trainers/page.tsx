
import DashboardHeader from '../admin/components/DashboardHeader'



import TrainersTable from './components/TrainerTable'
import TrainStates from './components/TraneStates'

export default function TrainerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-4 md:p-6">
        <DashboardHeader />
        
        <div className="mt-6">
          <TrainStates />
        </div>
        
        <div className="mt-6">
          <TrainersTable />
        </div>
      </div>
    </div>
  )
}