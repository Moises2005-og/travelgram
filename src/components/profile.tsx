import style from '../components/profile.module.css'
import profile from '../assets/girl.jfif'
import mapPin from '../assets/MapPin.svg' 
import flight from '../assets/flight.svg'
import gallery from '../assets/gallery.svg'

export function Profile() {
    return(
        <>
        <div className={style.container}>
            <div className={style.profile}>
                <div className={style.profileInfo}>
                    <img src={profile} />
                    <div className={style.content}>
                        <h2>Isabela Torres</h2>
                        <p>Amante de viagens, cultura e gastronomia. 🌍✈️  
                        Aqui compartilho as histórias registradas em cada clique, explorando cantinhos fascinantes do nosso planeta a partir da movimentada cidade de São Paulo. 🏙️📸</p>
                    </div>
                </div>
                <ul>
                    <li><img src={mapPin} /> <span>Luanda, Angola</span></li>
                    <li><img src={flight} /> <span>37 paises</span></li>
                    <li><img src={gallery} /> <span>240 fotos</span></li>
                </ul>
            </div>
        </div>
        </>
    )
}