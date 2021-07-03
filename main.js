var guest_array = [];
function Submit(){
    var Guest_name = document.getElementById("Enter_name").nodeValue;
    guest_array.push(Guest_name);
    document.getElementById("Display_names").innerHTML = guest_array;
    console.log(guest_array);
    var lota = guest_array.length;
    console.log(lota);

}
function Show_List(){
    var i = guest_array.join("<br>");
    console.log(guest_array);
    document.getElementById("Show_names").innerHTML = i.toString();

}
function sorting() {
    guest_array.sort();
    var i = guest_array.join("<br>");
    console.log(guest_array);
    document.getElementById("Sorted_names").innerHTML = i.toString();
}
function Search(){
    var s = document.getElementById("Search_name").value;
    var found = 0;
    var j;
    for(j=0; j<guest_array.length; j++){
        if(s==guest_array[j]){
            found=found+1;
        }
    }
    document.getElementById("Search_names").innerHTML = "Name Found "+found+" Time/s";
    console.log("Found Name "+found+" Time/s");

}