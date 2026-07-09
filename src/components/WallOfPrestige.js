import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/WallOfPrestige.css';

const WallOfPrestige = () => {
  const navigate = useNavigate();

  // Premium High-Yield Success Stories Dataset
  const wallData = [
    {
      id: 'case-punjab-rice',
      title: 'Green Horizon Estates',
      location: 'Punjab, India',
      image: 'https://i.pinimg.com/736x/b8/9f/c8/b89fc8148a1eab5497b6372a7389c6bb.jpg',
      achievement: 'Achieved 42% decrease in stem-borer outbreaks using our Advanced Bio-Insecticides.'
    },
    {
      id: 'case-nashik-vineyards',
      title: 'Mariposa Vineyard Curation',
      location: 'Nashik, India',
      image: 'https://i.pinimg.com/736x/74/38/43/74384373fc1df044851911c3cf19b452.jpg',
      achievement: 'Eradicated heavy downy mildew outbreaks completely within two spray cycles.'
    },
    {
      id: 'case-gujarat-cotton',
      title: 'Sardar Agro-Commercials',
      location: 'Gujarat, India',
      image: 'https://i.pinimg.com/736x/e9/e2/81/e9e281fd104d294bfca426779ccf6588.jpg',
      achievement: 'Protected over 5,000+ hectares of cotton crops from catastrophic pink bollworm threats.'
    },
    {
      id: 'case-ooty-botanicals',
      title: 'Blue Hills Polyhouses',
      location: 'Ooty, India',
      image: 'https://i.pinimg.com/1200x/ba/4c/6f/ba4c6f58ab0adaa7ec67eb66e8ad49d0.jpg',
      achievement: 'Maintained 100% export-grade organic standards with zero chemical residue detection.'
    }
  ];

  return (
    <section className="agro-wall py-5 bg-white">
      {/* Container width locked perfectly to match header/footer layers */}
      <div className="container">
        
        {/* Section Heading */}
        <div className="text-center mb-5">
          <h2 className="wall-main-title fw-bold text-uppercase tracking-wide">The Wall of Prestige</h2>
          <p className="text-muted wall-subtitle">Celebrating legendary crop yields and trusted commercial partnerships worldwide</p>
          <div className="wall-underline mx-auto"></div>
        </div>

        {/* 4-Column Grid */}
        <div className="row g-4 justify-content-center">
          {wallData.map((item) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={item.id}>
              <div 
                className="wall-card position-relative overflow-hidden cursor-pointer d-flex flex-column"
                onClick={() => navigate(`/case-studies/${item.id}`)}
              >
                
                {/* Image Aspect-Ratio Container */}
                <div className="wall-img-container rounded-3 position-relative overflow-hidden mb-3 shadow-sm">
                  <img src={item.image} alt={item.title} className="wall-img w-100 h-100" />
                  
                  {/* Floating location tag inside image */}
                  <span className="wall-location-badge position-absolute top-0 start-0 mt-3 ms-3 bg-dark text-white px-2 py-1 rounded small fw-bold">
                    {item.location}
                  </span>
                </div>

                {/* Info Metadata Block */}
                <div className="wall-info-box text-start px-1">
                  <h4 className="wall-estate-name fw-bold mb-1 text-truncate">{item.title}</h4>
                  <p className="wall-achievement text-muted small mb-3">{item.achievement}</p>
                  
                  {/* Read Success Story Hyperlink */}
                  <span className="wall-link fw-bold text-uppercase tracking-wider small">
                    Read Success Story <i className="bi bi-arrow-right-short ms-1"></i>
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WallOfPrestige;