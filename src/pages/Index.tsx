import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Icon from '@/components/ui/icon';

const products = [
  {
    id: 1,
    name: "Духовой шкаф Premium X1",
    price: 89900,
    image: "https://cdn.poehali.dev/projects/23b54783-75cb-45f5-b239-e8ecf680031b/files/4476a5c9-74e7-4ef1-b275-e64caae9d2f7.jpg",
    category: "Духовые шкафы"
  },
  {
    id: 2,
    name: "Кофемашина Elite Pro",
    price: 129900,
    image: "https://cdn.poehali.dev/projects/23b54783-75cb-45f5-b239-e8ecf680031b/files/ec162eab-89af-4365-b954-038fbc7d3dcd.jpg",
    category: "Кофемашины"
  },
  {
    id: 3,
    name: "Холодильник Crystal",
    price: 249900,
    image: "https://cdn.poehali.dev/projects/23b54783-75cb-45f5-b239-e8ecf680031b/files/70548baa-d318-4f81-846a-578ba1f3be2b.jpg",
    category: "Холодильники"
  },
  {
    id: 4,
    name: "Варочная панель Induction",
    price: 74900,
    image: "https://cdn.poehali.dev/projects/23b54783-75cb-45f5-b239-e8ecf680031b/files/c25cc07c-5156-45f2-90f1-1b37c6f4be7b.jpg",
    category: "Варочные панели"
  },
  {
    id: 5,
    name: "Посудомоечная машина Smart",
    price: 94900,
    image: "https://cdn.poehali.dev/projects/23b54783-75cb-45f5-b239-e8ecf680031b/files/ba3bbcb3-a1b2-4973-ac24-df8e664b38fc.jpg",
    category: "Посудомоечные машины"
  },
  {
    id: 6,
    name: "Винный шкаф Premium",
    price: 159900,
    image: "https://cdn.poehali.dev/projects/23b54783-75cb-45f5-b239-e8ecf680031b/files/79213e54-668e-4459-88b0-02226af57367.jpg",
    category: "Винные шкафы"
  }
];

