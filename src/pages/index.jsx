import { Typography } from "../components/Typography"
import { TitleCard } from "../components/TitleCard"
import { DescriptionCard } from "../components/DescriptionCard"
import { Banner } from "../components/Banner"
import { Principal } from "../components/Principal"
import "../styles/center.css"
const longLoremIpsumText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
const Page = () =>{
  return <div className="flex flex-col w-full items-center">
    


  <Typography variant = "h1">Amraa</Typography>
<Typography variant = "h1">Tsogt</Typography>
<Typography variant = "h3">dari</Typography>
    <Typography variant = "caption">ermuun</Typography>
    <Typography variant = "caption">money</Typography>
    <Banner></Banner>
    <div className="my-[50px]">
      <TitleCard>This is title Card</TitleCard>
      <TitleCard long color = "blue">This is title Card</TitleCard>
      <TitleCard long color = "blue" >Test</TitleCard>
      <DescriptionCard  title = {"Admissions Process"} desc = {longLoremIpsumText} />
      <DescriptionCard color={"blue"}  title = {"Admissions Process"} desc = {longLoremIpsumText} />
    </div>

    <Typography variant = "h1">h1</Typography>
    <Typography variant = "h2">Smesky nut</Typography>
    <Typography variant = "h3">h3</Typography>
    <Typography variant = "schoolTitle">school title</Typography>
    <Typography variant = "h3">Hot boy Anar</Typography>
    <Typography variant = "bodyBold">bodyBold</Typography>
    <Typography variant = "caption">caption</Typography>
    <Typography variant = "captionUnderlined">body</Typography>
    <div className="flex flex-row">
    <div style={{marginRight:"100px"}}><Principal></Principal></div>
    <div className="flex flex-col" class="center">
    <Typography variant = "h2">Letter from the Principal</Typography>
    <Typography variant = "bodyText">Body: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet pulvinar nisi, eget venenatis nunc lobortis sit amet. Vivamus a metus at metus tincidunt sodales eu eu mauris. Pellentesque vulputate posuere leo a aliquet. Cras porttitor lacus a felis semper sollicitudin.</Typography>
    </div>
    </div>
  </div>
}

export default Page
