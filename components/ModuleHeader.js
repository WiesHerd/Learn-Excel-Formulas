import Link from 'next/link';

export default function ModuleHeader({ module, title, description }) {
  return (
    <div className="bg-white border-b">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-2">
          <span className="bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full">
            Module {module}
          </span>
        </div>
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <p className="text-lg text-gray-600">{description}</p>
      </div>
    </div>
  );
} 