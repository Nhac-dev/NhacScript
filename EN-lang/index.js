/*
    The script is a "shortener" for static javascript.
    The main objective of the project is to help your web developer.
    So I created a minimal version with my ideas and things made for me.

    Author: Jefferson Silva de Souza/Nhac
    GitHub Nick: Nhac-dev || https://github.com/Nhac-dev
    Language Logs: EN
    Version: 1.0.1
    Repository link: https://github.com/Nhac-dev/NhacScript
*/

// Variables Initials
    var exportElement
    var arrayInfo
    var errorInfo

// First functions
    // New Declaration method
        const $t = (functionYour)=>{
            // Function declaration
            if(typeof(functionYour) == 'function'){
                return functionYour
            }
            else{
                var type = typeof(functionYour)
                errorInfo = {
                    errorMessage: `This function is not exactly a function, but a ${type}, please put a valid rask!`,
                    errorType: 'Invalid param'
                }
                console.error(errorInfo.errorMessage, errorInfo)
            }
        }
        const $elm = $t((value)=>{
            if(typeof(value) == 'function'){
                log('Invalid value, if you want to create a task use the "$t()" method', 1)
                return undefined
            }
            else{
                return value
            }
        })
        const $obj = $t((object)=>{
            if(typeof(object) == 'object'){
                if(Array.isArray(object) == true){
                    log (`The requested object is actually an Array/list, use the "$list()" method.`, 2)
                    return object
                }
                else{
                    return object
                }
            }
            else{
                log (`The requested object is actually a ${typeof(object)}, use "$elm()" for any value [task exception] or "$list()" for array/list, and "$t()" for tasks.`, 1)
                return undefined
            }
        })
        const $list = $t((arrayValue)=>{
            if(typeof(arrayValue)=='object'){
                if(Array.isArray(arrayValue) == true){
                    return arrayValue
                }   
                else{
                    log(`The object is actually an Object, use the "$obj()" method.`, 2)
                    return arrayValue
                }
            }
            else{
                log(`The object is actually a ${typeof(object)}, use "$elm()" for any value [task exception] or "$obj()" for objects, and "$t()" for tasks. `, 1)
                return undefined
            }
        })
    // Log's Functions
        const log = $t((message, type=0)=>{
            if(type === 0){
                console.log(message);
            }
            else if(type === 1){
                console.error(message);
            }
            else if(type === 2){
                console.warn(message);
            }
            else if(type === 3){
                console.table(message)
            }
            else{
                console.error(`Sorry, ${type} is not supported!`);
            }
        })
    // Get the var infos
        const getVarInfo = $t((element)=>{
            var infos = {
                value: element,
                type: typeof(element)
            } 
            if(infos.type != 'undefined'){
                infos.length = element.length
                if(infos.type == 'object'){
                    if(Array.isArray(element) == false){
                        infos.lengthKeys = Object.keys(element).length
                        infos.key = Object.keys(element)
                        infos.type = 'object/object'
                    }
                    else{
                        infos.type = 'object/array'
                        infos.indexArray = element.length
                    }
                }
            }
            if(element.isHtml == true){
                infos.isHtml = true
                infos.htmlProprieties = {
                    objectName: element.localName,   
                    valueOf: element.valueOf(),
                    style: element.style,
                    autoFocus: element.autoFocus,
                    identifier: element.id,
                    nodeType: element.nodeType,
                    writeInHtml: element.outerHTML
                }
            }
            return infos
        })
    // Convert
        const toJSON = $t((object)=>{
            return JSON.stringify(object)
        })
        const toObj = $t((JSONString)=>{
            return JSON.parse(JSONString)
        })
        const toNum = $t((numTarget)=>{
            if(typeof(numTarget) != 'number'){
                if(numTarget <= 0 || numTarget >= 0){
                    return Number(numTarget)
                }
                else{
                    log('This element is not a valid number!', 1)
                    return undefined
                }
            }
            else{
                log('This element is already a number!', 1)
                return undefined
            }
        })
        const toFlt = $t((numTarget)=>{
            if(typeof(numTarget) != 'number' && typeof(numTarget) != 'string'){
                log('The requested argument is neither a number nor a string!', 1)
            }
            else{
                if(numTarget <= 0 || numTarget >= 0){
                    return parseFloat(numTarget)
                }
                else{
                    log('This element is not a valid number!', 1)
                    return undefined
                }
            }
        })
        const toInt = $t((numTarget)=>{
            if(typeof(numTarget) != 'number' && typeof(numTarget) != 'string'){
                log('The requested argument is neither a number nor a string!', 1)
            }
            else{
                if(numTarget <= 0 || numTarget >= 0){
                    return parseInt(numTarget)
                }
                else{
                    log('This element is not a valid number!!', 1)
                    return undefined
                }
            }
        })
        const toStr = $t((target)=>{
            if(target){
                if(typeof(target) != 'string'){
                    if(typeof(target) != 'object'){
                        return target.toString()
                    }
                    else{
                        log('Se você deseja converter um objeto para JSON, use a tarefa "toJSON ()"', 2)
                        return JSON.stringify(target)
                    }
                    
                }
                else{
                    log('This element is already a string.', 1)
                    return undefined
                }
            }
            else{
                log(`Operation impossible! There are arguments missing to complete this task!`, 2)
                return NaN
            }
            
        })
