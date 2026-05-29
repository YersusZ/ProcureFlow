"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts"

const spendData = [
  { month: "Jan", spend: 165000, budget: 180000 },
  { month: "Feb", spend: 178000, budget: 180000 },
  { month: "Mar", spend: 192000, budget: 190000 },
  { month: "Apr", spend: 185000, budget: 195000 },
  { month: "May", spend: 210000, budget: 200000 },
  { month: "Jun", spend: 198000, budget: 210000 },
  { month: "Jul", spend: 225000, budget: 220000 },
  { month: "Aug", spend: 238000, budget: 230000 },
  { month: "Sep", spend: 248000, budget: 240000 },
]

const timeRanges = ["7D", "30D", "90D", "12M"]

export function SpendChart() {
  return (
    <Card className="bg-card border-border">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-base font-medium text-card-foreground">
            Procurement Spend
          </CardTitle>
          <p className="text-sm text-muted-foreground mt-1">
            Monthly spending vs budget allocation
          </p>
        </div>
        <div className="flex items-center gap-1 rounded-lg bg-secondary p-1">
          {timeRanges.map((range) => (
            <Button
              key={range}
              variant="ghost"
              size="sm"
              className={`h-7 px-3 text-xs ${
                range === "12M"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {range}
            </Button>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-6 mb-4">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-sm bg-chart-1" />
            <span className="text-sm text-muted-foreground">Actual Spend</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-sm bg-chart-2" />
            <span className="text-sm text-muted-foreground">Budget</span>
          </div>
        </div>
        <div className="h-[280px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={spendData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="spendGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="oklch(0.62 0.25 264)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="oklch(0.62 0.25 264)" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="budgetGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="oklch(0.7 0.18 180)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="oklch(0.7 0.18 180)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.25 0.005 285)" vertical={false} />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "oklch(0.6 0 0)", fontSize: 12 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "oklch(0.6 0 0)", fontSize: 12 }}
                tickFormatter={(value) => `$${value / 1000}k`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "oklch(0.145 0.005 285)",
                  border: "1px solid oklch(0.25 0.005 285)",
                  borderRadius: "8px",
                  color: "oklch(0.985 0 0)",
                }}
                formatter={(value: number) => [`$${value.toLocaleString()}`, ""]}
                labelStyle={{ color: "oklch(0.6 0 0)" }}
              />
              <Area
                type="monotone"
                dataKey="budget"
                stroke="oklch(0.7 0.18 180)"
                strokeWidth={2}
                fill="url(#budgetGradient)"
              />
              <Area
                type="monotone"
                dataKey="spend"
                stroke="oklch(0.62 0.25 264)"
                strokeWidth={2}
                fill="url(#spendGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
