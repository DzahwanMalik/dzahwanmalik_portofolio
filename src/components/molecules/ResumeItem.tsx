type ResumeItemProps = {
  title: string;
  subTitle: string;
  date: string;
  description?: string;
  role?: string;
};

const ResumeItem = ({
  title,
  subTitle,
  date,
  description,
  role,
}: ResumeItemProps) => {
  return (
    <>
      <div className="flex justify-between mb-5">
        <div>
          <h3 className="font-bold">
            {title} -{" "}
            <span className="font-medium text-primary/50">{subTitle}</span>
          </h3>
          <p className="font-semibold">{role}</p>
        </div>
        <div>
          <p className="font-medium text-primary/50">{date}</p>
        </div>
      </div>
      <div>
        <p className="font-medium">{description}</p>
      </div>
    </>
  );
};

export default ResumeItem;
