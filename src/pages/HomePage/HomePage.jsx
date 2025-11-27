import { AdvantagesSection } from '../../components/AdvantagesSection'
import { ArchSection } from '../../components/ArchSection'
import { Cursor } from '../../components/Cursor'
import { LocationSection } from '../../components/LocationSection'
import { MainSection } from '../../components/MainSection'
import { PlansSection } from '../../components/PlansSection'
import { Preface } from '../../components/Preface'
import { ConsultationSection } from '../../components/СoncultationSection'
import cls from './HomePage.module.css'

export const HomePage = () =>{
    return(
        <div className={cls.homePage}>
            <MainSection />
            <Preface />
            <AdvantagesSection />
            <LocationSection />
            <ArchSection />
            <ConsultationSection />
            <PlansSection />
        </div>
    )
}