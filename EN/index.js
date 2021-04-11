/*
    The script is a "shortener" for static javascript.
    The main objective of the project is to help your web developer.
    So I created a minimal version with my ideas and things made for me.

    const info = {
        Author: Jefferson Silva de Souza/Nhac
        GitHub Nick: Nhac-dev || https://github.com/Nhac-dev
        Language Logs: EN
        Version: 2.0.3-1 - Beta 
        type: beta
    }

    Repository link: https://github.com/Nhac-dev/NhacScript
    Creator Instagram: https://www.instagram.com/nhac_dev/
*/
/**
  * @function log was created thinking about debugging the codes, we are quite used to console.log. Hence the log ()
  * @param {string} message Put a message in order to debug your code
  * @param {number} type Select the type of debug, log(0), error(1), warning(2) and table(3)
  * @param {boolean} forceStop want to stop every application? If the type is 1 you can set this parameter to true
*/
const log = (message, type, forceStop)=>{
    if(type == void 0) type=0
    if(forceStop == void 0) forceStop=false

    if(forceStop == true && type != 1) throw new Error("forceStop only works if the type is 1") 

    if(type == 0)console.log(message)

    else if(type == 1){
        if(forceStop == true) throw new Error(message)   
        else console.error(message)   
    }

    else if(type == 2) console.warn(message)

    else if(type == 3) console.table(message)

    else console.error(`Sorry, ${type} is not supported!`);
    

}
// Conversor
    /**
      * toJSON intends to convert objects and arrays to JSON.
      * @param {Object} object put a variable of type object.
      * @returns {Object}
     **/
    function toJSON(object){
        let res

        try{
            res = JSON.stringify(object)
            if(typeof object != "object") {
                res = new Error("The argument not are a object.")
                log(res, 1)
            }
        }
        catch{
            res = new Error("The argument not are a object.")
            log(res, 1)
        }
        return res
    }
    /**
    * NS_JSON intends to convert objects and arrays to JSON.
    * @function toJSON works like NS_JSON, the only difference is that toJSON works without
    * limitations, NS_JSON may have limitations on arrays and objects. Because it is a form made manually and not with the
    * @function JSON.stringify from below.
    * @param {Object} object put a variable of type object.
    * @returns {Object}
    *
   **/
     function NS_JSON(obj) {
        let res
        if(typeof obj != "object"){
            res = new Error("The argument is not an Object.")
            log(res, 1)
        }
        else{
            let is_Array = Array.isArray(obj)
            if(is_Array == false){
                res = "{" 
                let chaves = Object.keys(obj)
                let values = Object.values(obj)
                function verifyArray(value) {
                    if(Array.isArray(value)){
                        let val = value
                        let subVal = ""
                        subVal = '['
                        for(let e=0; e<val.length; e++){
                            if(typeof val[e] == "string"){
                                subVal += `"${val[e]}"`
                                
                                if(e != val.length-1){
                                    subVal += ","
                                }
                            }
                            else if(typeof val[e] == "number"||typeof values[e] == "boolean"){
                                subVal += `${val[e]}`
                                
                                if(e != val.length-1){
                                    subVal += ","
                                }
                            }
                            else if(typeof val[e] == "object"){
                                if(Array.isArray(val[e])) {
                                    delete val[e]
                                    throw Error("Sorry, but at the moment it is not possible to execute this action. [array, [array]]")
                                    
                                }
                                else subVal += verifyObj(val[e])
                                if(e != val.length-1){
                                    subVal += ","
                                }
                            }    
                        }
                        subVal += ']'    
                        return subVal
                    }
                }
                function verifyVal(inx) {
                    
                    let subVal = ""
                    let is_Array = Array.isArray(values[inx])
                    if(is_Array != false){
                        subVal = '['

                        for (let l = 0; l < values[inx].length; l++) {
                            if(typeof values[inx][l] == "string"){
                                subVal += `"${values[inx][l]}"`
                                
                                if(l != values[inx].length-1){
                                    subVal += ","
                                }
                            }
                            else if(typeof values[inx][l] == "number"||typeof values[inx][l] == "boolean"){
                                subVal += `${values[inx][l]}`
                                
                                if(l != values[inx].length-1){
                                    subVal += ","
                                }
                            }
                            else if(typeof values[inx][l] == "object"){
                                subVal += verifyArray(values[inx][l])
                                if(l != values[inx].length-1){
                                    subVal += ","
                                }
                            }
                        }              
                        subVal += ']'    
                                  
                    }

                    return subVal
                }
                function verifyObj(value){
                    let subVal = ""
                    let objK = Object.keys(value)
                    let objV = Object.values(value)
                    subVal += "{"
                    for(val = 0; val < objK.length; val++){
                        if(typeof objV[val] == "string"){
                            subVal += `"${objK[val]}"`
                            subVal += `:`
                            subVal += `"${objV[val]}"`
                            if(val != objK.length-1){
                                subVal += ","
                            }
                        }
                        else if(typeof objV[val] == "number"){
                            subVal += `"${objK[val]}"`
                            subVal += `:`
                            subVal += `${objV[val]}`
                            if(val != objK.length-1){
                                subVal += ","
                            }
                        }
                        else if(typeof objV[val] == "object"){
                            if(Array.isArray(objV[val]) == true) subVal += verifyArray(objV[val])
                            else subVal += verifyObj(objV[val])
                            if(val != objK.length-1){
                                subVal += ","
                            }
                        }
                    }
                    subVal += "}"
                    return subVal
                }
                
                for (let val = 0; val < chaves.length; val++) {
                //    chaves[val]
                    res += '"'
                    res += chaves[val]
                    res += '"'
                    res += ':'
                    if(typeof values[val] != "string"){
                        let subVal
                        if(Array.isArray(values[val])) subVal = verifyVal(val)
                        else subVal = verifyObj(values[val])
                        res += subVal
                    }
                    else{
                        res += '"'
                        res += values[val]
                        res += '"'
                    }
                    if(val != chaves.length-1){
                        res += ","
                    }
                    
                }

                res += "}"
            }
        }
        return res
    } 
    /**
    * Do you want to convert JSON to object?
    * @param {string} JSONString
    * @returns
    */
    function toObj(JSONString){
        let res
        try{
            res = JSON.parse(JSONString)
        }
        catch{
            res = new Error("The argument not are a JSON.")
            log(res, 1)
        }
        return res
    }
    /**
    * Do you want to convert a string to a number? toNum will convert intelligently
    * @param {string} numTarget put a number in string
    * @returns {number}
    *
    */
    function toNum (numTarget){
        let res
        try{
            if(typeof(numTarget) != 'number')
            {
                if(numTarget <= 0 || numTarget >= 0)
                {
                    res = Number(numTarget)
                } 
            }
            else
            {
                res = new Error("It is not possible to convert the element to a number")
                log(res, 1)
            }
        }
        catch{
            res = new Error("It is not possible to convert the element to a number")
            log(res, 1)
        }
        
        return res
    }
    /**
      * Do you want to convert a string to a floating number? toFlt will convert.
      * @function toNum is better
      * @param {string} numTarget put a number in string
      * @returns {number}
      *
      */
    function toFlt (numTarget){
        let res
        try{
            if(typeof(numTarget) != 'number')
            {
                if(numTarget <= 0.1 || numTarget >= 0.1)
                {
                    res = parseFloat(numTarget)
                } 
            }
            else
            {
                res = new Error("Cannot convert the element to a floating number.")
                log(res, 1)
            }
        }
        catch{
            res = new Error("Cannot convert the element to a floating number.")
            log(res, 1)
        }
        
        return res
    }
    /**
        * Do you want to convert a string to an integer? toInt will convert.
        * @function toNum is better
        * @param {string} numTarget put a number in string
        * @returns {number}
        *
    */
    function toInt(numTarget){
        let res
        try{
            if(typeof(numTarget) != 'number')
            {
                if(numTarget <= 0 || numTarget >= 0)
                {
                    res = parseInt(numTarget)
                } 
            }
            else
            {
                res = new Error("Cannot convert the element to an integer.")
                log(res, 1)
            }
        }
        catch{
            res = new Error("Cannot convert the element to an integer.")
            log(res, 1)
        }
        
        return res
    }
    /**
      * Convert any value to string
      * @param {*} target put any value for the return
      * @returns {string}
      */
    function toStr(target){
        let res
        if(target){
            if(typeof(target) != 'string')
            {
                if(typeof(target) != 'object')
                {
                    res = target.toString()
                }
                else
                {
                    log('If you want to convert an object to JSON, use the "toJSON()" task', 2)
                    res = JSON.stringify(target)
                }
                
            }
            else
            {
                log('This element is already a string.', 1)
                res = Error
            }
        }else
        {
            log(`Operation impossible! There are no arguments to complete this task!`, 2)
            return NaN
        }
        return res
    }

