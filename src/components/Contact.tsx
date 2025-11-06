import { Phone, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Ready to Fix Your Appliance?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Call us now for fast, reliable appliance repair service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          <Card className="text-center bg-card/50 backdrop-blur border-primary/20 hover:shadow-glow transition-all duration-300 group">
            <CardContent className="pt-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Call Us</h3>
                <a 
                  href="tel:469-394-5552" 
                  className="text-primary hover:text-accent transition-colors text-xl font-semibold"
                >
                  469-394-5552
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center bg-card/50 backdrop-blur border-primary/20 hover:shadow-glow transition-all duration-300 group">
            <CardContent className="pt-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Hours</h3>
                <p className="text-muted-foreground text-lg">Mon-Sat: 8AM-6PM</p>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center bg-card/50 backdrop-blur border-primary/20 hover:shadow-glow transition-all duration-300 group">
            <CardContent className="pt-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Service Area</h3>
                <p className="text-muted-foreground text-lg">Dallas-Fort Worth</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="text-lg px-12 py-6 bg-gradient-to-r from-primary to-accent hover:shadow-glow transition-all duration-300 group"
            asChild
          >
            <a href="tel:469-394-5552" className="flex items-center gap-2">
              <Phone className="w-5 h-5 group-hover:animate-bounce" />
              Call 469-394-5552
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
