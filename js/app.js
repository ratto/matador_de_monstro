new Vue({
    el: "#app",
    data() {
        return {
            jogoIniciado: false,
            jogador: {
                vida: 100,
                ataqueMin: 1,
                ataqueMax: 12,
            },
            monstro: {
                vida: 100,
                ataqueMin: 5,
                ataqueMax: 15,
            }
        }
    },
    methods: {
        atacar: function() {
            this.monstro.vida -= this.ataqueTotal(this.jogador.ataqueMin, this.jogador.ataqueMax);
            this.jogador.vida -= this.ataqueTotal(this.monstro.ataqueMin, this.monstro.ataqueMax);
        },

        ataqueEspecial: function() {
            this.monstro.vida -= this.ataqueTotal(this.jogador.ataqueMin + 5, this.jogador.ataqueMax + 5);
            this.jogador.vida -= this.ataqueTotal(this.monstro.ataqueMin, this.monstro.ataqueMax);
        },

        curar: function() {
            this.jogador.vida += this.ataqueTotal(this.jogador.ataqueMin + 5, this.jogador.ataqueMax + 5);
            this.jogador.vida -= this.ataqueTotal(this.monstro.ataqueMin, this.monstro.ataqueMax);
        },

        desistir() {
            this.jogador.vida = 100;
            this.monstro.vida = 100;
            this.jogoIniciado = false;
        },

        ataqueTotal(min, max) {
            return Math.floor(Math.random() * max) + min;
        },
    },
    computed: {
        barraJogador: function() {
            if(this.jogador.vida < 20) {
                return "progress-bar bg-danger";
            } else {
                return "progress-bar bg-success";
            }
        },
        barraMonstro: function() {
            if(this.monstro.vida < 20) {
                return "progress-bar bg-danger";
            } else {
                return "progress-bar bg-success";
            }
        },
    }
})