// Classes 
// Classes and the DOM functions
    /**
          * Used in HTGet and HLGet builds and returns DOM events
          */
    class DOM{
        constructor(element, list, lengthList){
            if(list == void 0 && lengthList == void 0) list = false 
            if(list == true && lengthList < 0) log("Sorry, but you have to indicate the size of the list.", 1, true)
            
            if(list == false){
                this.addEnv = (eventName, eventTask)=>{
                    element.addEventListener(eventName, eventTask)
                }
                this.click = (event)=>{
                    if(event && typeof(event) == 'function') element.addEventListener('click', event)
                    else{
                        if(!event)element.click()
                        else if(typeof(event) != 'function') log(`The requested argument is not a function.`, 1)
                    }  
                }
                this.dbClick = (event)=>{
                    element.addEventListener('dblclick', event)
                }

                this.onChange = (event)=>{
                    element.addEventListener('change', event)
                }
                this.load = (event)=>{
                    element.addEventListener('load', event)
                }
                this.sub = (event)=>{
                    element.addEventListener('submit', event)
                }     
                this.keyPress = (event)=>{
                    element.addEventListener("keypress", event)
                }
                this.theKeyPress = (keyCode, event, codeOrKey)=>{
                    if(codeOrKey == void 0) codeOrKey = "code"
                    element.addEventListener("keypress", (env)=>{
                        if(env[codeOrKey] == keyCode) event()
                    })
                }
            }
           
            else{
                this.addEnv = (eventName, eventTask)=>{
                    for(let idx=0; idx < lengthList; idx++){
                        element[idx].addEventListener(eventName, eventTask)
                    }                        
                }
                this.click = (event)=>{
                    for(let idx=0; idx < lengthList; idx++){
                        if(event && typeof(event) == 'function') element[idx].addEventListener('click', event)
                        else{
                            if(!event) log("Sorry, but this type of function only works for non-list functions.", 1)
                            else if(typeof(event) != 'function') log(`The requested argument is not a function.`, 1)
                        }
                    }                
                }
                this.dbClick = (event)=>{
                    for(let idx=0; idx < lengthList; idx++){
                        if(event && typeof(event) == 'function') element[idx].addEventListener('dblclick', event)
                        else{
                            log(`The requested argument is not a function.`, 1)
                        }
                    }
                }
                this.onChange = (event)=>{
                    for(let idx=0; idx < lengthList; idx++){
                        if(event && typeof(event) == 'function') element[idx].addEventListener('change', event)
                        else{
                            log(`The requested argument is not a function.`, 1)
                        }
                    }
                }
                this.load = (event)=>{
                    for(let idx=0; idx < lengthList; idx++){
                        if(event && typeof(event) == 'function') element[idx].addEventListener('load', event)
                        else{
                            log(`The requested argument is not a function.`, 1)
                        }
                    }
                }
                this.sub = (event)=>{  
                    for(let idx=0; idx < lengthList; idx++){
                        if(event && typeof(event) == 'function') element[idx].addEventListener('submit', event)
                        else{
                            log(`The requested argument is not a function.`, 1)
                        }
                    }
                }  
            }
        }
    }
    /**
    * Used in HTGet and HLGet builds and returns DOM attribute handlers
    */
    class AttributesManipulator{
        constructor(element, list, lengthList){
            if(list == void 0 && lengthList == void 0) list = false 
            if(list == true && lengthList < 0) log("Sorry, but you must indicate the size of the list.", 1, true)


            if(list == false){
                // Css And Content Manipulation 
                    this.css = (key,value)=>{
                        var arrayCssSyntax = [
                            'background-color',
                            'background-position',
                            'text-align',
                            'align-content',
                            'margin-top',
                            'margin-bottom',
                            'margin-left',
                            'margin-right',
                            'text-decoration',
                            'font-family',
                            'font-size'
                        ]    
                        var arrayJSSyntax = [
                            'backgroundColor',
                            'backgroundPosition',
                            'textAlign',
                            'alignContent',
                            'marginTop',
                            'marginBottom',
                            'marginLeft',
                            'marginRight',
                            'textDecoration',
                            'fontFamily',
                            'fontSize',
                        ]
                        
                        if (Array.isArray(key) == true && Array.isArray(value) == true){
                            for (let counter = 0; counter < key.length; counter++){
                                for (let counter = 0; counter < key.length; counter++) {
                                    let cssIndex =  arrayCssSyntax.indexOf(key[counter])
                                    if(cssIndex != -1) element.style[arrayJSSyntax[cssIndex]] = value[counter]
                                    else element.style[key[counter]] = value[counter]
                                }
                            }
                        }
                        else if(Array.isArray(key) == false && typeof(key) == 'object'){
                            if(value) log('Since the key is an object, the value is unnecessary', 2)
                            var values = Object.values(key)
                            var entries = Object.entries(key)
                            var keys = Object.keys(key)
                            for(let counter = 0; counter < entries.length; counter++){
                                let cssIndex =  arrayCssSyntax.indexOf(key[counter])
                                if(cssIndex != -1) element.style[arrayJSSyntax[cssIndex]] = values[counter] 
                                else element.style[keys[counter]] = values[counter] 
                            }
                        }
                        else{
                            let cssIndex = arrayCssSyntax.indexOf(key)
                            if(cssIndex != -1) element.style[arrayJSSyntax[cssIndex]] = value                 
                            else element.style[key] = value                 
                        }
                    }
                       
                    this.HTML = (content)=>{
                        element.innerHTML = content
                    }
                    this.TXT = (content)=>{
                        element.innerText = content
                    }
                    this.addTXT = (content)=>{
                        element.innerText += content
                    }
                    this.addHTML = (content)=>{
                        element.innerHtml += content
                    }
                // HTML Class
                    this.rmClass = (value)=>{
                        var classList = element.classList
                        if(classList.contains(value) == true){
                            if(typeof(value) == 'object' && Array.isArray(value) == true){
                                
                                for(let c = 0; c < value; c++){
                                    element.classList.remove(value[c])
                                }
                            }
                            else element.classList.remove(value)
                        }
                    }
                    this.mkClass = (value)=>{
                        var classList = element.classList
                        if(classList.contains(value) != true){
                            if(typeof(value) == 'object' && Array.isArray(value) == true){
                                let c = 0
                                for(c in value){
                                    element.classList.add(value[c])
                                }
                            }
                            else element.classList.add(value)
                            
                        }
                    }
                    this.val = (newValue, history)=>{
                        if(history == void 0) history = false
                        if(newValue){
                            const oldVal = element.value
                            element.value = newValue
                            if(history == false) return newValue
                            
                            else [{
                                    oldValue: oldVal,
                                    valueNow: newValue
                                    }, 
                                    element.objectName
                                ]                                     
                        }
                        else{
                            return element.value
                        }
                        
                       
                        
                    }
                    this.mkAttr = (attribute, value)=>{
                        if(Array.isArray(attribute) && Array.isArray(value)){
                            for(let c = 0; c < attribute.length; c++){
                                element.setAttribute(attribute[c], value[c])
                            }
                        }
                        else if(Array.isArray(attribute) == false && typeof(attribute) == 'object'){
                            if(value) log('Since the attribute is an object, the value is unnecessary', 2)
                            
                            var values = Object.values(attribute)
                            var entries = Object.entries(attribute)
                            var keys = Object.keys(attribute)
                            var counter = 0
                            for(counter in entries){
                                element.setAttribute(keys[counter], values[counter])
                            }
                        }
                        else element.setAttribute(attribute, value)                        
                    }
                    this.rmAttr = (attribute)=>{
                        if(Array.isArray(attribute)){
                            for(let c = 0; c < attribute.length; c++){
                                element.removeAttribute(attribute[c])
                            }
                        }
                        else if(Array.isArray(attribute) == false && typeof(attribute) == 'object'){
                            
                            var entries = Object.entries(attribute)
                            var keys = Object.keys(attribute)
                            var counter = 0
                            for(counter in entries){
                                element.removeAttribute(keys[counter])
                            }
                        }
                        else element.removeAttribute(attribute)
                    }
            }
            else{
                // Css And Content Manipulation 
                    this.css = (key,value)=>{
                        var arrayCssSyntax = [
                            'background-color',
                            'background-position',
                            'text-align',
                            'align-content',
                            'margin-top',
                            'margin-bottom',
                            'margin-left',
                            'margin-right',
                            'text-decoration',
                            'font-family',
                            'font-size'
                        ]    
                        var arrayJSSyntax = [
                            'backgroundColor',
                            'backgroundPosition',
                            'textAlign',
                            'alignContent',
                            'marginTop',
                            'marginBottom',
                            'marginLeft',
                            'marginRight',
                            'textDecoration',
                            'fontFamily',
                            'fontSize',
                        ]
                        
                        for(let idx=0; idx < lengthList; idx++){
                            if (Array.isArray(key) == true && Array.isArray(value) == true){
                                for (let counter = 0; counter < key.length; counter++){
                                    for (let counter = 0; counter < key.length; counter++) {
                                        let cssIndex =  arrayCssSyntax.indexOf(key[counter])
                                        if(cssIndex != -1) element[idx].style[arrayJSSyntax[cssIndex]] = value[counter]
                                        else element[idx].style[key[counter]] = value[counter]
                                    }
                                }
                            }
                            else if(Array.isArray(key) == false && typeof(key) == 'object'){
                                if(value) log('Since the key is an object, the value is unnecessary', 2)
                                var values = Object.values(key)
                                var entries = Object.entries(key)
                                var keys = Object.keys(key)
                                for(let counter = 0; counter < entries.length; counter++){
                                    let cssIndex =  arrayCssSyntax.indexOf(key[counter])
                                    if(cssIndex != -1) element[idx].style[arrayJSSyntax[cssIndex]] = values[counter] 
                                    else element[idx].style[keys[counter]] = values[counter] 
                                }
                            }
                            else{
                                let cssIndex = arrayCssSyntax.indexOf(key)
                                if(cssIndex != -1) element[idx].style[arrayJSSyntax[cssIndex]] = value                 
                                else element[idx].style[key] = value                 
                            }
                        }
                    }
                    this.HTML = (content)=>{
                        for(let idx=0; idx < lengthList; idx++){
                            element[idx].innerHTML = content
                        }  
                    }
                    this.TXT = (content)=>{
                        for(let idx=0; idx < lengthList; idx++){
                            element[idx].innerTXT = content
                        }
                    }
                    this.addTXT = (content)=>{
                        for(let idx=0; idx < lengthList; idx++){
                            element[idx].innerTXT += content
                        }
                    }
                    this.addHTML = (content)=>{
                        for(let idx=0; idx < lengthList; idx++){
                            element[idx].innerHTML += content
                        }
                    }
                // HTML Class
                    this.rmClass = (value)=>{
                        for (let idx = 0; idx < element.length; idx++) {     
                            var classList = element[idx].classList
                            if(classList.contains(value) == true){
                                if(typeof(value) == 'object' && Array.isArray(value) == true){
                                    
                                    for(let c = 0; c < value; c++){
                                        element[idx].classList.remove(value[c])
                                    }
                                }
                                else element[idx].classList.remove(value)
                            }       
                        }
                    }
                    this.mkClass = (value)=>{
                        for (let idx = 0; idx < element.length; idx++) { 
                            var classList = element[idx].classList
                            if(classList.contains(value) != true){
                                if(typeof(value) == 'object' && Array.isArray(value) == true){
                                    let c = 0
                                    for(c in value){
                                        element[idx].classList.add(value[c])
                                    }
                                }
                                else element[idx].classList.add(value)
                                
                            }                
                        }
                    }
                    this.val = (newValue, history)=>{
                        const oldsValue = new Array
                            const elmName = new Array
                            
                                for (let idx = 0; idx < element.length; idx++) { 
                                    element[idx].value = newValue
                                    oldsValue.push(element[idx].value)
                                    elmName.push(element[idx].objectName)
                                    
                                }
                               
                                if(history == false) return newValue
                                else{  
                                    return[{
                                        oldsValue: oldsValue,
                                        valuesNow: newValue
                                    },
                                        elmName
                                    ]
                                }
                            
                    }
                    this.mkAttr = (attribute, value)=>{
                        for (let idx = 0; idx < element.length; idx++) {        
                            if(Array.isArray(attribute) && Array.isArray(value)){
                                for(let c = 0; c < attribute.length; c++){
                                    element[idx].setAttribute(attribute[c], value[c])
                                }
                            }
                            else if(Array.isArray(attribute) == false && typeof(attribute) == 'object'){
                                if(value) log('Since the attribute is an object, the value is unnecessary', 2)

                                var values = Object.values(attribute)
                                var entries = Object.entries(attribute)
                                var keys = Object.keys(attribute)
                                var counter = 0
                                for(counter in entries){
                                    element[idx].setAttribute(keys[counter], values[counter])
                                }
                            }
                            else element[idx].setAttribute(attribute, value)         
                        }
                    }
                    this.rmAttr = (attribute)=>{
                        for (let idx = 0; idx < element.length; idx++) {  
                            if(Array.isArray(attribute)){
                                for(let c = 0; c < attribute.length; c++){
                                    element[idx].removeAttribute(attribute[c])
                                }
                            }
                            else if(Array.isArray(attribute) == false && typeof(attribute) == 'object'){
                                var entries = Object.entries(attribute)
                                var keys = Object.keys(attribute)
                                var counter = 0
                                for(counter in entries){
                                    element[idx].removeAttribute(keys[counter])
                                }
                            }
                            else element[idx].removeAttribute(attribute)               
                        }
                    }
            
            }
            
            
        } 
    }
    /**
        * @class NS_DOM - USE to give DOM attributes in your project where you have already used native JS
    */
    class NS_DOM{
        constructor(element, list, lengthList){
            if(list == void 0 && lengthList == void 0) list = false 
            if(list == true && lengthList < 0) log("Sorry, but you have to indicate the size of the list.", 1, true)
            
            let dom = new DOM(element, list, lengthList)
            let attrDom = new AttributesManipulator(element, list, lengthList)
            this.CSS = attrDom.css
            this.mkAttr = attrDom.mkAttr
            this.rmAttr = attrDom.rmAttr
            this.rmClass = attrDom.rmClass
            this.mkClass = attrDom.mkClass
            this.val = attrDom.val
            this.TXT = attrDom.TXT
            this.addTXT = attrDom.addTXT
            this.addHTML = attrDom.addHTML
            this.HTML = attrDom.HTML
            this.eCli = dom.click
            this.eDbCli = dom.dbClick
            this.eSub = dom.sub
            this.eLoad = dom.load
            this.eChange = dom.onChange
            this.addEnv = dom.addEnv
            this.eKeyPress = dom.keyPress
            this.theKeyPress = dom.theKeyPress
            
        }
    }
    /**
        * @class builderElement will build a function for creating elements, containing this.CreateElement and some shorteners (this.btn, this.input)
    */
     class builderElement{
        constructor(){
            this.CreateElement = (tag, set)=>{
                let isTag = false
                let elm = new Object
                if(tag[0] == "<" && tag.indexOf(">") != -1) isTag = true
            
                if(isTag){
                    let syntax = tag.replace("<", "")
                    syntax = syntax.replace(">", "")
                    elm.elm = document.createElement(syntax)
                    elm["createNS"] = true
                    elm.setId = (id)=>{
                        if(typeof id != "string") return new Error("Please, append a string!")
                        elm.elm.id = id
                    }
                    elm.setText = (text)=>{
                        if(typeof text != "string") return new Error("Please, append a string!")
                        elm.elm.innerText = text
                    }
                    elm.addText = (text)=>{
                        if(typeof text != "string") return new Error("Please, append a string!")
                        elm.elm.innerText += text
                    }
                    elm.setHTML = (HTML)=>{
                        if(typeof HTML != "string") return new Error("Please, append a string!")
                        elm.elm.innerHTML = HTML
                    }
                    elm.addHTML = (HTML)=>{
                        if(typeof HTML != "string") return new Error("Please, append a string!")
                        elm.elm.innerHTML += HTML
                    }
                    elm.setVal = (value)=>{
                        if(typeof value != "string") return new Error("Please, append a string!")
                        elm.elm.value = value
                    }
                    elm.val = ()=>{
                        return NS.val()
                    }
                    let NS = new NS_DOM(elm.elm) 
                    elm.setStyle = NS.CSS
                    
                    elm.append = (element)=>{
                        if(element == void 0) element = document.body
                        log("Sorry, element not defined, then i append your element in the body", 2)
                        element.appendChild(elm.elm)
                    }
                    elm.setClass = NS.mkClass
                    elm.removeClass = NS.rmClass
                    elm.setAttr = NS.mkAttr
                    elm.removeAttr = NS.rmAttr
                    if(set && typeof set == "object"){
                        if(set.style) elm.setStyle(set.style)
                        if(set.class) elm.setClass(set.class)
                        if(set.attr) elm.setAttr(set.attr)
                        if(set.id) elm.setId(set.id)
                        if(set.content) elm.setText(set.content)
                        if(set.value) elm.setVal(set.value)
                        if(set.href) elm.setLink(set.href) 
                    } else{
                        if(typeof set != "object" && typeof set != "undefined"){
                            elm.Error = "This set not is a object."
                            log(elm.Error, 1)
                        }
                    }
                    return elm
                }
                else {
                    if(tag.indexOf("<") == -1 && tag.indexOf(">") == -1) return new Error(`Append a tag whit the correct syntax: <${tag}>`)
                    else if(tag.indexOf("<") != -1 && tag.indexOf(">") == -1) return new Error(`Append a tag whit the correct syntax: ${tag}>`)
                    else if(tag.indexOf("<") == -1 && tag.indexOf(">") != -1) return new Error(`Append a tag whit the correct syntax: <${tag}`)
                }
            }
            this.btn = (set)=>{
                let btn
                if(!set){
                    btn = this.CreateElement("<button>", {
                        style: {
                            backgroundColor: "#a7a7a7",
                            minWidth: "50px",
                            minHeight: "25px",
                            border: "0",
                            borderRadius: "10px",
                            cursor: "pointer"
                        }
                    })
                }else{
                    if(typeof set != "object") log("Sorry! But the set value has to be an object!", 1, true)
                    else{
                        btn = this.CreateElement("<button>", set)
                    }
                }
                return btn
            }
            this.input = (set)=>{
                let inp
                if(!set){
                    inp = this.CreateElement("<input>", {
                        style: {
                            backgroundColor: "#efefef",
                            minWidth: "150px",
                            minHeight: "40px",
                            border: "0",
                            borderRadius: "10px"
                        }
                    })
                }else{
                    if(typeof set != "object") log("Sorry! But the set value has to be an object!", 1, true)
                    else{
                        inp = this.CreateElement("<input>", set)
                    }
                }
                return inp
            } 
           
        }
    }
