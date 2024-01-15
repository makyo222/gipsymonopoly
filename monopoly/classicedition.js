function Square(name, pricetext, color, price, groupNumber, baserent, rent1, rent2, rent3, rent4, rent5, img) {
	this.name = name;
	this.pricetext = pricetext;
	this.color = color;
	this.owner = 0;
	this.mortgage = false;
	this.house = 0;
	this.hotel = 0;
	this.groupNumber = groupNumber || 0;
	this.price = (price || 0);
	this.baserent = (baserent || 0);
	this.rent1 = (rent1 || 0);
	this.rent2 = (rent2 || 0);
	this.rent3 = (rent3 || 0);
	this.rent4 = (rent4 || 0);
	this.rent5 = (rent5 || 0);
	this.landcount = 0;
	this.img = img;

	if (groupNumber === 3 || groupNumber === 4) {
		this.houseprice = 50;
	} else if (groupNumber === 5 || groupNumber === 6) {
		this.houseprice = 100;
	} else if (groupNumber === 7 || groupNumber === 8) {
		this.houseprice = 150;
	} else if (groupNumber === 9 || groupNumber === 10) {
		this.houseprice = 200;
	} else {
		this.houseprice = 0;
	}
}

function Card(text, action) {
	this.text = text;
	this.action = action;
}

function corrections() {
	document.getElementById("cell1name").textContent = "Cigány telep";

	// Add images to enlarges.
	document.getElementById("enlarge5token").innerHTML += '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; bottom: 20px;" />';
	document.getElementById("enlarge15token").innerHTML += '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge25token").innerHTML += '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge35token").innerHTML += '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge12token").innerHTML += '<img src="images/electric_icon.png" height="60" width="48" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge28token").innerHTML += '<img src="images/water_icon.png" height="60" width="78" alt="" style="position: relative; top: -20px;" />';
}

function utiltext() {
	return '&nbsp;&nbsp;&nbsp;&nbsp;Ha egy ilyen szar tulajdonában van a bérleti díj 4-szerese a kockán feltüntetett összegnek.<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;Ha mindkét ilyen szar tulajdonában van a bérleti díj 10-szerese a kockán feltüntetett összegnek.';
}

function transtext() {
	return '<div style="font-size: 14px; line-height: 1.5;">Rent<span style="float: right;">$25.</span><br />Ha 2 pályaudvar van<span style="float: right;">50.</span><br />Ha 3 &nbsp; &nbsp; " &nbsp; &nbsp; " &nbsp; &nbsp; "<span style="float: right;">100.</span><br />Ha 4 &nbsp; &nbsp; " &nbsp; &nbsp; " &nbsp; &nbsp; "<span style="float: right;">200.</span></div>';
}

function luxurytax() {
	addAlert(player[turn].name + " Vissza kell fizetni a hitelt $100.");
	player[turn].pay(100, 0);

	$("#landed").show().text("Hitel visszafizetés $100");
}

function citytax() {
	addAlert(player[turn].name + " Adózzál köcsög $200");
	player[turn].pay(200, 0);

	$("#landed").show().text("Adó $200");
}

var square = [];

square[0] = new Square("GO", "Kapsz $200!", "#FFFFFF");
square[1] = new Square("Cigány telep", "$60", "#8B4513", 60, 3, 2, 10, 30, 90, 160, 250);
square[2] = new Square("Láda", "", "#FFFFFF");
square[3] = new Square("Csövi lak", "$60", "#8B4513", 60, 3, 4, 20, 60, 180, 320, 450);
square[4] = new Square("Adó", "Fizessé $200", "#FFFFFF");
square[5] = new Square("Déli Pályaudvar", "$200", "#FFFFFF", 200, 1);
square[6] = new Square("Nánási Focipálya", "$100", "#87CEEB", 100, 4, 6, 30, 90, 270, 400, 550);
square[7] = new Square("Szerencse", "", "#FFFFFF");
square[8] = new Square("Zsugabandi lakhelye (árok)", "$100", "#87CEEB", 100, 4, 6, 30, 90, 270, 400, 550);
square[9] = new Square("Benzinkút", "$120", "#87CEEB", 120, 4, 8, 40, 100, 300, 450, 600);
square[10] = new Square("Látogatod a haverokat", "", "#FFFFFF");
square[11] = new Square("Lidl", "$140", "#FF0080", 140, 5, 10, 50, 150, 450, 625, 750);
square[12] = new Square("e.on", "$150", "#FFFFFF", 150, 2);
square[13] = new Square("Reál", "$140", "#FF0080", 140, 5, 10, 50, 150, 450, 625, 750);
square[14] = new Square("KFC", "$160", "#FF0080", 160, 5, 12, 60, 180, 500, 700, 900);
square[15] = new Square("Nyugati Pályaudvar", "$200", "#FFFFFF", 200, 1);
square[16] = new Square("Nádudvari Shakira háza", "$180", "#FFA500", 180, 6, 14, 70, 200, 550, 750, 950);
square[17] = new Square("Láda", "", "#FFFFFF");
square[18] = new Square("Nádudvari Fürdő", "$180", "#FFA500", 180, 6, 14, 70, 200, 550, 750, 950);
square[19] = new Square("Nádudvari Guriga", "$200", "#FFA500", 200, 6, 16, 80, 220, 600, 800, 1000);
square[20] = new Square("Csöves parkoló", "", "#FFFFFF");
square[21] = new Square("Körtés háza", "$220", "#FF0000", 220, 7, 18, 90, 250, 700, 875, 1050);
square[22] = new Square("Szerencse", "", "#FFFFFF");
square[23] = new Square("Nemlopott ház", "$220", "#FF0000", 220, 7, 18, 90, 250, 700, 875, 1050);
square[24] = new Square("Miskolc", "$240", "#FF0000", 240, 7, 20, 100, 300, 750, 925, 1100);
square[25] = new Square("Északi Pályaudvar", "$200", "#FFFFFF", 200, 1);
square[26] = new Square("Kocsma", "$260", "#FFFF00", 260, 8, 22, 110, 330, 800, 975, 1150);
square[27] = new Square("Sztriptizbár", "$260", "#FFFF00", 260, 8, 22, 110, 330, 800, 975, 1150);
square[28] = new Square("Nincs víz", "$150", "#FFFFFF", 150, 2);
square[29] = new Square("Pálinka főzde", "$280", "#FFFF00", 280, 8, 24, 120, 360, 850, 1025, 1200);
square[30] = new Square("Mehetsz börtönbe", "", "#FFFFFF");
square[31] = new Square("Drog ültetvény", "$300", "#008000", 300, 9, 26, 130, 390, 900, 1100, 1275);
square[32] = new Square("Pocsaj FC", "$300", "#008000", 300, 9, 26, 130, 390, 900, 1100, 1275);
square[33] = new Square("Láda", "", "#FFFFFF");
square[34] = new Square("Kanté háza", "$320", "#008000", 320, 9, 28, 150, 450, 1000, 1200, 1400);
square[35] = new Square("Keleti Pályaudvar", "$200", "#FFFFFF", 200, 1);
square[36] = new Square("Szerencse", "", "#FFFFFF");
square[37] = new Square("Zamatos Ízek", "$350", "#0000FF", 350, 10, 35, 175, 500, 1100, 1300, 1500);
square[38] = new Square("Hitel visszafizetés", "Fizessé $100", "#FFFFFF");
square[39] = new Square("Polgihátsókert", "$400", "#0000FF", 400, 10, 50, 200, 600, 1400, 1700, 2000);

