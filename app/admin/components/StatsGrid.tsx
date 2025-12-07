import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, Briefcase, Clock, TrendingUp, DollarSign, Calendar } from 'lucide-react'

const stats = [
  {
    title: "Total Users",
    value: "12,874",
    description: "All user types",
    change: "+0.5%",
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    title: "Active Programs",
    value: "48",
    description: "Currently running",
    change: "+1%",
    icon: Briefcase,
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    title: "Pending Verifications",
    value: "48",
    description: "Currently running",
    change: "+1%",
    icon: Clock,
    color: "text-yellow-600",
    bgColor: "bg-yellow-50"
  },
  {
    title: "Placement Rate",
    value: "84%",
    description: "Last 30 days",
    change: "+10%",
    icon: TrendingUp,
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  },
  {
    title: "Total Revenue",
    value: "$12,874",
    description: "All earnings",
    change: "+12.5%",
    icon: DollarSign,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50"
  },
  {
    title: "Monthly Revenue",
    value: "$1,874",
    description: "All earnings",
    change: "+12.5%",
    icon: Calendar,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50"
  }
]

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon
        return (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <div className={`${stat.bgColor} p-2 rounded-lg`}>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center justify-between mt-2">
                <p className="text-xs text-gray-500">{stat.description}</p>
                <div className="flex items-center text-xs font-medium text-green-600">
                  <TrendingUp className="mr-1 h-3 w-3" />
                  {stat.change}
                  <span className="text-gray-500 ml-1">from last month</span>
                </div>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}