// On get
    /**
        * Used to build the DOM element returned by HTGet
    */
    class NS_Get{
        constructor(syntax){
            this.element = document.querySelector(syntax)
            if(this.element){
                // Minimal settings
                    let objectName = this.element.localName
                    this.objectName = `<${objectName}> - get By NhacScript`


                var domEnv =  new DOM(this.element)
                var attrClass = new AttributesManipulator(this.element)
                this.addEnv = domEnv.addEnv
                this.eCli = domEnv.click
                this.eDBCli = domEnv.dbClick
                this.eChange = domEnv.onChange
                this.eLoad = domEnv.load
                this.eSub = domEnv.sub
                this.eKeyPress = domEnv.keyPress
                this.theKeyPress = domEnv.theKeyPress

                this.mkAttr = attrClass.mkAttr
                this.rmAttr = attrClass.rmAttr
                this.mkClass = attrClass.mkClass
                this.rmClass = attrClass.rmClass
                this.CSS = attrClass.css
                this.val = attrClass.val
                this.HTML = attrClass.HTML
                this.TXT = attrClass.TXT
                this.addHTML = attrClass.addHTML
                this.addTXT = attrClass.addTXT

                
                this.element.getByNhacScript = true


            }
            else log(`The requested object does not exist or the syntax is incorrect, check: >"${sintaxe}"<`, 1)
        }
    } 
    /**
        * Used to build a NODELIST or Array with DOM TagsList returned by HTLet
    */
    class NS_Get_List{
        constructor(syntax){
            let typeSearch 
            let elm
            if(syntax[0] == ".") typeSearch = "class"
            else if(syntax[0] == "<") typeSearch = "tag"
            else log("Invalid syntax.", 1, true)
            if(typeSearch == "class") {
                elm = document.querySelectorAll(syntax)
            }else if(typeSearch == "tag"){
                let sy = syntax.replace("<", "")
                sy = sy.replace(">", "")
                elm = document.getElementsByTagName(sy)
            }
            if(elm){
                this.listElement = elm
                this.getWith = typeSearch
                for(let i=0;i<this.listElement.length;i++){
                    this.NS_DOM = new NS_DOM(this.listElement, true, this.listElement.length)
                    let objectName = this.listElement[i].localName
                    this.listElement[i].objectName = `<${objectName}> - get By NhacScript`

                    let dom = new DOM(this.listElement[i])
                    let attrDom = new AttributesManipulator(this.listElement[i])
                    this.listElement[i].CSS = attrDom.css
                    this.listElement[i].mkAttr = attrDom.mkAttr
                    this.listElement[i].rmAttr = attrDom.rmAttr
                    this.listElement[i].rmClass = attrDom.rmClass
                    this.listElement[i].val = attrDom.val
                    this.listElement[i].TXT = attrDom.TXT
                    this.listElement[i].addTXT = attrDom.addTXT
                    this.listElement[i].addHTML = attrDom.addHTML
                    this.listElement[i].HTML = attrDom.HTML
                    this.listElement[i].eCli = dom.click
                    this.listElement[i].eDbCli = dom.dbClick
                    this.listElement[i].eSub = dom.sub
                    this.listElement[i].eLoad = dom.load
                    this.listElement[i].eChange = dom.onChange
                    this.listElement[i].addEnv = dom.addEnv
                }
            }
            else log("Invalid syntax.", 1, true)

        }
    }
