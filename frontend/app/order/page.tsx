import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Order() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto py-20">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-foreground mb-4">
              Order from <span className="text-primary">Aureum</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Browse our collection and place your order today.
            </p>
          </div>

          <div className="bg-card rounded-lg border border-border p-12 space-y-6 text-muted-foreground">
            <p>
              <strong>This page is under construction.</strong> Help us build
              your product catalog and ordering experience.
            </p>
            <p>
              What would you like to include? Tell us about: Your featured
              products and categories, pricing and bundle options, inventory and
              availability, shipping and delivery details, or any special
              promotions.
            </p>
            <p>
              We'll create an engaging shopping experience that showcases your
              premium K-beauty collection and makes ordering seamless.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
