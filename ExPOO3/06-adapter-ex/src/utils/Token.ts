export default class Token{
    private _token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6InRva2VuX3BhZ2FtZW50byJ9.qDGgYV3oiTmk7HRm8DXzf0HOF7mDs1R-NrPlZcyKnrE";
   
   
    public get token() {
        return this._token;
    }
   
   
    public set token(value) {
        this._token = value;
    }
}