const Index = () => {
  const [cart, setCart] = useState<typeof products>([]);
  const [helpOpen, setHelpOpen] = useState(false);

  const addToCart = (product: typeof products[0]) => {
    setCart([...cart, product]);
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-border sticky top-0 bg-white z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
              </div>
              <h1 className="text-2xl font-bold tracking-tight">CAPITENT</h1>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#catalog" className="text-sm font-medium hover:text-secondary transition-colors">Каталог</a>
              <a href="#content" className="text-sm font-medium hover:text-secondary transition-colors">Контент</a>
              <a href="#info" className="text-sm font-medium hover:text-secondary transition-colors">Инфо</a>
              <a href="#new" className="text-sm font-medium hover:text-secondary transition-colors">Новинки</a>
            </nav>

            <Button variant="ghost" size="icon" className="relative">
              <Icon name="ShoppingCart" size={20} />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-secondary text-primary text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </Button>
          </div>
        </div>
      </header>

      <main>
        <section className="bg-[#F5F5F5] py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h2 className="text-5xl font-bold mb-6 leading-tight">Премиальная<br />бытовая техника</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Создаём технику, которая превращает ежедневные действия в ритуалы удовольствия. 
                Инновации и дизайн для тех, кто ценит качество жизни.
              </p>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Открыть каталог
              </Button>
            </div>
          </div>
        </section>

        <section id="content" className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">Наша миссия</h3>
                <p className="text-muted-foreground mb-6">
                  Мы создаём премиальную бытовую технику, которая объединяет передовые технологии, 
                  элегантный дизайн и безупречное качество. Каждое изделие — результат тщательной 
                  работы инженеров и дизайнеров, стремящихся к совершенству.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="Award" size={24} className="text-secondary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Качество превыше всего</h4>
                      <p className="text-sm text-muted-foreground">Каждая деталь продумана до мелочей</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Sparkles" size={24} className="text-secondary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Инновационный дизайн</h4>
                      <p className="text-sm text-muted-foreground">Современная эстетика для вашего дома</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Leaf" size={24} className="text-secondary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Экологичность</h4>
                      <p className="text-sm text-muted-foreground">Забота о планете в каждом продукте</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] bg-gradient-to-br from-secondary/20 to-primary/10 rounded-lg"></div>
            </div>
          </div>
        </section>

        <section id="catalog" className="py-20 bg-[#F5F5F5]">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold mb-12">Каталог</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Card key={product.id} className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow">
                  <div className="aspect-square bg-white overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <p className="text-xs text-muted-foreground mb-2 font-medium">{product.category}</p>
                    <h4 className="font-semibold mb-2 text-lg">{product.name}</h4>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-2xl font-bold">{product.price.toLocaleString('ru-RU')} ₽</span>
                      <Button 
                        onClick={() => addToCart(product)}
                        size="sm"
                        className="bg-secondary text-primary hover:bg-secondary/90"
                      >
                        В корзину
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="info" className="py-20">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold mb-12 text-center">Преимущества</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <Icon name="Truck" size={40} className="mx-auto mb-4 text-secondary" />
                <h4 className="font-semibold mb-2">Бесплатная доставка</h4>
                <p className="text-sm text-muted-foreground">По всей России</p>
              </div>
              <div className="text-center">
                <Icon name="Shield" size={40} className="mx-auto mb-4 text-secondary" />
                <h4 className="font-semibold mb-2">Гарантия 5 лет</h4>
                <p className="text-sm text-muted-foreground">На всю технику</p>
              </div>
              <div className="text-center">
                <Icon name="Headphones" size={40} className="mx-auto mb-4 text-secondary" />
                <h4 className="font-semibold mb-2">Поддержка 24/7</h4>
                <p className="text-sm text-muted-foreground">Всегда на связи</p>
              </div>
              <div className="text-center">
                <Icon name="Star" size={40} className="mx-auto mb-4 text-secondary" />
                <h4 className="font-semibold mb-2">Премиум качество</h4>
                <p className="text-sm text-muted-foreground">Европейские стандарты</p>
              </div>
            </div>
          </div>
        </section>

        <section id="new" className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold mb-4">Новинки уже скоро</h3>
            <p className="text-lg mb-8 opacity-90">Подпишитесь на рассылку и узнавайте о новинках первыми</p>
            <div className="flex max-w-md mx-auto gap-2">
              <input 
                type="email" 
                placeholder="Ваш email"
                className="flex-1 px-4 py-3 rounded bg-white text-primary"
              />
              <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/90">
                Подписаться
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#F5F5F5] py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h5 className="font-bold mb-4">CAPITENT</h5>
              <p className="text-sm text-muted-foreground">Премиальная бытовая техника для вашего дома</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Каталог</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Духовые шкафы</li>
                <li>Кофемашины</li>
                <li>Холодильники</li>
                <li>Варочные панели</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Информация</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>О компании</li>
                <li>Доставка</li>
                <li>Гарантия</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Контакты</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+7 (495) 123-45-67</li>
                <li>info@capitent.ru</li>
                <li>Москва, ул. Примерная, 1</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            © 2024 CAPITENT. Все права защищены.
          </div>
        </div>
      </footer>

      <Sheet open={helpOpen} onOpenChange={setHelpOpen}>
        <SheetTrigger asChild>
          <Button 
            size="icon" 
            className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg bg-secondary text-primary hover:bg-secondary/90"
          >
            <Icon name="MessageCircle" size={24} />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Чем могу помочь?</SheetTitle>
          </SheetHeader>
          <div className="mt-6 space-y-4">
            <p className="text-sm text-muted-foreground">
              Здравствуйте! Я виртуальный помощник CAPITENT. Готов ответить на ваши вопросы о товарах, 
              доставке, гарантии и сервисе.
            </p>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <Icon name="Package" size={16} className="mr-2" />
                Вопросы о доставке
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Icon name="CreditCard" size={16} className="mr-2" />
                Способы оплаты
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Icon name="Settings" size={16} className="mr-2" />
                Установка техники
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Icon name="Phone" size={16} className="mr-2" />
                Связаться с менеджером
              </Button>
            </div>
            <div className="pt-4 border-t">
              <p className="text-xs text-muted-foreground">
                Или напишите ваш вопрос:
              </p>
              <textarea 
                className="w-full mt-2 p-3 border rounded-md resize-none text-sm"
                rows={4}
                placeholder="Введите ваш вопрос..."
              />
              <Button className="w-full mt-2 bg-secondary text-primary hover:bg-secondary/90">
                Отправить
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Index;