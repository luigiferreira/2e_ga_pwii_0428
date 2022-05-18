export class Autor{    
    private _nome: String;
    nacionalidade: String;
    sexo: String;
    dataNascimento: Date;

    public set nome(nome: String){
        this._nome = nome;
    }

    public get nome(): String{
        return this._nome;
    }  
}