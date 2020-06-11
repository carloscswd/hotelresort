import React, { Component } from 'react'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from
'react-icons/fa'
import Title from './Title'
export default class Services extends Component {
    state={
        services:[
            {
                icon: <FaCocktail />,
                title: "Cocktails Grátis",
                info:'Em qualquer um dos bares localizados no Hotel serão servidas duas bebidas pelo preço de uma. Há sempre três a quatro disponíveis nesta oferta que pode ser pedida até às 23 horas.'
            },
            {
                icon: <FaHiking />,
                title: "Caminhadas sem fim",
                info:'Algumas caminhadas realmente marcaram nossa época como Camino de Santiago na Espanha, Esta é uma das caminhadas considerada de pouca dificuldade, mas muito conhecida.'
            },
            {
                icon:<FaShuttleVan />,
                title:"Transporte Gratuito",
                info:'Opções de horários para o transporte de ida e volta dos parques, nas proximidades do hotel.'
            },
            {
                icon: <FaBeer />,
                title: "Cerveja Mais Forte",
                info:'A cerveja mais forte do mundo tem 65% de álcool custa R$ 260. Brewmeister a cerveja mais forte do mundo. Chamada de Armageddon tem 65% de teor alcóolico custa 80 libras (R$ 260) a garrafa com 330ml no Reino Unido.'
            }
        ]
    };
    render() {
        return (
            <section className="services">
                <Title title="Serviços" />
                <div className="services-center">
                    {this.state.services.map((item,index) => {
                        return (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        );
                    })}
                </div>
            </section>
        );
    }
}