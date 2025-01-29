'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed lg:hidden z-50 top-4 left-4 p-2 bg-dark rounded-lg"
      >
        {isOpen ? <X className="text-surface" /> : <Menu className="text-surface" />}
      </button>

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-dark transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className="h-full overflow-y-auto px-4 py-6">
          <h2 className="text-2xl font-bold text-accent mb-8">LearnAI</h2>
          
          <nav>
            <ul className="space-y-2">
              {[
                { name: 'Home', icon: '🏠' },
                { name: 'Campaign', icon: '📊' },
                { name: 'Payments', icon: '💳' },
                { name: 'Influencer', icon: '👤' },
                { name: 'Settings', icon: '⚙️' },
              ].map((item) => (
                <li key={item.name}>
                  <a 
                    href="#" 
                    className="flex items-center p-3 text-surface hover:bg-primary rounded-lg transition-colors"
                  >
                    <span className="mr-3 text-lg">{item.icon}</span>
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}