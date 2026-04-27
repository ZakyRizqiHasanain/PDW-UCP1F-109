// Ambil data dari localStorage atau buat array baru
let members = JSON.parse(localStorage.getItem("members")) || [];

// =======================
// RENDER TABLE (HOME)
// =======================
function renderTable() {
    let table = document.getElementById("memberTable");
    if (!table) return;

    table.innerHTML = "";

    members.forEach(m => {
        table.innerHTML += `
            <tr>
                <td>${m.name}</td>
                <td>${m.email}</td>
                <td>${m.interest}</td>
            </tr>
        `;
    });
}

// =======================
// FORM SUBMIT
// =======================
document.addEventListener("DOMContentLoaded", function () {

    let form = document.getElementById("registrationForm");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let interest = document.getElementById("interest").value;

            let data = { name, email, interest };

            // simpan ke array
            members.push(data);

            // simpan ke localStorage
            localStorage.setItem("members", JSON.stringify(members));

            // tampilkan hasil di form
            document.getElementById("displayText").innerHTML =
                `Nama: ${name} <br>Email: ${email} <br>Minat: ${interest}`;

            document.getElementById("resultArea").style.display = "block";

            alert("Data berhasil disimpan!");

            form.reset();
        });
    }

    // tampilkan data di home
    renderTable();
});

// =======================
// MULTIMEDIA
// =======================
function changeImage() {
    document.getElementById("techImage").src =
        "https://picsum.photos/400/250?random=" + Math.random();
}

function playAudio() {
    document.getElementById("myAudio").play();
}

function pauseAudio() {
    document.getElementById("myAudio").pause();
}