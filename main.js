var xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.oireachtas.ie/v1/debates");
xhr.send();

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var debates = JSON.parse(this.responseText).results;
        var dailNumber = 0;
        var seanadNumber = 0;
        debates.forEach(record => {
            if (record.debateRecord.house.houseCode == "dail") {
                dailNumber++;
            };
            if (record.debateRecord.house.houseCode == "seanad") {
                seanadNumber++;
            };
        
        });
        console.log(dailNumber);
        console.log(seanadNumber);
        console.log(dailNumber+seanadNumber);

    }
}