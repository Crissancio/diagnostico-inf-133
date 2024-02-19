'use client'
import Image from "next/image";
import { useEffect,useState } from "react";
import style from "./pokedex.module.css";

export default function Pokedex ({id}){
    
    const loading = "Loading :D"

    const [pokeImage, setPokeImage]=useState("./loading.svg");
    const [pokeName, setPokeName] = useState(loading);
    const [pokeId, setPokeId] = useState();

    const [pokeTypeOne, setPokeTypeOne] = useState(loading);
    const [pokeTypeTwo, setPokeTypeTwo] = useState(loading);
    const [pokeHeight, setPokeHeight] = useState();
    const [pokeWeight, setPokeWeight] = useState();
    const [pokeAbilityOne, setPokeAbilityOne] = useState(loading);
    const [pokeAbilityTwo, setPokeAbilityTwo] = useState(loading);

    const [pokeHP, setPokeHP] = useState(loading);
    const [pokeAttack, setPokeAttack] = useState(loading);
    const [pokeDefense, setPokeDefense] = useState(loading);
    const [pokeSpeed, setPokeSpeed] = useState(loading);


    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    useEffect( () => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setPokeName(data.species.name),
            setPokeId(data.id.toString().padStart(3,'0')),
            setPokeImage(data.sprites.front_default),
            setPokeTypeOne(data.types[0].type.name),
            setPokeTypeTwo(data.types[1]? (data.types[1].type.name):null),
            setPokeHeight(data.height),
            setPokeWeight(data.weight),
            setPokeAbilityOne(data.abilities[0].ability.name),
            setPokeAbilityTwo(data.abilities[1].ability.name),
            setPokeHP(data.stats[0].base_stat),
            setPokeAttack(data.stats[1].base_stat),
            setPokeDefense(data.stats[2].base_stat),
            setPokeSpeed(data.stats[5].base_stat)
            
        });
    },[]);

    return(
        <div className={style.mainApp}>
            <div className={style.principalInfo}>
                <div className={style.idk}>
                    <h2 className={style.title}>
                        My Pokemon
                    </h2>
                    <h1 className={style.namePokemon}>
                        {pokeName}
                    </h1>
                    <h3 className={style.idPokemon}>
                        #{pokeId}
                    </h3>
                </div>
                <div className={style.imageContainer}>
                    <Image src={pokeImage} alt="Imagen pokemon" width={325} height={325} />
                </div>
            </div>
            <div className={style.specificInfo}>
                <div className={style.containerXD}>
                    <div className={style.aboutContainer}>
                        <h2 className={style.titleStats}>About</h2>
                        <hr/>
                    </div>
                    <div className={style.statsContainer}>
                        <h2 className={style.subtitleStats} >Type</h2>
                        <h2 className={style.capitalize}> {pokeTypeOne}{pokeTypeTwo!=null? (`,  ${pokeTypeTwo}`):null}</h2>
                        <h2 className={style.subtitleStats} >Height</h2>
                        <h2>{pokeHeight/10} m</h2>
                        <h2 className={style.subtitleStats} >Weight</h2>
                        <h2>{pokeWeight/10} kg</h2>
                        <h2 className={style.subtitleStats}>Abilities</h2>
                        <h2 className={style.capitalize}>{pokeAbilityOne}, {pokeAbilityTwo} </h2>
                    </div>
                </div>
                <div className={style.containerXD}>
                    <h2 className={style.titleStats}>Stats</h2>
                    <div className={style.statsContainer}>
                        <h2 className={style.subtitleStats} >HP</h2>
                        <h2>{pokeHP}</h2>
                        <h2 className={style.subtitleStats} >Attack</h2>
                        <h2>{pokeAttack}</h2>
                        <h2 className={style.subtitleStats} >Defense</h2>
                        <h2>{pokeDefense}</h2>
                        <h2 className={style.subtitleStats} >Speed</h2>
                        <h2>{pokeSpeed}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}