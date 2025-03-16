import PaintingCard from "@/components/PaintingCard";

const paintings = [
  { title: "Сияние заката", price: "1200 PLN", image: "/paintings/123.jpg" },
  { title: "Лесная тишина", price: "1500 PLN", image: "/paintings/124.jpg" },
  { title: "Голубые цветы", price: "900 PLN", image: "/paintings/125.jpg" },
];

export default function Gallery() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold text-center mb-8">Галерея картин 🎨</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {paintings.map((painting, index) => (
          <PaintingCard key={index} {...painting} />
        ))}
      </div>
    </div>
  );
}
