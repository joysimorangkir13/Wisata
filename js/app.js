//showing/hiding dropdown
function showContent(){
    if(document.querySelector('.dropdown-list').style.display === "block"){
        document.querySelector('.dropdown-list').style.display = "none";
    }else{
        document.querySelector('.dropdown-list').style.display = "block";
    }
};

//showing all comment in localstorage
if(localStorage.getItem("komen") !== null){
    const komenDatas = JSON.parse(localStorage.getItem("komen"))

    let tambahKomen = document.querySelector('tbody');

    for(let komen of komenDatas){
        let row = document.createElement('tr');
        row.innerHTML = '<td>'+ komen.nama +'</td>';
        row.innerHTML += '<td>'+ komen.komen +'</td>';
    
        tambahKomen.appendChild(row);
    }
}

//inputing input from user to localstorage
document.querySelector('.btn-submit').addEventListener('click', function(event){
    const nama = document.getElementById("name").value;
    const komen = document.getElementById("komen").value;
    const data = {
        nama: nama,
        komen: komen
    };

    let arrayData = null;

    if(localStorage.getItem("komen") === null){
        arrayData = [];
    }else{
        arrayData = JSON.parse(localStorage.getItem("komen"));
    }

    arrayData.push(data);

    localStorage.setItem("komen", JSON.stringify(arrayData));

    alert('Komentar berhasil ditambahkan!');
});