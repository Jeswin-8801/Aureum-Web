import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto py-20">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-foreground mb-4">
              About <span className="text-primary">Aureum</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Learn more about our mission to bring authentic Korean skincare to
              the world.
            </p>
          </div>

          <div className="bg-card rounded-lg border border-border p-12 space-y-6 text-muted-foreground">
            <p>
              <strong>This page is being crafted.</strong> Continue chatting to
              have us fill in the details about your brand story, mission, and
              values.
            </p>
            <p>
              Share with us: What's your brand's unique story? What drives your
              passion for Korean skincare? What are your core values and
              mission?
            </p>
            <p>
              Once you provide these details, we'll create a compelling About Us
              page that resonates with your customers and reflects your brand
              identity.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
