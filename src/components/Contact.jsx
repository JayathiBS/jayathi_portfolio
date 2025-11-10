import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">📞 Contact & References</h2>
      <div className="bg-gray-800 p-8 rounded-lg shadow-xl dynamic-hover-card border border-gray-700">
        <h3 className="text-2xl font-semibold mb-6 text-blue-300">Get In Touch</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
          [cite_start]<p><strong>Name:</strong> Jayathi Jayoda [cite: 4]</p>
          [cite_start]<p><strong>Location:</strong> Keenaduwa, Ahangama [cite: 6]</p>
          [cite_start]<p><strong>Email:</strong> <a href="mailto:jayathibaddewatta@gmail.com" className="text-blue-400 hover:underline">jayathibaddewatta@gmail.com</a> [cite: 6]</p>
          [cite_start]<p><strong>Phone:</strong> <a href="tel:+94703998213" className="text-blue-400 hover:underline">+9470 399 8213</a> [cite: 5]</p>
        </div>
        
        <h3 className="text-2xl font-semibold mt-10 mb-6 text-blue-300">Professional References</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-md">
          {/* Reference 1 */}
          <div className="p-4 border border-gray-700 rounded-lg">
            <p className="font-bold text-white">Dr. [cite_start]Nayanthara Samarasinghe (PhD) [cite: 46]</p>
            [cite_start]<p className="text-gray-400">Senior Lecturer [cite: 47]</p>
            [cite_start]<p className="text-gray-400">Dept. of Computer Science and Informatics [cite: 48, 49]</p>
            [cite_start]<p className="text-gray-500">Uva Wellassa University, Sri Lanka [cite: 50, 52]</p>
            [cite_start]<p className="text-blue-400">Email: nayanathara@uwu.ac.lk [cite: 53]</p>
          </div>
          {/* Reference 2 */}
          <div className="p-4 border border-gray-700 rounded-lg">
            <p className="font-bold text-white">Dr. [cite_start]Vihara Jayakody (PhD) [cite: 54]</p>
            [cite_start]<p className="text-gray-400">Lecturer [cite: 55]</p>
            [cite_start]<p className="text-gray-400">Dept. of Computer Science and Informatics [cite: 56, 57]</p>
            [cite_start]<p className="text-gray-500">Uva Wellassa University, Sri Lanka [cite: 58, 60]</p>
            [cite_start]<p className="text-blue-400">Email: vihara@uwu.ac.lk [cite: 62]</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;