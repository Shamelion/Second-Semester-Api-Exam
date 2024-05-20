import React, { useState } from 'react';

// const SearchFilter = ({ repositories }) => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const filteredRepositories = repositories.filter((repo) =>
//     repo.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="search-filter">
//       <input
//         type="text"
//         placeholder="Search repositories..."
//         value={searchTerm}
//         onChange={handleSearchChange}
//         className="search-input"
//       />
//       <div className="repository-list">
//         {filteredRepositories.map((repo) => (
//           <div key={repo.id} className="repository-item">
//             {repo.name}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

const repositories = [
  { id: 1, name: 'React' },
  { id: 2, name: 'Vue' },
  { id: 3, name: 'Angular' },
  { id: 4, name: 'Svelte' },
  // Add more repositories as needed
];

function App() {
  return (
    <div className="App">
      <h1>My Repositories</h1>
      <SearchFilter repositories={repositories} />
    </div>
  );
}


// export default SearchFilter;
