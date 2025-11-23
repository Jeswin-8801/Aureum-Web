"use client";

import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "Beauty Influencer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    content:
      "Aureum changed my skincare routine completely. The quality of K-beauty products is unmatched, and the service is exceptional. My skin has never looked better!",
    rating: 5,
  },
  {
    name: "Emma Richardson",
    role: "Wellness Consultant",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    content:
      "I was skeptical at first, but the products from Aureum are genuinely effective. The Korean brands they carry are authentic and incredibly nourishing for sensitive skin.",
    rating: 5,
  },
  {
    name: "Jessica Park",
    role: "Content Creator",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica",
    content:
      "Finally found a trusted source for authentic Korean skincare! The variety, quality, and customer service at Aureum are outstanding. Highly recommend!",
    rating: 5,
  },
  {
    name: "Lisa Wong",
    role: "Fashion & Beauty Blogger",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
    content:
      "The attention to detail at Aureum is remarkable. Every product is carefully selected and the results speak for themselves. My skin barrier has never been stronger.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Loved by Our <span className="text-primary">Clients</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers who have transformed their
            skincare with Aureum's curated collection of premium Korean brands.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-lg border border-border p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-secondary text-secondary"
                  />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border border-border"
                />
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
