export function PrimaryButton({ type, children }) {
  return (
    <button
      type={type}
      className="text-white shadow transition bg-gradient-to-r from-primary-dark to-primary-light hover:from-pink-500 hover:to-yellow-500 focus:outline-none active:shadow-none active:bg-primary rounded-full py-3 px-4 m-0 flex items-center uppercase">
      {children}
    </button>
  );
}