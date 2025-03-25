export default function Card({ children }) {
    return (
        <div className="relative rounded-lg p-4 shadow-md bg-gray-700 flex flex-col items-center justify-center gap-8 m-6 py-10 md:w-1/2 lg:w-1/3">
            {children}
        </div>
    );
}
