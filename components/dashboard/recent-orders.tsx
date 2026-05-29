"use client"

import { MoreHorizontal, ArrowUpRight, Package, Truck, CheckCircle2, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
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
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const orders = [
  {
    id: "ORD-2024-001",
    supplier: "TechSupply Co",
    items: "Industrial Sensors (x50)",
    amount: "$12,450.00",
    status: "delivered",
    date: "2024-01-15",
    recurring: true,
  },
  {
    id: "ORD-2024-002",
    supplier: "Global Parts Inc",
    items: "Precision Motors (x25)",
    amount: "$8,750.00",
    status: "in-transit",
    date: "2024-01-14",
    recurring: false,
  },
  {
    id: "ORD-2024-003",
    supplier: "MetalWorks Ltd",
    items: "Steel Components (x100)",
    amount: "$15,200.00",
    status: "processing",
    date: "2024-01-13",
    recurring: true,
  },
  {
    id: "ORD-2024-004",
    supplier: "ChemCorp Solutions",
    items: "Industrial Lubricants (x200L)",
    amount: "$4,320.00",
    status: "pending",
    date: "2024-01-12",
    recurring: true,
  },
  {
    id: "ORD-2024-005",
    supplier: "ElectroParts Plus",
    items: "Circuit Boards (x500)",
    amount: "$22,100.00",
    status: "delivered",
    date: "2024-01-11",
    recurring: false,
  },
]

const statusConfig = {
  delivered: {
    label: "Delivered",
    icon: CheckCircle2,
    className: "bg-success/10 text-success border-success/20",
  },
  "in-transit": {
    label: "In Transit",
    icon: Truck,
    className: "bg-chart-1/10 text-chart-1 border-chart-1/20",
  },
  processing: {
    label: "Processing",
    icon: Package,
    className: "bg-warning/10 text-warning border-warning/20",
  },
  pending: {
    label: "Pending",
    icon: Clock,
    className: "bg-muted text-muted-foreground border-muted",
  },
}

export function RecentOrders() {
  return (
    <Card className="bg-card border-border">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-base font-medium text-card-foreground">
            Recent Orders
          </CardTitle>
          <p className="text-sm text-muted-foreground mt-1">
            Latest procurement activities across all suppliers
          </p>
        </div>
        <Button variant="outline" size="sm" className="gap-2 border-border text-foreground">
          View All
          <ArrowUpRight className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="border-border hover:bg-transparent">
              <TableHead className="text-muted-foreground">Order ID</TableHead>
              <TableHead className="text-muted-foreground">Supplier</TableHead>
              <TableHead className="text-muted-foreground">Items</TableHead>
              <TableHead className="text-muted-foreground">Amount</TableHead>
              <TableHead className="text-muted-foreground">Status</TableHead>
              <TableHead className="text-muted-foreground text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => {
              const status = statusConfig[order.status as keyof typeof statusConfig]
              const StatusIcon = status.icon
              return (
                <TableRow key={order.id} className="border-border hover:bg-secondary/50">
                  <TableCell className="font-mono text-sm text-foreground">
                    <div className="flex items-center gap-2">
                      {order.id}
                      {order.recurring && (
                        <Badge variant="outline" className="text-xs border-primary/30 text-primary">
                          Recurring
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="text-foreground">{order.supplier}</TableCell>
                  <TableCell className="text-muted-foreground max-w-[200px] truncate">
                    {order.items}
                  </TableCell>
                  <TableCell className="font-medium text-foreground">{order.amount}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={status.className}>
                      <StatusIcon className="h-3 w-3 mr-1.5" />
                      {status.label}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Track Shipment</DropdownMenuItem>
                        <DropdownMenuItem>Download Invoice</DropdownMenuItem>
                        <DropdownMenuItem>Reorder</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
