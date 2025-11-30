import cls from './ProjectsPage.module.css'
import { Link, useParams } from 'react-router-dom'
import { projects } from './projects';


export const ProjectsPage = ({}) =>{

    const id = useParams();
    // console.log('id  = ',id)
    const project = projects.find(item => item.id === id.projectID);

    return(
        <section className={cls.projectsPageWrapper}>
            <div className={cls.projectsPageContent}>
                <div className={cls.top}>
                    <div className={cls.title}>
                        <div className={cls.projectTitle}>
                            <div>
                                <p>{project.id}</p>
                                <p>{`${project.id} /  发光体  /  لومينور  /   ल्यूमिनेर `}</p>
                            </div>
                            <div>
                                <p>{`/${project.index}`}</p>
                                <p>Бизнес центр</p>
                            </div>
                        </div>
                        <Link to={`/`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="97" height="9" viewBox="0 0 97 9" fill="none">
                                <path d="M96.5 4.5L0.499997 4.5M0.499997 4.5L4.47241 8.5M0.499997 4.5L4.47241 0.499996" stroke="#1D1D1B" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </Link>
                        <div className={cls.projectBottom}>
                            <p>
                                {project.address}
                            </p>
                            <p>«Искусство <br/>быть особенным»</p>
                            <p>{`Срок сдачи `}<br/>{project.isReady}</p>
                        </div>
                    </div>
                </div>
                <div className={cls.projectImgWrapper}>
                    <img src={project.img} alt='project-img'/> 
                </div>
            </div>
        </section>
    )
}