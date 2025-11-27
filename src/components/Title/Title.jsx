import cls from './Title.module.css'

export const Title = ({children}) =>{ 
    return(
        <h2 className={cls.title}>
            {children}
        </h2>
    )
}