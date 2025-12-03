import { SupportSection } from '../../components/SupportSection'
import { ConsultationSection } from '../../components/СoncultationSection'
import { Plans } from './content'
import cls from './PlansPage.module.css'

export const PlansPage = () =>{
    return(
        <>
            <section className={cls.plansPageWrapper}>
                <div className={cls.plansPageContent}>
                    <Plans isPage={true}/>
                </div>        
            </section>
            <ConsultationSection />
            <SupportSection />

        </>
    )
}