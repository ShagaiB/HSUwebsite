import principal from '../../public/assets/Principal.png'
import Image from 'next/image'
import { Typography } from './Typography'
export const Principal = () =>{
    return (
        <div className="principalcontainer">
            <div className="w-[470px]">
            <Image src={principal} alt="Img of Principal"/>
            </div>
                <div>
                <Typography variant="h2" className="h-[134px]">Letter from the Principal</Typography>
                <Typography variant="body" className=' PrincipalTextContainer'>Body: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet pulvinar nisi, eget venenatis nunc lobortis sit amet. Vivamus a metus at metus tincidunt sodales eu eu mauris. Pellentesque vulputate posuere leo a aliquet. Cras porttitor lacus a felis semper sollicitudin.</Typography>
                </div>
        </div>
    )
    

}