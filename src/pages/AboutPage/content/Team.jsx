import cls from './Team.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from "swiper/modules";
import img1 from './images/1.png'
import img2 from './images/2.png'
import img3 from './images/3.png'
import img4 from './images/4.png'


export const Team = () =>{
    return(
        <section className={cls.teamWrapper}>
            <div className={cls.teamContent}>
                <div className={cls.teamTitleBlock}>
                    <h3>команда</h3>
                    <p>Наша команда — это профессионалы с разным опытом и взглядами, которых объединяют общие ценности и цели. Их знания и стратегический подход помогают нам добиваться успеха. </p>
                </div>
                <div className={cls.teamSlider}>
                    <Swiper
                        modules={[Navigation]}
                        slidesPerView={3.7}
                        spaceBetween={96}
                        loop={true}
                        breakpoints={{
                            0:{
                                slidesPerView: 1.3,
                                spaceBetween: 48
                            },
                            960:{
                                slidesPerView: 3.7,
                                spaceBetween: 96
                            }
                        }}
                    >
                        <SwiperSlide>
                            <div className={cls.teamSliderItem}>
                                <div>
                                    <img src={img1} alt='img'/>
                                </div>
                                <div>
                                    <p>Кыванч Татлытуг</p>
                                    <p>CEO</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={cls.teamSliderItem}>
                                <div>
                                    <img src={img2} alt='img'/>
                                </div>
                                <div>
                                    <p>Фахрийе Эвджен</p>
                                    <p>Глава отдела продуктивности</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={cls.teamSliderItem}>
                                <div>
                                    <img src={img3} alt='img'/>
                                </div>
                                <div>
                                    <p>Чагатай Улусой</p>
                                    <p>Коммерческий директор</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={cls.teamSliderItem}>
                                <div>
                                    <img src={img4} alt='img'/>
                                </div>
                                <div>
                                    <p>Бурак Озчивит</p>
                                    <p>Директор по маркетингу</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}