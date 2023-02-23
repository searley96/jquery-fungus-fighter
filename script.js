$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
let fungusHP = 100;
let gamerAP = 100;

function onReady() {

    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!


    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM


    //event to handle losing gamerAP when arcane-sceptre attack button is clicked 
    $(".attack-btn.arcane-sceptre").on("click", apDamageByArcaneSceptre);

    //event to handle losing fungusHP when arcane-sceptre attack button is clicked 
    $(".attack-btn.arcane-sceptre").on("click", hpDamageByArcaneSceptre);

    //event to handle losing gamerAP when entangle attack button is clicked 
    $(".attack-btn.entangle").on("click", apDamageByEntangle);

    //event to handle losing fungusHP when entangle attack button is clicked 
    $(".attack-btn.entangle").on("click", hpDamageByEntangle);

    //event to handle losing gamerAP when dragon blade attack button is clicked 
    $(".attack-btn.dragon-blade").on("click", apDamageByDragonBlade);

    //event to handle losing fungusHP when dragon blade attack button is clicked 
    $(".attack-btn.dragon-blade").on("click", hpDamageByDragonBlade);

    //event to handle losing gamerAP when star fire attack button is clicked 
    $(".attack-btn.star-fire").on("click", apDamageByStarFire);

    //event to handle losing fungusHP when star fire attack button is clicked 
    $(".attack-btn.star-fire").on("click", hpDamageByStarFire);

}


function apDamageByArcaneSceptre() {
    // console.log(`inside of apDamageByArcaneSceptre ${apDamageByArcaneSceptre}`);
    //if user clicks arcane sceptre button, HP decreses by 14
    gamerAP -= 12;
    if (gamerAP <= 0) {
        gamerAP = 0;

    }
    console.log(`current gamerAP: ${gamerAP}`);

    //targeting and selecting ap-text id

    renderApText();
    zeroAp();

}


function hpDamageByArcaneSceptre() {
    // console.log(`inside of hpDamageByArcaneSceptre ${hpDamageByArcaneSceptre}`);
    //if user clicks arcane sceptre, HP decreses by 14
    fungusHP -= 14;
    if (fungusHP <= 0) {
        fungusHP = 0;

    }

    renderHpText();
    zeroHP();
}


function apDamageByEntangle() {
    //if user clicks entagle button, AP decreses by 23
    gamerAP -= 23;
    console.log(`current gamerAP: ${gamerAP}`);
    if (gamerAP <= 0) {
        gamerAP = 0;

    }
    renderApText();
    zeroAp();

}


function hpDamageByEntangle() {
    //if user clicks entagle button, HP decreses by 14
    fungusHP -= 9;
    if (fungusHP <= 0) {
        fungusHP = 0;

    }
    console.log(`current fungusHP: ${fungusHP}`);

    renderHpText();
    zeroHP()

}

function apDamageByDragonBlade() {
    //if user clicks drangon blade button, AP decreses by 38
    gamerAP -= 38;
    if (gamerAP <= 0) {
        gamerAP = 0;

    }
    console.log(`current gamerAP: ${gamerAP}`);

    renderApText();
    zeroAp();

}

function hpDamageByDragonBlade() {
    //if user clicks drangon blade button, HP decreses by 47
    fungusHP -= 47;
    if (fungusHP <= 0) {
        fungusHP = 0;

    }
    console.log(`current fungusHP: ${fungusHP}`);

    renderHpText();
    zeroHP()

}

function apDamageByStarFire() {
    //if user clicks star fire button, AP decreses by 33
    gamerAP -= 33;
    if (gamerAP <= 0) {
        gamerAP = 0;

    }
    console.log(`current gamerAP: ${gamerAP}`);

    renderApText();
    zeroAp();

}

function hpDamageByStarFire() {
    //if user clicks star fire button, HP decreses by 25
    fungusHP -= 25;
    if (fungusHP <= 0) {
        fungusHP = 0;

    }
    console.log(`current fungusHP: ${fungusHP}`);

    renderHpText();
    zeroHP()

}

//render function to handle AP changes to DOM
function renderApText() {
    $(".ap-text").html(`
    ${gamerAP} AP
     `);
}

//render function to handle HP changes to DOM
function renderHpText() {
    $(".hp-text").html(`
     ${fungusHP} HP
      `);
}

//function to make fungus die
function zeroHP() {
    if (fungusHP === 0) {
        $(".freaky-fungus").removeClass("walk")
        $(".freaky-fungus").addClass("dead")
    }

}

//function to make fungus jump and disable attack buttons
function zeroAp() {
    if (gamerAP === 0) {
        $(".freaky-fungus").removeClass("walk");
        $(".freaky-fungus").addClass("jump");
        $(".attack-btn").attr('disabled', true);
    }
}

