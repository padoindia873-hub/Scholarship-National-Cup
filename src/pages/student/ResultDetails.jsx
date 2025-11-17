import React from "react";
import { Button, Card } from "antd";
import jsPDF from "jspdf";

const ResultDetails = ({ studentName = "John Doe", academy = 60, gk = 40 }) => {

  const total = academy + gk;

  /* ---------------------------------------------
       GENERATE PDF
  --------------------------------------------- */
  const generatePDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text("Student Result Report", 20, 20);

    doc.setFontSize(14);
    doc.text(`Name: ${studentName}`, 20, 40);
    doc.text(`Academy Marks: ${academy}`, 20, 60);
    doc.text(`GK Marks: ${gk}`, 20, 80);
    doc.text(`Total Marks: ${total}`, 20, 100);

    doc.save(`${studentName}_Result.pdf`);
  };

  /* ---------------------------------------------
      SEND WHATSAPP RESULT
  --------------------------------------------- */
  const sendWhatsApp = () => {
    const message = `*Student Result*\n\nName: ${studentName}\nAcademy: ${academy}\nGK: ${gk}\nTotal: ${total}`;
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="p-6 flex justify-center">
      <Card
        style={{ width: 400 }}
        title="Result Details"
        bordered={true}
      >
        <h2 className="text-lg font-semibold mb-3">Student: {studentName}</h2>

        <p className="text-md"><strong>Academy Marks:</strong> {academy}</p>
        <p className="text-md"><strong>GK Marks:</strong> {gk}</p>

        <p className="text-lg font-bold mt-4">
          Total Marks: <span>{total}</span>
        </p>

        <div className="flex flex-col gap-3 mt-6">
          <Button type="primary" onClick={generatePDF}>
            Download PDF
          </Button>

          <Button type="default" onClick={sendWhatsApp}>
            Send via WhatsApp
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ResultDetails;
