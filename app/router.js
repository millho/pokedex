import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { PokemonController } from "./controllers/PokemonController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";

/**
 * Register your routes for the application here
 * @type {Route[]}
 */
export const router = [
  {
    path: '',
    controller: PokemonController,
    view: /*html*/`
    <div class="row py-3">
      <section class="col-3">
        <div id="pokemon-list" class="bg-dark">

        </div>
      </section>
      <section class="col-6">
        <div id="active-pokemon">
        
        </div>
      </section>
      <section class="col-3">
        <div id="my-pokemon">
        
        </div>
      </section>
    </div>`
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]






/**
 * Supporting types for the router
 * NOTE Controllers must be non instantiated 
 * @typedef {{[x:string]:any}} controller
 * @typedef {{path: string, controller?:controller |controller[], view?: string, target?: string}} Route
 */