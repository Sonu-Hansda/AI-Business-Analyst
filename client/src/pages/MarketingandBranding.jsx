import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  PieChart, Pie, Cell, ResponsiveContainer, 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, LineChart, Line 
} from 'recharts';
import { 
  Megaphone, Target, Users, TrendingUp, 
  Eye, Heart, Share2, MessageCircle, Star 
} from 'lucide-react';

const MarketingBranding = () => {
  const [campaignBudget, setCampaignBudget] = useState('');
  
  const brandMetrics = [
    { metric: 'Brand Awareness', value: 67, target: 75, color: '#3B82F6' },
    { metric: 'Brand Sentiment', value: 4.2, target: 4.5, color: '#10B981' },
    { metric: 'Market Penetration', value: 23, target: 30, color: '#F59E0B' },
    { metric: 'Customer Loyalty', value: 78, target: 80, color: '#8B5CF6' },
  ];

  const campaignPerformance = [
    { platform: 'Google Ads', impressions: 125000, clicks: 3750, ctr: 3.0, cost: 1250, conversions: 187 },
    { platform: 'Facebook', impressions: 89000, clicks: 2670, ctr: 3.0, cost: 890, conversions: 134 },
    { platform: 'Instagram', impressions: 67000, clicks: 2010, ctr: 3.0, cost: 670, conversions: 101 },
    { platform: 'Twitter', impressions: 34000, clicks: 1020, ctr: 3.0, cost: 340, conversions: 51 },
  ];

  const audienceSegments = [
    { name: 'Tech Enthusiasts', size: 35, engagement: 'High', color: '#3B82F6' },
    { name: 'Professionals', size: 28, engagement: 'Medium', color: '#10B981' },
    { name: 'Students', size: 22, engagement: 'High', color: '#F59E0B' },
    { name: 'Gamers', size: 15, engagement: 'Very High', color: '#EF4444' },
  ];

  const contentPerformance = [
    { type: 'Product Demo', views: 12500, engagement: 8.5, shares: 245, likes: 1890 },
    { type: 'User Reviews', views: 8900, engagement: 9.2, shares: 189, likes: 1567 },
    { type: 'Tutorials', views: 6700, engagement: 7.8, shares: 134, likes: 890 },
    { type: 'Behind Scenes', views: 4500, engagement: 6.9, shares: 98, likes: 567 },
  ];

  const trendData = [
    { month: 'Jan', awareness: 45, sentiment: 3.8, engagement: 5.2 },
    { month: 'Feb', awareness: 52, sentiment: 4.0, engagement: 5.8 },
    { month: 'Mar', awareness: 58, sentiment: 4.1, engagement: 6.2 },
    { month: 'Apr', awareness: 61, sentiment: 4.0, engagement: 6.5 },
    { month: 'May', awareness: 65, sentiment: 4.2, engagement: 7.1 },
    { month: 'Jun', awareness: 67, sentiment: 4.2, engagement: 7.3 },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Marketing & Branding</h1>
        <p className="text-gray-600">Optimize your brand presence and marketing campaigns</p>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
          <TabsTrigger value="audience">Audience</TabsTrigger>
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="brand">Brand Health</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Total Reach</p>
                    <p className="text-2xl font-bold text-gray-900">2.4M</p>
                    <div className="flex items-center mt-1">
                      <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                      <span className="text-sm text-green-600 font-medium">+12% this month</span>
                    </div>
                  </div>
                  <Eye className="h-8 w-8 text-blue-500" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Engagement Rate</p>
                    <p className="text-2xl font-bold text-gray-900">7.3%</p>
                    <div className="flex items-center mt-1">
                      <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                      <span className="text-sm text-green-600 font-medium">+0.8% this month</span>
                    </div>
                  </div>
                  <Heart className="h-8 w-8 text-red-500" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Campaign ROI</p>
                    <p className="text-2xl font-bold text-gray-900">3.2x</p>
                    <div className="flex items-center mt-1">
                      <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                      <span className="text-sm text-green-600 font-medium">Above target</span>
                    </div>
                  </div>
                  <Target className="h-8 w-8 text-purple-500" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Brand Mentions</p>
                    <p className="text-2xl font-bold text-gray-900">1,847</p>
                    <div className="flex items-center mt-1">
                      <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                      <span className="text-sm text-green-600 font-medium">+18% this week</span>
                    </div>
                  </div>
                  <MessageCircle className="h-8 w-8 text-green-500" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Trends Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Marketing Performance Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={trendData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="awareness" 
                      stroke="#3B82F6" 
                      strokeWidth={2} 
                      name="Brand Awareness" 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="sentiment" 
                      stroke="#10B981" 
                      strokeWidth={2} 
                      name="Sentiment Score" 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="engagement" 
                      stroke="#F59E0B" 
                      strokeWidth={2} 
                      name="Engagement %" 
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="campaigns" className="space-y-6">
          {/* Campaign Creator */}
          <Card>
            <CardHeader>
              <CardTitle>Create New Campaign</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="campaign-name">Campaign Name</Label>
                  <Input id="campaign-name" placeholder="Summer Headphones Promo" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="campaign-budget">Budget ($)</Label>
                  <Input 
                    id="campaign-budget" 
                    type="number" 
                    value={campaignBudget}
                    onChange={(e) => setCampaignBudget(e.target.value)}
                    placeholder="1000" 
                    className="mt-1" 
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="campaign-description">Campaign Description</Label>
                <Textarea 
                  id="campaign-description" 
                  placeholder="Describe your campaign objectives and target audience..."
                  className="mt-1"
                  rows={3}
                />
              </div>
              <Button className="w-full">Create Campaign</Button>
            </CardContent>
          </Card>

          {/* Platform Performance */}
          <Card>
            <CardHeader>
              <CardTitle>Campaign Performance by Platform</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {campaignPerformance.map((platform, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        {platform.platform === 'Google Ads' && (
                          <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white text-xs font-bold">G</div>
                        )}
                        {platform.platform === 'Facebook' && (
                          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white">f</div>
                        )}
                        {platform.platform === 'Instagram' && (
                          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded flex items-center justify-center text-white">IG</div>
                        )}
                        {platform.platform === 'Twitter' && (
                          <div className="w-8 h-8 bg-blue-400 rounded flex items-center justify-center text-white">𝕏</div>
                        )}
                        <span className="font-medium">{platform.platform}</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-5 gap-8 text-sm">
                      <div>
                        <p className="text-gray-500">Impressions</p>
                        <p className="font-medium">{platform.impressions.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Clicks</p>
                        <p className="font-medium">{platform.clicks.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">CTR</p>
                        <p className="font-medium">{platform.ctr}%</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Cost</p>
                        <p className="font-medium">${platform.cost}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Conversions</p>
                        <p className="font-medium text-green-600">{platform.conversions}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="audience" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Audience Segments */}
            <Card>
              <CardHeader>
                <CardTitle>Audience Segments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={audienceSegments}
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={90}
                        paddingAngle={5}
                        dataKey="size"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {audienceSegments.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `${value}%`} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-2 mt-4">
                  {audienceSegments.map((segment, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div 
                          className="w-3 h-3 rounded-full mr-2"
                          style={{ backgroundColor: segment.color }}
                        />
                        <span className="text-sm font-medium">{segment.name}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-500">{segment.size}%</span>
                        <Badge variant={
                          segment.engagement === 'Very High' ? 'default' :
                          segment.engagement === 'High' ? 'secondary' : 'outline'
                        }>
                          {segment.engagement}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Demographics */}
            <Card>
              <CardHeader>
                <CardTitle>Audience Demographics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-medium mb-3">Age Groups</h4>
                  <div className="space-y-2">
                    {[
                      { range: '18-24', percentage: 22 },
                      { range: '25-34', percentage: 35 },
                      { range: '35-44', percentage: 28 },
                      { range: '45-54', percentage: 12 },
                      { range: '55+', percentage: 3 }
                    ].map((age, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm">{age.range}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-24 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-500 h-2 rounded-full"
                              style={{ width: `${age.percentage}%` }}
                            />
                          </div>
                          <span className="text-sm font-medium w-8">{age.percentage}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Top Locations</h4>
                  <div className="space-y-2">
                    {[
                      { city: 'New York', percentage: 18 },
                      { city: 'Los Angeles', percentage: 15 },
                      { city: 'Chicago', percentage: 12 },
                      { city: 'Houston', percentage: 10 },
                      { city: 'Phoenix', percentage: 8 }
                    ].map((location, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm">{location.city}</span>
                        <span className="text-sm font-medium">{location.percentage}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="content" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Content Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {contentPerformance.map((content, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <h3 className="font-medium text-gray-900">{content.type}</h3>
                      <p className="text-sm text-gray-500">{content.views.toLocaleString()} views</p>
                    </div>
                    <div className="grid grid-cols-3 gap-8 text-center">
                      <div>
                        <p className="text-sm text-gray-500">Engagement</p>
                        <p className="font-medium">{content.engagement}%</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Shares</p>
                        <p className="font-medium">{content.shares}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Likes</p>
                        <p className="font-medium">{content.likes}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="brand" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {brandMetrics.map((metric, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <h3 className="font-medium text-gray-900">{metric.metric}</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold" style={{ color: metric.color }}>
                          {metric.metric === 'Brand Sentiment' ? metric.value : `${metric.value}%`}
                        </span>
                        <Badge variant={metric.value >= metric.target ? 'default' : 'secondary'}>
                          {metric.value >= metric.target ? 'On Track' : 'Below Target'}
                        </Badge>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="h-2 rounded-full"
                          style={{ 
                            backgroundColor: metric.color,
                            width: `${(metric.value / metric.target) * 100}%`
                          }}
                        />
                      </div>
                      <p className="text-xs text-gray-500">
                        Target: {metric.metric === 'Brand Sentiment' ? metric.target : `${metric.target}%`}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Brand Health Score */}
          <Card>
            <CardHeader>
              <CardTitle>Overall Brand Health Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-green-100">
                  <span className="text-4xl font-bold text-green-600">8.3</span>
                </div>
                <div>
                  <p className="text-lg font-medium text-gray-900">Excellent Brand Health</p>
                  <p className="text-gray-600">Your brand is performing well across all key metrics</p>
                </div>
                <div className="flex justify-center space-x-8 text-sm">
                  <div className="text-center">
                    <Star className="h-5 w-5 text-yellow-500 mx-auto mb-1" />
                    <p className="font-medium">4.2/5</p>
                    <p className="text-gray-500">Customer Rating</p>
                  </div>
                  <div className="text-center">
                    <Share2 className="h-5 w-5 text-blue-500 mx-auto mb-1" />
                    <p className="font-medium">67%</p>
                    <p className="text-gray-500">Share of Voice</p>
                  </div>
                  <div className="text-center">
                    <Users className="h-5 w-5 text-purple-500 mx-auto mb-1" />
                    <p className="font-medium">78%</p>
                    <p className="text-gray-500">Loyalty Rate</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MarketingBranding;