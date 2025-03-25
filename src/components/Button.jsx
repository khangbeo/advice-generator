export default function Button({ children, onClick }) {
    return (
        <button
            className="bg-emerald-400 text-white p-6 rounded-full transition-all duration-300 hover:bg-emerald-300 hover:shadow-[0_0_35px_0_rgba(0,0,0,0.3)] hover:shadow-emerald-500 active:bg-emerald-500 active:scale-95"
            onClick={onClick}
        >
            {children}
        </button>
    );
}
