export class Item {
    id: number;
    descricao: string;
    status: boolean;
    terminada: string;

    popular(id: number, descricao: string, status: boolean, terminada: string){
        this.id = id;
        this.descricao = descricao;
        this.status = status;
        this.terminada = terminada;
    }
}