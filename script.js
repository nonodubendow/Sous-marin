// 1. ON RÉCUPÈRE LES ÉLÉMENTS DE LA PAGE
// On dit au code : "Trouve l'écran principal et les boutons, et garde-les en mémoire"
const ecranPrincipal = document.getElementById('ecran-principal');

const btnSurf = document.getElementById('btn-surf');
const btnCulture = document.getElementById('btn-culture');
const btnBio = document.getElementById('btn-bio');
const BtnIa = document.getElementById('btn-ia');
const textecompteur = document.getElementById('compteur');
const btnroutine = document.getElementById('btn-routine');
// 1. On essaie de récupérer une sauvegarde
let energieSauvegardee = localStorage.getItem('energie');

// 2. On crée notre variable. 
// Si une sauvegarde existe, on prend le chiffre sauvegardé. Sinon, on commence à 0.
let energie;
if (energieSauvegardee) {
    energie = parseInt(energieSauvegardee); // On convertit le texte en nombre
} else {
    energie = 0;
}

// 3. IMPORTANT : On met à jour l'affichage tout de suite pour ne pas voir "0"
textecompteur.innerText = energie;

// 2. ON CRÉE LES ACTIONS (Les Événements)

// Quand on clique sur le bouton "Surf"...
btnSurf.addEventListener('click', function() {
    // ...On remplace le contenu de l'écran principal par ce code HTML :
    ecranPrincipal.innerHTML = `
        <div class="module">
            <h2>🏄‍♀️ Carnet de Surf & Sport</h2>
            <p>Prête à enregistrer ta session du jour en Guadeloupe ?</p>
            <button style="margin-top: 15px; padding: 8px; border-radius: 5px;">+ Ajouter une session</button>
        </div>
    `;
});

// Quand on clique sur le bouton "Culture"...
btnCulture.addEventListener('click', function() {
    ecranPrincipal.innerHTML = `
        <div class="module">
            <h2>📚 Médiathèque</h2>
            <p>Tes films à voir et tes livres en cours.</p>
            <ul>
                <li>🎬 Film : Le Grand Bleu</li>
                <li>📖 Livre : L'âme des poulpes</li>
            </ul>
        </div>
    `;
});

// Quand on clique sur le bouton "Biologie"...
btnBio.addEventListener('click', function() {
    ecranPrincipal.innerHTML = `
        <div class="module">
            <h2>🪸 Académie Marine</h2>
            <p><strong>Leçon du jour :</strong> Savais-tu que les coraux ne sont pas des plantes, mais des animaux (des polypes) qui vivent en symbiose avec des micro-algues ?</p>
        </div>
    `;
});
//Quand on clique sur le bouton "IA"...
BtnIa.addEventListener('click',function() {
    ecranPrincipal.innerHTML = `
        <div class="module">
            <h2>🤖 Infirmerie Mentale</h2>
            <p><strong>Bonjour Capitaine, c'est comment la météo aujourd'hui ?</strong></p>
        </div>
    `;
   
});

// Pour augmenter énergie ...
btnroutine.addEventListener('click',function() {
    energie = energie + 1;
    localStorage.setItem('energie', energie);
    textecompteur.innerText = energie ; 
    if (energie === 5) {
        btnroutine.innerText = "🎉 BRAVO CAPITAINE !" ;
    }
});