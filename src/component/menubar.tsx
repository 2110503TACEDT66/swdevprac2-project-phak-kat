import MenuItem from "./MenuItem";

export default function Menubar() {
    return (
        <div className='w-full h-12 bg-hDark fixed top-0 left-0 right-0 z-50 flex flex-row justify-between'>
            <div className='flex flex-row justify-start'>

                <MenuItem title='Home' pageRef='/'/>
                <MenuItem title='MyBooking' pageRef='/mybooking'/>
            </div>
            <div className='flex flex-row justify-end'>
                <MenuItem title='LogIn' pageRef='/login'/>
            </div>
        </div>
    );
}