export default function LogInTextField({id, lable, pText, disable, type, value}:
    {id: string ,lable: string, pText: string, disable: boolean, type: string, value: string}) {
        return (
            <div className="w-full">
                <label htmlFor={id} 
                className="block mb-1 
                text-md font-medium text-neutral-800 font-sans">
                    {lable}
                </label>
                <input type={type} 
                id={id}
                placeholder={pText}
                className="bg-white border border-gray-300 
                text-neutral-900 text-sm font-sans
                rounded-md block w-full p-2.5
                disabled:bg-neutral-100"
                disabled={disable}
                value={value}
                />
            </div>
        );
}