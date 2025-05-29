
import { CheckCircle, Users, Award, Clock } from "lucide-react";

const About = () => {
  const features = [
    "Собственная производственная база",
    "Квалифицированные специалисты",
    "Современные технологии строительства",
    "Контроль качества на всех этапах",
    "Гарантия на все виды работ",
    "Соблюдение сроков строительства"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">О компании СтройКазахстан</h2>
            <p className="text-lg text-gray-600 mb-6">
              Мы - ведущая строительная компания Казахстана с 15-летним опытом работы. 
              Специализируемся на возведении жилых и коммерческих объектов любой сложности.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Наша команда состоит из высококвалифицированных инженеров, архитекторов и 
              строителей, которые обеспечивают качественное выполнение проектов в срок.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-800">150+</div>
                <div className="text-gray-600">сотрудников</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-8 h-8 text-orange-600" />
                </div>
                <div className="text-2xl font-bold text-gray-800">25+</div>
                <div className="text-gray-600">наград</div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Наши преимущества</h3>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-orange-50 rounded-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <Clock className="w-6 h-6 text-blue-600" />
                  <span className="font-semibold text-gray-800">Работаем круглосуточно</span>
                </div>
                <p className="text-gray-600">
                  Наша служба поддержки и экстренное реагирование доступны 24/7
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
