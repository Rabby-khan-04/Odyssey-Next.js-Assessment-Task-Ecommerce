const SectionTitle = ({ title }) => {
  return (
    <div className="text-center mb-8">
      <h2 className="font-medium text-dark-gray text-2xl md:text-3xl lg:text-[40px] uppercase">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
