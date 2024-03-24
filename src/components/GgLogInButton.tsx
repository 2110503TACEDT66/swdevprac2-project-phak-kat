export default function GgLogInButton() {
    return (
        <div>
            <div className="w-full px-6">
            <button className="h-12 px-6 py-auto
            border-2 border-gray-300 rounded-full 
            transition ease-in-out delay-150 duration-300 
            hover:border-neutral-700  hover:scale-105">
                <div className="relative flex flex-row items-center space-x-4 justify-center">
                    <img src="https://www.svgrepo.com/show/475656/google-color.svg"
                    className="relative w-5" alt="google logo"/>
                    <span className="w-max font-semibold tracking-wide 
                    text-gray-700 text-md font-sans font-semibold">
                        Continue with Google
                    </span>
                </div>
            </button>
            </div>
        </div>
    );
}