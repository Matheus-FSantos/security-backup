import React, { useEffect, useState } from "react";

/* Components */
import { Card } from "../card/Card";

/* Styled-Components */
import { ContainerGrid } from "./styles";

/* Axios Config */
import { axiosAPI } from "../../service/axios";

const CardList = ({ filter }) => {

    const [albums, setAlbums] = useState([]);
    let albumsWithFilter = [];

    const handleMouseClick = (album) => {
        console.log(album)
    }

    if(filter.length !== 0) {
        albums.forEach((album) => {
            album.title.toLowerCase().includes(filter.toLowerCase()) && albumsWithFilter.push(album);
            
            album.artist.toLowerCase().includes(filter.toLowerCase()) && albumsWithFilter.push(album);

            album.category.forEach((category) => {
                category.title.toLowerCase().includes(filter.toLowerCase()) && albumsWithFilter.push(album);
            });
        });

        albumsWithFilter = albumsWithFilter.filter((value, index, album) => album.indexOf(value) === index );
    }

    useEffect(() => {
        axiosAPI.get("/albums")
        .then((data) => setAlbums(data.data))
        .catch((error) => console.log(`Erro: ${ error }`));
    }, []);

    return (
        <ContainerGrid>
            {
                filter.length === 0 ?
                    albums.map(card => <Card key={card.id} handleMouseClick={handleMouseClick} id={card.id} category={card.category} title={card.title} artist={card.artist} price={card.price} oldPrice={card.oldPrice} image={card.image}/>)
                :
                    albumsWithFilter.map(card => <Card key={card.id} handleMouseClick={handleMouseClick} id={card.id} category={card.category} title={card.title} artist={card.artist} price={card.price} oldPrice={card.oldPrice} image={card.image}/>)
            }
        </ContainerGrid>
    );
}

export { CardList };