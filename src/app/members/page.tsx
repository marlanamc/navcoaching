'use client';

import React from 'react'

export default function Members() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center mb-8">Members Area</h1>
      <div className="max-w-2xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h2 className="text-2xl font-semibold mb-4">Welcome to Your Dashboard</h2>
          <p className="text-gray-600 mb-6">
            This is your private space to access resources, track progress, and manage your coaching journey.
          </p>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-medium mb-2">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-700">
                    View Progress Dashboard
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-700">
                    Access Resources
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-700">
                    Schedule Next Session
                  </a>
                </li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-medium mb-2">Recent Activity</h3>
              <p className="text-gray-600">No recent activity to display.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 