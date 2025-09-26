import Signin from '@/app/components/Auth/Signin'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Sign In - New Town Spares",
  description:
    "Login to your New Town Spares account to manage orders, track purchases, and access exclusive member features.",
  keywords: [
    "signin",
    "login",
    "new town spares",
    "customer login",
    "account access",
    "order tracking"
  ],
  robots: { index: true, follow: true },
};


const page = () => {
  return (
    <div>
      <Signin/>
    </div>
  )
}

export default page