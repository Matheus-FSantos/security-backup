import { axiosAPI } from "../../service/axios";
import { useEffect, useState } from "react";

export const CategoryList = () => {
  
  const [categoies, setCategories] = useState([]);
  
  useEffect(() => {
    axiosAPI.get("/albums").then(albums => {
      albums.data.forEach(album => {
        album.category.forEach()
      });
    }).catch(error => console.log(error));
  }, []);

  return (
    <div>
      CategoryList works!!!
    </div>
  );
}
