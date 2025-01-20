import React from 'react';
import { Search } from 'lucide-react';
import { Card, CardContent, CardHeader } from './components/ui/card';

// Import your CSS file here
import './index.css';  // or './tailwind.css', depending on your CSS file name

const ShipmentTracking = () => {
  const transitHistory = [
    { status: 'GATE OUT', location: 'XYZ-COMPANY', dateTime: '24 OCT 2024 08:50:00 PM' },
    { status: 'Pickup', location: 'XYZ', dateTime: '24 OCT 2024 06:45:00 PM' },
    { status: 'Branch - IN', location: 'XYZ', dateTime: '25 OCT 2024 04:14:00 AM' },
    { status: 'Branch - OUT', location: 'XYZ', dateTime: '25 OCT 2024 08:55:00 PM' },
    { status: 'Destination PC - IN', location: 'XYZ', dateTime: '26 OCT 2024 12:34:00 PM' },
    { status: 'Waybill Offloaded Date: 26-OCT-24', location: 'XYZ', dateTime: '26 OCT 2024 06:19:00 PM' },
    { status: 'Branch - OUT', location: 'XYZ', dateTime: '27 OCT 2024 07:55:00 AM' },
    { status: 'Branch - IN', location: 'XYZ', dateTime: '27 OCT 2024 02:00:00 PM' },
    { status: 'Out for delivery', location: 'XYZ', dateTime: '28 OCT 2024 08:43:00 AM' },
    { status: 'Out for delivery', location: 'XYZ', dateTime: '29 OCT 2024 10:21:00 AM' },
    { status: 'Out for delivery', location: 'XYZ', dateTime: '30 OCT 2024 11:58:00 AM' }
  ];

  const stages = ['Pickup', 'Received', 'Dispatched', 'InTransit', 'OutForDelivery', 'Delivered'];

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="text-xl font-bold text-emerald-500 mb-6">
        SPARES @ BAJAJ AUTO CLONE APP
      </div>

      <div className="flex gap-4 mb-6">
        <div className="flex-1">
          <label className="block text-sm mb-1">Search</label>
          <div className="flex gap-2">
            <input 
              type="text" 
              value="541808053"
              className="border rounded px-3 py-2 w-full"
            />
            <button className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-6 py-2 rounded">
              Submit
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-gray-600">Transporter</div>
              <div>JTPL</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">Delivery No</div>
              <div>12345678</div>
            </div>
          </div>

          <div className="space-y-2">
            <div>
              <div className="text-sm text-gray-600">Contact Person</div>
              <div>JHON</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">Contact Number</div>
              <div>000000000</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">Contact Email</div>
              <div>NA@GMAIL.com</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-gray-600">Distributor/Dealer</div>
              <div>NOT AVAIBALE</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">From</div>
              <div>XYZ-802</div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <div className="text-sm text-gray-600">Invoice No</div>
              <div>123456789</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">Invoice Date</div>
              <div>24 OCT 2024 10:43:00 AM</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">No Of Boxes</div>
              <div>1</div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <div className="text-sm text-gray-600">On Time</div>
              <div className="inline-block px-2 py-1 rounded bg-green-100 text-green-800">YES</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">POD</div>
              <div className="inline-block px-2 py-1 rounded bg-red-100 text-red-800">NO</div>
            </div>
          </div>

          <div>
            <div className="text-sm font-medium">Status: <span className="text-green-600">Delivered</span></div>
            <div className="text-sm font-medium">API Status: <span className="text-green-600">DELIVERED</span></div>
            <div className="text-sm font-medium">Expected Date & Time: 2024-10-27</div>
          </div>

          <div className="relative">
            <div className="flex justify-between mb-4">
              {stages.map((stage, index) => (
                <div key={stage} className="flex flex-col items-center w-16">
                  <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-sm mb-2">
                    ✓
                  </div>
                  <div className="text-xs text-center">{stage}</div>
                </div>
              ))}
            </div>
            <div className="absolute top-3 left-8 right-8 h-0.5 bg-green-500" />
          </div>

          <div className="text-sm text-gray-600 mt-4">
            We are unable to retrieve data API associated delivery number.
            <div className="mt-1">Last Api Call: 2024-12-15T13:48:58.000Z</div>
          </div>
        </div>

        <Card>
          <CardHeader>
            <div className="text-lg font-medium">Transit History</div>
          </CardHeader>
          <CardContent>
            <table className="w-full">
              <thead className="bg-yellow-50">
                <tr>
                  <th className="text-left p-2">Status</th>
                  <th className="text-left p-2">Location</th>
                  <th className="text-left p-2">Date&Time</th>
                </tr>
              </thead>
              <tbody>
                {transitHistory.map((item, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-2">{item.status}</td>
                    <td className="p-2">{item.location}</td>
                    <td className="p-2">{item.dateTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ShipmentTracking;
