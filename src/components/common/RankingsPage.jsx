import { useEffect, useState } from "react";
import axios from "axios";

const RankingsPage = () => {
  const [rankings, setRankings] = useState([]);

  useEffect(() => {
    const loadRankings = async () => {
      try {
        const res = await axios.get(
          "https://quiz-backend-aixd.onrender.com/api/result/rankings"
        );
        setRankings(res.data.rankedResults);
      } catch (err) {
        console.error(err);
      }
    };

    loadRankings();
  }, []);

  return (
    <div>
      <h2>Rankings</h2>
      {rankings.map((item) => (
        <p key={item.roll}>
          {item.rank}. {item.name} — Score: {item.score}
        </p>
      ))}
    </div>
  );
};

export default RankingsPage;
