/*
    The script is a "shortener" for static javascript.
    The main objective of the project is to help your web developer.
    So I created a minimal version with my ideas and things made for me.

    Author: Jefferson Silva de Souza/Nhac
    GitHub Nick: Nhac-dev || https://github.com/Nhac-dev
    Language Logs: EN
    Version: 2.0.2-1 - Beta Version
    // Release note
    Documentation Page - https://doc-nscript.web.app/
    Repository link: https://github.com/Nhac-dev/NhacScript
    Creator Instagram: https://www.instagram.com/nhac_dev/
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
 * toJSON pretende converter objetos e arrays para JSON.
 * @param object ponha uma variável do tipo object.
 * 
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
    class DOM{
        constructor(element, list, lengthList){
            if(list == void 0 && lengthList == void 0) list = false 
            if(list == true && lengthList < 0) log("Sorry, but you have to indicate the size of the list.", 1, true)
            this.addEnv = (eventName, eventTask)=>{
                if(list == false) element.addEventListener(eventName, eventTask)
                else{
                    for(let idx=0; idx < lengthList; idx++){
                        element[idx].addEventListener(eventName, eventTask)
                    }
                }
            }
            this.click = (event)=>{
                if(list == false){
                    if(event && typeof(event) == 'function') element.addEventListener('click', event)
                    else{
                        if(!event)element.click()
                        else if(typeof(event) != 'function') log(`The requested argument is not a function.`, 1)
                    }    
                }
                else{
                    for(let idx=0; idx < lengthList; idx++){
                        if(event && typeof(event) == 'function') element[idx].addEventListener('click', event)
                        else{
                            if(!event) log("Sorry, but this type of function only works for non-list functions.", 1)
                            else if(typeof(event) != 'function') log(`The requested argument is not a function.`, 1)
                        }
                    }
                }
            }
            this.dbClick = (event)=>{
                if(list == false) element.addEventListener('dblclick', event)
                else{
                    for(let idx=0; idx < lengthList; idx++){
                        if(event && typeof(event) == 'function') element[idx].addEventListener('dblclick', event)
                        else{
                            log(`The requested argument is not a function.`, 1)
                        }
                    }
                }
            }
            this.onChange = (event)=>{
                if(list == false) element.addEventListener('change', event)
                else{
                    for(let idx=0; idx < lengthList; idx++){
                        if(event && typeof(event) == 'function') element[idx].addEventListener('change', event)
                        else{
                            log(`The requested argument is not a function.`, 1)
                        }
                    }
                }
            }
            this.load = (event)=>{
                if(list == false) element.addEventListener('load', event)
                else{
                    for(let idx=0; idx < lengthList; idx++){
                        if(event && typeof(event) == 'function') element[idx].addEventListener('load', event)
                        else{
                            log(`The requested argument is not a function.`, 1)
                        }
                    }
                }
            }
            this.sub = (event)=>{
                if(list == false) element.addEventListener('submit', event)
                else{
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
    class AttributesManipulator{
        constructor(element, list, lengthList){
            if(list == void 0 && lengthList == void 0) list = false 
            if(list == true && lengthList < 0) log("Sorry, but you must indicate the size of the list.", 1, true)

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
                    if(list == false) (()=>{
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
                    })()
                    else{
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
                    // Verification array, the array KEY is the css key, and the array VALUE is the css proprieties
                    
                }
                this.HTML = (content)=>{
                    if(list == false) element.innerHTML = content
                    else{
                        for(let idx=0; idx < lengthList; idx++){
                            element[idx].innerHTML = content
                        }
                    }
                }
                this.TXT = (content)=>{
                    if(list == false) element.innerText = content
                    else{
                        for(let idx=0; idx < lengthList; idx++){
                            element[idx].innerTXT = content
                        }
                    }
                }
                this.addTXT = (content)=>{
                    if(list == false) element.innerText += content
                    else{
                        for(let idx=0; idx < lengthList; idx++){
                            element[idx].innerTXT += content
                        }
                    }
                }
                this.addHTML = (content)=>{
                    if(list == false) element.innerHtml += content
                    else{
                        for(let idx=0; idx < lengthList; idx++){
                            element[idx].innerHTML += content
                        }
                    }
                }
            // HTML Class
                this.rmClass = (value)=>{
                    if(list == false){
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
                    else{
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
                    
                }
                this.mkClass = (value)=>{
                    
                    if(list == false){
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
                    else{
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
                   
                }
                this.val = (newValue, history)=>{
                    if(history == void 0) history = false
                    
                    if(list == false){
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
                    else{
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
                    
                }
                this.mkAttr = (attribute, value)=>{
                    if(list == false){
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
                    else{
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
                    
                    
                }
                this.rmAttr = (attribute)=>{
                    if(list == false){
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
                    else{
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
        }
    }
// On get
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

                this.element.isHtml = true
                this.element.getByNhacScript = true


            }
            else log(`The requested object does not exist or the syntax is incorrect, check: >"${sintaxe}"<`, 1)
        }
    } 
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
    function HTGet(syntax){
        return new NS_Get(syntax)
    }
    function HLGet(syntax) {
        return new NS_Get_List(syntax)
    }
    function setDesktop(settings) {
        if(typeof settings != "function"){
            log("You must put a function in the settings parameter", 1, true)
        }
        if (screen.width >= 800) settings()
    }
    function setMobile(settings) {
        if(typeof settings != "function"){
            log("You must put a function in the settings parameter", 1, true)
        }
        if (screen.width < 800) settings()
    }
// Storage manipulator 
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
    function LS_Get (name){
        let recibe =localStorage[name] 
        try {
            recibe = toObj(recibe)
        } catch{
            recibe = recibe
        }
        return recibe
    }
// window manipulator 
    function jPopUp(message, type){
        if(type == 0)
        {
            return alert(message)
        }
        else if(type == 1)
        {
            return prompt(message)
        }
        else if(type == 2)
        {
            return confirm(message)
        }
        else
        {
            log(`Error, type ${type} is not valid!`,1)
        }
    }
    function redirect(link){
        window.location.href = link
    }
    function openWin(link){
        window.open(link)
    }