import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Award, Calendar, Mail, Phone, MapPin, BookOpen, GraduationCap, Download } from 'lucide-react'
import { Progress } from '@/components/ui/progress'

interface TraineeProfileProps {
  trainee: any
}

export default function TraineeProfile({ trainee }: TraineeProfileProps) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Trainee Profile</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Header Info */}
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
               {trainee.name.split(" ").map((n: string) => n[0]).join("")}

              </div>
              <div>
                <h2 className="text-2xl font-bold">{trainee.name}</h2>
                <div className="flex items-center gap-2 mt-2">
                  <Badge variant="outline">{trainee.id}</Badge>
                  <Badge className="bg-green-100 text-green-800">
                    {trainee.status}
                  </Badge>
                </div>
              </div>
            </div>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Download Resume
            </Button>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-gray-400" />
              <div>
                <div className="text-sm text-gray-500">Email</div>
                <div className="font-medium">{trainee.email}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-gray-400" />
              <div>
                <div className="text-sm text-gray-500">Phone</div>
                <div className="font-medium">{trainee.phone}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-gray-400" />
              <div>
                <div className="text-sm text-gray-500">Enrolled Date</div>
                <div className="font-medium">{trainee.enrolledDate}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Award className="h-5 w-5 text-gray-400" />
              <div>
                <div className="text-sm text-gray-500">Certificate</div>
                <div className="font-medium capitalize">{trainee.certificate}</div>
              </div>
            </div>
          </div>

          {/* Program Details */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                  <h3 className="font-semibold">Program Details</h3>
                </div>
                <Badge variant="outline" className="bg-blue-50 text-blue-700">
                  {trainee.programEnrolled}
                </Badge>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progress</span>
                    <span>{trainee.progress}%</span>
                  </div>
                  <Progress value={trainee.progress} className="h-2" />
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-gray-500">Grade</div>
                    <div className="font-medium">{trainee.grade}</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Completion Date</div>
                    <div className="font-medium">{trainee.completionDate}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  )
}