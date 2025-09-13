import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, Area, AreaChart } from 'recharts';
import { TrendingUp, TrendingDown, DollarSign, Target, AlertTriangle, Plus, CreditCard, Wallet, PiggyBank, Receipt } from "lucide-react";

const Dashboard = () => {
  // Mock data for charts
  const monthlySpending = [
    { month: 'Jan', amount: 1200, predicted: 1150 },
    { month: 'Feb', amount: 1400, predicted: 1380 },
    { month: 'Mar', amount: 1100, predicted: 1200 },
    { month: 'Apr', amount: 1600, predicted: 1550 },
    { month: 'May', amount: 1300, predicted: 1400 },
    { month: 'Jun', amount: 0, predicted: 1350 },
  ];

  const expenseCategories = [
    { name: 'Food & Dining', value: 450, color: '#0ea5e9' },
    { name: 'Transportation', value: 280, color: '#10b981' },
    { name: 'Entertainment', value: 180, color: '#f59e0b' },
    { name: 'Shopping', value: 320, color: '#ef4444' },
    { name: 'Bills', value: 400, color: '#8b5cf6' },
  ];

  const goals = [
    { name: "Emergency Fund", current: 2400, target: 5000, progress: 48 },
    { name: "New Laptop", current: 800, target: 1200, progress: 67 },
    { name: "Spring Break Trip", current: 450, target: 1500, progress: 30 },
  ];

  return (
    <div className="min-h-screen bg-gradient-bg p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Finance Dashboard
            </h1>
            <p className="text-muted-foreground">Smart financial management for students</p>
          </div>
          <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
            <Plus className="w-4 h-4 mr-2" />
            Add Transaction
          </Button>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-gradient-card border-primary/20 shadow-card hover:shadow-glow transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
              <Wallet className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">$3,247.89</div>
              <p className="text-xs text-success flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" />
                +5.2% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-primary/20 shadow-card hover:shadow-glow transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Spending</CardTitle>
              <CreditCard className="h-4 w-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-warning">$1,327.45</div>
              <p className="text-xs text-destructive flex items-center">
                <TrendingDown className="w-3 h-3 mr-1" />
                +12% from budget
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-primary/20 shadow-card hover:shadow-glow transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Savings Goal</CardTitle>
              <PiggyBank className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">$3,650</div>
              <p className="text-xs text-success flex items-center">
                <Target className="w-3 h-3 mr-1" />
                73% of $5,000 goal
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-primary/20 shadow-card hover:shadow-glow transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Budget Alert</CardTitle>
              <AlertTriangle className="h-4 w-4 text-destructive" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-destructive">3</div>
              <p className="text-xs text-muted-foreground">Categories over budget</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="analytics" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-secondary/50">
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="expenses">Expenses</TabsTrigger>
            <TabsTrigger value="goals">Goals</TabsTrigger>
            <TabsTrigger value="budget">Budget</TabsTrigger>
          </TabsList>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Spending Trends */}
              <Card className="bg-gradient-card border-primary/20 shadow-card">
                <CardHeader>
                  <CardTitle>Spending Trends & Predictions</CardTitle>
                  <CardDescription>AI-powered spending analysis and forecasting</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={monthlySpending}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="month" stroke="#9ca3af" />
                      <YAxis stroke="#9ca3af" />
                      <Area 
                        type="monotone" 
                        dataKey="amount" 
                        stroke="#0ea5e9" 
                        fill="url(#gradient1)" 
                        strokeWidth={3}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="predicted" 
                        stroke="#10b981" 
                        strokeDasharray="5 5"
                        fill="transparent"
                        strokeWidth={2}
                      />
                      <defs>
                        <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Expense Breakdown */}
              <Card className="bg-gradient-card border-primary/20 shadow-card">
                <CardHeader>
                  <CardTitle>Expense Categories</CardTitle>
                  <CardDescription>Breakdown of current month spending</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={expenseCategories}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={120}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {expenseCategories.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    {expenseCategories.map((category, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div 
                          className="w-3 h-3 rounded-full" 
                          style={{ backgroundColor: category.color }}
                        />
                        <span className="text-sm text-muted-foreground">{category.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="goals" className="space-y-6">
            <div className="grid gap-6">
              {goals.map((goal, index) => (
                <Card key={index} className="bg-gradient-card border-primary/20 shadow-card">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle className="text-lg">{goal.name}</CardTitle>
                        <CardDescription>
                          ${goal.current.toLocaleString()} of ${goal.target.toLocaleString()}
                        </CardDescription>
                      </div>
                      <Badge variant="secondary" className="bg-primary/20 text-primary">
                        {goal.progress}%
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Progress value={goal.progress} className="h-2" />
                    <div className="flex justify-between text-sm text-muted-foreground mt-2">
                      <span>${(goal.target - goal.current).toLocaleString()} remaining</span>
                      <span>Target: ${goal.target.toLocaleString()}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="expenses">
            <Card className="bg-gradient-card border-primary/20 shadow-card">
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription>Automated expense tracking and categorization</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Starbucks Coffee", amount: -4.50, category: "Food & Dining", date: "Today", automated: true },
                    { name: "Uber Ride", amount: -12.30, category: "Transportation", date: "Yesterday", automated: true },
                    { name: "Netflix Subscription", amount: -15.99, category: "Entertainment", date: "2 days ago", automated: true },
                    { name: "Part-time Job", amount: 250.00, category: "Income", date: "3 days ago", automated: false },
                    { name: "Grocery Store", amount: -67.43, category: "Food & Dining", date: "4 days ago", automated: true },
                  ].map((transaction, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-secondary/20 border border-primary/10">
                      <div className="flex items-center space-x-3">
                        <Receipt className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="font-medium">{transaction.name}</p>
                          <div className="flex items-center space-x-2">
                            <p className="text-sm text-muted-foreground">{transaction.category}</p>
                            {transaction.automated && (
                              <Badge variant="outline" className="text-xs border-primary/30 text-primary">Auto</Badge>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`font-medium ${transaction.amount > 0 ? 'text-success' : 'text-foreground'}`}>
                          {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                        </p>
                        <p className="text-sm text-muted-foreground">{transaction.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="budget">
            <div className="grid gap-6">
              {expenseCategories.map((category, index) => {
                const budget = category.value * 1.2; // Mock budget
                const percentage = (category.value / budget) * 100;
                const isOverBudget = percentage > 100;
                
                return (
                  <Card key={index} className="bg-gradient-card border-primary/20 shadow-card">
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-lg">{category.name}</CardTitle>
                        <Badge 
                          variant={isOverBudget ? "destructive" : "secondary"}
                          className={isOverBudget ? "" : "bg-success/20 text-success"}
                        >
                          {isOverBudget ? "Over Budget" : "On Track"}
                        </Badge>
                      </div>
                      <CardDescription>
                        ${category.value} of ${budget.toFixed(0)} budgeted
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Progress 
                        value={Math.min(percentage, 100)} 
                        className="h-2" 
                      />
                      <div className="flex justify-between text-sm text-muted-foreground mt-2">
                        <span>{percentage.toFixed(1)}% used</span>
                        <span>${(budget - category.value).toFixed(0)} remaining</span>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;