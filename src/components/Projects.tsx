
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Жилой комплекс 'Астана Плаза'",
      location: "г. Нур-Султан",
      type: "Жилое строительство",
      area: "45,000 м²",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&h=300&fit=crop",
      status: "Завершен",
    },
    {
      title: "Торговый центр 'Алматы Молл'",
      location: "г. Алматы",
      type: "Коммерческое строительство",
      area: "32,000 м²",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop",
      status: "В процессе",
    },
    {
      title: "Офисный комплекс 'Бизнес Парк'",
      location: "г. Шымкент",
      type: "Коммерческое строительство",
      area: "28,000 м²",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop",
      status: "Завершен",
    },
    {
      title: "Коттеджный поселок 'Зеленая долина'",
      location: "Алматинская область",
      type: "Жилое строительство",
      area: "15,000 м²",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=300&fit=crop",
      status: "Планируется",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Наши проекты</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Примеры реализованных и текущих строительных проектов по всему Казахстану
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <Badge 
                  className={`absolute top-4 right-4 ${
                    project.status === 'Завершен' ? 'bg-green-500' : 
                    project.status === 'В процессе' ? 'bg-blue-500' : 'bg-gray-500'
                  }`}
                >
                  {project.status}
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.location}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{project.type}</span>
                  <span>{project.area}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
