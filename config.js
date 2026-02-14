
const CONFIG = {

    valentineName: "Flóra",

    pageTitle: "Will You Be My Valentine? 💝",


    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  
        bears: ['🧸', '🐻']                       
    },


    questions: {
        first: {
            text: "Kedvelsz engem?",                                  
            yesBtn: "Igen",                                             
            noBtn: "Nem",                                               
            secretAnswer: "Nem kedvellek, hanem Szeretlek! ❤️"           
        },
        second: {
            text: "Mennyire szeretsz?",                          
            startText: "This much!",                                   
            nextBtn: "Next ❤️"                                         
        },
        third: {
            text: "Will you be my Valentine on February 14th, 2026? 🌹", 
            yesBtn: "Igen!",                                             
            noBtn: "Nem"                                                
        }
    },

  
    loveMessages: {
        extreme: "WOOOOW Komolyan ennyire szereetsz?? 🥰🚀💝", 
        high: "A végtelenbe és tovább! 🚀💝",              
        normal: "A végtelenbe! 🥰"                           
    },

 
    celebration: {
        title: "Ezaaaaaz! A legszerencsésebb fiú vagyok a világon 🎉💝💖💝💓",
        message: "Nemsokára újra találkozunk és életünk legcsodásabb randijában lesz részünk ! 💖💖💖!",
        emojis: "🎁💖🤗💝💋❤️💕"  
    },


    colors: {
        backgroundStart: "#ffafbd",      
        backgroundEnd: "#ffc3a0",        
        buttonBackground: "#ff6b6b",     
        buttonHover: "#ff8787",          
        textColor: "#ff4757"             
    },


    animations: {
        floatDuration: "15s",          
        floatDistance: "50px",         
        bounceSpeed: "0.5s",            
        heartExplosionSize: 1.5        
    },


    music: {
        enabled: true,                     
        autoplay: false,                    
        musicUrl: "https://res.cloudinary.com/dkpig865p/video/upload/v1770911010/The_Weeknd_-_DIE_FOR_YOU_Lyrics_ii63bo.mp3",
        startText: "🎵 Play Music",       
        stopText: "🔇 Stop Music",         
        volume: 0.5                       
    }
};

window.VALENTINE_CONFIG = CONFIG; 
