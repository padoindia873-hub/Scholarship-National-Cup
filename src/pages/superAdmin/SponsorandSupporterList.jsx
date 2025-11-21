import React from "react";

const SponsorAndSupporterList = () => {
  const sponsors = [
    {
      id: 1,
      name: "TATA Education Trust",
      image: "https://mostvaluablebrands.com/wp-content/uploads/2024/06/DALL%C2%B7E-2024-06-06-14.50.52-A-photorealistic-widescreen-image-of-Tata-Consultancy-Services-TCS-headquarters.-The-building-should-have-a-modern-sleek-glass-facade-with-the-TCS-1-1.webp",
    },
    {
      id: 2,
      name: "Infosys Foundation",
      image: "https://tse1.mm.bing.net/th/id/OIP.PIfCFYxkxfylLg_uXsmbqgHaEZ?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      id: 3,
      name: "Reliance Foundation",
      image: "https://images.firstpost.com/wp-content/uploads/2022/12/reliance1-2.jpg",
    },
    {
      id: 4,
      name: "ICICI CSR Group",
      image: "https://www.banktrack.org/thumbimage.php?image=190701_head_office_icici_bank_india_crop.jpg&width=800&cropratio=16:9",
    },
    {
      id: 5,
      name: "HDFC Social Initiative",
      image: "https://tse3.mm.bing.net/th/id/OIP.KovIR--V0nYx_JQcrJdPWwHaEc?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Sponsors & Supporters
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        {sponsors.map((item) => (
          <div
            key={item.id}
            style={{
              padding: "15px",
              borderRadius: "10px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
              textAlign: "center",
              background: "#fff",
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            />
            <h4 style={{ margin: "0", fontSize: "18px" }}>{item.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsorAndSupporterList;
