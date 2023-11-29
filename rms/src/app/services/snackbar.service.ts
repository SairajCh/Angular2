import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar:MatSnackBar) { }


  openSnackBar(message:string,action:string){

    if(action==='error'){

      this.snackBar.open(message,'',{
        horizontalPosition:'center',
        verticalPosition:'bottom',
        duration: 2000,
        panelClass:['black-snackbar']
      });

    }else{

      this.snackBar.open(message,'',{
        horizontalPosition:'center',
        verticalPosition:'bottom',
        duration: 2000,
        panelClass:['green-snackbar']
      });


    }

  }
}
