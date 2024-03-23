export default function LogInTextField({id, lable, pText}:
    {id: string ,lable: string, pText: string}) {
        return (
            <div className="mb-6">
                <label htmlFor={id} 
                className="block mb-0.5 
                text-sm font-medium text-hDark font-serif">
                    {lable}
                </label>
                <input type="text" 
                id={id}
                placeholder={pText}
                className="bg-hCream border border-gray-300 
                text-gray-900 text-sm font-serif
                rounded-md focus:border-hBrown
                block w-full p-2.5"
                />
            </div>
        );
}