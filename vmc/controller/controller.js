import Modell from "../modell/modell.js"
//import Jatekter from "../view/jatekter.js"
import Elem from "../view/elem.js"
import Info from "../view/info.js"
class Controller{
    #elemLista=[]
    constructor(){
        //szuloElem=$(".elem")
        this.modell=new Modell()
        for (let index = 0; index < 9; index++) {
            new Elem($(".elem"), index)
        }
        this.info=new Info($(".info"),)
        //const jatekter=new Jatekter($(".Tic_tac_toe"),)
        $(window).on("kivalasztas",(event)=>{
            this.info.$infopanel(this.modell.getErtek())
            this.modell.setAllapot(event.detail.getIndex())
            event.detail.setErtek(this.modell.getErtek())
            //let jatekvege=this.modell.getVegeVanE()
            if (this.modell.getVegeVanE()!=="tovább"){
                this.info.$nyertes(this.modell.getVegeVanE())
            }
            
        })
    }
   
}
export default Controller