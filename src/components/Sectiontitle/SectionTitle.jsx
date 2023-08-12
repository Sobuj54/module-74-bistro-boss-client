const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="md:w-4/12 mx-auto text-center my-7">
      <p className="text-yellow-600 mb-2">--- {subHeading} ---</p>
      <h2 className="text-3xl border-y-4 py-4 uppercase">{heading}</h2>
    </div>
  );
};

export default SectionTitle;
