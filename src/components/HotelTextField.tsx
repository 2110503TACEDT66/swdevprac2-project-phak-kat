export default function LogInTextField({id, lable, pText}:
    {id: string ,lable: string, pText: string}) {
        return (
            <div className="w-full">
                <label htmlFor={id} 
                className="block mb-1 
                text-sm font-medium text-neutral-800 font-sans">
                    {lable}
                </label>
                <input type="text" 
                id={id}
                placeholder={pText}
                className="bg-amber-50 border border-gray-300 
                text-neutral-800 text-sm font-sans
                rounded-md focus:border-neutral-800
                block w-full p-2.5"
                />
            </div>
        );
}