// functions
// DOM Func
    /**
        * @name HTGet returns the DOM element constructed by
        * @class NS_Get
        * @param {string} syntax put a string in the syntax of how you want to get the element
        * "#syntaxe" ".syntax" "elm [name = syntax]" "elm [type = type]"
    */
    function HTGet(syntax){
        return new NS_Get(syntax)
    }
    /**
        * createElm will work on creating html elements
        * through createElm.CreateElement (tag, set) you will create the element, as a parameter pass <tagName>
        * NOTE: No spaces, here only because JS-doc does not support
        * Parameter set will be the initial settings of your element, it must be an object
        * {style: {}, id: "testID", class: ["btn", "btn1"], content: "Hello world!", value: ""}
        *
    */
    const createElm = new builderElement()
    /**
        * Will return a list with several html objects
        * @param {string} syntax put a string to receive an object / array with several elements with the same indication
        * ".className" or "<tagName>" obj: the "<" ">" are next to the text, JS Doc does not support this syntax
        * @returns
    */
    function HLGet(syntax) {
        return new NS_Get_List(syntax)
    }
    /**
        * This function will make settings only for desktop devices, with screen> = 800
        * @param {function} settings A callback function that will occur when you have a user using a device where the width is greater than or equal to 800
    */
    function setDesktop(settings) {
        if(typeof settings != "function"){
            log("You must put a function in the settings parameter", 1, true)
        }
        if (screen.width >= 800) settings()
    }
    /**
        * This function will make settings only for mobile devices, with screen <800
        * @param {function} settings A callback function that will occur when you have a user using a device where the width is less than 800
    */
    function setMobile(settings) {
        if(typeof settings != "function"){
            log("You must put a function in the settings parameter", 1, true)
        }
        if (screen.width < 800) settings()
    }
