import { Card, CardContent } from '@/components/ui/card'
import { Building2, Briefcase, CheckCircle, TrendingUp } from 'lucide-react'

const stats = [
  {
    title: "Total Employers",
    value: "48",
    description: "All verified companies",
    change: "+12%",
    icon: Building2,
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    title: "Active Jobs",
    value: "2,180",
    description: "Currently open positions",
    change: "+8%",
    icon: Briefcase,
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    title: "Verified Companies",
    value: "42",
    description: "Fully verified profiles",
    change: "+15%",
    icon: CheckCircle,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50"
  },
  {
    title: "Placement Rate",
    value: "84%",
    description: "Successful hires",
    change: "+10%",
    icon: TrendingUp,
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  }
]

export default function StatsOverview() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon
        return (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold mt-2">{stat.value}</p>
                  <div className="flex items-center mt-1">
                    <span className="text-xs text-green-600 font-medium flex items-center">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      {stat.change}
                    </span>
                    <span className="text-xs text-gray-500 ml-2">from last month</span>
                  </div>
                </div>
                <div className={`${stat.bgColor} p-3 rounded-full`}>
                  <Icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3">{stat.description}</p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}