import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, Event as NavigationEvent } from '@angular/router';
import { filter } from 'rxjs/operators'; // Importa filter da rxjs/operators

@Component({
  selector: 'app-personalized-header',
  standalone: true,
  imports: [],
  templateUrl: './personalized-header.component.html',
  styleUrl: './personalized-header.component.scss'
})
export class PersonalizedHeaderComponent implements OnInit{

  constructor(private router: Router) { }

  actuallyPageLink=""

  // Metodo per monitorare il cambio di pagina
  watchPageChanges() {
    this.router.events.pipe(
      filter((event: NavigationEvent): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // Puoi fare ciò che vuoi quando avviene un cambio di pagina
     this.actuallyPageLink=event.urlAfterRedirects;
      // Esempio: Invia un evento o effettua altre azioni
    });
  }

  ngOnInit(): void {
    this.watchPageChanges();
    console.log(this.actuallyPageLink)
  } 

  genSelectedPageLink(route:string){
    console.log(this.actuallyPageLink)
    if(route==this.actuallyPageLink){
      return 'nav-link active';
    }else{
      return 'nav-link';
    }
  }

}
