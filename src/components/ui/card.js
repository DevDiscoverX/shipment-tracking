// src/components/ui/card.jsx
import React from 'react';

export const Card = ({ children }) => (
  <div className="border rounded-lg shadow-lg bg-white">
    {children}
  </div>
);

export const CardHeader = ({ children }) => (
  <div className="p-4 border-b bg-gray-100">
    {children}
  </div>
);

export const CardContent = ({ children }) => (
  <div className="p-4">
    {children}
  </div>
);