var communityChestCards = [];
var chanceCards = [];

communityChestCards[0] = new Card("Megszökhetsz a börtönből!", function(p) { p.communityChestJailCard = true; updateOwned();});
communityChestCards[1] = new Card("Kaptál $10 csak mer mé ne", function() { addamount(10, 'Láda');});
communityChestCards[2] = new Card("Kaptál $50 mer megsajnáltak", function() { addamount(50, 'Láda');});
communityChestCards[3] = new Card("Kaptál $100 mer ügyes vótál", function() { addamount(100, 'Láda');});
communityChestCards[4] = new Card("Kaptál $20 mer nem vótál köcsög", function() { addamount(20, 'Láda');});
communityChestCards[5] = new Card("Kaptál $100 mer mé ne", function() { addamount(100, 'Láda');});
communityChestCards[6] = new Card("Kaptál $100 hogy örüljél", function() { addamount(100, 'Láda');});
communityChestCards[7] = new Card("Kapsz $25 segélyt", function() { addamount(25, 'Láda');});
communityChestCards[8] = new Card("Fizessé $100 ne legyél köcsög", function() { subtractamount(100, 'Láda');});
communityChestCards[9] = new Card("Megloptad a bankot. Kapsz $200", function() { addamount(200, 'Láda');});
communityChestCards[10] = new Card("Fizessé köcsög $50", function() { subtractamount(50, 'Láda');});
communityChestCards[11] = new Card("Elloptak töled $50", function() { subtractamount(50, 'Láda');});
communityChestCards[12] = new Card("Megloptad a többi játékost", function() { collectfromeachplayer(10, 'Láda');});
communityChestCards[13] = new Card("Menj ide: \"GO\"", function() { advance(0);});
communityChestCards[14] = new Card("Felújítás: $40 / ház. $115 / hotel.", function() { streetrepairs(40, 115);});
communityChestCards[15] = new Card("Elkapott Kanté!", function() { gotojail();});
communityChestCards[16] = new Card("Buzi vagy!", function() { gotojail();});


chanceCards[0] = new Card("Megszökhetsz a börtönből!", function(p) { p.chanceJailCard=true; updateOwned();});
chanceCards[1] = new Card("$25 / ház, $100 / hotel", function() { streetrepairs(25, 100);});
chanceCards[2] = new Card("Elhagytál $15", function() { subtractamount(15, 'Szerencse');});
chanceCards[3] = new Card("A többi játékos kifosztott", function() { payeachplayer(50, 'Szerencse');});
chanceCards[4] = new Card("Elhagytad a sörödet, menj vissza érte", function() { gobackthreespaces();});
chanceCards[5] = new Card("Menj a legközelebb szarhoz", function() { advanceToNearestUtility();});
chanceCards[6] = new Card("Megloptad a bankot. Kapsz $50", function() { addamount(50, 'Szerencse');});
chanceCards[7] = new Card("Menj a legközelebbi pályaudvarra. Ott tudsz egyet aludni", function() { advanceToNearestRailroad();});
chanceCards[8] = new Card("Adózzál köcsög $15", function() { subtractamount(15, 'Szerencse');});
chanceCards[9] = new Card("Menj a Déli Pályaudvarra", function() { advance(5);});
chanceCards[10] = new Card("A polgi már vár", function() { advance(39);});
chanceCards[11] = new Card("Menj Miskolcra hogy jól megkéseljenek", function() { advance(24);});
chanceCards[12] = new Card("Kaptál $150 lásd kedvességem határtalan", function() { addamount(150, 'Szerencse');});
chanceCards[13] = new Card("Menj a legközelebbi pályaudvarra. Ott tudsz egyet aludni", function() { advanceToNearestRailroad();});
chanceCards[14] = new Card("Menj vegyé valamit a Lidliben", function() { advance(11);});
chanceCards[15] = new Card("Mehetsz börtönbe köcsög", function() { gotojail();});