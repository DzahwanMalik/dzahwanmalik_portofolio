type ButtonProps = {
  variant: "primary" | "secondary";
  value: string;
  icon?: React.ReactNode;
  handleClick?: () => void;
  className?: string;
};

const Button = ({
  variant,
  value,
  handleClick,
  icon,
  className,
}: ButtonProps) => {
  const baseStyle =
    "px-5 py-4 rounded-md font-semibold w-fit cursor-pointer transition-all duration-300 ease-in-out hover:rotate-5";

  const variantStyle = {
    primary: "bg-primary text-base",
    secondary: "bg-secondary text-base",
  };

  return (
    <button
      className={`${baseStyle} ${variantStyle[variant]} ${className}`}
      onClick={handleClick}
    >
      <span className="flex gap-2 items-center">
        {value}
        {icon}
      </span>
    </button>
  );
};

export default Button;
