import classnames from "classnames";
import { useState, useEffect } from "react"
import AdditionalParagraph from "./AdditionalParagraph/AdditionalParagraph";

import "./About.less";
import dsText from "../../../images/dark-souls-text.png";

function About() {
    const [pageYOffset, setPageYOffset] = useState(0);

    const aboutTextClass = classnames(
        "about__text",
        {
            "about__text_slide-in": pageYOffset > 120
        }
    );

    useEffect(() => {
        window.addEventListener("scroll", windowScrollListener);

        return () => {
            window.removeEventListener("scroll", windowScrollListener);
        };

    }, []);

    function windowScrollListener() {
        setPageYOffset(window.pageYOffset);
    };

    return (
        <section className="about">
            <div className="about__intro-container">
                <img className="about__intro-text-logo" src={dsText} alt="Надпись 'Dark Souls'"></img>
                <h1 className="about__intro-title">DARK SOULS</h1>
                <div className="about__intro-text-container">
                    <p className="about__intro-text"><span className="about__intro-text-span">Release Date:</span> 07/10/2011</p>
                    <p className="about__intro-text"><span className="about__intro-text-span">Genres:</span> RPG</p>
                    <p className="about__intro-text"><span className="about__intro-text-span">Developer:</span> FromSoftware, Inc</p>
                </div>
            </div>
            <div className="about__text-container">
                <p className={aboutTextClass}>
                    Dark Souls is the new action role-playing game from the developers
                    who brought you Demon’s Souls, FromSoftware. Dark Souls will have
                    many familiar features: A dark fantasy universe, tense dungeon
                    crawling, fearsome enemy encounters and unique online
                    interactions. Dark Souls is a spiritual successor to Demon’s, not a
                    sequel.
                </p>
                <p className={aboutTextClass}>
                    Prepare for a new, despair-inducing world, with a vast, fully-
                    explorable horizon and vertically-oriented landforms. Prepare for a
                    new, mysterious story, centered around the the world of Lodran, but
                    most of all, prepare to die. You will face countless murderous traps,
                    countless darkly grotesque mobs and several gargantuan,
                    supremely powerful demons and dragons bosses. You must learn
                    from death to persist through this unforgiving world. And you aren’t
                    alone. Dark Souls allows the spirits of other players to show up in
                    your world, so you can learn from their deaths and they can learn
                    from yours. You can also summon players into your world to co-op
                    adventure, or invade other's worlds to PVP battle. New to Dark Souls
                    are Bonfires, which serve as check points as you fight your way
                    through this epic adventure. While rested at Bonfires, your health
                    and magic replenish but at a cost, all mobs respawn.
                    Beware: There is no place in Dark Souls that is truly safe. With days of
                    game play and an even more punishing difficulty level, Dark Souls
                    will be the most deeply challenging game you play this year.
                </p>
                <p className={aboutTextClass}>
                    Can you live through a million deaths and earn your legacy?
                </p>
            </div>
            <div className="about__buttons">
                <div className="about__buttons-text-container">
                    <p className="about__buttons-text">07/10/2011</p>
                    <p className="about__buttons-text">24/08/2012</p>
                </div>
                <div className="about__buttons-contianer">
                    <button className="about__button"></button>
                    <button className="about__button"></button>
                    <button className="about__button"></button>
                </div>
            </div>
            <AdditionalParagraph />
        </section>
    )
};

export default About;
