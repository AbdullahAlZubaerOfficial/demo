"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Search, Filter, Eye, MoreVertical, Mail, Phone, Star, Download, UserPlus } from 'lucide-react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const trainersData = [
  {
    id: "TR01",
    name: "TechCorp Industries",
    specialization: "Flutter",
    activeTrainings: 12,
    status: "Verified",
    rating: 4.8,
    experience: "5 years",
    email: "trainer@techcorp.com",
    phone: "+1 (555) 123-4567",
    students: 245,
    completionRate: "94%"
  },
  {
    id: "TR02",
    name: "Google Incorporate",
    specialization: "Healthcare",
    activeTrainings: 6,
    status: "Verified",
    rating: 4.9,
    experience: "7 years",
    email: "trainer@google.com",
    phone: "+1 (555) 987-6543",
    students: 189,
    completionRate: "96%"
  },
  {
    id: "TR03",
    name: "Jamuna Incorporate",
    specialization: "Software",
    activeTrainings: 9,
    status: "Verified",
    rating: 4.7,
    experience: "4 years",
    email: "trainer@jamuna.com",
    phone: "+1 (555) 456-7890",
    students: 167,
    completionRate: "92%"
  },
  {
    id: "TR04",
    name: "Techplant Incorporate",
    specialization: "Website",
    activeTrainings: 8,
    status: "Verified",
    rating: 4.6,
    experience: "3 years",
    email: "trainer@techplant.com",
    phone: "+1 (555) 789-0123",
    students: 134,
    completionRate: "89%"
  },
  {
    id: "TR05",
    name: "Technologia",
    specialization: "App developer",
    activeTrainings: 10,
    status: "Verified",
    rating: 4.8,
    experience: "6 years",
    email: "trainer@technologia.com",
    phone: "+1 (555) 234-5678",
    students: 278,
    completionRate: "95%"
  },
  {
    id: "TR06",
    name: "Technical Incorporate",
    specialization: "UI/UX",
    activeTrainings: 17,
    status: "Verified",
    rating: 4.9,
    experience: "8 years",
    email: "trainer@technical.com",
    phone: "+1 (555) 876-5432",
    students: 312,
    completionRate: "97%"
  },
  {
    id: "TR07",
    name: "Microsoft Incorporate",
    specialization: "Software",
    activeTrainings: 15,
    status: "Verified",
    rating: 4.7,
    experience: "5 years",
    email: "trainer@microsoft.com",
    phone: "+1 (555) 345-6789",
    students: 289,
    completionRate: "93%"
  }
]

const specializations = [
  "All Specializations",
  "Flutter",
  "Healthcare",
  "Software",
  "Website",
  "App developer",
  "UI/UX",
  "Data Science",
  "AI/ML",
  "Cybersecurity"
]

