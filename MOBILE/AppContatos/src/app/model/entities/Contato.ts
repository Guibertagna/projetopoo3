export default class Contatos{
    private _nome: string;
    private _telefone: number;

    /**
     * Getter email
     * @return {string}
     */
	public get email(): string {
		return this._email;
	}

    /**
     * Setter email
     * @param {string} value
     */
	public set email(value: string) {
		this._email = value;
	}
    private _email : string;
    constructor(nome: string, telefone: number, email: string){
        this._nome= nome;
        this._telefone = telefone;
        this._email = email;

    }
    

    /**
     * Getter nome
     * @return {string}
     */
	public get nome(): string {
		return this._nome;
	}

    /**
     * Setter nome
     * @param {string} value
     */
	public set nome(value: string) {
		this._nome = value;
	}

    /**
     * Getter telefone
     * @return {number}
     */
	public get telefone(): number {
		return this._telefone;
	}

    /**
     * Setter telefone
     * @param {number} value
     */
	public set telefone(value: number) {
		this._telefone = value;
	}

}