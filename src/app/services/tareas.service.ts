import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  private localStorageKey = 'listaTareas';


  public getTareas():string[]{
    return JSON.parse(localStorage.getItem(this.localStorageKey) as string) || [];
  }

  agregarTarea(tarea: string){
    const tareas: string[] = this.getTareas();
    tareas.push(tarea);
    localStorage.setItem(this.localStorageKey, JSON.stringify(tareas));
  }

  eliminarTarea(index: number){
    const tareas: string[] = this.getTareas();
    tareas.splice(index, 1),
    localStorage.setItem(this.localStorageKey, JSON.stringify(tareas));
  }
  
}
