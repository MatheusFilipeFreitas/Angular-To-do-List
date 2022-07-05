export class Empresa {
    id: number
    nome: string
    email: string
    cnpj: string
    endereco: string
    senha: string

    constructor(){
    }

    popular(id: number, nome: string, email: string, cnpj: string, endereco: string, senha: string){
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.cnpj = cnpj;
        this.endereco = endereco;
        this.senha = senha;
    }
}