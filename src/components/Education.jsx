import React from 'react';

const Education = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">🎓 Education</h2>
      <div className="space-y-8">
        {/* University Education */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-xl dynamic-hover-card border border-gray-700">
          [cite_start]<h3 className="text-2xl font-semibold text-blue-300">BSc (Hons) in Computer Science and Technology (Reading) [cite: 10]</h3>
          <p className="text-xl text-gray-400 mt-1">Uva Wellassa University of Sri Lanka, Badulla, Sri Lanka</p>
          [cite_start]<p className="text-md text-gray-500 mt-1">2022 - Present [cite: 12]</p>
        </div>
        
        {/* A/L Education */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-xl dynamic-hover-card border border-gray-700">
          [cite_start]<h3 className="text-2xl font-semibold text-blue-300">G.C.E Advanced Level Examination (Physical Science stream) [cite: 11]</h3>
          <p className="text-xl text-gray-400 mt-1">Rippon Girls' College - Galle</p>
          [cite_start]<p className="text-md text-gray-500 mt-1">Completed in 2020 [cite: 13]</p>
        </div>
      </div>
    </div>
  );
};

export default Education;