// Simplified DOM
    // Events
        const envClick = $t((element, event)=>{
            if(element){
                element.addEventListener('click', event)
            }
            else{
                log(`The ${element} element does not exist!`, 2)
            }

        })
        const envDBLClick = $t((element, event)=>{
            if(element){
                element.addEventListener('dblclick', event)
            }
            else{
                log(`The ${element} element does not exist!`, 2)
            }
        })
        const envLoad = $t((element, event)=>{
            if(element){
                element.addEventListener('load', event)
            }
            else{
                log(`The ${element} element does not exist!`, 2)
            }
        })
        const addEnv = $t((element, eventName, event)=>{
            if(element){
                element.addEventListener(eventName, event)
            }
            else{
                log(`The ${element} element does not exist!`, 2)

            }
        })
    // Css
        const css = $t((element, key, value)=>{
            var shortKey = [
                'bg',
                'bg-c',
                'ta',
                'sw',
                'sh',
                'aContent'
            ]
            var JSyntax = [
                'background',
                'backgroundColor',
                'textAlign',
                'width',
                'height',
                'alignContent'
            ]
            for(let c = 0; c < shortKey.length; c++){
                if(key == shortKey[c]){
                    if(element.style || element.style[JSyntax[c]]){
                        element.style[JSyntax[c]] = value  
                        log ('The shortened version is unstable, be careful.', 2)
                    }
                }
                else{
                    if(element.style){
                        element.style[key] = value                    
                    }
                   
                }
            }
        })
    // Get the elements HTML
        const elmGSimple = $t((syntax)=>{
            exportElement = new Object
            exportElement = document.querySelector(syntax)
            if(exportElement){
                exportElement.getBy = 'id'
                exportElement.isHtml = true
                exportElement.getIn = 'NhacScript'
                return exportElement
            }
            else{
                log(`The requested object does not exist, or the syntax is incorrect, check! "${syntax}"`, 1)
            }
        })
        const GetElement = $t((type, value)=>{
            if(type === 'id'){
                exportElement = new Object
                exportElement = document.getElementById(value)
                if(exportElement){
                    exportElement.isHtml = true
                    exportElement.getBy = 'id'
                    exportElement.getIn = 'NhacScript'
                    
                    return exportElement
                }
                else{
                    exportElement = document.querySelector(value)
                    if(exportElement){
                        exportElement.getBy = 'id'
                        exportElement.getIn = 'NhacScript'
                        exportElement.infos = getInfo(exportElement)
                        log(`Either you used the wrong syntax or got the wrong element, check ${value}, anything between using the task: "elmGSimple()`, 2)   
                        return exportElement
                    }
                }
            }
            else if(type === 'class'){
                exportElement = new Object
                exportElement = document.getElementsByClassName(value)
                if(exportElement){
                    exportElement.isHtml = true
                    exportElement.getBy = 'class'
                    exportElement.getIn = 'NhacScript'
                    
                    return exportElement
                }
                else{
                    exportElement = document.querySelector(value)
                    if(exportElement){
                        exportElement.getBy = 'id'
                        exportElement.getIn = 'NhacScript'
                        exportElement.infos = getInfo(exportElement)
                        log(`Either you used the wrong syntax or got the wrong element, check ${value}, anything between using the task: "elmGSimple()`, 2)   
                        return exportElement
                    }
                }
            }
            else if(type === 'other'){
                exportElement = new Object
                exportElement = document.querySelector(value)
                if(exportElement){
                    exportElement.isHtml = true
                    exportElement.getBy = 'other'
                    exportElement.getIn = 'NhacScript'
                    
                    return exportElement
                }
                else{
                    exportElement = document.querySelector(value)
                    if(exportElement){
                        exportElement.getBy = 'other'
                        exportElement.getIn = 'NhacScript'
                        exportElement.infos = getInfo(exportElement)
                        log(`Either you used the wrong syntax or got the wrong element, check ${value}, anything between using the task: "elmGSimple()`, 2)   
                        return exportElement
                    }
                }
            }
            else{
                exportElement = new Object
                exportElement.element = document.querySelector(value)
                    if(exportElement.element){
                        exportElement.getBy = 'undefined'
                        exportElement.getIn = 'NhacScript'
                        exportElement.infos = getInfo(exportElement)
                        log(`Either you used the wrong syntax or got the wrong element, check ${value}, anything between using the task: "elmGSimple()`, 2)   
                        return exportElement
                    }
                else{
                    log(`Type ${type} is invalid! try the following: id, class, other.`, 1)
                    return undefined
                }
            }
        })