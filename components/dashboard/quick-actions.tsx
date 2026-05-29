"use client"

import { Plus, FileText, Upload, Users, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const actions = [
  {
    title: "Create Order",
    description: "Place a new purchase order",
    icon: Plus,
    variant: "default" as const,
  },
  {
    title: "Add Supplier",
    description: "Onboard a new supplier",
    icon: Users,
    variant: "secondary" as const,
  },
  {
    title: "Generate Report",
    description: "Export procurement data",
    icon: FileText,
    variant: "secondary" as const,
  },
  {
    title: "Bulk Import",
    description: "Import orders via CSV",
    icon: Upload,
    variant: "secondary" as const,
  },
]

export function QuickActions() {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-base font-medium text-card-foreground">
          Quick Actions
        </CardTitle>
        <p className="text-sm text-muted-foreground mt-1">
          Common procurement tasks
        </p>
      </CardHeader>
      <CardContent className="space-y-2">
        {actions.map((action) => (
          <Button
            key={action.title}
            variant={action.variant}
            className={`w-full justify-start h-auto py-3 px-4 ${
              action.variant === "default"
                ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
            }`}
          >
            <div className="flex items-center gap-3 flex-1">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-md ${
                  action.variant === "default"
                    ? "bg-primary-foreground/20"
                    : "bg-primary/10"
                }`}
              >
                <action.icon
                  className={`h-4 w-4 ${
                    action.variant === "default" ? "text-primary-foreground" : "text-primary"
                  }`}
                />
              </div>
              <div className="text-left">
                <p className="font-medium text-sm">{action.title}</p>
                <p
                  className={`text-xs ${
                    action.variant === "default"
                      ? "text-primary-foreground/70"
                      : "text-muted-foreground"
                  }`}
                >
                  {action.description}
                </p>
              </div>
            </div>
            <ArrowRight className="h-4 w-4 opacity-50" />
          </Button>
        ))}
      </CardContent>
    </Card>
  )
}
