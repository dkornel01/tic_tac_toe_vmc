import Modell from "../modell/modell.js"
//import Jatekter from "../view/jatekter.js"
import Elem from "../view/elem.js"
class Controller{
    #elemLista=[]
    constructor(){
        //szuloElem=$(".elem")
        this.modell=new Modell()
        for (let index = 0; index < 9; index++) {
            this.elem=new Elem($(".elem"),index)
        }
        //const jatekter=new Jatekter($(".Tic_tac_toe"),)
        $(window).on("kivalasztas",(event)=>{
            console.log(event.detail)
            this.modell.setAllapot(event.detail.getIndex())
            event.detail.setErtek(this.modell.getErtek())
            let jatekvege=this.modell.getVegeVanE()
            if (this.modell.getVegeVanE()!=="tovább"){
                console.log(this.modell.getVegeVanE())
            }
        })
    }
   
}
export default Controller