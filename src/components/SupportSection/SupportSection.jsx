import { EyeBrow } from '../EyeBrow'
import { Title } from '../Title'
import { SupportCard } from './SupportCard'
import cls from './SupportSection.module.css'

export const SupportSection = () =>{
    return(
        <section className={cls.supportSection}>
            <div className={cls.supportSectionInner}>
                <div className={cls.supportSectionTop}>
                    <div>
                        <EyeBrow>
                            §5. Службы поддержки
                        </EyeBrow>
                        <Title>
                            задайте вопрос
                        </Title>
                    </div>
                    <p>Отправьте  запрос удобным для вас способом – мы оперативно обработаем его и ответим на все ваши вопросы.</p>
                </div>
                <div className={cls.supportSectionBottom}>
                    <SupportCard>
                        <a>Вакансии в ERDA Holding</a>
                        <a className={`${cls.vacancyBtn} ${cls.btn}`} >Узнать больше</a>
                    </SupportCard>
                    <SupportCard>
                        <a href='tel:+77273205136' target='__blank'>+7 727 320 5136</a>
                        <a className={`${cls.callBtn} ${cls.btn}`}>Перезвонить мне</a>
                    </SupportCard>
                    <SupportCard>
                        <a >Есть жалобы или предложения?</a>
                        <a href='mailto:info@erda.kz' target='__blank' className={`${cls.callBtn} ${cls.btn}`}>Написать на почту</a>
                    </SupportCard>

                </div>
            </div>
        </section>
    )
}