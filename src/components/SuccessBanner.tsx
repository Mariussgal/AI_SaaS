'use client';

import { useSearchParams } from 'next/navigation';

export default function SuccessBanner() {
  const searchParams = useSearchParams();
  const showSuccessMessage = searchParams.get('success') === 'true';
  
  if (!showSuccessMessage) {
    return null;
  }
  
  return (
    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
      <p className="font-medium">Thanks for your subscription !</p>
      <p>Your payment has been successfully processed.</p>
    </div>
  );
}