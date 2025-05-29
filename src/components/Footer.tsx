
import { Building2, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">СтройКазахстан</h3>
                <p className="text-sm text-gray-400">Строительная компания</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Надежный партнер в строительстве. Качество, которому можно доверять.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-gray-400 hover:text-blue-500 cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 text-gray-400 hover:text-pink-500 cursor-pointer transition-colors" />
              <Linkedin className="w-6 h-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Услуги</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Жилищное строительство</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Коммерческое строительство</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Капитальный ремонт</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Инженерные системы</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Проектирование</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Компания</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#about" className="hover:text-orange-400 transition-colors">О нас</a></li>
              <li><a href="#projects" className="hover:text-orange-400 transition-colors">Проекты</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Лицензии</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Сертификаты</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Вакансии</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Контакты</h4>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                <div>
                  <p>+7 (727) 123-45-67</p>
                  <p>+7 (747) 987-65-43</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                <p>info@stroykz.kz</p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                <p>г. Алматы, пр. Достык 123<br />БЦ "Алматы Тауэрс", офис 1205</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 СтройКазахстан. Все права защищены.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
