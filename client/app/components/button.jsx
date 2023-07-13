export default function Button({ children, className, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-4 rounded-md bg-red-600 hover:bg-red-700 text-white ${className}`}
    >
      {children}
    </button>
  );
}
