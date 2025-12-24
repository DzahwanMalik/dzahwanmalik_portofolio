const Footer = () => {
  return (
    <div className="bg-base sticky z-50 bottom-0 left-0 w-full p-5 text-primary font-semibold border-t-2 border-primary">
      <div className="w-container m-auto flex justify-between items-center text-sm">
        <div className="">2025 &copy; All Right Reserved</div>
        <div className="flex gap-1 items-center">
          <span>Made under exhaustion and compulsion</span>
          <span>
            <i className="bi bi-heart-fill" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
