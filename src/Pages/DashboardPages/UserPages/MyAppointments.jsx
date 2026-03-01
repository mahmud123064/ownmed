
import { useState } from 'react';
import { Calendar, Clock, User, MapPin, Edit2, Trash2, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import toast from 'react-hot-toast';

export default function MyAppointments() {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      doctor: 'Dr. Sarah Johnson',
      specialty: 'Cardiology',
      date: '2024-02-20',
      time: '2:00 PM',
      location: 'City Medical Center',
      status: 'Confirmed',
      hospital: 'Central Hospital'
    },
    {
      id: 2,
      doctor: 'Dr. Michael Chen',
      specialty: 'Neurology',
      date: '2024-02-25',
      time: '10:30 AM',
      location: 'Health Plaza',
      status: 'Pending',
      hospital: 'Riverside Hospital'
    },
    {
      id: 3,
      doctor: 'Dr. Emily Williams',
      specialty: 'Dermatology',
      date: '2024-03-01',
      time: '3:15 PM',
      location: 'Clinic Avenue',
      status: 'Confirmed',
      hospital: 'Modern Care Hospital'
    },
    {
      id: 4,
      doctor: 'Dr. Robert Brown',
      specialty: 'Orthopedics',
      date: '2024-02-18',
      time: '11:00 AM',
      location: 'Downtown Medical',
      status: 'Completed',
      hospital: 'Central Hospital'
    }
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Confirmed':
        return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400';
      case 'Pending':
        return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400';
      case 'Completed':
        return 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400';
      case 'Cancelled':
        return 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const handleCancel = (id) => {
    setAppointments(appointments.filter(a => a.id !== id));
    toast.success('Appointment cancelled');
  };

  const handleReschedule = (id) => {
    toast.success('Reschedule functionality coming soon!');
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">My Appointments List</h2>
        <p className="text-muted-foreground">View and manage your upcoming appointments</p>
      </div>

      {/* Table Container */}
      <div className="bg-card border border-border rounded-lg overflow-hidden shadow-sm">
        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted">
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Doctor</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Specialty</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Date & Time</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Location</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((apt) => (
                <tr key={apt.id} className="border-b border-border hover:bg-muted transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                        {apt.doctor.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-medium text-foreground text-sm">{apt.doctor}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{apt.specialty}</td>
                  <td className="px-6 py-4">
                    <div className="text-sm">
                      <p className="font-medium text-foreground flex items-center gap-1">
                        <Calendar size={14} /> {apt.date}
                      </p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                        <Clock size={12} /> {apt.time}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm">
                      <p className="font-medium text-foreground flex items-center gap-1">
                        <MapPin size={14} /> {apt.location}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">{apt.hospital}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(apt.status)}`}>
                      {apt.status === 'Confirmed' && <CheckCircle size={14} />}
                      {apt.status === 'Pending' && <AlertCircle size={14} />}
                      {apt.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {apt.status !== 'Completed' && (
                        <>
                          <button
                            onClick={() => handleReschedule(apt.id)}
                            className="p-2 hover:bg-primary/10 rounded transition-colors"
                            title="Reschedule"
                          >
                            <Edit2 size={16} className="text-primary" />
                          </button>
                          <button
                            onClick={() => handleCancel(apt.id)}
                            className="p-2 hover:bg-destructive/10 rounded transition-colors"
                            title="Cancel"
                          >
                            <Trash2 size={16} className="text-destructive" />
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden">
          <div className="space-y-4 p-4">
            {appointments.map((apt) => (
              <div key={apt.id} className="border border-border rounded-lg p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      {apt.doctor.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{apt.doctor}</p>
                      <p className="text-xs text-muted-foreground">{apt.specialty}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(apt.status)}`}>
                    {apt.status}
                  </span>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar size={14} /> {apt.date} at {apt.time}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin size={14} /> {apt.location}
                  </div>
                </div>

                <div className="flex gap-2">
                  {apt.status !== 'Completed' && (
                    <>
                      <Button
                        size="sm"
                        onClick={() => handleReschedule(apt.id)}
                        variant="outline"
                        className="flex-1 text-xs"
                      >
                        Reschedule
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleCancel(apt.id)}
                        className="flex-1 text-xs text-destructive"
                      >
                        Cancel
                      </Button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {appointments.length === 0 && (
        <div className="text-center py-12 bg-muted rounded-lg">
          <Calendar size={48} className="mx-auto text-muted-foreground mb-4 opacity-50" />
          <p className="text-muted-foreground">No appointments scheduled</p>
        </div>
      )}
    </div>
  );
}
