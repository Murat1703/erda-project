import cls from './Target.module.css'
import bg from './images/bg.png'

export const Target = () =>{
    return(
        <section className={cls.targetWrapper}>
            <div className={cls.targetInner}>
                <div className={cls.leftImgWrapper}>
                    <img src={bg} alt='bg'/>
                </div>
                <div>
                    <div className={cls.titleRow}>
                        <p>Видение</p>
                        <h3>Наша цель</h3>
                    </div>
                    <p>
                        Наша цель — предоставлять заинтересованным сторонам услуги высшего уровня, реализуя инновационные и качественные проекты, соответствующие региональным архитектурным и технологическим стандартам. Мы стремимся действовать независимо от локальных ограничений, формируя имидж по-настоящему международного бренда. <br/><br/>Мы завоевываем уважение партнёров и клиентов за счёт проектов высочайшего качества, основанных на передовых архитектурных и технологических решениях.

                    </p>
                </div>
            </div>
        </section>
    )
}