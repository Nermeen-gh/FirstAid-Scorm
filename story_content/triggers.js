function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6MN5sq9s3lM":
        Script1();
        break;
      case "5fYd0ru2Osh":
        Script2();
        break;
      case "5av1LFrYVOE":
        Script3();
        break;
      case "6JEZjHVcdjl":
        Script4();
        break;
      case "5XpUE1TJDpQ":
        Script5();
        break;
      case "6GhW89fWNK7":
        Script6();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  const target = object('5hf22DNvSkl');
const duration = 750;
const easing = 'ease-out';
const id = '5jAeFntUeFG';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('5VQaeW7KRLL');
const duration = 750;
const easing = 'ease-out';
const id = '5VQGiM68waI';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('6mU47zpGcei');
const duration = 750;
const easing = 'ease-out';
const id = '65wgWqlILyi';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('62pO3RXvl1x');
const duration = 750;
const easing = 'ease-out';
const id = '6Mc1YeFc1CN';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('6YSwdnmBIsP');
const duration = 750;
const easing = 'ease-out';
const id = '61He6nZTz0E';
player.addForTriggers(
id,
target.animate(
[ {opacity: 1 }, 
{opacity: 0 }, 
{opacity: 1 }, 
{opacity: 0 }, 
{opacity: 1 } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('6pDNULcJ9Rp');
const duration = 750;
const easing = 'ease-out';
const id = '6nmKmsDvFVE';
player.addForTriggers(
id,
target.animate(
[ {opacity: 1 }, 
{opacity: 0 }, 
{opacity: 1 }, 
{opacity: 0 }, 
{opacity: 1 } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

};
