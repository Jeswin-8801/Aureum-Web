import Link from "next/link"; // 1. Use Next.js Link
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// making it very fast. The location/error logic is handled by Next.js.

const NotFound = () => {
  return (
    // Note: The Header and Footer here assume they are compatible Server Components
    // or are Client Components used appropriately within the Server Component tree.
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center pt-24 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <p className="text-2xl font-semibold text-foreground mb-2">
            Page Not Found
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist. Let's get you back on
            track.
          </p>
          <Link
            href="/"
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
