function calculateAge() {

    let dia = document.getElementById("user_date").value;
    let inDate = new Date(dia);
    let anio = inDate.getFullYear();
    let fec_actual = new Date();
    let fec_anio = fec_actual.getFullYear();
    let edad = fec_anio - anio;
    
    if (edad >= 18) {
        document.getElementById("result").innerHTML = "su edad es: " + edad +
            " Bienvenido a la categoria ADULTOS";
    } else {
        document.getElementById("result").innerHTML = "Ve pa tu casa, a ver pocoyo :v";
    }
}