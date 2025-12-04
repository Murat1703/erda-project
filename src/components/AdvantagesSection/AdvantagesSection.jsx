import { EyeBrow } from '../EyeBrow'
import cls from './AdvantagesSection.module.css'
import { Title } from '../Title'
import img1 from './images/adv1.png'
import img2 from './images/adv2.png'
import img3 from './images/adv3.png'
import img4 from './images/adv4.png'
import img5 from './images/adv5.png'
import img6 from './images/adv6.png'
import img7 from './images/adv7.png'
import img8 from './images/adv8.png'
import stickyImg from './images/photo_3_2025-12-04_09-58-13.webp'

export const AdvantagesSection = () =>{
    return(
        <section className={cls.advantagesWrapper}>
            <div className={cls.advantagesInner}>
                <div className={cls.advantagesSectionTitle}>
                    <EyeBrow>
                        §2. Преимущества
                    </EyeBrow>
                    <Title>
                        эко-система <br/>комфорта
                    </Title>
                </div>
                <div className={cls.advantagesContent}>
                    <div className={cls.left}>
                        <div className={cls.textRow}>
                            <h3>В центре Алматы</h3>
                            <p>Все бизнес-центры расположены в престижной локации города в пешей доступности от ключевых объектов инфраструктуры.</p>
                        </div>
                        <div className={cls.imagesRow}>
                            <div className={cls.left}>
                                <div className={cls.imgWrapper}>
                                    <img src={img1} alt='img' loading='lazy'/>
                                </div>
                                <p>Сейсмостойкость до 9 баллов по шкале MSK-64.</p>
                            </div>
                            <div className={cls.left}>
                                <div className={cls.imgWrapper}>
                                    <img src={img2} alt='img' loading='lazy'/>
                                </div>
                                <p>Современные инженерные системы: вентиляция, охлаждение, отопление.</p>
                            </div>
                        </div>
                        <div className={cls.textRow}>
                            <h3>1 и 2 этажи – коммерция</h3>
                            <p>Все что выше – офисные помещения с возможностью объединения этажей.</p>
                        </div>
                        <div className={cls.imagesRow}>
                            <div className={cls.left}>
                                <div className={cls.imgWrapper}>
                                    <img src={img3} alt='img' loading='lazy'/>
                                </div>
                                <p>Круглосуточная охрана, видеонаблюдение и контроль доступа.</p>
                            </div>
                            <div className={cls.left}>
                                <div className={cls.imgWrapper}>
                                    <img src={img4} alt='img'/>
                                </div>
                                <p>Подземный и наземный паркинг – до 63 машино-мест в каждом объекте.</p>
                            </div>
                        </div>
                        <div className={cls.textRow}>
                            <h3>80 — 1,600 м² </h3>
                            <p>Квадратура офисных пространств с возможностью объединения этажей.</p>
                        </div>
                        <div className={cls.imagesRow}>
                            <div className={cls.left}>
                                <div className={cls.imgWrapper}>
                                    <img src={img5} alt='img' loading='lazy'/>
                                </div>
                                <p>Внутренние зоны для ритейла, кафе, банков, сервисов.</p>
                            </div>
                            <div className={cls.left}>
                                <div className={cls.imgWrapper}>
                                    <img src={img6} alt='img' loading='lazy'/>
                                </div>
                                <p>Управление зданиями через собственную КСК.</p>
                            </div>
                        </div>
                        <div className={cls.textRow}>
                            <h3>3,2 — 4,5 м </h3>
                            <p>Высота потолков в каждом объекте.</p>
                        </div>
                        <div className={cls.imagesRow}>
                            <div className={cls.left}>
                                <div className={cls.imgWrapper}>
                                    <img src={img7} alt='img' loading='lazy'/>
                                </div>
                                <p>Современная высокоскоростная IT-инфраструктура во всех БЦ.</p>
                            </div>
                            <div className={cls.left}>
                                <div className={cls.imgWrapper}>
                                    <img src={img8} alt='img'/>
                                </div>
                                <p>Приватный лифтовой холл и отдельные входные группы.</p>
                            </div>
                        </div>
                    </div>
                    <div className={cls.advSticky}>
                        <div>
                            <p>A</p>
                            <p>Класс объектов</p>
                        </div>
                        <img src={stickyImg} alt="image" loading="lazy"/>
                    </div>
                </div>
            </div>
        </section>
    )
}