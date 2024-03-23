import CardPanel from "@/components/CardPanel";
import HospitalCatalog from "@/components/HospitalCatalog";
import getHospitals from "@/libs/getHospitals";

export default async function Hospital() {
    const hospitals = await getHospitals()
    return (
        <main className="text-center p-5">
            <HospitalCatalog hospitalsJson={hospitals}/>
        </main>
    );
}