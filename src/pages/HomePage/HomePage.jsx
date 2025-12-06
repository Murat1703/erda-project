import { SupportSection } from '../../components/SupportSection'
import { AdvantagesSection } from '../../components/AdvantagesSection'
import { ArchSection } from '../../components/ArchSection'
import { Cursor } from '../../components/Cursor'
import { DeveloperSection } from '../../components/DeveloperSection'
import { LocationSection } from '../../components/LocationSection'
import { MainSection } from '../../components/MainSection'
import { PlansSection } from '../../components/PlansSection'
import { Preface } from '../../components/Preface'
import { ConsultationSection } from '../../components/СoncultationSection'
import cls from './HomePage.module.css'
import { Footer } from '../../components/Footer'
import { PreLoader } from '../../components/PreLoader/PreLoader'
import { useState } from 'react'

export const HomePage = () =>{

    const [isReady, setIsReady] = useState(false);  
    const hideLoader = () =>{
        setIsReady(true)
    }

    return(
        <div className={cls.homePage}>
            <MainSection />
            <Preface />
            <AdvantagesSection />
            <LocationSection />
            <ArchSection />
            <ConsultationSection />
            <PlansSection />
            <DeveloperSection />
            <SupportSection />
            <PreLoader onLoadComplete={hideLoader} isLoaded={isReady}/>
            
        </div>
    )
}