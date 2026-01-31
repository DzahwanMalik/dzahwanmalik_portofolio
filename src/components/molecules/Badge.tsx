type BadgeProps = {
  text: string;
};

const Badge = ({ text }: BadgeProps) => {
  return (
    <div className="bg-secondary/20 px-3 py-2 rounded-xl text-secondary font-semibold">{text}</div>
  );
};

export default Badge;
