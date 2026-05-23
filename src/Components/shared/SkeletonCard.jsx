export default function ProfileSkeleton() {


  return (
    <div className="flex items-center gap-4 px-4 py-3 rounded-2xl bg-gray-100   w-fit animate-pulse">
      
      <div className="w-14 h-14 rounded-full bg-gray-400"></div>


      <div className="space-y-2">
        <div className="h-3 w-28 rounded bg-gray-400"></div>
        <div className="h-4 w-40 rounded bg-gray-500"></div>
      </div>

    </div>
  );
}