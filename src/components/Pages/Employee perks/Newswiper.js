import { Navigation, Pagination, Scrollbar, A11y, Autoplay, } from 'swiper';
import './newswiper.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import ShopingItemcards from '../../Cardbox/ShopingItemcards';

export default () => {
    return (
        <section id='newswiper'>
            <div className="container-fl" >
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Scrollbar]}
                    spaceBetween={-20}
                    navigation={false}
                   
                    slidesPerView={3}
                    Navigation={true}
                    pagination={{ clickable: false }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                breakpoints={{
                    // when window width is >= 640px
                    640: {
                        width: 640,
                        slidesPerView: 2,
                    },
                    // when window width is >= 768px
                    768: {
                        width: 768,
                        slidesPerView: 2,
                    },
                    1440: {
                        width: 1440,
                        slidesPerView: 3,
                    },
                    390: {
                        width: 390,
                        slidesPerView: 2,
                    },
                    1200: {
                        width: 1200,
                        slidesPerView: 2,
                    },
                }}
                >
                    <SwiperSlide><ShopingItemcards /></SwiperSlide>
                    <SwiperSlide><ShopingItemcards /></SwiperSlide>
                    <SwiperSlide><ShopingItemcards /></SwiperSlide>
                    <SwiperSlide><ShopingItemcards /></SwiperSlide>
                    <SwiperSlide><ShopingItemcards /></SwiperSlide>
                    <SwiperSlide><ShopingItemcards /></SwiperSlide>
                    <SwiperSlide><ShopingItemcards /></SwiperSlide>
                    <SwiperSlide><ShopingItemcards /></SwiperSlide>
                    <SwiperSlide><ShopingItemcards /></SwiperSlide>
                    <SwiperSlide><ShopingItemcards /></SwiperSlide>
                    <SwiperSlide><ShopingItemcards /></SwiperSlide>
                    <SwiperSlide><ShopingItemcards /></SwiperSlide>


                </Swiper>
            </div>
        </section>


    );
};