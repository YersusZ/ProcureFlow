"use client"

import { useState } from "react"
import { Search, Bell, HelpCircle, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

const tabs = [
  { name: "Overview", href: "/", active: true },
  { name: "Orders", href: "/orders" },
  { name: "Recurring", href: "/recurring" },
  { name: "Suppliers", href: "/suppliers" },
  { name: "Analytics", href: "/analytics" },
]

export function Header() {
  const [activeTab, setActiveTab] = useState("Overview")

  return (
    <header className="sticky top-0 z-30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-border">
        <div className="flex items-center gap-4 flex-1">
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search orders, suppliers, products..."
              className="pl-10 bg-secondary border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2 border-border bg-secondary text-foreground">
                Acme Corp
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Switch Organization</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Acme Corp</DropdownMenuItem>
              <DropdownMenuItem>Acme Labs</DropdownMenuItem>
              <DropdownMenuItem>Acme Retail</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-primary text-[10px] font-medium text-primary-foreground flex items-center justify-center">
              3
            </span>
          </Button>

          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <HelpCircle className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Navigation tabs */}
      <div className="flex items-center px-6 border-b border-border">
        <nav className="flex gap-6" aria-label="Main navigation">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`relative py-3 text-sm font-medium transition-colors ${
                activeTab === tab.name
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.name}
              {activeTab === tab.name && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <Badge variant="outline" className="border-success/50 text-success bg-success/10">
            <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-success inline-block" />
            All Systems Operational
          </Badge>
        </div>
      </div>
    </header>
  )
}
