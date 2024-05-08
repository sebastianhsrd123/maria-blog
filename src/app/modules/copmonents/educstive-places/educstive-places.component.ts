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
      {code: "NPC013", department: "CASANARE", province: "TAURAMENA", DANE: "185410000016", institution: "INSTITUCION EDUCATIVA JOSE MARIA CORDOBA", name: "JOSE MARIA CORDOBA"},
      {code: "NPC014", department: "CASANARE", province: "VILLANUEVA", DANE: "185440000053", institution: "INSTITUCION EDUCATIVA FABIO RIVEROS", name: "FABIO RIVEROS"},
      {code: "NPC015", department: "CASANARE", province: "VILLANUEVA", DANE: "185440000118", institution: "INSTITUCION EDUCATIVA EZEQUIEL MORENO Y DIAZ", name: "EZEQUIEL MORENO Y DIAZ"},
      {code: "NPC016", department: "META", province: "VILLAVICENCIO", DANE: "150001001860", institution: "COLEGIO DEPARTAMENTAL LA ESPERANZA", name: "COLEGIO DPTAL LA ESPERANZA"},
      {code: "NPC017", department: "META", province: "VILLAVICENCIO", DANE: "150001007833", institution: "COLEGIO SILVIA APONTE RODRIGUEZ", name: "COLEGIO SILVIA APONTE RODRIGUEZ"},
      {code: "NPC018", department: "META", province: "RESTREPO", DANE: "150606000172", institution: "INSTITUCION EDUCATIVA EMILIANDO RESTREPO ECHAVARRIA", name: "SEDE PRINCIPAL EMILIANDO RESTREPO ECHAVARRIA"}
    ];
   }

  ngOnInit(): void {

  }

}
