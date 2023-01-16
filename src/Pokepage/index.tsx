import React from "react"
import { PokeHeader } from "./header"


/**
 * Targets that PokePage and pokemon display should include:
 *
 * Name
 * Pokedex Entry
 * Image
 * Typing
 * Abilities (Name is fine just for now. No description. Although cool be shown as a tooltip)
 * Base Stats
 */

export default function PokePage() {
  return (
    <div style={{
      fontFamily: "Arial ,sans-serif", width: "100vw", height: "100vh", padding: "0",
      margin: "0", position: "absolute", left: "0", top: "0", backgroundColor: "lightblue"
    }}>
      <PokeHeader
        previous={{ number: 348, name: "Gyarados" }}
        current={{ name: "Gible", number: 349, subheader: "Land Shark Pokemon" }}
        next={{ number: 350, name: "Gabite" }} />

      <div style={{
        borderRadius: "25px",
        padding: "15px",
        margin: "10px",
        backgroundColor: "#cfcfcf"
      }}>
        It skulks in caves, and when prey or an enemy passes by, it leaps out and chomps them. The force of its attack sometimes chips its teeth.
      </div>

    </div>
  )
}