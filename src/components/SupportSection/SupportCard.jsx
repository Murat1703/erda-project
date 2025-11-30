import cls from './SupportCard.module.css'

export const SupportCard = ({children}) =>{
    return(
        <div className={cls.supportCard}>
            {children}
        </div>
    )
}