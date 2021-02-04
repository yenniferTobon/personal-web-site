import { Injectable } from '@angular/core';

@Injectable()

export class PortafolioService {

    private portfolio: portfolioInterface[] = [
        {
          title: "Update Imagen",
          description: "System that allows individual loading or massive loading of images in JPG format of any dimension and performs the analysis to identify whether the image fits within a sheet of specific dimensions, if it does not fit, the image is modified preserving the quality and the ratio.",
          img: "assets/img/A-64.png",
          dateLastModified: "2020-12-21",
          tools:"Backend-Nodejs, Frontend-Angular"
        },
        {
          title: "Batman",
          description: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
          img: "assets/img/batman.png",
          dateLastModified: "1939-05-01",
          tools:"DC"
        },
        {
          title: "Daredevil",
          description: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
          img: "assets/img/daredevil.png",
          dateLastModified: "1964-01-01",
          tools: "Marvel"
        },
        {
          title: "Hulk",
          description: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",
          img: "assets/img/hulk.png",
          dateLastModified: "1962-05-01",
          tools:"Marvel"
        },
        {
          title: "Linterna Verde",
          description: "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)",
          img: "assets/img/linterna-verde.png",
          dateLastModified: "1940-06-01",
          tools: "DC"
        }
    ];

    constructor() {
        console.log("Ser listo");
    }

    getPortfolio() {
        return this.portfolio;
    }

    buscarPortfolio( lenguaje: string){
      let portfolioArr: portfolioInterface[] = [];
      lenguaje = lenguaje.toLowerCase();

      for (let auxTool of this.portfolio){
        let tool = auxTool.tools.toLowerCase();

        if (tool.indexOf(lenguaje) >= 0){
          portfolioArr.push(auxTool);
        }
      }
      return portfolioArr;
    }

}

 export interface portfolioInterface {
    title: String;
    description: String;
    img: String;
    dateLastModified: String;
    tools: String;
}
