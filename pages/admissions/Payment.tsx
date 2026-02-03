
import React from 'react';
import { AdmissionsLayout } from '../../components/AdmissionsLayout';
import { CreditCard, Landmark, ShieldCheck } from 'lucide-react';

export const PaymentOptions: React.FC = () => (
  <AdmissionsLayout 
    title="Payment Options" 
    subtitle="Secure and convenient channels for institutional transactions." 
    icon={CreditCard}
  >
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="p-10 bg-gray-50 rounded-[3rem] border border-gray-100 space-y-8">
          <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm"><Landmark className="w-7 h-7" /></div>
          <h3 className="text-2xl font-bold text-primary">Bank Transfer (NEFT/RTGS)</h3>
          <div className="space-y-2 text-sm font-medium text-gray-500">
            <p>Account Name: Karnataka Educational Trust</p>
            <p>Bank: HDFC Bank</p>
            <p>A/c No: 502000XXXXXXXX</p>
            <p>IFSC: HDFC000XXXX</p>
            <p>Branch: Hegde Nagar, Bengaluru</p>
          </div>
        </div>

        <div className="p-10 bg-gray-50 rounded-[3rem] border border-gray-100 space-y-8">
          <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-secondary shadow-sm"><ShieldCheck className="w-7 h-7" /></div>
          <h3 className="text-2xl font-bold text-primary">Online Payment Portal</h3>
          <p className="text-sm text-gray-500 font-medium">Use our secure student portal to pay via Credit/Debit card, UPI, or Net Banking. Transaction charges may apply as per bank norms.</p>
          <button className="w-full bg-primary text-white py-4 rounded-xl font-black text-xs uppercase tracking-widest shadow-lg">Access Payment Portal</button>
        </div>
      </div>
    </div>
  </AdmissionsLayout>
);
