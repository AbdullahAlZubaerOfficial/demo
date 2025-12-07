import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'

const programs = [
  { name: 'Web', category: 'IT', enrollments: 320, target: 400 },
  { name: 'IT', category: 'IT', enrollments: 280, target: 300 },
  { name: 'Health', category: 'Health', enrollments: 240, target: 300 },
  { name: 'Flutter', category: 'IT', enrollments: 180, target: 250 },
  { name: 'Marketing', category: 'Business', enrollments: 220, target: 300 },
  { name: 'Spoken', category: 'Language', enrollments: 150, target: 200 },
]

export default function ProgramPerformance() {
  const totalEnrollments = programs.reduce((sum, prog) => sum + prog.enrollments, 0)
  const averageCompletion = 82

  return (
    <Card>
      <CardHeader>
        <CardTitle>Program Performance</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Average Completion */}
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm font-medium">Average Completion Rate</span>
            <span className="text-lg font-bold text-green-600">{averageCompletion}%</span>
          </div>
          <Progress value={averageCompletion} className="h-3" />
        </div>
        
        {/* Total Enrollments */}
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">{totalEnrollments.toLocaleString()}</div>
            <div className="text-sm text-gray-600">Total Enrollments</div>
          </div>
        </div>
        
        {/* Program List */}
        <div className="space-y-4">
          <h4 className="font-medium">Program Progress</h4>
          {programs.map((program, index) => {
            const percentage = Math.round((program.enrollments / program.target) * 100)
            return (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{program.name}</span>
                    <Badge variant="outline" className="text-xs">
                      {program.category}
                    </Badge>
                  </div>
                  <span className="text-sm font-semibold">{percentage}%</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span>{program.enrollments} enrollments</span>
                  <span>•</span>
                  <span>Target: {program.target}</span>
                </div>
                <Progress value={percentage} className="h-2" />
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}