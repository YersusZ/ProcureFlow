import { Sidebar } from "@/components/dashboard/sidebar"
import { Header } from "@/components/dashboard/header"
import { StatsCards } from "@/components/dashboard/stats-cards"
import { SpendChart } from "@/components/dashboard/spend-chart"
import { RecentOrders } from "@/components/dashboard/recent-orders"
import { RecurringSchedules } from "@/components/dashboard/recurring-schedules"
import { SupplierPerformance } from "@/components/dashboard/supplier-performance"
import { CategoryBreakdown } from "@/components/dashboard/category-breakdown"
import { QuickActions } from "@/components/dashboard/quick-actions"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-64">
        <Header />

        <main className="p-6 space-y-6">
          {/* Page Title */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-foreground">Dashboard</h1>
              <p className="text-muted-foreground mt-1">
                Welcome back, John. Here&apos;s your procurement overview.
              </p>
            </div>
          </div>

          {/* Stats Cards */}
          <StatsCards />

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Spend Chart - Takes 2 columns */}
            <div className="lg:col-span-2">
              <SpendChart />
            </div>

            {/* Category Breakdown */}
            <div>
              <CategoryBreakdown />
            </div>
          </div>

          {/* Recent Orders */}
          <RecentOrders />

          {/* Bottom Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recurring Schedules - Takes 2 columns */}
            <div className="lg:col-span-2">
              <RecurringSchedules />
            </div>

            {/* Quick Actions */}
            <div>
              <QuickActions />
            </div>
          </div>

          {/* Supplier Performance */}
          <SupplierPerformance />
        </main>
      </div>
    </div>
  )
}
