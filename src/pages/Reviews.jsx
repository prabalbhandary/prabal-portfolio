import React from 'react'
import { FaStar } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'
import { motion } from 'framer-motion'
import { Autoplay } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/autoplay';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'John Doe',
      rating: 5,
      reviewText: 'I’ve been using this product for a few weeks now, and I am genuinely impressed with how well it performs. The quality is top-notch, and it delivers exactly what was promised. From the moment I started using it, I could tell that it was built to last. I’ve tried several similar products in the past, but none of them compare to this one. The ease of use, combined with the exceptional results, has made it an essential part of my daily routine. I highly recommend it to anyone looking for a reliable and efficient solution. Definitely worth the investment!',
      image: '/images/people-1.jpg',
    },
    {
      id: 2,
      name: 'Jane Smith',
      rating: 4,
      reviewText: 'This product is very good overall, but there are a few minor things that could be improved. First of all, the build quality is excellent and the design is sleek and modern. It does what it’s supposed to do, and I’ve noticed a positive difference since using it. However, there are a couple of small features that could make the user experience even better. For example, a slightly more intuitive interface would be nice. Nonetheless, I’m still satisfied with my purchase and would recommend it to others. Great value for the price!',
      image: '/images/people-2.jpg',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      rating: 5,
      reviewText: 'Exceeded my expectations in every way! I’ve tried several similar products in the past, but this one truly stands out. The results are incredible, and I’ve seen significant improvements in just a few days of use. It’s clear that a lot of thought and care went into designing this product. The user-friendly features, combined with its effectiveness, make it an easy choice for anyone looking to improve their routine. I’m so glad I decided to give it a try, and I will definitely be purchasing it again. Highly recommended!',
      image: '/images/people-3.jpg',
    },
    {
      id: 4,
      name: 'Bob Lee',
      rating: 4,
      reviewText: 'The product is solid, and it works well for what it’s intended to do. I’ve been using it for a couple of weeks now, and it has delivered good results. My only issue is the delivery time, which was longer than expected. I understand that shipping times can vary, but I was hoping to receive it a bit sooner. Other than that, I am happy with the quality and performance of the product. I would definitely consider purchasing from this brand again in the future.',
      image: '/images/people-4.jpg',
    },
    {
      id: 5,
      name: 'Emily Davis',
      rating: 5,
      reviewText: 'I absolutely love this product! It has been a game-changer for me. I was a bit skeptical at first, but after using it for a few weeks, I can say with confidence that it lives up to the hype. It’s incredibly easy to use, and the results have been noticeable almost immediately. I also appreciate how durable and well-built it is. I’ve already recommended it to my friends and family, and I’m confident they will love it too. If you’re on the fence, don’t hesitate – this is a must-have!',
      image: '/images/people-5.jpg',
    },
    {
      id: 6,
      name: 'David Johnson',
      rating: 5,
      reviewText: 'Perfect for my needs, I love it! It’s exactly what I was looking for and more. I’ve been using this for a while now, and it has performed flawlessly. The features are incredibly useful, and the design is sleek and modern. What stands out the most is how reliable and consistent it is. It’s exactly what I needed, and I’m thrilled with my purchase. I highly recommend this to anyone looking for a product that delivers on its promises. Worth every penny!',
      image: '/images/people-6.jpg',
    }
  ];

  return (
    <section id="reviews" className="py-10">
      <h1 className="text-3xl font-bold text-center mb-8">What our customers say</h1>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center p-6 rounded-lg shadow-lg transform transition-all hover:scale-105"
            >
              <div className="flex mb-3">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={`text-xl ${index < review.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                  />
                ))}
              </div>

              <p className="text-lg text-center text-gray-600 mb-4">{review.reviewText}</p>

              <div className="flex items-center space-x-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full border-2 border-gray-200"
                />
                <div>
                  <h3 className="font-semibold text-lg text-white">{review.name}</h3>
                  <p className="text-sm text-white">Verified Buyer</p>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Reviews;
