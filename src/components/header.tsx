import logo from '../assets/travelgram-logo.svg'
import search from '../assets/search-ico.svg'
import profile from '../assets/Profile pic.png'  
import { Profile } from './profile'
import style from '../components/header.module.css'
import { ChangeEvent, useState } from 'react'

export function Header() {

    const [isHide, setIsHide] = useState<boolean>(false)

    const handleInput = () => {
        setIsHide(!isHide)
    }   

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        
    }

    return(
        <>
        <div className={style.complement}>
            <header className={style.header}>
                <div className={style.logoContent}>
                <img src={logo} /><span>Travelgram</span>
                </div>
                <nav className={style.navigation}>
                    <ul>
                        <li><img src={search} onClick={handleInput}/></li>
                        <li><input type="text" name="" className={isHide ? style.show : style.input} onChange={handleSearch}/></li>
                        <li>Explorar</li>
                        <li>Minhas viagens</li>
                        <li><img src={profile} /></li>
                    </ul>
                </nav>
            </header>
            <Profile />
        </div>
        </>
    )
}