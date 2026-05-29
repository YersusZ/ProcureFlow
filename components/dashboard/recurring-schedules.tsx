"use client"

import { MoreHorizontal, Calendar, ArrowUpRight, Pause, Play } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const schedules = [
  {
    id: 1,
    name: "Office Supplies",
    supplier: "SupplyMax",
    frequency: "Weekly",
    nextOrder: "Jan 20, 2024",
    monthlySpend: "$2,400",
    status: "active",
    progress: 75,
  },
  {
    id: 2,
    name: "Industrial Components",
    supplier: "TechSupply Co",
    frequency: "Bi-weekly",
    nextOrder: "Jan 22, 2024",
    monthlySpend: "$18,500",
    status: "active",
    progress: 45,
  },
  {
    id: 3,
    name: "Raw Materials",
    supplier: "MetalWorks Ltd",
    frequency: "Monthly",
    nextOrder: "Feb 1, 2024",
    monthlySpend: "$45,000",
    status: "active",
    progress: 20,
  },
  {
    id: 4,
    name: "Safety Equipment",
    supplier: "SafetyFirst Inc",
    frequency: "Quarterly",
    nextOrder: "Mar 15, 2024",
    monthlySpend: "$3,200",
    status: "paused",
    progress: 0,
  },
]

export function RecurringSchedules() {
  return (
    <Card className="bg-card border-border">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-base font-medium text-card-foreground">
            Recurring Schedules
          </CardTitle>
          <p className="text-sm text-muted-foreground mt-1">
            Automated purchase schedules
          </p>
        </div>
        <Button variant="outline" size="sm" className="gap-2 border-border text-foreground">
          Manage
          <ArrowUpRight className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {schedules.map((schedule) => (
          <div
            key={schedule.id}
            className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 border border-border"
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3">
                <h4 className="font-medium text-foreground truncate">{schedule.name}</h4>
                {schedule.status === "active" ? (
                  <Badge variant="outline" className="bg-success/10 text-success border-success/20 text-xs">
                    Active
                  </Badge>
                ) : (
                  <Badge variant="outline" className="bg-muted text-muted-foreground border-muted text-xs">
                    Paused
                  </Badge>
                )}
              </div>
              <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                <span>{schedule.supplier}</span>
                <span>•</span>
                <span>{schedule.frequency}</span>
                <span>•</span>
                <span className="font-medium text-foreground">{schedule.monthlySpend}/mo</span>
              </div>
              {schedule.status === "active" && (
                <div className="mt-3 flex items-center gap-3">
                  <div className="flex-1 max-w-[200px]">
                    <Progress value={schedule.progress} className="h-1.5" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    Next: {schedule.nextOrder}
                  </div>
                </div>
              )}
            </div>
            <div className="flex items-center gap-2 ml-4">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-muted-foreground hover:text-foreground"
              >
                {schedule.status === "active" ? (
                  <Pause className="h-4 w-4" />
                ) : (
                  <Play className="h-4 w-4" />
                )}
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-muted-foreground hover:text-foreground"
                  >
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Edit Schedule</DropdownMenuItem>
                  <DropdownMenuItem>View History</DropdownMenuItem>
                  <DropdownMenuItem>Adjust Frequency</DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
