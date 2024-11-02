import Link from 'next/link';

export default function TrackOverview({ title, description, estimatedTime, prerequisites, href }) {
  return (
    <Link href={href}>
      <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 p-8 cursor-pointer border border-gray-100">
        <div className="flex flex-col h-full">
          <div className="mb-6">
            <div className="inline-block bg-black text-white text-sm font-semibold px-4 py-2 rounded-full mb-4">
              {title}
            </div>
            <p className="text-gray-600 text-lg">{description}</p>
          </div>

          <div className="mt-auto space-y-4">
            <div className="flex items-center">
              <div className="w-5 h-5 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500">Estimated Time</p>
                <p className="font-semibold">{estimatedTime}</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-5 h-5 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500">Prerequisites</p>
                <p className="font-semibold">{prerequisites}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
} 