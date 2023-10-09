class Info{
    #szuloElem2;
    constructor(szuloElem2){
    this.lepesek=this.lepesek;
    this.#szuloElem2=szuloElem2;
    console.log(szuloElem2)
    }
    $infopanel(allapot){
        let txt="";
        txt+=`
        <div class=info>
        <p>Jelenleg a jatekos: ${allapot}<p>
        </div>`;
        txt+="";
        this.#szuloElem2.html(txt);
    }
    $nyertes(gyozelem,){
        let txt="";
        txt+=`
        <div class=nyertes>
        <p>${gyozelem}<p>
        </div>
        `;
        this.#szuloElem2.append(txt)
    }

}
export default Info