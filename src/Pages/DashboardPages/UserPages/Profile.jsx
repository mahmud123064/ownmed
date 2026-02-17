
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Upload, Eye, EyeOff } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import toast from 'react-hot-toast';
// import { toast } from 'sonner';

export default function Profile() {
  const [activeTab, setActiveTab] = useState('personal');
  const [showPassword, setShowPassword] = useState(false);
  const [profileImage, setProfileImage] = useState('/avatar.png');
  const { register: registerPersonal, handleSubmit: handlePersonalSubmit, watch: watchPersonal } = useForm({
    defaultValues: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      phone: '+1 234 567 8900',
      dateOfBirth: '1990-01-15',
      gender: 'male',
      bloodType: 'O+'
    }
  });

  const { register: registerPassword, handleSubmit: handlePasswordSubmit } = useForm({
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    }
  });

  const onSubmitPersonal = (data) => {
    console.log('Personal info updated:', data);
    toast.success('Profile updated successfully!');
  };

  const onSubmitPassword = (data) => {
    if (data.newPassword !== data.confirmPassword) {
      toast.error('Passwords do not match!');
      return;
    }
    console.log('Password changed:', data);
    toast.success('Password changed successfully!');
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfileImage(event.target.result);
        toast.success('Profile image updated!');
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">Profile</h2>
        <p className="text-muted-foreground">Update your personal information</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-border">
        <button
          onClick={() => setActiveTab('personal')}
          className={`px-4 py-3 font-medium text-sm border-b-2 transition-colors ${activeTab === 'personal'
            ? 'text-primary border-primary'
            : 'text-muted-foreground border-transparent hover:text-foreground'
            }`}
        >
          Personal Information
        </button>
        <button
          onClick={() => setActiveTab('image')}
          className={`px-4 py-3 font-medium text-sm border-b-2 transition-colors ${activeTab === 'image'
            ? 'text-primary border-primary'
            : 'text-muted-foreground border-transparent hover:text-foreground'
            }`}
        >
          Profile Image
        </button>
        <button
          onClick={() => setActiveTab('password')}
          className={`px-4 py-3 font-medium text-sm border-b-2 transition-colors ${activeTab === 'password'
            ? 'text-primary border-primary'
            : 'text-muted-foreground border-transparent hover:text-foreground'
            }`}
        >
          Change Password
        </button>
      </div>

      {/* Personal Information Tab */}
      {activeTab === 'personal' && (
        <form onSubmit={handlePersonalSubmit(onSubmitPersonal)} className="bg-card border border-border rounded-lg p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
              <input
                {...registerPersonal('firstName')}
                type="text"
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
              <input
                {...registerPersonal('lastName')}
                type="text"
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Email</label>
              <input
                {...registerPersonal('email')}
                type="email"
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
              <input
                {...registerPersonal('phone')}
                type="tel"
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Date of Birth</label>
              <input
                {...registerPersonal('dateOfBirth')}
                type="date"
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Gender</label>
              <select
                {...registerPersonal('gender')}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Blood Type</label>
              <select
                {...registerPersonal('bloodType')}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input"
              >
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            </div>
          </div>
          <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">Save Changes</Button>
        </form>
      )}

      {/* Profile Image Tab */}
      {activeTab === 'image' && (
        <div className="bg-card border border-border rounded-lg p-6 space-y-4">
          <div className="flex flex-col items-center gap-6">
            <img
              src={profileImage}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-primary"
            />
            <div className="w-full max-w-md">
              <label className="flex items-center justify-center gap-2 px-6 py-4 border-2 border-dashed border-primary rounded-lg hover:bg-muted cursor-pointer transition-colors">
                <Upload size={20} className="text-primary" />
                <span className="text-sm font-medium">Upload New Image</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                Recommended size: 400x400px, Max size: 5MB
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Change Password Tab */}
      {activeTab === 'password' && (
        <form onSubmit={handlePasswordSubmit(onSubmitPassword)} className="bg-card border border-border rounded-lg p-6 space-y-4 max-w-md">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Current Password</label>
            <input
              {...registerPassword('currentPassword')}
              type="password"
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">New Password</label>
            <div className="relative">
              <input
                {...registerPassword('newPassword')}
                type={showPassword ? 'text' : 'password'}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Confirm Password</label>
            <input
              {...registerPassword('confirmPassword')}
              type="password"
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input"
            />
          </div>
          <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Change Password</Button>
        </form>
      )}
    </div>
  );
}
