export class TutorialDTO extends Object{
    id: number = 0;
    nombre: string = '';
    descripcion: string = '';
    estado: string = '';

    constructor(){
        super();
    }

    public generarData(id: number, nombre: string, descripcion: string, estado: string): void {
        this.id             = id;
        this.nombre         = nombre;
        this.descripcion    = descripcion;
        this.estado         = estado;
    }

    public setId(nuevoId: number) : void {
      this.id = nuevoId;
    }

    public setEstado(nuevoEstado: string) : void {
      this.estado = nuevoEstado;
    }
}
