import { Typography } from "../components/Typography"
import { TitleCard } from "../components/TitleCard"
import { DescriptionCard } from "../components/DescriptionCard"

const longLoremIpsumText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

const Page = () =>{

  return <div className="flex flex-col w-full items-center">
    

  <Typography variant="h1">Amraa</Typography>
<Typography variant = "h1">Tsogt</Typography>
    <Typography variant = "caption">ermuun</Typography>
    <div className="my-[50px]">
      <TitleCard>This is title Card</TitleCard>
      <TitleCard long color = "blue">This is title Card</TitleCard>
      <DescriptionCard  title = {"Admissions Process"} desc = {longLoremIpsumText} />
      <DescriptionCard color={"blue"}  title = {"Admissions Process"} desc = {longLoremIpsumText} />
    </div>

    <Typography variant = "h1">h1</Typography>
    <Typography variant = "h2">Smesky nut Mandal</Typography>
    <Typography variant = "h3">h3</Typography>git
    <Typography variant = "schoolTitle">school title</Typography>
    <Typography variant = "body">Hot boy Anar</Typography>
    <font size="+5000"><p>Hot boy Anar</p></font>
    <Typography variant = "bodyBold">bodyBold</Typography>
    <Typography variant = "caption">caption</Typography>
    <Typography variant = "captionUnderlined">body</Typography>
    

  </div>
}

export default Page
