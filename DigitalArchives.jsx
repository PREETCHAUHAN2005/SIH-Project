import React, { useState } from 'react';

const DigitalArchives = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="archives-page">
      <h2>Digital Archives</h2>
      <p>
        This portal serves as a gateway to the digital preservation of Sikkim's cultural heritage. While we can't host a full archive, we can guide you to existing, authoritative resources.
      </p>

      <div className="archive-search-container">
        <h3>Search the Archives (Conceptual)</h3>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="e.g., Pang Lhabsol, old manuscripts"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">Search</button>
        </form>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-btn" onClick={closeModal}>&times;</span>
            <h3>Conceptual Search Result for "{searchTerm}"</h3>
            <p>
              This is a prototype feature demonstrating the potential of an AI-powered archive.
              A real search for "{searchTerm}" would find a summary of the festival's history and its significance,
              linking to relevant documents in the real archives of the British Library.
            </p>
          </div>
        </div>
      )}

      <div className="external-archives">
        <h3>External Digital Archives</h3>
        <ul>
          <li>
            <a href="https://eap.bl.uk/projects/eap555" target="_blank" rel="noopener noreferrer">
              Sikkim Palace Archives (British Library)
            </a>
            <p>Digitization of historical documents from the former Sikkim Palace.</p>
          </li>
          <li>
            <a href="https://www.intach.org/conservation/archives" target="_blank" rel="noopener noreferrer">
              INTACH Digital Archives
            </a>
            <p>Conservation and documentation of India's cultural heritage.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DigitalArchives;