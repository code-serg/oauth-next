'use client';
import { SessionProvider } from 'next-auth/react';

export default function ProvidersWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SessionProvider>
      {children} {/* the entire app is wrapped in this and has access to NextAuth session data */}
    </SessionProvider>
  )
}