import "./PageTitle.css"

const PageTitle = ( {title} ) => {
  return (
    <div className="text-center py-12">
      <h1 className="text-3xl  font-bold text-[#ff7f50] inline-block title">
        {title}
      </h1>
    </div>
  );
};

export default PageTitle;
