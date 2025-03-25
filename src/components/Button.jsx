export default function Button({ children, onClick }) {
    return (
        <button
            className="bg-emerald-400 text-white p-6 rounded-full transition-all duration-300 hover:bg-emerald-300 hover:drop-shadow-lg"
            onClick={onClick}
        >
            {children}
        </button>
    );
}
