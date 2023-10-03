class Modell{
    #lista
    #index
    #lepesszam
    #endregion
    #allapot
    constructor(){
        this.#allapot= "x";
        this.#lepesszam=0
        this.#lista=[".",".",".",".",".",".",".",".","."];
    }
    setAllapot(index){
        if (this.#allapot==="x"){
            this.#allapot="O"
        }
        else{
            this.#allapot="X"
        }
        this.#lista[index]=this.#allapot
        console.log(this.#lista)
        this.#lepesszam++;
    }
    getVegeVanE(){
        this.#viszintesGyozelem()
        if(vEll.indexOf("OOO")>-1){
            return "O nyert";
        }
        else if (vEll.indexOf("OOO")>-1) {
            return "X nyert";
        }
        else if (this.#lepesszam===9){
            return "Döntetlen"
        }
        return "tovább"
    }
    getErtek(){
        return this.#allapot
    }
    #viszintesGyozelem(){
        let vEll=""
        for (let index = 0; index < 9; index++) {
            vEll+=this.#lista
                if(index%3===2){
                    vEll+="@"
                }
            }
            console.log(vEll.indexOf("OOO"),vEll.indexOf("XXX"))
        }
    /*#sajatEsemenykezelo(){
           const esemeny=new CustomEvent("kivalasztas") 
    }*/
}
export default Modell