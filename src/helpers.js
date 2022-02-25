let quotes = [ 
    { text: 'Cogito Ergo Sum',
       author: 'Descartes'},

    { text: 'El hombre es el lobo del hombre',
      author: 'Hobbes'
      },
    {
      text: 'Think Different',
      author: 'Steve Jobs'
    },
    {
      text: "Don't be Evil ",
      author: 'Google'
    },
    {
      text: "Connecting People",
      author: 'Facebook'
    },
    {
      text: "Yo no soy un hombre, soy dinamita",
      author: 'Nietzsche'
    },
    {
      text: "Un hombre es lo que hace, con lo que hicieron de el",
      author: 'Sartre'
    },
    {
      text: "No hay hechos solo interpretaciones",
      author: 'Nietzsche'
    },
    {
        text: "Se el cambio que quieres ver en el mundo",
        author: 'Gandhi*'
    },
    {
        text: "Break Things and move Fast",
        author: 'Facebook'
    },
    {
        text: "El fin justifica los medios",
        author: 'Maquiavelo*'
    },
    {
        text: "Good artists copy, great artists steal",
        author: 'Picaso'
    },
]

function get_random_quote(){
    let random_index = Math.floor(Math.random() * quotes.length)
    let random_quote = quotes[random_index]
    return random_quote
}

function get_random_color(){
    let colors = ['lightgray', 'ligthblue', 'gray', 'salmon', 'peru', 'lightpink', 'lightcoral']

    let index = Math.floor(Math.random()*colors.length)
    let color = colors[index] 

    return color
}

export {get_random_quote, get_random_color}