import image1 from '../assets/Image1.jpg'
import image2 from '../assets/Image2.jpg'
import image3 from '../assets/Image3.jpg'
import image4 from '../assets/image4.jpg'
import image5 from '../assets/image5.jpg'
import image6 from '../assets/image6.jpg'
import image7 from '../assets/image7.jpg'
import image8 from '../assets/image8.jpg'
import image9 from '../assets/image9.jpg'
import image10 from '../assets/image10.jpg'
import image11 from '../assets/image11.jpg'
import image12 from '../assets/image12.jpg'
import style from '../components/gallery.module.css'
import { Image } from './image'



export function Gallery() {
    return(
        <>
            <div className={style.galleryContainer}>
                <Image src={image1}/>
                <Image src={image2}/>
                <Image src={image3}/>
                <Image src={image4}/>
                <Image src={image5}/>
                <Image src={image6}/>
                <Image src={image7}/>
                <Image src={image8}/>
                <Image src={image9}/>
                <Image src={image10}/>
                <Image src={image11}/>
                <Image src={image12}/>
            </div>
        </>
    )
}