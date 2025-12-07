import { Card, CardContent } from '@/components/ui/card'
import { Users, BookOpen, CheckCircle, TrendingUp, Star, Clock, DollarSign, Target } from 'lucide-react'

const stats = [
  {
    title: "Total Trainers",
    value: "48",
    description: "All certified trainers",
    change: "+18%",
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    title: "Active Trainings",
    value: "156",
    description: "Ongoing sessions",
    change: "+12%",
    icon: BookOpen,
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    title: "Certified",
    value: "42",
    description: "Verified profiles",
    change: "+15%",
    icon: CheckCircle,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50"
  },
  {
    title: "Rating Avg",
    value: "4.8",
    description: "Overall satisfaction",
    change: "+0.2",
    icon: Star,
    color: "text-amber-600",
    bgColor: "bg-amber-50"
  },
  {
    title: "Completion Rate",
    value: "92%",
    description: "Training success",
    change: "+5%",
    icon: Target,
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  },
  {
    title: "Avg. Experience",
    value: "5.2 yrs",
    description: "Industry experience",
    change: "+0.4",
    icon: Clock,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50"
  },
  {
    title: "Monthly Revenue",
    value: "$12,874",
    description: "From trainings",
    change: "+12.5%",
    icon: DollarSign,
    color: "text-rose-600",
    bgColor: "bg-rose-50"
  },
  {
    title: "Placement Rate",
    value: "84%",
    description: "Successful trainees",
    change: "+10%",
    icon: TrendingUp,
    color: "text-teal-600",
    bgColor: "bg-teal-50"
  }
]

export default function StatsOverview() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 gap-3">
      {stats.map((stat, index) => {
        const Icon = stat.icon
        return (
          <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className={`${stat.bgColor} p-2 rounded-lg`}>
                  <Icon className={`h-5 w-5 ${stat.color}`} />
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold">{stat.value}</div>
                  <div className="flex items-center justify-end mt-1">
                    <span className="text-xs text-green-600 font-medium">
                      {stat.change}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-xs font-medium text-gray-700 mt-3">{stat.title}</p>
              <p className="text-xs text-gray-500 mt-1">{stat.description}</p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}