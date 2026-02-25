import { Header } from '@/components/Dashboard/User/Header'
import { Sidebar } from '@/components/Dashboard/User/Sidebar'
// import { MessageButton } from '@/components/MessageButton/MessageButton'
import  MessageButton  from '../components/MessageButton/MessageButton.jsx'
import { useState } from 'react'
// import MessageButton from '@/components/MessageButton'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { user } = useSelector((state) => state.auth);

  const [activeSection, setActiveSection] = useState('overview')

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <Sidebar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
        sidebarOpen={sidebarOpen} 
        setSidebarOpen={setSidebarOpen} 
        role={user?.role}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className="flex-1 overflow-auto">
          <div className="p-4 sm:p-6 lg:p-8">
            <Outlet /> 
          </div>
        </main>
      </div>
      <MessageButton />
    </div>
  )
}