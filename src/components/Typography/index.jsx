export const Typography = ({variant, children}) =>{

    const getTextStyle = (t) =>{

        switch(t){

            case t === "h1":
                return "text-[62px] font-bold"
        }


    }


    return <p  className={` ${getTextStyle(variant)} `} >{children}</p>
}