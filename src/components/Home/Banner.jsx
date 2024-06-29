import Slider from "react-slick";

const Banner = () => {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  };

  const bannerData = [
    {
      image:
        "https://i.ibb.co/BKQTw4N/j-balla-photography-o-Mzfu2s-Xkr-E-unsplash.jpg",

      title: "The Elegance of Origami: Paper Folding Art",
      description:
        "Discover the timeless art of origami, where simple paper transforms into intricate designs. Learn techniques and patterns to create beautiful paper sculptures.",
    },
    {
      image: "https://i.ibb.co/R25HFnF/marjan-blan-Fbr7-OIj-Aj-UE-unsplash.jpg",
      title: "Mastering the Art of Glassworking",
      description:
        "Explore the ancient craft of glassworking, from basic techniques to advanced artistry. Transform molten glass into breathtaking creations with expert guidance.",
    },
    {
      image: "https://i.ibb.co/LnnkDPJ/olya-p-1w-A9p3-T6zg-unsplash.jpg",
      title: "Creative Scrapbooking: Preserving Memories with Art",
      description:
        "Dive into the world of scrapbooking, where photos and memorabilia come together in personalized, artistic layouts. Learn techniques to creatively document your cherished memories.",
    },
    {
      image:
        "https://i.ibb.co/pPT6GPq/giulia-bertelli-za-I26h-Wyr-PY-unsplash.jpg",
      title: "Card Making Magic: Crafting Personalized Greetings",
      description:
        "Unleash your creativity with card making, designing unique, handmade cards for every occasion. Discover techniques to add a personal touch to your heartfelt greetings.",
    },
  ];

  return (
    <div className="slider-container cursor-move mt-4 w-auto">
      <Slider {...settings}>
        {bannerData.map((banner, index) => (
          <div key={index} className="relative bg-black">
            <img
              className="w-full h-[320px] object-cover "
              src={banner.image}
              alt=""
            />
            <div className="bg-gradient-to-r from-indigo-800 from-10% via-sky-800 via-30% to-emerald-500 to-90% h-[200px]">
              <div className="text-center text-white font-bold pt-6">
                <h1 className="text-lg md:text-4xl font-bold text-gray-100 playwrite-mx">
                  {banner.title}
                </h1>
                <p className="text-sm md:text-lg md:w-1/2 text-justify mx-auto p-3">
                  {banner.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
