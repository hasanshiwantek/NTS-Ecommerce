"use client";
import React from 'react'
import CheckoutComponent from '../components/CheckoutComponent/CheckoutComponent'
import ProtectedLayout from '../components/ProtectedPages/ProtectedLayout'

const page = () => {
  return (
    <ProtectedLayout>
      <div>
        <CheckoutComponent/>
      </div>
    </ProtectedLayout>
  )
}

export default page