export default function LogInButton({buttonText}: {buttonText:string}) {
    return (
        <div className='w-full'>
            <input type="submit"
            value={buttonText}
            className="px-6 py-2 
            rounded-full bg-neutral-800 shadow-lg
            text-white text-md font-sans font-normal
            transition ease-in-out delay-150 duration-300 
            hover:scale-105 hover:text-md"
            />
        </div>
    );
}