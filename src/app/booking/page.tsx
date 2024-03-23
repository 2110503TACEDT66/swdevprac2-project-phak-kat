import DateReserve from "@/components/DateReserve";
import { TextField, Select, MenuItem, Button } from "@mui/material";

export default function Booking() {
   return (
      <main>
         <div className="container mx-auto my-8 font-semibold">
            <h1 className="text-center text-4xl font-sans">Vaccine Booking</h1>
         </div>
         <form className="flex flex-col space-y-12 justify-stretch container mx-auto lg">
            <TextField name='Name-Lastname' label='Name-Lastname' variant='standard' />
            <TextField name='Citizen ID' label='Citizen ID' variant='standard' />
            <Select variant="standard" id=" hospital" label="hospital">
               <MenuItem value={'Chula'}>Chulalongkorn Hospital</MenuItem>
               <MenuItem value={'Rajavithi'}>Rajavithi Hospital</MenuItem>
               <MenuItem value={'Thammasat'}>Thammasat University Hospital</MenuItem>
            </Select>
            <DateReserve/>
            <Button name='Book Vaccine' variant='contained' className="bg-green-400">Book Vaccine</Button>
         </form>
      </main>
   );
}