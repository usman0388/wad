var AccountDetails=[{AccountTitle:'M usman',AvailableBalance:'4',AccountCurrency:'PKR',IBAN:'pk976219473'}
,{AccountTitle:'Mubashir Ali',AvailableBalance:'480',AccountCurrency:'PKR',IBAN:'pk12435436243'}
,{AccountTitle:'Ahsan Ali',AvailableBalance:'0',AccountCurrency:'PKR',IBAN:'pk972763197343'}]

var currentUser=0;
var tile=document.getElementById('title');
var balance=document.getElementById('balance');
var currency=document.getElementById('currency');
var Iban=document.getElementById('IBAN');
tile.innerHTML=AccountDetails[0].AccountTitle;
balance.innerHTML=AccountDetails[0].AvailableBalance;
currency.innerHTML=AccountDetails[0].AccountCurrency;
Iban.innerHTML=AccountDetails[0].IBAN;
var deposit;
var withdraw;

function department(event) {
    deposit=document.getElementById('deposit');
    if(event.key==13)
    {
        deposit=AvailableBalance+deposit;
        balance.innerHTML=AccountDetails[currentUser].AvailableBalance+deposit;
    }

}

function withdrawAmmount() {
    if(event.keycode==13 || c.key=='Enter')
    {
        AvailableBalance=AvailableBalance-withdraw;
        balance.innerHTML=AccountDetails[currentUser].AvailableBalance;
    }
}