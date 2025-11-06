import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Sarah Johnson",
    time: "2 weeks ago",
    text: "Exceptional service! My refrigerator was fixed within hours. The technician was professional, knowledgeable, and very friendly. Highly recommend Northstar!",
    initials: "SJ",
  },
  {
    name: "Michael Chen",
    time: "1 month ago",
    text: "Quick response time and fair pricing. They diagnosed the issue with my washer immediately and had it working perfectly by the end of the day.",
    initials: "MC",
  },
  {
    name: "Emily Rodriguez",
    time: "3 weeks ago",
    text: "Best appliance repair service in the area! They repaired my dishwasher and explained everything clearly. Very professional and courteous.",
    initials: "ER",
  },
  {
    name: "David Thompson",
    time: "1 week ago",
    text: "I've used Northstar twice now for different appliances. Both times they exceeded my expectations. Honest, reliable, and skilled technicians.",
    initials: "DT",
  },
  {
    name: "Lisa Anderson",
    time: "2 months ago",
    text: "Outstanding service from start to finish. They fixed my oven quickly and at a reasonable price. Will definitely use them again!",
    initials: "LA",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full bg-card/50 backdrop-blur border-primary/20 hover:shadow-glow transition-all duration-300">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center gap-3 mb-4">
                        <Avatar className="border-2 border-primary/50">
                          <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground font-semibold">
                            {testimonial.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.time}</p>
                        </div>
                      </div>
                      <div className="flex gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-foreground/80 flex-1">{testimonial.text}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-primary/50 hover:bg-primary/10" />
            <CarouselNext className="border-primary/50 hover:bg-primary/10" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
