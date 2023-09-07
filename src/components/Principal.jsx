import principal from '../../public/assets/Principal.png'
import Image from 'next/image'
import "../styles/center.css"
export const Principal = () =>{
    
    return (
        <div className="w-[500px] center">
            <Image src={principal} alt="Img of Principal"/>
        </div>
        
    )
    

}