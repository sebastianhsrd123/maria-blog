import { Component, OnInit } from '@angular/core';


interface places{
  code: string;
  department: string;
  province: string;
  DANE: string;
  institution: string;
  name: string;
}
@Component({
  selector: 'app-educative-places',
  templateUrl: './educstive-places.component.html',
  styleUrls: ['./educstive-places.component.scss']
})


export class EducstivePlacesComponent implements OnInit {
  header:places | null;
  content:places[];
  constructor() {
    this.header = {code: "Código", department: "Departamento", province: "Municipio", DANE: "DANE", institution: "Institución", name: "Nombre Sede"};
    this.content = [
      {code: "NPC-013", department: "CASANARE", province: "TAURAMENA", DANE: "185410000016", institution: "INSTITUCION EDUCATIVA JOSÉ MARÍA CÓRDOBA", name: "JOSÉ MARÍA CÓRDOBA"},
      {code: "NPC-014", department: "CASANARE", province: "VILLANUEVA", DANE: "185440000053", institution: "INSTITUCION EDUCATIVA FABIO RIVEROS", name: "FABIO RIVEROS"},
      {code: "NPC-015", department: "CASANARE", province: "VILLANUEVA", DANE: "185440000118", institution: "INSTITUCION EDUCATIVA EZEQUIEL MORENO Y DÍAZ", name: "EZEQUIEL MORENO Y DÍAZ"},
      {code: "NPC-016", department: "META", province: "VILLAVICENCIO", DANE: "150001001860", institution: "COLEGIO DEPARTAMENTAL LA ESPERANZA", name: "COLEGIO DPTAL LA ESPERANZA"},
      {code: "NPC-017", department: "META", province: "VILLAVICENCIO", DANE: "150001007833", institution: "COLEGIO SILVIA APONTE RODRÍGUEZ", name: "COLEGIO SILVIA APONTE RODRÍGUEZ"},
      {code: "NPC-018", department: "META", province: "RESTREPO", DANE: "150606000172", institution: "INSTITUCION EDUCATIVA EMILIANO RESTREPO ECHAVARRÍA", name: "SEDE PRINCIPAL EMILIANO RESTREPO ECHAVARRÍA"}
    ];
   }

  ngOnInit(): void {

  }

}
