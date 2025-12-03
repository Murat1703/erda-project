import cls from './AdvantagesSection.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from "swiper/modules";
import img1 from './images/64e982869cc94cc605ba76f87e42dd0d35eee849.png'
import img2 from './images/c8cc5e594bb4ec1d2657259467ba15ecb79879c7.png'
import img3 from './images/c99be4bad53a2dff228d7a188ca93941288e7fa8.png'
import img4 from './images/3999ba5b0d3a956cbafe5c0254385f667031e713.png'
import img5 from './images/561b197b94fcb36009329a3cca54dffb150b93be.png'
import img6 from './images/fec0187a81cbfc1ac6e686e32a78e58eae9edd14.png'
import img7 from './images/0de8d2ba1cb9da15d2276a8049b1488f5cad31d0.png'
import img8 from './images/aa0e80179ad34ea0d690e022f2748664a5854af2.png'
import img9 from './images/45af3c289eaf3580e28d2678c6bb8954381e6320.png'
import img10 from './images/87cf2499de99ca128e56ed90cbe0ca5079714111.png'


export const AdvantagesSection = () =>{
    return(
        <section className={cls.advantagesWrapper}>
            <div className={cls.advantagesContent}>
                <h2>Преимущества</h2>
                <div className={cls.advantagesSlider}>
                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            prevEl: '.prevBtn',
                            nextEl:  '.nextBtn',
                        }}
                        loop={true}
                        slidesPerView={3.7}
                        spaceBetween={96}
                        breakpoints={{
                            0: {
                                slidesPerView: 1.3,
                                spaceBetween: 56
                            },
                            960: {
                                slidesPerView: 3.7,
                                spaceBetween: 96
                            }
                        }}
                    >
                        <SwiperSlide>
                            <div className={cls.advantagesSliderItem}>
                                <div className={cls.advantagesSliderImgWrapper}>
                                    <img src={img1} alt='img'/>
                                </div>
                                <div className={cls.advantagesSliderInfo}>
                                    <p>Безопасность</p>
                                    <p>Круглосуточная охрана, видеонаблюдение и контроль доступа.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={cls.advantagesSliderItem}>
                                <div className={cls.advantagesSliderImgWrapper}>
                                    <img src={img2} alt='img'/>
                                </div>
                                <div className={cls.advantagesSliderInfo}>
                                    <p>Паркинг</p>
                                    <p>Подземный и наземный паркинг – 6е машино-мест.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={cls.advantagesSliderItem}>
                                <div className={cls.advantagesSliderImgWrapper}>
                                    <img src={img3} alt='img'/>
                                </div>
                                <div className={cls.advantagesSliderInfo}>
                                    <p>Каркас — монолитный железобетон</p>
                                    <p>Плитный фундамент, железобетонные перекрытия, сейсмостойкость до 9 баллов по шкале MSK-64.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={cls.advantagesSliderItem}>
                                <div className={cls.advantagesSliderImgWrapper}>
                                    <img src={img4} alt='img'/>
                                </div>
                                <div className={cls.advantagesSliderInfo}>
                                    <p>Премиальные натуральные материалы</p>
                                    <p>Современные фасады выполнены из премиальных материалов – натурального гранита, алюминиевых композитов, медных вставок и витражных конструкций.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={cls.advantagesSliderItem}>
                                <div className={cls.advantagesSliderImgWrapper}>
                                    <img src={img5} alt='img'/>
                                </div>
                                <div className={cls.advantagesSliderInfo}>
                                    <p>IT-инфраструктура</p>
                                    <p>Современная высокоскоростная IT-инфраструктура под любые задачи.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={cls.advantagesSliderItem}>
                                <div className={cls.advantagesSliderImgWrapper}>
                                    <img src={img6} alt='img'/>
                                </div>
                                <div className={cls.advantagesSliderInfo}>
                                    <p>Витражные системы</p>
                                    <p>Витражные системы обеспечивают до 40% естественного освещения в помещениях.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={cls.advantagesSliderItem}>
                                <div className={cls.advantagesSliderImgWrapper}>
                                    <img src={img7} alt='img'/>
                                </div>
                                <div className={cls.advantagesSliderInfo}>
                                    <p>Коммерческие площади на 1-2 этаже</p>
                                    <p>Внутренние зоны для ритейла, кафе, банков, сервисов.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={cls.advantagesSliderItem}>
                                <div className={cls.advantagesSliderImgWrapper}>
                                    <img src={img8} alt='img'/>
                                </div>
                                <div className={cls.advantagesSliderInfo}>
                                    <p>Комфортные лифты</p>
                                    <p>Приватный лифтовой холл и отдельные входные группы.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={cls.advantagesSliderItem}>
                                <div className={cls.advantagesSliderImgWrapper}>
                                    <img src={img9} alt='img'/>
                                </div>
                                <div className={cls.advantagesSliderInfo}>
                                    <p>Территория вокруг — продолжение архитектуры</p>
                                    <p>Озеленение, продуманные пешеходные маршруты, уличная мебель и акцентное фасадное и ландшафтное освещение.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={cls.advantagesSliderItem}>
                                <div className={cls.advantagesSliderImgWrapper}>
                                    <img src={img10} alt='img'/>
                                </div>
                                <div className={cls.advantagesSliderInfo}>
                                    <p>Собственная КСК</p>
                                    <p>Управление зданиями через собственную сервисную систему.</p>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                    <div className={cls.advantagesSliderControl}>
                        <button className="prevBtn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                                <path d="M17.1667 8L0.499998 8M0.499998 8L4.5 4M0.499998 8L4.5 12" stroke="#EBE9E1" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>

                        </button>
                        <button className="nextBtn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                                <path d="M0.5 8L17.1667 8M17.1667 8L13.1667 4M17.1667 8L13.1667 12" stroke="#EBE9E1" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}