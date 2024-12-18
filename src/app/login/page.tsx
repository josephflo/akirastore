'use client'

import { PasskeyModal } from '@/components/ui/PassKeyModal';
import { ClientForm } from '@/components/forms/ClientForm';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

const AdminLogin = ({ searchParams }: SearchParamProps) => {
  const isAdmin = searchParams?.admin === "true";

  return (
    <div className="flex h-screen max-h-screen">
      {isAdmin && <PasskeyModal />}

      <section className="remove-scrollbar container my-auto ">
        <div className="sub-container max-w-[496px] justify-center">
          <Image
            src="/akira-logo.png"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-18 w-fit"
          />

          <ClientForm />

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 Akira Store
            </p>
            <Link href="login/?admin=true" className="text-green-500">
              Admin
            </Link>
            {/* <button type="button" onClick={() => setOpenModal(true)} className="text-green-500">
              Admin
            </button> */}

          </div>
        </div>
      </section>

      <section className="hidden md:flex w-1/2 bg-black flex-col items-center justify-center">
        <img
          src="/akira-logo-white.png"
          alt="Company Logo"
          className="max-h-full max-w-full"
        />
      </section>
    </div>
  )
}

export default AdminLogin