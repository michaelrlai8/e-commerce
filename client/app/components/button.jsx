export default function Button({ children, className, onClick }) {
  return (
    <div onClick={onClick} className={`py-2 px-4 rounded-md ${className}`}>
      {children}
    </div>
  );
}
