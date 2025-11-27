import cls from './EyeBrow.module.css'

export const EyeBrow = ({children}) =>{
    return(
        <p className={cls.eyeBrow}>
            {children}
        </p>
    )
}