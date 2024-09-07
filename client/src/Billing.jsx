import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './index.css'; // Import the CSS file

const Billing = () => {
  const handleDownloadPDF = () => {
    const input = document.getElementById('billing-history');
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 295; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('billing-history.pdf');
    });
  };

  return (
    <div style={{
        display: "flex",
        placeItems: "center",
        height: "100vh",
        width: "100vw"
      }}>
    <div className="billing-container" style={{
                boxShadow: "0 0 15px rgba(255, 215, 0, 0.7), 0 0 30px rgba(255, 255, 0, 0.5)",

    }}>
      <h2 className="billing-title">Patient Billing History</h2>
      <div id="billing-history" className="billing-content">
        <div className="billing-header">
          <h3>Patient Name: <span>John Doe</span></h3>
          <p>Patient ID: <span>123456789</span></p>
          <p>Date: <span>2024-09-07</span></p>
        </div>
        <div className="billing-details">
          <p><strong>Total Amount:</strong> $200</p>
          <p><strong>Paid:</strong> $150</p>
          <p><strong>Outstanding:</strong> $50</p>
        </div>
        <hr className="billing-separator" />
        <div className="billing-charges">
          <h4>Itemized Charges:</h4>
          <ul>
            <li>Consultation Fee: $100</li>
            <li>Lab Tests: $50</li>
            <li>X-Ray: $50</li>
          </ul>
        </div>
      </div>
      <button className="download-button" onClick={handleDownloadPDF}>Download as PDF</button>
    </div>

    </div>
  );
};

export default Billing;