// Storage manipulator
       /**
          * LS_Set will create / edit a localStorage
          * @param {string} name Name of your storage, type string
          * @param {any} value Value that will be stored, can be any type
          * @param {boolean} append value to add? If yes, true, if not false. false will override the previous value
        */
         function LS_Set(name, value, append=false){
            function saveData(valueToSave){
                if(localStorage[name] && append == true)
                {
                    let oldVal = LS_Get(name)
                    let newArray = new Array
                    newArray.push(oldVal)
                    newArray.push(valueToSave)
                    localStorage[name] = toJSON(newArray)
                }
                else
                {
                    localStorage[name] = valueToSave
                }
            }
            if(typeof value == "object")
            {
                value = toJSON(value)
                saveData(value)
            }
            else
            {
                saveData(value)
            }
            
        }
        /**
          * Gets the value of the local storage
          * @param {string} name Enter the name of the storage you want to get the value
          * @param {boolean} convert Put a Boolean value if you want to convert or not
          * @param {string} type Put "string" to return string, "object" to return object / array and "number" to return float or integer
        */
        function LS_Get (name, convert, type){
            let recibe = localStorage[name] 

            if(convert == void 0) convert = false
            if(type == void 0 && convert != false)  log("Você não pode marcar que vai converter e não por o tipo.", 1)
            
            if(type == "string"){
                recibe = toStr(recibe)
            }else if(type == "object"){
                recibe = toObj(recibe)
            }else if(type == "number"){
                recibe = toNum(recibe)
            }
            return recibe
        }
    // window manipulator
        /**
            * Use JS's default pop-ups? window.alert, window.prompt and window.confirm?
            * @param {string} message Message that will appear
            * @param {number} type Type of message, 0 = alert, 1 = prompt, 2 = confirm
        */
        function jPopUp(message, type){
            if(type == void 0) type = 0
            if(type == 0){
                return alert(message)
            }
            else if(type == 1){
                return prompt(message)
            }
            else if(type == 2){
                return confirm(message)
            }else{
                if(typeof type != "number") log(`Desculpe, mas o argumento type não é um número. É um/a ${typeof type}`, 1) 
                else log(`Erro, o tipo ${type} não é válido!`,1)
            }
        }
        /**
          * Redirects the user to where you send
          * @param {string} link link that the user will be redirected
        */
        function redirect(link){
            window.location.href = link
        }
        /**
          * A new tab will open
          * @param {string} link link that will open on this tab
        */
        function openWin(link){
            window.open(link)
        }

       

