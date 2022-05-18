export class Autor{    
    private _nome: String;
    private _nacionalidade: String;
    private _sexo: String;
    private _dataNascimento: Date;
    
    constructor(){
        this._nome = "";
        this._dataNascimento = new Date();
        this._nacionalidade = "";
        this._sexo = "";
    }

    public set nome(nome: String){
        this._nome = nome;
    }
    public get nome(): String{
        return this._nome;
    }

    public set nacionalidade(nacionalidade: String){
        this._nacionalidade = nacionalidade;
    }

    public get nacionalidade(): String{
        return this._nacionalidade;
    }

    public set sexo(sexo: String){
        this._sexo = sexo;
    }

    public get sexo(): String{
        return this._sexo;
    }

    public set dataNascimento(dataNascimento: Date){
        this._dataNascimento = dataNascimento;
    }

    public get dataNascimento(): Date{
        return this._dataNascimento;
    }
}
