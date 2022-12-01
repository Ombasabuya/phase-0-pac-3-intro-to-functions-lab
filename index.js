const { spyOn } = require("expect/lib");

function shout(string){

    return string.toUpperCase();

};

function whisper(string){

    return string.toLowerCase();

};

function logShout(string){

    function spy(string){

        return string.toUpperCase();
    }
    
    console.log(spy("hello"));


};

function logWhisper(string){

    function spy(string){
        return string.toLowerCase();
    }
    console.log(spy("HELLO"))

};

function sayHiToHeadphonedRoommate(string){

    if(string===string.toLowerCase){
        return console.log(string.toLowerCase());
    }
    else {
        return console.log("I can't hear you!".toLowerCase());
    }


};