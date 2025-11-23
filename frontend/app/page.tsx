import Header from "@/components/Header";
import ShaderHero from "@/components/ShaderHero";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { Sparkles } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <ShaderHero />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Why Choose <span className="text-primary">Aureum</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Experience the best of Korean skincare with our curated selection
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg border border-border p-8 hover:border-primary transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Sparkles className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Authentic Products
              </h3>
              <p className="text-muted-foreground">
                100% genuine Korean skincare products directly from trusted
                brands. Every item is carefully verified for authenticity.
              </p>
            </div>

            <div className="bg-card rounded-lg border border-border p-8 hover:border-primary transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Sparkles className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Expert Curation
              </h3>
              <p className="text-muted-foreground">
                Our team of beauty experts handpicks each product to ensure you
                get the best solutions for your skin type and concerns.
              </p>
            </div>

            <div className="bg-card rounded-lg border border-border p-8 hover:border-primary transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Sparkles className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Premium Support
              </h3>
              <p className="text-muted-foreground">
                Get personalized skincare advice and support from our dedicated
                team. We're here to help you achieve your skin goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-primary mb-2">5000+</p>
              <p className="text-muted-foreground">Happy Customers</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">50+</p>
              <p className="text-muted-foreground">Premium Brands</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">1000+</p>
              <p className="text-muted-foreground">Skincare Products</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">4.9★</p>
              <p className="text-muted-foreground">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-lg p-12 text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Transform Your Skin?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of satisfied customers and discover the
              transformative power of authentic Korean skincare.
            </p>
            <button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Shop Now
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
