'use client';

import { Heart, Droplet, Activity, Zap } from 'lucide-react';

export default function Overview() {
  const healthMetrics = [
    {
      id: 1,
      label: 'Heart Rate',
      value: '72',
      unit: 'bpm',
      icon: Heart,
      status: 'normal',
      color: 'bg-red-100 text-red-600'
    },
    {
      id: 2,
      label: 'Blood Pressure',
      value: '120/80',
      unit: 'mmHg',
      icon: Droplet,
      status: 'normal',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      id: 3,
      label: 'Oxygen Level',
      value: '98',
      unit: '%',
      icon: Activity,
      status: 'excellent',
      color: 'bg-green-100 text-green-600'
    },
    {
      id: 4,
      label: 'Energy Level',
      value: '85',
      unit: '%',
      icon: Zap,
      status: 'good',
      color: 'bg-yellow-100 text-yellow-600'
    }
  ];

  const recentActivity = [
    { id: 1, activity: 'Took Medicine', time: 'Today at 9:00 AM', type: 'medicine' },
    { id: 2, activity: 'Doctor Appointment Scheduled', time: 'Yesterday at 2:30 PM', type: 'appointment' },
    { id: 3, activity: 'Prescription Updated', time: '3 days ago', type: 'prescription' },
    { id: 4, activity: 'Blood Test Results', time: '1 week ago', type: 'report' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">Overview</h2>
        <p className="text-muted-foreground">Health summary and recent activity</p>
      </div>

      {/* Health Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {healthMetrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <div key={metric.id} className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-muted-foreground">{metric.label}</h3>
                <div className={`p-3 rounded-lg ${metric.color}`}>
                  <Icon size={20} />
                </div>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-foreground">{metric.value}</span>
                <span className="text-sm text-muted-foreground">{metric.unit}</span>
              </div>
              <p className="mt-3 text-xs text-green-600 font-medium capitalize">{metric.status}</p>
            </div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
        <h3 className="text-xl font-bold text-foreground mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {recentActivity.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-3 hover:bg-muted rounded-lg transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${
                  item.type === 'medicine' ? 'bg-primary' :
                  item.type === 'appointment' ? 'bg-secondary' :
                  item.type === 'prescription' ? 'bg-accent' : 'bg-muted'
                }`}></div>
                <div>
                  <p className="text-sm font-medium text-foreground">{item.activity}</p>
                  <p className="text-xs text-muted-foreground">{item.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
