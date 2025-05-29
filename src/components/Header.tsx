import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import ConsultationForm from "./ConsultationForm";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleCallbackClick = () => {
    setIsFormOpen(true);
  };

  return (
    <>
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">СК</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">СтройКазахстан</h1>
                <p className="text-sm text-gray-600">Строительная компания</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Главная</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Услуги</a>
              <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors">Проекты</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">О нас</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Контакты</a>
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Phone className="w-4 h-4" />
                <span>+7 (727) 123-45-67</span>
              </div>
              <Button 
                className="bg-orange-500 hover:bg-orange-600"
                onClick={handleCallbackClick}
              >
                Заказать звонок
              </Button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-700 hover:text-blue-600">Главная</a>
                <a href="#services" className="text-gray-700 hover:text-blue-600">Услуги</a>
                <a href="#projects" className="text-gray-700 hover:text-blue-600">Проекты</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600">О нас</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600">Контакты</a>
              </nav>
            </div>
          )}
        </div>
      </header>

      <ConsultationForm 
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        formType="callback"
      />
    </>
  );
};

export default Header;
