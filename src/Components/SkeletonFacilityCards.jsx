


function SkeletonFacilityCards() {
  return (
    <div className="grid grid-cols-1 p-5 gap-6">
      
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="card bg-base-100 shadow-md border border-gray-200 animate-pulse"
        >
 
          <div className=" bg-gray-300 rounded-2xl"></div>

  
          <div className="card-body space-y-3">
            
     
            <div className="h-5 w-3/4 bg-gray-300 rounded"></div>
            <div className="space-y-2">
              <div className="h-3 w-full bg-gray-200 rounded"></div>
              <div className="h-3 w-5/6 bg-gray-200 rounded"></div>
            </div>

            <div className="pt-2">
              <div className="h-10 w-32 bg-gray-300 rounded-xl"></div>
            </div>
          </div>
        </div>
      ))}

    </div>
  );
}

export default  SkeletonFacilityCards;