import React from "react"
import SuperHero from "./SuperHero"
import HeroData from "./Data.json"

function SuperHeroList (){
    return (
        <div>
            {HeroData.map((heroes, i) => <SuperHero key = {heroes.name + i} heroes={heroes} />)}
        </div>
    )
}
export default SuperHeroList