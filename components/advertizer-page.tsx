"use client"

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, DollarSign, ShoppingCart, Users, TrendingUp, Package } from "lucide-react"
import { motion } from "framer-motion"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const initialData = [
  { name: 'Jan', value: 0 },
  { name: 'Feb', value: 0 },
  { name: 'Mar', value: 0 },
  { name: 'Apr', value: 0 },
  { name: 'May', value: 0 },
  { name: 'Jun', value: 0 },
]

export default function AdvertizerPage() {
  const [storeUrl, setStoreUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [analyticsData, setAnalyticsData] = useState({
    revenue: { total: '$0', data: initialData },
    orders: { total: '0', data: initialData },
    customers: { total: '0', data: initialData },
    conversionRate: { total: '0%', data: initialData },
    products: { total: '0' },
  })

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulating API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setAnalyticsData({
      revenue: {
        total: '$12,345',
        data: [
          { name: 'Jan', value: 2000 },
          { name: 'Feb', value: 4000 },
          { name: 'Mar', value: 3000 },
          { name: 'Apr', value: 5000 },
          { name: 'May', value: 4500 },
          { name: 'Jun', value: 6000 },
        ]
      },
      orders: {
        total: '234',
        data: [
          { name: 'Jan', value: 40 },
          { name: 'Feb', value: 60 },
          { name: 'Mar', value: 45 },
          { name: 'Apr', value: 80 },
          { name: 'May', value: 70 },
          { name: 'Jun', value: 90 },
        ]
      },
      customers: {
        total: '567',
        data: [
          { name: 'Jan', value: 100 },
          { name: 'Feb', value: 120 },
          { name: 'Mar', value: 110 },
          { name: 'Apr', value: 140 },
          { name: 'May', value: 135 },
          { name: 'Jun', value: 160 },
        ]
      },
      conversionRate: {
        total: '3.45%',
        data: [
          { name: 'Jan', value: 2.5 },
          { name: 'Feb', value: 3.0 },
          { name: 'Mar', value: 2.8 },
          { name: 'Apr', value: 3.2 },
          { name: 'May', value: 3.1 },
          { name: 'Jun', value: 3.5 },
        ]
      },
      products: { total: '78' },
    })
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-indigo-900">Shopify Store Analytics</h1>
        <form onSubmit={handleSearch} className="flex space-x-2 mb-8">
          <Input
            type="url"
            placeholder="Enter Shopify store URL"
            value={storeUrl}
            onChange={(e) => setStoreUrl(e.target.value)}
            className="flex-grow text-lg py-6 border-2 border-indigo-300 focus:border-indigo-500"
          />
          <Button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 text-lg">
            <Search className="mr-2 h-5 w-5" />
            Analyze
          </Button>
        </form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-center space-x-4">
                <Package className="h-12 w-12 text-indigo-600" />
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-500">Total Products</p>
                  <p className="text-4xl font-bold text-indigo-900">{analyticsData.products.total}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-6 md:grid-cols-2"
        >
          <AnalyticsCard
            title="Total Revenue"
            icon={<DollarSign className="h-6 w-6 text-indigo-600" />}
            value={analyticsData.revenue.total}
            data={analyticsData.revenue.data}
            isLoading={isLoading}
            color="#4f46e5"
          />
          <AnalyticsCard
            title="Orders"
            icon={<ShoppingCart className="h-6 w-6 text-indigo-600" />}
            value={analyticsData.orders.total}
            data={analyticsData.orders.data}
            isLoading={isLoading}
            color="#06b6d4"
          />
          <AnalyticsCard
            title="Customers"
            icon={<Users className="h-6 w-6 text-indigo-600" />}
            value={analyticsData.customers.total}
            data={analyticsData.customers.data}
            isLoading={isLoading}
            color="#2dd4bf"
          />
          <AnalyticsCard
            title="Conversion Rate"
            icon={<TrendingUp className="h-6 w-6 text-indigo-600" />}
            value={analyticsData.conversionRate.total}
            data={analyticsData.conversionRate.data}
            isLoading={isLoading}
            color="#f59e0b"
          />
        </motion.div>
      </div>
    </div>
  )
}

interface AnalyticsCardProps {
  title: string;
  icon: React.ReactNode;  // Since icons are usually React components or JSX elements
  value: string | number; // The value can be either a string or a number depending on the use case
  data: any; // Replace `any` with a more specific type if you know the structure of `data`
  isLoading: boolean;
  color: string; // Typically CSS color value (string)
}

const AnalyticsCard: React.FC<AnalyticsCardProps> = ({ title, icon, value, data, isLoading, color }) => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-700">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-indigo-900 mb-4">{value}</div>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke={color}
                strokeWidth={2}
                dot={false}
                isAnimationActive={!isLoading}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}