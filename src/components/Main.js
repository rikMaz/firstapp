import React from 'react';
import AddForm from "./AddForm";

function Main() {



    const grundgesetz = [
        {id: 1, article: "Artikel 1: Et es wie et es. („Es ist, wie es ist.“)"},
        {id: 2, article: "Artikel 2: Et kütt wie et kütt. („Es kommt, wie es kommt.“)"},
        {id: 3, article: "Artikel 3: Et hätt noch emmer joot jejange. („Es ist bisher noch immer gut gegangen.“)"},
        {id: 4, article: "Artikel 4: Wat fott es, es fott. („Was fort ist, ist fort.“)"},
        {id: 5, article: "Artikel 5: Et bliev nix wie et wor. („Es bleibt nichts wie es war.“)"},
        {id: 6, article: "Artikel 6: Kenne mer nit, bruche mer nit, fott domet. („Kennen wir nicht, brauchen wir nicht, fort damit.“)"},
        {id: 7, article: "Artikel 7: Wat wells de maache? („Was willst du machen?“)"},
        {id: 8, article: "Artikel 8: Maach et joot, ävver nit zo off. („Mach es gut, aber nicht zu oft.“)"},
        {id: 9, article: "Artikel 9: Wat soll dä Kwatsch? („Was soll das sinnlose Gerede?“)"},
        {id: 10, article: "Artikel 10: Drinks de ejne met? („Trinkst du einen mit?“)"},
        {id: 11, article: "Artikel 11: Do laachs de disch kapott. („Da lachst du dich kaputt.“)"}
    ]


    return (
        <div className="App">

            <h2>Kölsches Grundgesetz</h2>

            {grundgesetz.map(item => <div key={item.id}>{item.article}</div>)}

            <AddForm initialState={grundgesetz} />


        </div>

    );
}

export default Main;