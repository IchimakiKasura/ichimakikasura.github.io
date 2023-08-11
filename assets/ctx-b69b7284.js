const ctx="",c3=window,c4=atob,cn=console;var か_log=(...e)=>{cn.log(...e)},consoleCssStyle,popupVersionShow;(function(){let scpt=document.querySelectorAll("kascpt");for(let i=0;i<scpt.length;i++)scpt[i].style.display="none",eval(scpt[i].innerText);consoleCssStyle="Zm9udC1mYW1pbHk6IEdlb3JnaWEsIHNlcmlmO2ZvbnQtc2l6ZTogMTVweDtsZXR0ZXItc3BhY2luZzogMy4ycHg7d29yZC1zcGFjaW5nOiA2cHg7Y29sb3I6ICNDNEM0QzQ7Zm9udC13ZWlnaHQ6IDcwMDt0ZXh0LWRlY29yYXRpb246IG5vbmUgc29saWQgcmdiKDY4LCA2OCwgNjgpO2ZvbnQtc3R5bGU6IGl0YWxpYztmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7",popupVersionShow="JWNrYXN1LmpzICB8ICAgMi4wICAgIChPd25lciBjb3B5KQ",か_log(c4(popupVersionShow),c4(consoleCssStyle))})();c3.__defineGetter__("help",()=>{cn.log(`

    %cか%c(document|window|'.css'|'#id'|'html'|)
        %cmodules:

        .gAll                    Gets all the Element that has the same name.
        .gt                      Gets the Element.
        .text()                  Gets the Element Text | Can change the Element text.
        .html()                  Gets the Element html | Can change the Element html.
        .atr()                   Adds a Single Attribute to the Element. 
        .rAtr()                  Removes a Single Attribute to the Element.
        .val()                   Gets the Elements Value | Can change the Element Value.
        .sty()                   Add or Change the style of the Element.
        .click()                 It's a On Click function
        .evt()                   Adds a Event Listener to the Object.
        .rmevt()                 Remove a Event Listener to the Object.
        .stym([],[])             Add Multiple Style to the Element.
        .atrm([],[])             Add Multiple Attribute to the Element
        .onload()                Run a script on start.
        .ready()                 Run a script when everything is ready.
        .unload()                Run a script on before unloading.
        .beforeunload()          Same as the 'unload' but with popup warning
        .close()                 Run a script on Close.
        .contentLoad()           Run a script when all are Loaded.
        .scroll(function)        Run a script every scroll.
        .width('inner'|'outer')  Returns the width of the screen.
        .height('inner'|'outer') Returns the height of the screen.
        .resize()                Run a script whenever the screen resizes.

    %clist of Modules ( か.module ):
    
    %cか.%cajax()
      %cSimilar to jQuery's "$.ajax()" but I've added some few that
      I thought for me was kinda a helpful functions.
      [NOTE: Do not expect all jQuery ajax functions are here]
    

    %cか.%cisMobile
      %cReturns a True or False if the users browser is using Mobile or
      Desktop.


    %cか.%cdate( true|false )
      %cReturns a current Date.
      True = allows to get the date manually by using its modules.
       か.date(true).week   = returns the week (mon,tue,wed...)
       か.date(true).day    = returns the day
       か.date(true).year   = returns the year
       か.date(true).hr12   = returns whether its "AM" or "PM"
       か.date(true).month  = returns the month (Jan,Feb,Mar...)
       か.date(true).minute = returns the minute
       か.date(true).hour   = returns the hour   
    [24 hour time format is not supported yet]
      False = gives automatic date.
       "date now is 'week' | 'months' 'day', 'year' at 'hour':'minute' 'AM|PM'"
    

    %cか.%cuid()
      %cGenerates a random Unique ID.
       か.uid(1-99999) any number can be applied.
       か.uid('manual') gives a length of 30.
       か.uid('strong') give a length of 40.


    %cか.%crandom()
      %cGenerates a random number.
       Similar to the "Math.random" but much shorter.


    %cか.%cmswipe()
      %cThis module is for Mobile purposes.
       It detects the swipes in the Mobile screen.
       swipedir = up|down|left|right.
    `,"color: red","color: yellow","color: white","color: orange","color: red","color: yellow","color: white","color: red","color: yellow","color: white","color: red","color: yellow","color: white","color: red","color: yellow","color: white","color: red","color: yellow","color: white","color: red","color: yellow","color: white")});か(document).evt("contextmenu",function(e){e.preventDefault();let t=か(".vertical-menu").gt;if(t.style.opacity=1,t.style.visibility="visible",t.style.left=e.pageX+"px",t.style.top=e.pageY+"px",window.getSelection().isCollapsed){CopyButton.sty("background","var(--ctx-hover-bg)"),CopyButton.sty("cursor","default");return}CopyButton.sty("background","transparent"),CopyButton.sty("cursor","pointer")});か(document).evt("mousedown",function(){let e=か(".vertical-menu").gt;e.style.visibility="hidden",e.style.opacity=0});
