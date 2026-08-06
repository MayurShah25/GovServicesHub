import React from 'react';
import './DepartmentGrid.css';

const DepartmentGrid = ({ title = "Who We Serve", departments }) => {
  return (
    <section className="department-grid-section section">
      <div className="container">
        <div className="section-header text-center">
          <h2>{title}</h2>
          <div className="section-divider mx-auto"></div>
        </div>
        <div className="department-grid">
          {departments.map((dept, index) => (
            <div key={index} className="department-card">
              <div className="department-icon">
                {/* Fallback to initials if no icon */}
                {dept.icon ? dept.icon : <span className="dept-initials">{dept.name.charAt(0)}</span>}
              </div>
              <h4 className="department-name">{dept.name}</h4>
              {dept.description && <p className="department-desc">{dept.description}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepartmentGrid;
