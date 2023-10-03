class Elem{
    //#allapot
    #index
    constructor(szuloElem,index){
        //this.szuloelem=szuloelem
        this.szuloElem=szuloElem
        this.#index=index
        this.kattinthato=true;
        this.#htmlOsszerak()
        this.elem=$(".egy:last-child")
        this.pElem=this.elem.children("p")
        this.elem.on("click",()=>{
            if (this.kattinthato){
            this.#sajatEsemenykezelo("kivalasztas")
            this.kattinthato=false
            }
        })
        //this.#allapot=true
        //this.divElem=$("article div:last-child");
        //this.divElem.on(click){
        //if (this.#allapot){
        //    this.esemenyTrigger();    
        //}
        //this.#allapot=false
        //}
    }
        #htmlOsszerak(){
            let txt=""
            txt+=`
            <div class="egy">
            <p></p>
            </div>
            `
            txt+=""
            this.szuloElem.append(txt)
        }
    
    setErtek(jel){
        this.pElem.html(jel)
    }
    getIndex(){
        return this.index
    }
    #sajatEsemenykezelo(esemenynev){
        console.log(esemenynev)
        const esemeny=new CustomEvent(esemenynev,{detail:this})
        window.dispatchEvent(esemeny)
    }
}
export default Elem