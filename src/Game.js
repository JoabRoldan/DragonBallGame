class Game{
    #username;
    #vida;
    #energia;
    #ki;
    #semillas
    constructor(username){
        this.#username=username;
        this.#vida=1000;
        this.#energia=1000;
        this.#ki=1000;
        this.#semillas=3;
    }
    //metodo para mostrar las estadisticas del jugador
    mostar_stats(){
        //imprime la vida de cada jugador
        console.log(`nombre: ${this.#username}`);
        console.log(`vida: ${this.#vida}`);
        console.log(`energia: ${this.#energia}`);
        console.log(`ki: ${this.#ki}`);
        
    }
    getVida(){
        return this.#vida;
    }
    getKi() {
        return this.#ki;
    }

    getEnergia() {
        return this.#energia;
    }
    getSemillas(){
        return this.#semillas;
    }
    
    setVida(valor) { this.#vida = valor; }
    setKi(valor) { this.#ki = valor; }
    setEnergia(valor) { this.#energia = valor; }
    getUsername() { return this.#username; }

    
    //metodo encargado de decrementar la vida del jugador
    decremento_vida(){
        //se valida que el decremento de vida sea un numero positivo mayor a cero
        this.#vida= this.#vida - 100 >= 0 ? this.#vida - 100 : 0;
        //al aplicar el decremento se muestran los stacks actualizados
        this.mostar_stats();
    }
    decremento_vida1(){
        //se valida que el decremento de vida sea un numero positivo mayor a cero
        this.#vida= this.#vida - 200 >= 0 ? this.#vida - 200 : 0;
        //al aplicar el decremento se muestran los stacks actualizados
        this.mostar_stats();
    }
    //definir cuanto vamos a hacer de daño resta energia y ki del personaje
    //  que esta atacando y recibe como argumento un objeto correspondiente al jugador 
    // opuesto, esto para acceder al metodo decremento_Vida y reducir sus estatus
    atk_basico(player){
        this.#energia = this.#energia - 100 >= 0 ? this.#energia - 100 : 0;
        this.#ki = this.#ki - 200 >= 0 ? this.#ki - 200 : 0;
        //decremento de vida del jugador opuesto
        player.decremento_vida();
    }
    atk_especial(player){
        this.#energia = this.#energia - 250 >= 0 ? this.#energia - 250 : 0;
        this.#ki = this.#ki - 300 >= 0 ? this.#ki - 300 : 0;
        player.decremento_vida1();
    }

    cargar_ki() {
        // Incrementar KI
        this.#ki = Math.min(this.#ki + 300, 1000);
        // Incrementar Energía
        this.#energia = Math.min(this.#energia + 200, 1000);

        this.mostar_stats();
    }
    usar_semilla() {
        if (this.#semillas > 0) {
            this.#vida = 1000;
            this.#energia = 1000;
            this.#ki = 1000;
            this.#semillas -= 1;
            console.log(`${this.#username} usó una semilla del ermitaño. Restantes: ${this.#semillas}`);
            this.mostar_stats();
        } else {
            console.log(`${this.#username} ya no tiene semillas del ermitaño.`);
        }
    }


}
/* let player1=new Game("Goku");
let player2=new Game("Vegeta");
player1.atk_basico(player2);           
player2.atk_especial(player1);   */   

export default Game;
