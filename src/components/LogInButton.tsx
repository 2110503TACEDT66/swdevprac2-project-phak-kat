export default function LogInButton({buttonText}: {buttonText:string}) {
    return (
        <div className='w-full'>
            <input type="submit"
            value={buttonText}
            className="px-5 py-1.5 
            rounded-full bg-stone-700 shadow-lg
            text-white text-md font-sans font-medium
            hover:bg-stone-400"
            />
        </div>
    );
}