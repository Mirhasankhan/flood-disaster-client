const Button = ({
  bgColor,
  children,
}: {
  bgColor: string;
  children: string;
}) => {
  return (
    <button
      className={`px-4 py-2 rounded-md hover:bg-transparent hover:text-blue-400 border hover:border-blue-500 ${bgColor}`}
    >
      {children}
    </button>
  );
};

export default Button;
