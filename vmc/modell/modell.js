class Modell{
    #lista=[]
    #index
    #lepesszam
    //#endregion
    #allapot
    constructor(){
        this.#allapot="o";
        this.#lepesszam=0;
        this.#lista=[".",".",".",".",".",".",".",".","."];
    }
    setAllapot(index){
        if (this.#allapot==="x"){
            this.#allapot="o";
        }
        else{
            this.#allapot="x";
            
        }
        this.#lista[index]=this.#allapot;
        this.#lepesszam++;
    }
    getVegeVanE(){
        for (let valaszt=0;valaszt<3;valaszt++){
        let vEll=""
            if (valaszt===0){
                vEll=this.#fuggolegesGyozelem()
            }
            else if (valaszt===1){
                vEll=this.#viszintesGyozelem()
            }
            else{
                console.log("volt")
                vEll =this.#atlosgyozelem()
            }
        if(vEll.indexOf("ooo")>-1){
            return "O nyert";
        }
        else if (vEll.indexOf("xxx")>-1) {
            return "X nyert";
        }
        else if (this.#lepesszam===9){
            return "Döntetlen"
        }
    }
        return "tovább"
    }
    getErtek(){
        return this.#allapot
    }
    #viszintesGyozelem(){
        let vEll=""
        for (let i = 0; i < 9; i++) {
            vEll+=this.#lista[i]
                if(i%3===2){
                    vEll+="@"
                }
            }
        vEll +="@";
        return vEll
    }
    #fuggolegesGyozelem(){
        let vEll=""
        for (let x=0;x<3;x++){
            for (let y=0;y<9;y++){
                if (y%3===x%3){
                    vEll+=this.#lista[y]
                }
                
            }
            console.log(vEll)
            vEll+="@";
        }
        return vEll
    }
    #atlosgyozelem(){
        let vEll="";
        for (let x=0;x<3;x++){
            vEll+=this.#lista[x*4]
        }
        vEll+="@";
        for (let y=0;y<3;y++){
            vEll+=this.#lista[6-y*2]
        }
        return vEll
    }
    /*#sajatEsemenykezelo(){
           const esemeny=new CustomEvent("kivalasztas") 
    }*/
}
export default Modell