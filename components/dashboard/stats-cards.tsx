"use client"

import { TrendingUp, TrendingDown, DollarSign, ShoppingCart, Repeat, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const stats = [
  {
    title: "Total Spend (MTD)",
    value: "$248,532",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
    description: "vs last month",
  },
  {
    title: "Active Orders",
    value: "156",
    change: "+8",
    trend: "up",
    icon: ShoppingCart,
    description: "in progress",
  },
  {
    title: "Recurring Purchases",
    value: "42",
    change: "+3",
    trend: "up",
    icon: Repeat,
    description: "active schedules",
  },
  {
    title: "Avg. Processing Time",
    value: "1.8 days",
    change: "-0.3 days",
    trend: "down",
    icon: Clock,
    description: "faster delivery",
  },
]

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card key={stat.title} className="bg-card border-border">
          <CardContent className="p-5">
            <div className="flex items-start justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <stat.icon className="h-5 w-5 text-primary" />
              </div>
              <div
                className={`flex items-center gap-1 text-xs font-medium ${
                  stat.trend === "up" && stat.title !== "Avg. Processing Time"
                    ? "text-success"
                    : stat.trend === "down" && stat.title === "Avg. Processing Time"
                    ? "text-success"
                    : "text-destructive"
                }`}
              >
                {stat.trend === "up" ? (
                  <TrendingUp className="h-3 w-3" />
                ) : (
                  <TrendingDown className="h-3 w-3" />
                )}
                {stat.change}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-2xl font-semibold text-card-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.title}</p>
            </div>
            <p className="text-xs text-muted-foreground mt-2">{stat.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
