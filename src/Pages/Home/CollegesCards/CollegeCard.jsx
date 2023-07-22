const CollegeCard = ({ college }) => {
  return (
    <div className="">
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img className="w-80" src={college?.image} alt="College image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{college?.name}</h2>

          <div className="flex justify-between items-center">
            <div>
              <div>
                <p className="font-semibold">Admission date</p>
                <span>{college?.admissionDates}</span>
              </div>
              <p className="font-semibold mt-3">Events</p>
              <span>{college?.events}</span>
            </div>
            <div>
              <p className="font-semibold">Research history</p>
              <span>{college?.researchHistory}</span>
              <p className="font-semibold mt-3">Sports</p>
              <span>{college?.sports}</span>
            </div>
            <div className="">
              <button className="btn bg-blue-500 text-white">Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;
