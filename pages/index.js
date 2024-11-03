import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-16">
        {/* Header with Quiz Button */}
        <div className="text-center mb-16 relative">
          <div className="absolute top-0 right-0 mr-[calc((100%-1280px)/2)]">
            <Link
              href="/quiz"
              className="inline-block px-6 py-3 bg-[#3498db] hover:bg-[#2980b9] text-white rounded-full transition-colors"
            >
              Take the Excel Formula Quiz
            </Link>
          </div>
          <h1 className="text-4xl font-bold mb-4">Learn Excel Formulas</h1>
          <p className="text-xl text-gray-600">
            Master Excel formulas from basic to advanced with interactive examples
          </p>
        </div>

        {/* Track Cards Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Beginner Track Card */}
          <Link href="/formulas/beginner">
            <div className="bg-white rounded-xl shadow-lg p-8 h-full flex flex-col cursor-pointer">
              <div className="bg-black text-white text-sm font-medium px-6 py-2 rounded-full mb-6 text-center w-full">
                Beginner Track
              </div>
              
              <p className="text-gray-600 mb-8 flex-grow">
                Master the fundamental Excel formulas that every user should know
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-6 h-6 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Estimated Time</p>
                    <p className="font-medium">15-20 minutes</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-6 h-6 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Prerequisites</p>
                    <p className="font-medium">Basic Excel knowledge</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Intermediate Track Card */}
          <Link href="/formulas/intermediate">
            <div className="bg-white rounded-xl shadow-lg p-8 h-full flex flex-col cursor-pointer">
              <div className="bg-black text-white text-sm font-medium px-6 py-2 rounded-full mb-6 text-center w-full">
                Intermediate Track
              </div>
              
              <p className="text-gray-600 mb-8 flex-grow">
                Level up your Excel skills with more advanced formulas
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-6 h-6 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Estimated Time</p>
                    <p className="font-medium">30-40 minutes</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-6 h-6 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Prerequisites</p>
                    <p className="font-medium">Completion of Beginner Track</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Advanced Track Card */}
          <Link href="/formulas/advanced">
            <div className="bg-white rounded-xl shadow-lg p-8 h-full flex flex-col cursor-pointer">
              <div className="bg-black text-white text-sm font-medium px-6 py-2 rounded-full mb-6 text-center w-full">
                Advanced Track
              </div>
              
              <p className="text-gray-600 mb-8 flex-grow">
                Master complex Excel formulas and become a power user
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-6 h-6 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Estimated Time</p>
                    <p className="font-medium">30-40 minutes</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-6 h-6 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Prerequisites</p>
                    <p className="font-medium">Completion of Intermediate Track</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* ChatGPT Section */}
        <div className="max-w-7xl mx-auto mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="font-bold mb-4 flex items-center">
              <span className="text-2xl mr-2">🤖</span>
              How to Use ChatGPT for Excel Formulas
            </h3>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-3">Example Scenario</h4>
                <p className="text-gray-700 mb-3">
                  "I need a formula to find the last sale date for each customer from a sales log"
                </p>
                <div className="bg-white p-3 rounded border border-gray-200">
                  <p className="text-sm text-gray-600 mb-2">Ask ChatGPT:</p>
                  <p className="text-sm">"I have an Excel sheet with columns: Customer Name (A), Sale Date (B). I need a formula to find the most recent sale date for each customer. Can you help?"</p>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-3">Tips for Getting Better Answers</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✓ Describe your data structure (columns, rows)</li>
                  <li>✓ Specify any conditions or exceptions</li>
                  <li>✓ Ask for step-by-step explanation</li>
                  <li>✓ Request examples with sample data</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 flex justify-between items-center bg-black text-white p-4 rounded-lg">
              <div>
                <h4 className="font-semibold mb-1">Try it yourself!</h4>
                <p className="text-sm text-gray-300">Get instant help with your Excel formulas</p>
              </div>
              <a 
                href="https://chat.openai.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-100 transition-colors font-medium"
              >
                Open ChatGPT →
              </a>
            </div>
          </div>
        </div>

        {/* Need Help Section */}
        <div className="max-w-7xl mx-auto mb-12">
          <div className="bg-black text-white rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Need Help?</h3>
            <p className="mb-4">Join these Excel communities and resources to get help with formulas:</p>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <a href="https://www.reddit.com/r/excel" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="bg-white text-black px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                <h4 className="font-bold">r/excel</h4>
                <p className="text-sm text-gray-600">Active Reddit community with quick formula help</p>
              </a>
              
              <a href="https://www.mrexcel.com/board/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="bg-white text-black px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                <h4 className="font-bold">Mr. Excel Forum</h4>
                <p className="text-sm text-gray-600">Large community of Excel experts</p>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <a href="https://support.microsoft.com/en-us/excel" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="bg-white text-black px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                <h4 className="font-bold">Microsoft Excel Help</h4>
                <p className="text-sm text-gray-600">Official documentation & tutorials</p>
              </a>
              
              <a href="https://excelforum.com" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="bg-white text-black px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                <h4 className="font-bold">Excel Forums</h4>
                <p className="text-sm text-gray-600">Dedicated Excel discussion boards</p>
              </a>
              
              <a href="https://chandoo.org/wp/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="bg-white text-black px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                <h4 className="font-bold">Chandoo.org</h4>
                <p className="text-sm text-gray-600">Excel tutorials & advanced techniques</p>
              </a>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
} 