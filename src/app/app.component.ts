import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Database } from 'firebase/database';
import { DatafireService } from 'src/service/datafire.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Site2023'; 
  dbase! : any; 
  DB! : Database;
  IsLoginVariable! : boolean; 

  constructor (private router : Router , private dfs: DatafireService ) {}


  ngOnInit(): void {
 
     this.dbase = this.dfs.connectFirestore(); 
     this.dfs.getCollection(this.dbase, 'Users').then(
      (data) => {
        console.log ('FireStore :' , [data]);
        return data;
      } 
     ) 

    // Mise à jour de données dans FireStore // 
    // const col = '/Users';  
    // const id = '/7tIi6REyTyB4ExdE695Y' 
    // const valeur =  {UserID:"BRUNEEM",UserNom:"BRUNEAU", UserPrenom:"Emmanuel"}
    // this.dfs.setDocument(this.dbase, col, id, valeur);
    // *************************************//
    
    // this.DB = this.dfs.connectFirebase(); 
    // const d = this.dfs.getDB(this.DB); 
    // this.dfs.setDB2(this.DB, "UserID");
    
    }; 

  OnClickPrivee () { 
    this.router.navigate(['/Privee']);
  }

  OnClickHome () { 
    this.router.navigate(['/Home']);
  }

}
