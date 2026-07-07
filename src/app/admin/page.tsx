import React from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { LayoutDashboard, FolderKanban, Settings, LogOut, Upload } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-primary-bg flex">
      {/* Sidebar */}
      <aside className="w-64 bg-secondary-bg border-r border-accent-bg/30 p-6 flex flex-col h-screen sticky top-0">
        <div className="mb-12">
          <h1 className="font-serif text-2xl text-primary-text">NIVEDA Admin</h1>
        </div>
        
        <nav className="flex-1 space-y-4">
          <a href="#" className="flex items-center gap-3 text-primary-text font-medium bg-accent-bg/20 p-3 rounded-lg">
            <LayoutDashboard size={20} /> Dashboard
          </a>
          <a href="#" className="flex items-center gap-3 text-secondary-text hover:text-primary-text hover:bg-accent-bg/10 p-3 rounded-lg transition-colors">
            <FolderKanban size={20} /> Projects
          </a>
          <a href="#" className="flex items-center gap-3 text-secondary-text hover:text-primary-text hover:bg-accent-bg/10 p-3 rounded-lg transition-colors">
            <Settings size={20} /> Settings
          </a>
        </nav>
        
        <div>
          <Button variant="ghost" className="w-full justify-start gap-3 border-none">
            <LogOut size={20} /> Logout
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 md:p-12">
        <header className="mb-10 flex justify-between items-center">
          <h2 className="text-3xl font-serif text-primary-text">Dashboard</h2>
          <Button variant="primary" className="gap-2">
            <Upload size={18} /> New Project
          </Button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6">
            <h3 className="text-secondary-text text-sm uppercase tracking-wider mb-2">Total Projects</h3>
            <p className="text-4xl text-primary-text font-serif">8</p>
          </Card>
          <Card className="p-6">
            <h3 className="text-secondary-text text-sm uppercase tracking-wider mb-2">Total Visitors</h3>
            <p className="text-4xl text-primary-text font-serif">1,204</p>
          </Card>
          <Card className="p-6">
            <h3 className="text-secondary-text text-sm uppercase tracking-wider mb-2">Consultations</h3>
            <p className="text-4xl text-primary-text font-serif">12</p>
          </Card>
        </div>

        <div>
          <h3 className="text-xl text-primary-text font-serif mb-6">Recent Projects</h3>
          <div className="bg-secondary-bg rounded-xl border border-accent-bg/30 overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-accent-bg/10 border-b border-accent-bg/30 text-secondary-text text-sm uppercase tracking-wider">
                <tr>
                  <th className="p-4 font-medium">Project Name</th>
                  <th className="p-4 font-medium">Category</th>
                  <th className="p-4 font-medium">Status</th>
                  <th className="p-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-accent-bg/20 text-primary-text">
                <tr>
                  <td className="p-4">Panvel Interior Work</td>
                  <td className="p-4">Interior Design</td>
                  <td className="p-4"><span className="px-2 py-1 bg-green-900/10 text-green-700 text-xs rounded uppercase tracking-wider">Published</span></td>
                  <td className="p-4"><button className="text-luxury-accent text-sm underline">Edit</button></td>
                </tr>
                <tr>
                  <td className="p-4">KJ Bungalow Design</td>
                  <td className="p-4">Architecture</td>
                  <td className="p-4"><span className="px-2 py-1 bg-green-900/10 text-green-700 text-xs rounded uppercase tracking-wider">Published</span></td>
                  <td className="p-4"><button className="text-luxury-accent text-sm underline">Edit</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
