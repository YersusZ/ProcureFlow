"use client"

import { ArrowUpRight, Star, TrendingUp, TrendingDown } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"

const suppliers = [
  {
    id: 1,
    name: "TechSupply Co",
    initials: "TS",
    rating: 4.9,
    onTimeDelivery: 98,
    qualityScore: 96,
    totalSpend: "$156,420",
    trend: "up",
    trendValue: "+12%",
  },
  {
    id: 2,
    name: "Global Parts Inc",
    initials: "GP",
    rating: 4.7,
    onTimeDelivery: 94,
    qualityScore: 92,
    totalSpend: "$98,750",
    trend: "up",
    trendValue: "+8%",
  },
  {
    id: 3,
    name: "MetalWorks Ltd",
    initials: "MW",
    rating: 4.5,
    onTimeDelivery: 91,
    qualityScore: 95,
    totalSpend: "$234,100",
    trend: "down",
    trendValue: "-3%",
  },
  {
    id: 4,
    name: "ChemCorp Solutions",
    initials: "CC",
    rating: 4.8,
    onTimeDelivery: 97,
    qualityScore: 99,
    totalSpend: "$67,840",
    trend: "up",
    trendValue: "+15%",
  },
]

export function SupplierPerformance() {
  return (
    <Card className="bg-card border-border">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-base font-medium text-card-foreground">
            Top Suppliers
          </CardTitle>
          <p className="text-sm text-muted-foreground mt-1">
            Performance metrics for key suppliers
          </p>
        </div>
        <Button variant="outline" size="sm" className="gap-2 border-border text-foreground">
          View All
          <ArrowUpRight className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {suppliers.map((supplier) => (
          <div
            key={supplier.id}
            className="p-4 rounded-lg bg-secondary/50 border border-border hover:border-primary/30 transition-colors cursor-pointer"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-primary/20 text-primary text-sm font-medium">
                    {supplier.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-medium text-foreground">{supplier.name}</h4>
                  <div className="flex items-center gap-1 mt-0.5">
                    <Star className="h-3 w-3 fill-warning text-warning" />
                    <span className="text-sm text-muted-foreground">{supplier.rating}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-foreground">{supplier.totalSpend}</p>
                <div
                  className={`flex items-center justify-end gap-1 text-xs ${
                    supplier.trend === "up" ? "text-success" : "text-destructive"
                  }`}
                >
                  {supplier.trend === "up" ? (
                    <TrendingUp className="h-3 w-3" />
                  ) : (
                    <TrendingDown className="h-3 w-3" />
                  )}
                  {supplier.trendValue}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="text-muted-foreground">On-time Delivery</span>
                  <span className="font-medium text-foreground">{supplier.onTimeDelivery}%</span>
                </div>
                <Progress value={supplier.onTimeDelivery} className="h-1.5" />
              </div>
              <div>
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="text-muted-foreground">Quality Score</span>
                  <span className="font-medium text-foreground">{supplier.qualityScore}%</span>
                </div>
                <Progress value={supplier.qualityScore} className="h-1.5" />
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
