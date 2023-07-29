import React from "react";
import Card from './card'
import './top-card-list.css'

const cardListData = [
    {
        username: '@AlexisMontoya',
        id: 1,
        followers: 1987,
        todayFollowers: 12, 
        icon: "images/icons8-facebook.svg",
        name: 'facebook',
    },
    {
        username: '@AlexisMontoya',
        id: 2,
        followers: 3564,
        todayFollowers: 20, 
        icon: "images/icons8-twitter.svg",
        name: 'twitter',
    },
    {
        username: '@AlexisMontoya',
        id: 3,
        followers: 2573,
        todayFollowers: 30, 
        icon: "images/icons8-instagram.svg",
        name: 'instagram',
    },
    {
        username: '@AlexisMontoya',
        id: 4,
        followers: 4829,
        todayFollowers: -50, 
        icon: "images/icons8-youtube-play.svg",
        name: 'youtube',
    },
]

function TopCardList() {
    return (
        <section className="top-cards">
        <div className="wrapper">
            <div className="grid">
                {
                    cardListData.map((cardData) =>  <Card key={cardData.id} {...cardData} />)
                }
         {/* <article className="card twitter">
            <p className="card-title">
                <img src="images/icons8-twitter.svg" alt="" />
                @AlexisMontoya
            </p>
            <p className="card-followers">
                <span className="card-followers-number">3564</span>
                <span className="card-followers-title">Followers</span>
            </p>
            <p className="card-today">
                <img src="images/icons8-arriba-10.png" alt="" />
                12 Today
            </p>
         </article>
         <article className="card instagram">
            <p className="card-title">
                <img src="images/icons8-instagram.svg" alt="" />
                @AlexisMontoya
            </p>
            <p className="card-followers">
                <span className="card-followers-number">2573</span>
                <span className="card-followers-title">Followers</span>
            </p>
            <p className="card-today">
                <img src="images/icons8-arriba-10.png" alt="" />
                12 Today
            </p>
         </article>
         <article className="card youtube">
            <p className="card-title">
                <img src="images/icons8-youtube-play.svg" alt="" />
                @AlexisMontoya
            </p>
            <p className="card-followers">
                <span className="card-followers-number">4829</span>
                <span className="card-followers-title">Followers</span>
            </p>
            <p className="card-today">
                <img src="images/icons8-arriba-10.png" alt="" />
                12 Today
            </p>
         </article>  */}
         </div>
        </div>
    </section>
    )
}

export default TopCardList