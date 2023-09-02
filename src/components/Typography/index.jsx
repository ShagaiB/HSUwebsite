export const Typography = ({ variant, children }) => {
  const getTextStyle = (t) => {
    switch (t) {
      case 'h1':
        return 'text-[62px] font-bold font-serif'
      case 'h2':
        return 'text-[42px] font-bold font-serif'
      case 'h3':
        return 'text-[34px] font-bold font-serif'
      case 'bodyBold':
        return 'text-[18px] font-bold font-sans'
      case 'body':
        return 'text-[18px] font-light font-sans'
      case 'caption':
        return 'text-[10px] font-regular font-sans'
      case 'captionUnderlined':
        return 'text-[10px] font-regular font-sans underline'
      case 'schoolTitle':
        return 'text-[34px] font-bold font-serif leading-[34px]'
    }
  }

  return <p className={` ${getTextStyle(variant)} `}>{children}</p>
}