export default function TrainersTable() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSpecialization, setSelectedSpecialization] = useState("All Specializations")
  const [selectedStatus, setSelectedStatus] = useState("All Status")

  const filteredData = trainersData.filter(trainer => {
    const matchesSearch = 
      trainer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trainer.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trainer.specialization.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesSpecialization = 
      selectedSpecialization === "All Specializations" || trainer.specialization === selectedSpecialization
    
    const matchesStatus = 
      selectedStatus === "All Status" || trainer.status === selectedStatus
    
    return matchesSearch && matchesSpecialization && matchesStatus
  })

  return (
    <Card className="border shadow-lg">
      <CardHeader>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <CardTitle className="text-xl">Trainers Management</CardTitle>
            <p className="text-sm text-gray-600 mt-1">Manage all trainer profiles and their active trainings</p>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <UserPlus className="h-4 w-4 mr-2" />
              Add New Trainer
            </Button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mt-6 space-y-4">
          <div className="text-sm font-medium text-gray-700">Search by name or ID</div>
          
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search trainers..."
                className="pl-9 h-11"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Specialization Filter */}
            <Select value={selectedSpecialization} onValueChange={setSelectedSpecialization}>
              <SelectTrigger className="w-[200px] h-11">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Specialization" />
              </SelectTrigger>
              <SelectContent>
                {specializations.map((spec) => (
                  <SelectItem key={spec} value={spec}>{spec}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Status Filter */}
            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="w-[140px] h-11">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All Status">All Status</SelectItem>
                <SelectItem value="Verified">Verified</SelectItem>
                <SelectItem value="Pending">Pending</SelectItem>
                <SelectItem value="On Leave">On Leave</SelectItem>
                <SelectItem value="Suspended">Suspended</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" className="h-11">
              All Users
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="w-[100px] font-semibold">ID</TableHead>
                <TableHead className="font-semibold">Name</TableHead>
                <TableHead className="font-semibold">Specialization</TableHead>
                <TableHead className="font-semibold">Active Trainings</TableHead>
                <TableHead className="font-semibold">Rating</TableHead>
                <TableHead className="font-semibold">Status</TableHead>
                <TableHead className="font-semibold text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.map((trainer) => (
                <TableRow key={trainer.id} className="hover:bg-gray-50/50">
                  <TableCell className="font-medium">
                    <Badge variant="secondary" className="font-mono bg-blue-50 text-blue-700">
                      {trainer.id}
                    </Badge>
                  </TableCell>
                  
                  <TableCell>
                    <div>
                      <div className="font-medium">{trainer.name}</div>
                      <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                        <Mail className="h-3 w-3" />
                        {trainer.email}
                      </div>
                    </div>
                  </TableCell>
                  
                  <TableCell>
                    <div className="flex flex-col gap-1">
                      <Badge variant="outline" className="w-fit bg-purple-50 text-purple-700 border-purple-200">
                        {trainer.specialization}
                      </Badge>
                      <div className="text-xs text-gray-500">
                        Exp: {trainer.experience}
                      </div>
                    </div>
                  </TableCell>
                  
                  <TableCell>
                    <div className="space-y-2">
                      <div className="text-lg font-bold">{trainer.activeTrainings}</div>
                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-green-500" 
                          style={{ width: `${Math.min(trainer.activeTrainings * 6, 100)}%` }}
                        />
                      </div>
                      <div className="text-xs text-gray-500">
                        {trainer.students} total students
                      </div>
                    </div>
                  </TableCell>
                  
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-amber-500 fill-current" />
                        <span className="ml-1 font-bold">{trainer.rating}</span>
                      </div>
                      <div className="text-xs text-gray-500">
                        {trainer.completionRate} completion
                      </div>
                    </div>
                  </TableCell>
                  
                  <TableCell>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        {trainer.status}
                      </div>
                    </Badge>
                  </TableCell>
                  
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" size="sm" className="h-9">
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </Button>
                      
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-9 w-9">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <Eye className="h-4 w-4 mr-2" />
                            View Profile
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Mail className="h-4 w-4 mr-2" />
                            Send Message
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Phone className="h-4 w-4 mr-2" />
                            Call Trainer
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-amber-600">
                            Edit Profile
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            Suspend Account
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Summary and Pagination */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-6">
          <div className="text-sm text-gray-600">
            Showing {filteredData.length} of {trainersData.length} trainers
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm" className="bg-blue-50 text-blue-700 border-blue-200">
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              3
            </Button>
            <span className="px-2 text-gray-500">...</span>
            <Button variant="outline" size="sm">
              10
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4">
            <div className="text-2xl font-bold text-blue-700">{trainersData.length}</div>
            <div className="text-sm font-medium text-gray-700">Total Trainers</div>
            <div className="text-xs text-gray-500">All specializations</div>
          </div>
          
          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-4">
            <div className="text-2xl font-bold text-green-700">
              {trainersData.filter(t => t.status === "Verified").length}
            </div>
            <div className="text-sm font-medium text-gray-700">Verified Trainers</div>
            <div className="text-xs text-gray-500">Certified & active</div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-4">
            <div className="text-2xl font-bold text-purple-700">
              {trainersData.reduce((sum, t) => sum + t.activeTrainings, 0)}
            </div>
            <div className="text-sm font-medium text-gray-700">Active Trainings</div>
            <div className="text-xs text-gray-500">Currently running</div>
          </div>
          
          <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-lg p-4">
            <div className="text-2xl font-bold text-amber-700">
              {(trainersData.reduce((sum, t) => sum + t.rating, 0) / trainersData.length).toFixed(1)}
            </div>
            <div className="text-sm font-medium text-gray-700">Avg. Rating</div>
            <div className="text-xs text-gray-500">Overall satisfaction</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}