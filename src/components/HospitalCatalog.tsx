import Link from "next/link"
import Card from "./Card"

export default async function HospitalCatalog(
    {hospitalsJson}: {hospitalsJson: HospitalJson}) {
    
    return (
        <div style={{margin:"20px", display:"flex", 
                flexDirection: "row", alignContent: "space-around", 
                justifyContent: "space-around", flexWrap: "wrap"}}>
            {
                hospitalsJson.data.map((hospitalItem: HospitalItem)=>(
                    <Link href={`/hospital/${hospitalItem._id}`} className='w-1/5'>
                        <Card hospitalName={hospitalItem.name} imgSrc={hospitalItem.picture} />
                    </Link>
                ))
            }
        </div>
    )
}