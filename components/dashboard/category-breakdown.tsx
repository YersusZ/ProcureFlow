"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts"

const categoryData = [
  { name: "Raw Materials", value: 145000, color: "oklch(0.62 0.25 264)" },
  { name: "Components", value: 98000, color: "oklch(0.7 0.18 180)" },
  { name: "Equipment", value: 67000, color: "oklch(0.75 0.2 85)" },
  { name: "Services", value: 45000, color: "oklch(0.65 0.22 330)" },
  { name: "Office Supplies", value: 23000, color: "oklch(0.7 0.2 45)" },
]

const total = categoryData.reduce((sum, item) => sum + item.value, 0)

export function CategoryBreakdown() {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-base font-medium text-card-foreground">
          Spend by Category
        </CardTitle>
        <p className="text-sm text-muted-foreground mt-1">
          Distribution of procurement spend
        </p>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} stroke="transparent" />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "oklch(0.145 0.005 285)",
                  border: "1px solid oklch(0.25 0.005 285)",
                  borderRadius: "8px",
                  color: "oklch(0.985 0 0)",
                }}
                formatter={(value: number) => [`$${value.toLocaleString()}`, ""]}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="space-y-3 mt-4">
          {categoryData.map((category) => (
            <div key={category.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span
                  className="h-3 w-3 rounded-sm"
                  style={{ backgroundColor: category.color }}
                />
                <span className="text-sm text-muted-foreground">{category.name}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-foreground">
                  ${(category.value / 1000).toFixed(0)}k
                </span>
                <span className="text-xs text-muted-foreground w-10 text-right">
                  {((category.value / total) * 100).toFixed(0)}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
