
import { Home, Building2, Hammer, Wrench } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Жилищное строительство",
      description: "Строительство частных домов, коттеджей и многоквартирных домов",
      price: "от 180,000 ₸/м²",
    },
    {
      icon: Building2,
      title: "Коммерческое строительство",
      description: "Офисные здания, торговые центры, складские комплексы",
      price: "от 220,000 ₸/м²",
    },
    {
      icon: Hammer,
      title: "Капитальный ремонт",
      description: "Полная реконструкция и модернизация зданий",
      price: "от 85,000 ₸/м²",
    },
    {
      icon: Wrench,
      title: "Инженерные системы",
      description: "Проектирование и монтаж коммуникаций",
      price: "от 45,000 ₸/м²",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Наши услуги</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Полный спектр строительных услуг с гарантией качества и соблюдением сроков
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-none">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-800">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-4">
                  {service.description}
                </CardDescription>
                <div className="text-2xl font-bold text-orange-500">{service.price}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
