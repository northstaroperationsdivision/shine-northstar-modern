import { Refrigerator, Waves, Utensils, Flame, Snowflake, IceCream } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Snowflake,
    title: "SubZeros",
    description: "Expert Repair for all Built In Refrigerator Brands And Models",
  },
  {
    icon: Waves,
    title: "Washers & Dryers",
    description: "Quick fixes for washing machines and dryers",
  },
  {
    icon: Utensils,
    title: "Dishwashers",
    description: "Professional dishwasher repair and maintenance",
  },
  {
    icon: Flame,
    title: "Ovens & Ranges",
    description: "Gas and electric oven repair services",
  },
  {
    icon: Refrigerator,
    title: "Refrigerators",
    description: "Fast refrigerator repair and Maintenance",
  },
  {
    icon: IceCream,
    title: "Ice Makers",
    description: "Ice maker maintenance and repair",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Appliances We Service
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional repair services for all major home appliances
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur border-primary/20"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
