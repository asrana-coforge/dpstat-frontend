import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import dp_graph_stats from '../dummy-data/dp_graph_stats.json';
import dp_daily_log from '../dummy-data/dp_daily_log.json';

function CategoryPage({ data }) {
  const [activeTab, setActiveTab] = useState("Tab1");

  const handleTabClick = (tab) => {
      setActiveTab(tab);
  };

  const navigate = useNavigate();

  return (
    <div>
      <h1>Data Tabs</h1>
            <div style={{ display: 'flex', cursor: 'pointer', marginBottom: '20px', justifyContent:"center",gap:"100px" }}>
                <div 
                    onClick={() => handleTabClick("Tab1")} 
                    style={{ 
                        padding: '10px', 
                        borderBottom: activeTab === "Tab1" ? '2px solid #2e5c99' : 'none',
                        fontSize:"20px",

                    }}
                > 
                    <strong>DP daily log analysis</strong>

                    
                </div>
                <div 
                    onClick={() => handleTabClick("Tab2")} 
                    style={{ 
                        padding: '10px', 
                        borderBottom: activeTab === "Tab2" ? '2px solid blue' : 'none',
                        fontSize:"20px" 
                    }}
                >
                    <strong>DP Graphs and Stats</strong>
                    
                </div>
            </div>
            <div 
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '20px',
                    padding: '2vw 10vw',
                }}
            >
                {(activeTab === "Tab1" ? Object.keys(data) : dp_graph_stats).map((item, index) => (
                    <div 
                        key={index} 
                        style={{
                            boxSizing: 'border-box',
                            padding: '10px',
                            backgroundColor: '#2e5c99',
                            color: 'white',
                            textAlign: 'center',
                            border: '1px solid #ddd',
                            fontSize: '16px',
                        }}
                        onClick={() => navigate(`/${item}`)}
                    >
                        {item}
                    </div>
                ))}
            </div>
      {/* <h2>Select Category</h2>
      {Object.keys(data).map((category) => (
        <button key={category} onClick={() => navigate(`/${category}`)}>
          {category}
        </button>
      ))} */}
    </div>
  );
}

export default CategoryPage;
