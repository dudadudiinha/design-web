var contatos = [
    {
        nome: "Ludmilla",
        cel: "8498175691",
        foto: "https://billboard.com.br/wp-content/uploads/2024/05/Ludmilla-Steff-Lima.png",
        favorito: false
    },
    {
        nome: "Anitta",
        cel: "8498725006",
        foto: "https://midias.agazeta.com.br/2025/03/21/a-cantora-anitta--2656939-article.webp",
        favorito: true
    },
    {
        nome: "Iza",
        cel: "8498868700",
        foto: "https://www.rbsdirect.com.br/imagesrc/25068354.jpg?w=700",
        favorito: false
    },
    {
        nome: "Virginia",
        cel: "8491022400",
        foto: "https://melhorinvestimento.net/wp-content/uploads/2025/05/Virginia-Fonseca-768x512.jpg",
        favorito: false
    }
]

const agenda = {
    data(){
        return{
            titulo: "Agenda de contatos",
            contatos: window.contatos
        }
    }
}

Vue.createApp(agenda).mount("#app");