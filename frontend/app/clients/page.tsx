import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Clients() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto py-20">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Clients</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Meet the trusted brands and partners who work with Aureum.
            </p>
          </div>

          <div className="bg-card rounded-lg border border-border p-12 space-y-6 text-muted-foreground">
            <p>
              <strong>This page is being developed.</strong> Tell us about your
              client partnerships and featured brands.
            </p>
            <p>
              Share details about: Which K-beauty brands do you partner with? Do
              you have any celebrity endorsements? What partnerships are most
              important to highlight?
            </p>
            <p>
              We'll create a showcase of your clients and partners that builds
              credibility and trust with your customers.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
