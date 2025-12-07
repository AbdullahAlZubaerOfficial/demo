"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const revenueData = [
  { month: 'Jan', revenue: 1400, target: 1200 },
  { month: 'Feb', revenue: 1800, target: 1500 },
  { month: 'Mar', revenue: 2100, target: 2000 },
  { month: 'Apr', revenue: 2400, target: 2200 },
  { month: 'May', revenue: 1874, target: 1800 },
  { month: 'Jun', revenue: 2200, target: 2100 },
  { month: 'Jul', revenue: 2600, target: 2400 },
  { month: 'Aug', revenue: 2400, target: 2300 },
  { month: 'Sep', revenue: 2800, target: 2500 },
  { month: 'Oct', revenue: 3200, target: 2800 },
  { month: 'Nov', revenue: 3000, target: 2900 },
  { month: 'Dec', revenue: 3400, target: 3200 },
]

export default function RevenueChart() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Revenue Trend</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="month" 
                axisLine={false}
                tickLine={false}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tickFormatter={(value) => `$${value}`}
              />
              <Tooltip 
                formatter={(value) => [`$${value}`, 'Revenue']}
                labelFormatter={(label) => `Month: ${label}`}
              />
              <Area 
                type="monotone" 
                dataKey="revenue" 
                stroke="#3B82F6" 
                fill="#3B82F6"
                fillOpacity={0.1}
                strokeWidth={2}
              />
              <Area 
                type="monotone" 
                dataKey="target" 
                stroke="#10B981" 
                fill="#10B981"
                fillOpacity={0.05}
                strokeWidth={2}
                strokeDasharray="5 5"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        
        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-blue-600">$12,874</div>
            <div className="text-sm text-gray-600">Total Revenue</div>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-green-600">+12.5%</div>
            <div className="text-sm text-gray-600">YoY Growth</div>
          </div>
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-purple-600">$1,874</div>
            <div className="text-sm text-gray-600">Monthly Avg</div>
          </div>
          <div className="bg-amber-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-amber-600">84%</div>
            <div className="text-sm text-gray-600">Target Achievement</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}