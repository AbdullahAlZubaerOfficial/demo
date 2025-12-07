import { Card, CardContent } from '@/components/ui/card'
import { Users, BookOpen, Award, CheckCircle, Clock, TrendingUp, DollarSign, Target } from 'lucide-react'

const stats = [
  {
    title: "Total Trainees",
    value: "1,245",
    description: "All enrolled trainees",
    change: "+18%",
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    title: "Active Programs",
    value: "156",
    description: "Ongoing trainings",
    change: "+12%",
    icon: BookOpen,
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    title: "Certificates Issued",
    value: "982",
    description: "Completed & certified",
    change: "+25%",
    icon: Award,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50"
  },
  {
    title: "Completion Rate",
    value: "78%",
    description: "Successful completions",
    change: "+8%",
    icon: CheckCircle,
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  },
  {
    title: "Avg. Progress",
    value: "65%",
    description: "Overall progress",
    change: "+5%",
    icon: TrendingUp,
    color: "text-amber-600",
    bgColor: "bg-amber-50"
  },
  {
    title: "Avg. Duration",
    value: "4.2 m",
    description: "Time to complete",
    change: "-0.3",
    icon: Clock,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50"
  },
  {
    title: "Revenue Generated",
    value: "$48,750",
    description: "From enrollments",
    change: "+22.5%",
    icon: DollarSign,
    color: "text-rose-600",
    bgColor: "bg-rose-50"
  },
  {
    title: "Placement Rate",
    value: "72%",
    description: "Job placements",
    change: "+15%",
    icon: Target,
    color: "text-teal-600",
    bgColor: "bg-teal-50"
  }
]

export default function StatsOverview() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
      {stats.map((stat, index) => {
        const Icon = stat.icon
        return (
          <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
            <CardContent className="p-3">
              <div className="flex items-center justify-between">
                <div className={`${stat.bgColor} p-2 rounded-lg`}>
                  <Icon className={`h-4 w-4 ${stat.color}`} />
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold">{stat.value}</div>
                  <div className="flex items-center justify-end mt-1">
                    <span className={`text-xs font-medium ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {stat.change}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-xs font-medium text-gray-700 mt-2">{stat.title}</p>
              <p className="text-xs text-gray-500 mt-1">{stat.description}</p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}