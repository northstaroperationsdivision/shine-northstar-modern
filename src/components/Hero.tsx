import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/northstar-logo.jpg";
const Hero = () => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          {/* Logo */}
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl group-hover:bg-primary/30 transition-all duration-500" />
            <img src={logo} alt="NorthStar Appliances Logo" className="relative w-full max-w-2xl h-auto rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500" />
          </div>

          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
              NorthStar Appliance Services
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl">
              Expert appliance repair you can trust. Fast, reliable service for all major appliances.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-accent hover:shadow-glow transition-all duration-300 group" asChild>
              <a href="tel:469-394-5552" className="flex items-center gap-2">Call  Or Text 469-394-5552 <Phone className="w-5 h-5 group-hover:animate-bounce" />
                Call Now: 469-394-5552
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary/50 hover:bg-primary/10 transition-all duration-300" onClick={scrollToServices}>
              Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;