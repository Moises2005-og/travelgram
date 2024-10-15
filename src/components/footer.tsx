import style from './footer.module.css'

export function Footer() {
    return(
        <>
            <footer className={style.footer}>
                <ul>
                    <li>Travelgram &copy;2024</li>
                </ul>
                <ul>
                    <li>Termos de uso</li>
                    <li>Politica de privacidade</li>
                </ul>
            </footer>
        </>
    )
}