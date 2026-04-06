//



//async:
//call stack 2- browser 3- callback queue

//console.log(11)
//settiemout(1000ms,function)
//console(dnfi)

///. callstack: console.      browser:empty      callbackqueue:empty

///. callstack:  setimeout    browser:empty      callbackqueue:empty

///. callstack:      browser:empty  , setimeout.       callbackqueue:empty

///. callstack:console(dnfi)      browser:empty  , setimeout.       callbackqueue:empty

///. callstack:      browser:empty  , setimeout.       callbackqueue:empty

///. callstack:      browser:empty  ,       callbackqueue:empty:setimeout. 

///. callstack:  empty:setimeout. (eventloop insert callback entry only if callstack empty then entry)     browser:empty  ,       callbackqueue:
///. callstack:       browser:empty  ,       callbackqueue:
