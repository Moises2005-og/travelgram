import style from '../images.module.css'

export function Image(props: any) {
    return(
        <>
            <img src={props.src} className={style.image}/>
        </>
    )
}