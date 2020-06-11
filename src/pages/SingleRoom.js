import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import StyledHero from "../components/StyledHero";
export default class SingleRoom extends Component {
    constructor(props) {
        super(props);
        //console.log(this.props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        };
    }
    static contextType = RoomContext;
    //componentDidMout() {}
    render() {
        const { getRoom } = this.context;
        const room = getRoom
            (this.state.slug);
        if (!room) {
            return (
                <div className="error">
                    <h3>Nenhum quarto foi encontrado...</h3>
                    <Link to="/rooms" className="btn-primary">
                        Voltar aos quartos
                </Link>
                </div>
            );
        }
        const {
            name,
            description,
            capacity,
            size,
            price,
            extras,
            breakfast,
            pets,
            images
        } = room;
        const [mainImg, ...defaultImg] = images;
        
        return (
            <>
            <StyledHero img={mainImg || this.state.defaultBcg}>
                <Banner title={` Quarto ${name} `}>
                    <Link to="/rooms" className="btn-primary">
                        Voltar aos quartos
                    </Link>
                </Banner>
            </StyledHero>
            <section className="single-room">
                <div className="single-room-images">
                    {defaultImg.map((item, index) => {
                        return <img key={index} src={item} alt={name} />;
                    })}
                </div>
                <div className="single-room-info">
                    <article className="desc">
                        <h3>detalhes</h3>
                        <p>{description}</p>
                    </article>
                    <article className="info">
                        <h3>info</h3>
                        <h6>preço: R$ {price}</h6>
                        <h6>tamanho: {size} m²</h6>
                        <h6>
                            Capacidade :{" "} 
                            {capacity > 1 ? `${capacity} pessoas` : 
                            `${capacity} person `}
                        </h6>
                        <h6>{pets ? "pets permitido" : "pets não permitido"}</h6>
                        <h6>{breakfast && "Café da manhã incluso"}</h6>
                    </article>
                </div>
            </section>
            <section className="room-extras">
                <h6>extras</h6>
                <ul className="extras">
                    {extras.map((item, index)=>{
                        return <li key={index}>- {item}</li>;
                    })}
                </ul>
            </section>
            </>
        );
    }
}