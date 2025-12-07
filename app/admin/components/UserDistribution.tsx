"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'

const userData = [
  { name: 'Trainees', value: 50, color: '#3B82F6' },
  { name: 'Job Seekers', value: 30, color: '#10B981' },
  { name: 'Trainers', value: 15, color: '#8B5CF6' },
  { name: 'Employers', value: 5, color: '#F59E0B' }
]

const userCounts = [
  { type: 'Trainees', count: '6,420' },
  { type: 'Job Seekers', count: '3,850' },
  { type: 'Trainers', count: '1,420' },
  { type: 'Employers', count: '650' }
]

export default function UserDistribution() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>User Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Pie Chart */}
          <div className="w-full lg:w-1/2 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={userData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {userData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          {/* User Counts */}
          <div className="w-full lg:w-1/2 space-y-4">
            {userData.map((user, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">{user.name}</span>
                  <span className="text-sm font-bold">{user.value}%</span>
                </div>
                <Progress value={user.value} className="h-2" style={{ backgroundColor: `${user.color}20` }}>
                  <div className="h-full" style={{ backgroundColor: user.color, width: `${user.value}%` }} />
                </Progress>
              </div>
            ))}
            
            {/* User Counts Table */}
            <div className="mt-6 border-t pt-4">
              <h4 className="font-medium mb-3">User Counts</h4>
              <div className="space-y-2">
                {userCounts.map((item, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="text-gray-600">{item.type}</span>
                    <span className="font-semibold">{item.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}