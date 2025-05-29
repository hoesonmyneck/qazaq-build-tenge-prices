
import { ArrowRight, Award, Users, Building } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="white" fill-opacity="0.05"%3E%3Cpath d="M20 20c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zm0-20c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8z"/%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Качественное строительство
            <span className="text-orange-400"> в Казахстане</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Профессиональные строительные услуги от проектирования до сдачи объекта под ключ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-lg px-8 py-4">
              Получить консультацию
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-800 text-lg px-8 py-4">
              Наши проекты
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex items-center justify-center space-x-3">
              <Award className="w-8 h-8 text-orange-400" />
              <div>
                <div className="text-2xl font-bold">15+</div>
                <div className="text-blue-200">лет опыта</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Building className="w-8 h-8 text-orange-400" />
              <div>
                <div className="text-2xl font-bold">200+</div>
                <div className="text-blue-200">объектов</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Users className="w-8 h-8 text-orange-400" />
              <div>
                <div className="text-2xl font-bold">500+</div>
                <div className="text-blue-200">довольных клиентов</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
