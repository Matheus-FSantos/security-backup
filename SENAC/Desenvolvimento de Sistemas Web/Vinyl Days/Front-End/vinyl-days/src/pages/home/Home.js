import React, { useState } from "react";

/* Components */
import { Header } from "../../components/header/";
import { CardList } from "../../components/cardList/CardList";
import { CategoryList } from "../../components/categoryList/CategoryList";

/* Styled Components */
import { Container, TitleContainer, Title, CircleTitle, CircleMinimal, CircleLarge } from "./styles";

const Home = () => {
    
    const [searchInputValue, setSearchInputValue] = useState("");

    const handleSearchInput = (value) => {
        setSearchInputValue(value);
    }

    return (
        <Container>
            <Header onChange={ handleSearchInput }/>
            <TitleContainer>
                    <Title>Explore our collection</Title>
                    <CircleTitle />
                    <CircleMinimal />
                    <CircleLarge />
            </TitleContainer>
            <CategoryList />
            <CardList filter={ searchInputValue }/>
        </Container>
    );
}

export { Home };