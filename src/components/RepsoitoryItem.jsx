const RepositoryItem = ({ name, type, language, size, updated }) => {
    return (
      <div className="flex items-center justify-between p-4 border-b  bg-white border-[#D5D7DA] hover:shadow-md">
        {/* Left Content */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>{language}</span>
            <span className="flex items-center">
              <svg
                className="w-4 h-4 mr-1 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M4 4h12v2H4V4zM4 9h8v2H4V9zM4 14h12v2H4v-2z" />
              </svg>
              {size}
            </span>
            <span>Updated {updated}</span>
          </div>
        </div>
  
        {/* Right Content */}
        <div className="flex items-center space-x-2">
          {/* Type Badge */}
          <span
            className={`px-2 py-1 text-xs font-medium rounded-full ${
              type === "Public"
                ? "bg-blue-100 text-blue-600"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {type}
          </span>
        </div>
      </div>
    );
  };


  export default RepositoryItem