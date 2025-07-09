"use client"
import { useAuth } from "@/lib/auth-context"
import { AuthModal } from "@/components/auth/auth-modal"
import { HomePage } from "@/components/pages/home-page"

export default function RootPage() {
  const { user, isLoading } = useAuth()

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-purple-950 dark:via-pink-950 dark:to-blue-950">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground">Loading WishShop...</p>
        </div>
      </div>
    )
  }

  // Show main app - authentication will be handled by individual components
  return <HomePage />
}
