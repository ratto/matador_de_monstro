new Vue({
    el: "app",
    data: {
        jogador: {
            vida: 100,
            ataqueMin: 1,
            ataqueMax: 12
        },
        monstro: {
            vida: 100,
            ataqueMin: 5,
            ataqueMax: 15
        }
    },
    methods: {
        atacar: function() {
            monstro.vida -= ataqueTotal(jogador.ataqueMin, jogador.ataqueMax);
            jogador.vida -= ataqueTotal(monstro.ataqueMin, monstro.ataqueMax);
        },

        ataqueEspecial: function() {
            monstro.vida -= ataqueTotal(jogador.ataqueMin + 5, jogador.ataqueMax + 5);
            jogador.vida -= ataqueTotal(monstro.ataqueMin, monstro.ataqueMax);
        },

        curar: function() {
            jogador.vida += ataqueTotal(jogador.ataqueMin + 2, jogador.ataqueMax + 1);
            jogador.vida -= ataqueTotal(monstro.ataqueMin, monstro.ataqueMax);
        },
    },
    computed: {
        ataqueTotal(min, max) {
            return Math.floor(Math.random() * max) + min;
        }  
    },
})