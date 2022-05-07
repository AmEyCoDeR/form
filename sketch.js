var SimpleEngine, isSimpleEngine = false;
var MediumEngine, isMediumEngine = false;
var HighEngine, isHighEngine = false;
var SimpleStyle;
var MediumStyle;
var HighStyle;
var isSimpleStyle = false;
var isMediumStyle = false;
var isHighStyle = false;
var App;
var isApp = false;
var Website;
var isWebsite = false;
var Watermark, isWatermark = true;
var Ads, isAds = false;
var TnC, tncaccepted = false;
var tnc;
var dash = 0;
var button;
var input;
var paymentcode;
var hutta;
var buttoninvi;
var check;
var tick;
var untick;

function preload(){
    tick = loadImage("tick.png");
    untick = loadImage("untick.png");
    
}

function setup() {
    createCanvas(windowWidth,windowHeight);

    SimpleEngine = createCheckbox('Simple Engine',false);
    SimpleEngine.position(10,37.5);

    MediumEngine = createCheckbox('Medium Engine',false);
    MediumEngine.position(10,75);

    HighEngine = createCheckbox('High Engine',false);
    HighEngine.position(10,112.5);

    SimpleStyle = createCheckbox('Simple Style',false);
    SimpleStyle.position(10,150);

    MediumStyle = createCheckbox('Medium Style',false);
    MediumStyle.position(10,187.5);

    HighStyle = createCheckbox('High Style',false);
    HighStyle.position(10,225);

    App = createCheckbox('App (Mobile Android)',false);
    App.position(10,262.5);
   
    Website = createCheckbox('Website (Github Pages)',false);
    Website.position(10,300); 

    Watermark = createCheckbox('Remove WaterMark',false);
    Watermark.position(10,337.5);
    
    Ads = createCheckbox('Add Ads',false);
    Ads.position(10,375);  
    
    TnC = createCheckbox('By Clicking on this checkbox you will agree our Terms & Conditions to read our terms and conditions click the link below!!!',false);
    TnC.position(10,412.5);

    tnc = createA("https://ameycoder.github.io/tnc","Terms And Conditions","_blank");
    tnc.position(10,450);

    button = createButton("Submit");
    button.position(10,487.5);
    button.class("button");
    button.mouseClicked(submitted);
    button.size(100,35)
    button.hide();

    input = createInput("","text");
    input.position(windowWidth/2 - 125, 250);
    input.class("input");

    paymentcode = createInput("","password");
    paymentcode.position(windowWidth/2 - 125, 300);
    paymentcode.class("input");
    input.hide();
    paymentcode.hide();

    check = createButton("Check");
    check.position(paymentcode.x, paymentcode.y + 50);
    check.class("check");
    check.mouseClicked(checking);
    check.hide();








}

function draw() {
    background("white");
    /*console.log(dash);
    console.log(isSimpleEngine);
    console.log(isMediumEngine);
    console.log(isHighEngine);
    console.log(isSimpleStyle);
    console.log(isMediumStyle);
    console.log(isHighStyle);
    console.log(isApp);
    console.log(isWebsite);
    console.log(isWatermark);
    console.log(isAds);
    console.log(tncaccepted);*/
  
    drawSprites();

    if(SimpleEngine.checked()){
        
        isSimpleEngine = true;
    }


    if(MediumEngine.checked()){
        
        isMediumEngine = true;
    }


    if(HighEngine.checked()){
        
        isHighEngine = true;
    }


    if(SimpleStyle.checked()){
        
        isSimpleStyle = true;
    }


    if(MediumStyle.checked()){
        
        isMediumStyle = true;
    }


    if(HighStyle.checked()){
        
        isHighStyle = true;
    }


    if(App.checked()){
        
        isApp = true;
    }

    if(Website.checked()){
        
        isWebsite = true;
    }

    if(Watermark.checked()){
        
        isWatermark = false;
    }

    if(TnC.checked()){
        
        tncaccepted = true;
    }

    if(Ads.checked()){
        
        isAds = true;
    }

    if(!SimpleEngine.checked()){
        
        isSimpleEngine = false;
    }


    if(!MediumEngine.checked()){
        
        isMediumEngine = false;
    }


    if(!HighEngine.checked()){
        ;
       isHighEngine = false;
    }


    if(!SimpleStyle.checked()){
        
        isSimpleStyle = false;
    }


    if(!MediumStyle.checked()){
        
        isMediumStyle = false;
    }


    if(!HighStyle.checked()){
        
        isHighStyle = false;
    }


    if(!App.checked()){
        
        isApp = false;
    }

    if(!Website.checked()){
        
        isWebsite = false;
    }

    if(!Watermark.checked()){
        
        isWatermark = true;
    }

    if(!Ads.checked()){
        
        isAds = false;
    }

    if(!TnC.checked()){
        
        tncaccepted = false;
    }

    if(tncaccepted === true){
     button.show()
    }else{
        button.hide()
    }

    if(hutta === "lol"){
        button.hide();
        text("Enter Customer Name:",paymentcode.x - 225, paymentcode.y - 30);
        text("Payment Code:",paymentcode.x - 150, paymentcode.y + 25);
    }

    if(hutta === "lol:2 Returnsssssssssss"){
        button.hide();
        image(tick,10,250,200,200);
        textSize(50);
        text("Activation Success",265,370);

    }

    if(hutta === "failed"){
        button.hide();
        image(untick,10,250,200,200);
        textSize(50);
        text("Activation Failed",265,370);

    }






}

function submitted(){
    SimpleEngine.hide()
    MediumEngine.hide();
    HighEngine.hide();
    SimpleStyle.hide();
    MediumStyle.hide();
    HighStyle.hide();
    App.hide();
    Website.hide();
    Ads.hide();
    Watermark.hide();
    TnC.hide();
    tnc.hide();
    paymentcode.show();
    input.show();
    check.show();
    textSize(20);
    hutta = "lol"
}

function checking(){
    if(paymentcode.value() === "amey.great"){
    hutta = "lol:2 Returnsssssssssss";
    }else{
        hutta = "failed";
    }
    check.hide();
    input.hide();
    paymentcode.hide();
    SimpleEngine.hide()
    MediumEngine.hide();
    HighEngine.hide();
    SimpleStyle.hide();
    MediumStyle.hide();
    HighStyle.hide();
    App.hide();
    Website.hide();
    Ads.hide();
    Watermark.hide();
    TnC.hide();
    tnc.hide();
}

