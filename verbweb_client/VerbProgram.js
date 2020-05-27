



  const dictionary = {
    
    suffix : "ся",
    verb: {
    
    lieDownP : {
        verbStem : "лечь",
        verbForms : [{tense: "1. Sg", form: "лягу"}, {tense: "2. Sg.", form: "ляжешь"}, {tense: "3. Sg", form: "ляжет"}, 
        {tense: "1. Pl", form: "ляжем"}, {tense: "2. Pl", form: "ляжете"}, {tense: "3. Pl.", form: "лягут"}],
        mainDef : "geben",
        subDef: [],
        prefix : [ "в", "за", "об","от", 
        "по", "при" , "про" , "с"],
        imperative : 'ляг',
        pastTense : 'лёг, легла',
        //color is blue
        centerColor: [28, 115, 255],
        outerColor: [28, 115, 255],
        aspect: "v."
      },
      callImp : {
        verbStem : "звать",
        verbForms : [{tense: "1. Sg", form: "зову"}, {tense: "2. Sg.", form: "зовёшь"}, {tense: "3. Sg", form: "зовёт"}, 
        {tense: "1. Pl", form: "зовём"}, {tense: "2. Pl", form: "зовёте"}, {tense: "3. Pl.", form: "зовут"}],
        mainDef : "geben",
        subDef: [],
        prefix : ["воз", "вы", "за", "на", "об", "от", 
        "под", "по", "при" , "про" , "со"],
        imperative : 'зови',
        pastTense : 'звал, á!, легла',
        //color is yellow
        centerColor: [255, 204, 0],
        outerColor: [28, 115, 255],
        aspect: "uv."
      },
    giveImp : {
            verbStem : "давать",
            verbForms : [{tense: "1. Sg", form: "дам"}, {tense: "2. Sg.", form: "дашь"}, {tense: "3. Sg", form: "даст"}, 
            {tense: "1. Pl", form: "дадим"}, {tense: "2. Pl", form: "дадите"}, {tense: "3. Pl.", form: "дадут"}],
            mainDef : "geben",
            subDef: [],
            prefix : [ "за" , "из", "от" , "пере" , 
            "по" , "пре" , "при" , "про" , "раз", "соз"],
            imperative : 'давай',
            pastTense : 'давал, -а',
            //color is yellow
            centerColor: [255, 204, 0],
            outerColor: [255, 204, 0],
            aspect: "uv."
          },
    giveP : {
            verbStem : "дать",
            verbForms : [{tense: "1. Sg", form: "дам"}, {tense: "2. Sg.", form: "дашь"}, {tense: "3. Sg", form: "даст"}, 
            {tense: "1. Pl", form: "дадим"}, {tense: "2. Pl", form: "дадите"}, {tense: "3. Pl.", form: "дадут"}],
            mainDef : "geben",
            subDef: [],
            prefix : [ "за" , "из", "от" , "пере" , 
            "по" , "пре" , "при" , "про" , "раз", "соз"],
            imperative : 'дай',
            pastTense : 'дал, -á!',
           // color is blue
            centerColor: [28, 115, 255],
            outerColor: [28, 115, 255],
            aspect: "v."
          },
    goImp : {
          verbStem : "ходить",
          verbForms : [{tense: "1. Sg.", form:"хожу"}, {tense: "2. Sg.", form: "ходишь"}, {tense: "3. Sg.", form: "ходит"}, 
          {tense: "1. Pl.", form: "ходим"}, {tense: "2. Pl.", form: "ходите"}, {tense: "3. pl.", form: "ходят"}],
          mainDef: "gehen",
          subDef : ["hineingehen, eintreten" , "hinausgehen" , "erreichen, gehen bis, anlangen"],
          prefix : ["в" , "вы" , "до" , "за" , "ис" , "на" , "об" , "от" , "пере" , 
          "под" , "пре" , "при" , "про" , "снис" , "с" , "у"],
          imperative : 'ходи',
          pastTense : 'ходил, -а',
          //both colors are yellow
          centerColor: [255, 204, 0],
          outerColor: [255, 204, 0],
          aspect: "uv."
        },
    goP : {
          verbStem : "идти",
          verbForms : [{tense: "1. Sg.", form:"хожу"}, {tense: "2. Sg.", form: "ходишь"}, {tense: "3. Sg.", form: "ходит"}, 
          {tense: "1. Pl.", form: "ходим"}, {tense: "2. Pl.", form: "ходите"}, {tense: "3. pl.", form: "ходят"}],
          mainDef: "gehen",
          subDef : ["hineingehen, eintreten" , "hinausgehen" , "erreichen, gehen bis, anlangen"],
          prefix : ["в" , "вы" , "до" , "за" , "ис" , "на" , "об" , "от" , "пере" , 
          "под" , "пре" , "при" , "про" , "снис" , "с" , "у"],
          imperative : 'иди',
          pastTense : 'шёл, шла, шли',
          //color is blue
          centerColor: [255, 204, 0],
          outerColor: [28, 115, 255],
          aspect: "uv."
        },
    live : {
            verbStem : "жить",
            verbForms : [{tense: "1. Sg", form: "живу"}, {tense: "2. Sg.", form: "живёшь"}, {tense: "3. Sg", form: "живёт"}, 
            {tense: "1. Pl", form: "живём"}, {tense: "2. Pl", form: "живёте"}, {tense: "3. Pl.", form: "живут"}],
            mainDef : "leben",
            subDef: [],
            prefix : [ "до", "за", "на" , "от", "пере" , 
            "про"],
            imperative : 'живи',
            pastTense : 'жил, -á!',
            //color is yellow
            centerColor: [255, 204, 0],
            outerColor: [28, 115, 255],
            aspect: "uv."
            },
    pour : {
            verbStem : "лить",
            verbForms : [{tense: "1. Sg", form: "лью"}, {tense: "2. Sg.", form: "льёёшь"}, {tense: "3. Sg", form: "льёт"}, 
            {tense: "1. Pl", form: "льём"}, {tense: "2. Pl", form: "льёте"}, {tense: "3. Pl.", form: "льют"}],
            mainDef : "",
            subDef: [],
            prefix : [ "до", "за", "на" , "об", "от", "под", "по", "про"],
            imperative : 'лей',
            pastTense : 'лил, -á!',
            //color is yellow
            centerColor: [255, 204, 0],
            outerColor: [28, 115, 255],
            aspect: "uv."
                  }
                }
              }

  
  let currentSelectedVerb = 'giveImp';
 
  window.onload = () => {
    document.getElementById('verbs').addEventListener('change', (event) => { currentSelectedVerb = event.target.value });
    console.log('currentSelectedVerb');
  
  }            

  function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  

  function draw (verbWeb) {   
    
   drawVerb();
   

   function drawInfoBox () {
    const verbToDraw = dictionary.verb[currentSelectedVerb];
    const boxX = 10;
    const boxY = 10;

      fill(255, 51, 51)
      rect(boxX, boxY, 230, 100);
      textSize(16);
      fill(0, 0, 0);
      text()
      text('Imperative: ' + verbToDraw.imperative, boxY * boxY, 50);
      text('Past-tense: ' + verbToDraw.pastTense, boxY * 11.5, 80);
   }
   
   drawInfoBox();

   function drawVerb () {

      background(242, 242, 242);
      const verbToDraw = dictionary.verb[currentSelectedVerb];
      
      
       // derived terms in ellipses
       for( let i = 0; i < verbToDraw.prefix.length; i++) {
          let scalar = 365;
          let scalarX = 355;
          let scalarY = 360;
          let circle = i * (360 / verbToDraw.prefix.length) * Math.PI / 180;
          
          
            fill(0,0,0);
            line(windowWidth/2, windowHeight/2, windowWidth/2 + scalar * Math.cos(circle), windowHeight/2 + scalar * Math.sin(circle));
            fill(...verbToDraw.outerColor);
            ellipse(windowWidth/2 + scalar * Math.cos(circle), windowHeight/2 + scalar * Math.sin(circle), 140, 75);
            fill(0,0,0);
            textSize(16);
            textAlign(CENTER);
            text(`${verbToDraw.prefix[i]}${verbToDraw.verbStem}`, windowWidth/2 + scalarX * Math.cos(circle), windowHeight/2 + scalarY * Math.sin(circle));
          
        } 
      
        let verbCoreHeight = windowHeight/2 - verbToDraw.verbForms.length + 5;
        let adjusterHeight = 20;
        const ellipseX = 400;
        const ellipseY = 125;
        const mouseLocation = mouseY * mouseX * Math.PI;
        const ellipseLocation = (windowWidth/2 + ellipseX) * (windowHeight/2 + ellipseY) * Math.PI;

        fill(...dictionary.verb[currentSelectedVerb].centerColor);
        ellipse(windowWidth/2, verbCoreHeight, ellipseX, ellipseY);
        fill(0,0,0);
        textSize(26);
        textAlign(CENTER);
        text(verbToDraw.verbStem + " " + verbToDraw.aspect, windowWidth/2, verbCoreHeight - adjusterHeight);
        for(let i = 0; i < 3; i++) {
          fill(0,0,0);
          textSize(14);
          text(verbToDraw.verbForms[i].tense, (windowWidth/2 - 115) +i * 100, verbCoreHeight);
          text(verbToDraw.verbForms[i].form, (windowWidth/2 - 70) + i * 100, verbCoreHeight)
        }
        for(let i = 3; i < 6; i++) {
          fill(0,0,0);
          textSize(14);
          text(verbToDraw.verbForms[i].tense, (windowWidth/2 - 415) +i * 100, verbCoreHeight + adjusterHeight);
          textSize(14);
          text(verbToDraw.verbForms[i].form, (windowWidth/2 - 370) + i * 100, verbCoreHeight + adjusterHeight);
        }
        
        
  
    }
  } 

  