/*
    The script is a "shortener" for static javascript.
    The main objective of the project is to help your web developer.
    So I created a minimal version with my ideas and things made for me.

    Author: Jefferson Silva de Souza/Nhac
    GitHub Nick: Nhac-dev || https://github.com/Nhac-dev
    Language Logs: PT
    Version: 1.0.2 - EVENT DOM UPDATE
    Repository link: https://github.com/Nhac-dev/NhacScript
    Creator Instagram: https://www.instagram.com/nhac_dev/
*/

// Variables Initials
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
                    errorMessage: `Esta função não é exatamente uma função, e sim uma ${type}, por favor ponha uma função válida!`,
                    errorType: 'Invalid param'
                }
                console.error(errorInfo.errorMessage, errorInfo)
            }
        }
        const $elm = $t((value)=>{
            if(typeof(value) == 'function'){
                log('Valor invalido, caso queira criar uma função use o método "$t()"', 1)
                return undefined
            }
            else{
                return value
            }
        })
        const $obj = $t((object)=>{
            if(typeof(object) == 'object'){
                if(Array.isArray(object) == true){
                    log(`O objecto solicitado na verdade é um Array/Lista, use o método "$list()".`, 2)
                    return object
                }
                else{
                    return object
                }
            }
            else{
                log(`O objecto solicitado na verdade é um ${typeof(object)}, use o "$elm()" para qualquer valor[exação das tarefas] ou "$list()" para array/lista, e "$t()" para tarefas.`, 1)
                return undefined
            }
        })
        const $list = $t((arrayValue)=>{
            if(typeof(arrayValue)=='object'){
                if(Array.isArray(arrayValue) == true){
                    return arrayValue
                }   
                else{
                    log(`O objecto na verdade é um Objecto, use o método "$obj()".`, 2)
                    return arrayValue
                }
            }
            else{
                log(`O objecto na verdade é um ${typeof(object)}, use o "$elm()" para qualquer valor[exação das tarefas] ou "$obj()" para objetos, e "$t()" para tarefas.`, 1)
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
                console.error(`Desculpe mas o tipo ${type} não é suportado!`);
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
                    log('Este elemento não é um número válido!', 1)
                    return undefined
                }
            }
            else{
                log('Este elemento já é um número', 1)
                return undefined
            }
        })
        const toFlt = $t((numTarget)=>{
            if(typeof(numTarget) != 'number' && typeof(numTarget) != 'string'){
                log('O argumento solicitado não é nem um número ou string!', 1)
            }
            else{
                if(numTarget <= 0 || numTarget >= 0){
                    return parseFloat(numTarget)
                }
                else{
                    log('Este elemento não é um número válido!', 1)
                    return undefined
                }
            }
        })
        const toInt = $t((numTarget)=>{
            if(typeof(numTarget) != 'number' && typeof(numTarget) != 'string'){
                log('O argumento solicitado não é nem um número ou string!', 1)
            }
            else{
                if(numTarget <= 0 || numTarget >= 0){
                    return parseInt(numTarget)
                }
                else{
                    log('Este elemento não é um número válido!', 1)
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
                        log('Se quiser converter um objeto para JSON use a tarefa "toJSON()"', 2)
                        return JSON.stringify(target)
                    }
                    
                }
                else{
                    log('Este elemento já é uma string.', 1)
                    return undefined
                }
            }
            else{
                log(`Operação impossível! Há argumentos faltando para completar esta tarefa!`, 2)
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
                log(`O elemento ${element}, não existe!`, 2)
            }

        })
        const envDBLClick = $t((element, event)=>{
            if(element){
                element.addEventListener('dblclick', event)
            }
            else{
                log(`O elemento ${element}, não existe!`, 2)
            }
        })
        const envLoad = $t((element, event)=>{
            if(element){
                element.addEventListener('load', event)
            }
            else{
                log(`O elemento ${element}, não existe!`, 2)
            }
        })
        const addEnv = $t((element, eventName, event)=>{
            if(element){
                element.addEventListener(eventName, event)
            }
            else{
                log(`O elemento ${element}, não existe!`, 2)
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
                        log('A versão abreviada está instável, tome cuidado.', 2)
                        break
                    }
                }
                else{
                    if(element.style){
                        element.style[key] = value                    
                        break
                    }
                   
                }
            }
        })
    // Get the elements HTML
        const $simple = $t((syntax)=>{
            this.element = document.querySelector(syntax)
            if(this.element){
                this.element.getBy = 'id'
                this.element.isHtml = true
                this.element.getIn = 'NhacScript'
                // DOM EVENTS
                    this.element.envClick = (event)=>{
                        this.element.addEventListener('click', event)
                    }
                    this.element.envDBLClick = (event)=>{
                        this.element.addEventListener('dblclick', event)
                    }
                    this.element.envLoad = (event)=>{
                        this.element.addEventListener('load', event)
                    }
                    this.element.addEnv = (eventName, event)=>{
                        this.element.addEventListener(eventName, event)
                    } 
                // Styling
                    this.element.css = (key, value)=>{
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
                        if(Array.isArray(key) == true && Array.isArray(value) == true){
                            for(let counter = 0; counter < key.length; counter++){
                                this.element.style[key[counter]] = value[counter]                    
                            }
                        }
                        else{
                            for(let c = 0; c < shortKey.length; c++){
                                if(key == shortKey[c]){
                                    this.element.style[JSyntax[c]] = value
                                    log('A versão abreviada está instável, tome cuidado.', 2)
                                    break
                                }
                                else{
                                    if(element.style){
                                        this.element.style[key] = value                    
                                        break
                                    }
                                   
                                }
                            }
                            
                        }
                    }
                // Inner
                    this.element.HTML = (content)=>{
                        this.element.innerHTML = content
                    }
                    this.element.TXT = (content)=>{
                        this.element.innerText = content
                    }
                    this.element.append = (content, method='html')=>{
                        if(method == 'html'){
                            this.element.innerHTML += content
                        }
                        else if(method == 'txt' || method == 'text'){
                            this.element.innerText += content
                        }
                    }
                    this.element.addText = (content)=>{
                        this.element.innerText += content
                    }
                    this.element.addHTML = (content)=>{
                        this.element.innerHTML += content
                    }
                return this.element
            }
            else{
                log(`O objeto solicitado não existe, ou, a sintaxe está incorreta, verifique! "${syntax}"`, 1)
            }
        })
        const $HTML_Specified = $t((type, value)=>{
            if(type === 'id'){
                this.element = new Object
                this.element = document.getElementById(value)
                if(this.element){
                    this.element.isHtml = true
                    this.element.getBy = 'id'
                    this.element.getIn = 'NhacScript'
                    // DOM EVENTS
                        this.element.envClick = (event)=>{
                            this.element.addEventListener('click', event)
                        }
                        this.element.envDBLClick = (event)=>{
                            this.element.addEventListener('dblclick', event)
                        }
                        this.element.envLoad = (event)=>{
                            this.element.addEventListener('load', event)
                        }
                        this.element.addEnv = (eventName, event)=>{
                            this.element.addEventListener(eventName, event)
                        } 
                    // Styling
                        this.element.css = (key, value)=>{
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
                            if(Array.isArray(key) == true && Array.isArray(value) == true){
                                for(let counter = 0; counter < key.length; counter++){
                                    this.element.style[key[counter]] = value[counter]                    
                                }
                            }
                            else{
                                for(let c = 0; c < shortKey.length; c++){
                                    if(key == shortKey[c]){
                                        this.element.style[JSyntax[c]] = value
                                        log('A versão abreviada está instável, tome cuidado.', 2)
                                        break
                                    }
                                    else{
                                        if(element.style){
                                            this.element.style[key] = value                    
                                            break
                                        }
                                    
                                    }
                                }
                                
                            }
                        }
                    // Inner
                        this.element.HTML = (content)=>{
                            this.element.innerHTML = content
                        }
                        this.element.TXT = (content)=>{
                            this.element.innerText = content
                        }
                        this.element.append = (content, method='html')=>{
                            if(method == 'html'){
                                this.element.innerHTML += content
                            }
                            else if(method == 'txt' || method == 'text'){
                                this.element.innerText += content
                            }
                        }
                        this.element.addText = (content)=>{
                            this.element.innerText += content
                        }
                        this.element.addHTML = (content)=>{
                            this.element.innerHTML += content
                        } 
                    return this.element
                }
                else{
                    this.element = document.querySelector(value)
                    if(this.element){
                        this.element.getBy = 'id'
                        this.element.getIn = 'NhacScript'
                        this.element.infos = getVarInfo(this.element)
                        // DOM EVENTS
                            this.element.envClick = (event)=>{
                                this.element.addEventListener('click', event)
                            }
                            this.element.envDBLClick = (event)=>{
                                this.element.addEventListener('dblclick', event)
                            }
                            this.element.envLoad = (event)=>{
                                this.element.addEventListener('load', event)
                            }
                            this.element.addEnv = (eventName, event)=>{
                                this.element.addEventListener(eventName, event)
                            } 
                        // Styling
                            this.element.css = (key, value)=>{
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
                                if(Array.isArray(key) == true && Array.isArray(value) == true){
                                    for(let counter = 0; counter < key.length; counter++){
                                        this.element.style[key[counter]] = value[counter]                    
                                    }
                                }
                                else{
                                    for(let c = 0; c < shortKey.length; c++){
                                        if(key == shortKey[c]){
                                            this.element.style[JSyntax[c]] = value
                                            log('A versão abreviada está instável, tome cuidado.', 2)
                                            break
                                        }
                                        else{
                                            if(element.style){
                                                this.element.style[key] = value                    
                                                break
                                            }
                                        
                                        }
                                    }
                                    
                                }
                            }
                        // inner
                            this.element.HTML = (content)=>{
                                this.element.innerHTML = content
                            }
                            this.element.TXT = (content)=>{
                                this.element.innerText = content
                            }
                            this.element.append = (content, method='html')=>{
                                if(method == 'html'){
                                    this.element.innerHTML += content
                                }
                                else if(method == 'txt' || method == 'text'){
                                    this.element.innerText += content
                                }
                            }
                            this.element.addText = (content)=>{
                                this.element.innerText += content
                            }
                            this.element.addHTML = (content)=>{
                                this.element.innerHTML += content
                            }
                        log(`Ou você usou uma sintaxe errada ou obteve o elemento errado, verifique ${value}, qualquer coisa ente usar a função: "elmGSimple()"`, 2)   
                        return this.element
                    }
                }
            }
            else if(type === 'class'){
                this.element = new Object
                this.element = document.getElementsByClassName(value)
                if(this.element){
                    this.element.isHtml = true
                    this.element.getBy = 'class'
                    this.element.getIn = 'NhacScript'
                    // DOM EVENTS
                        this.element.envClick = (event)=>{
                            this.element.addEventListener('click', event)
                        }
                        this.element.envDBLClick = (event)=>{
                            this.element.addEventListener('dblclick', event)
                        }
                        this.element.envLoad = (event)=>{
                           this.element.addEventListener('load', event)
                        }
                        this.element.addEnv = (eventName, event)=>{
                            this.element.addEventListener(eventName, event)
                        } 
                    // Styling
                        this.element.css = (key, value)=>{
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
                            if(Array.isArray(key) == true && Array.isArray(value) == true){
                                for(let index = 0; index < this.element.length; index++){
                                    for(let counter = 0; counter < key.length; counter++){
                                        this.element.style[key[counter]] = value[counter] 
                                    }               
                                }
                            }
                            else{
                                for(let index = 0; index < this.element.length; index++){
                                    for(let c = 0; c < shortKey.length; c++){
                                        if(key == shortKey[c]){
                                            this.element[index].style[JSyntax[c]] = value
                                            log('A versão abreviada está instável, tome cuidado.', 2)
                                            break
                                        }
                                        else{
                                            if(element.style){
                                                this.element[index].style[key] = value                    
                                                break
                                            }
                                        
                                        }
                                    }
                                }
                                
                                
                            }
                        }
                    return this.element
                }
                else{
                    this.element = document.querySelector(value)
                    if(this.element){
                        this.element.getBy = 'class'
                        this.element.getIn = 'NhacScript'
                        this.element.infos = getVarInfo(this.element)
                        // DOM EVENTS
                            this.element.envClick = (event)=>{
                                this.element.addEventListener('click', event)
                            }
                            this.element.envDBLClick = (event)=>{
                                this.element.addEventListener('dblclick', event)
                            }
                            this.element.envLoad = (event)=>{
                            this.element.addEventListener('load', event)
                            }
                            this.element.addEnv = (eventName, event)=>{
                                this.element.addEventListener(eventName, event)
                            } 
                        // Styling
                            this.element.css = (key, value)=>{
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
                                if(Array.isArray(key) == true && Array.isArray(value) == true){
                                    for(let index = 0; index < this.element.length; index++){
                                        for(let counter = 0; counter < key.length; counter++){
                                            this.element.style[key[counter]] = value[counter] 
                                        }               
                                    }
                                }
                                else{
                                    for(let index = 0; index < this.element.length; index++){
                                        for(let c = 0; c < shortKey.length; c++){
                                            if(key == shortKey[c]){
                                                this.element[index].style[JSyntax[c]] = value
                                                log('A versão abreviada está instável, tome cuidado.', 2)
                                                break
                                            }
                                            else{
                                                if(element.style){
                                                    this.element[index].style[key] = value                    
                                                    break
                                                }
                                            
                                            }
                                        }
                                    }
                                    
                                    
                                }
                            }
                        log(`Ou você usou uma sintaxe errada ou obteve o elemento errado, verifique ${value}, qualquer coisa ente usar a função: "elmGSimple()"`, 2)   
                        return this.element
                    }
                }
            }
            else if(type === 'other'){
                this.element = new Object
                this.element = document.querySelector(value)
                if(this.element){
                    this.element.isHtml = true
                    this.element.getBy = 'other'
                    this.element.getIn = 'NhacScript'
                    // DOM EVENTS
                        this.element.envClick = (event)=>{
                            this.element.addEventListener('click', event)
                        }
                        this.element.envDBLClick = (event)=>{
                            this.element.addEventListener('dblclick', event)
                        }
                        this.element.envLoad = (event)=>{
                        this.element.addEventListener('load', event)
                        }
                        this.element.addEnv = (eventName, event)=>{
                            this.element.addEventListener(eventName, event)
                        } 
                    // Styling
                        this.element.css = (key, value)=>{
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
                            if(Array.isArray(key) == true && Array.isArray(value) == true){
                                for(let counter = 0; counter < key.length; counter++){
                                    this.element.style[key[counter]] = value[counter]                    
                                }
                            }
                            else{
                                for(let c = 0; c < shortKey.length; c++){
                                    if(key == shortKey[c]){
                                        this.element.style[JSyntax[c]] = value
                                        log('A versão abreviada está instável, tome cuidado.', 2)
                                        break
                                    }
                                    else{
                                        if(element.style){
                                            this.element.style[key] = value                    
                                            break
                                        }
                                    
                                    }
                                }
                                
                            }
                        }
                    // Inner
                        this.element.HTML = (content)=>{
                            this.element.innerHTML = content
                        }
                        this.element.TXT = (content)=>{
                            this.element.innerText = content
                        }
                        this.element.append = (content, method='html')=>{
                            if(method == 'html'){
                                this.element.innerHTML += content
                            }
                            else if(method == 'txt' || method == 'text'){
                                this.element.innerText += content
                            }
                        }
                        this.element.addText = (content)=>{
                            this.element.innerText += content
                        }
                        this.element.addHTML = (content)=>{
                            this.element.innerHTML += content
                        } 
                    return this.element
                }
                else{
                    this.element = document.querySelector(value)
                    if(this.element){
                        this.element.getBy = 'other'
                        this.element.getIn = 'NhacScript'
                        this.element.infos = getVarInfo(this.element)
                        // DOM EVENTS
                            this.element.envClick = (event)=>{
                                this.element.addEventListener('click', event)
                            }
                            this.element.envDBLClick = (event)=>{
                                this.element.addEventListener('dblclick', event)
                            }
                            this.element.envLoad = (event)=>{
                            this.element.addEventListener('load', event)
                            }
                            this.element.addEnv = (eventName, event)=>{
                                this.element.addEventListener(eventName, event)
                            } 
                        // Styling
                            this.element.css = (key, value)=>{
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
                                if(Array.isArray(key) == true && Array.isArray(value) == true){
                                    for(let counter = 0; counter < key.length; counter++){
                                        this.element.style[key[counter]] = value[counter]                    
                                    }
                                }
                                else{
                                    for(let c = 0; c < shortKey.length; c++){
                                        if(key == shortKey[c]){
                                            this.element.style[JSyntax[c]] = value
                                            log('A versão abreviada está instável, tome cuidado.', 2)
                                            break
                                        }
                                        else{
                                            if(element.style){
                                                this.element.style[key] = value                    
                                                break
                                            }
                                        
                                        }
                                    }
                                    
                                }
                            }
                        // Inner
                            this.element.HTML = (content)=>{
                                this.element.innerHTML = content
                            }
                            this.element.TXT = (content)=>{
                                this.element.innerText = content
                            }
                            this.element.append = (content, method='html')=>{
                                if(method == 'html'){
                                    this.element.innerHTML += content
                                }
                                else if(method == 'txt' || method == 'text'){
                                    this.element.innerText += content
                                }
                            }
                            this.element.addText = (content)=>{
                                this.element.innerText += content
                            }
                            this.element.addHTML = (content)=>{
                                this.element.innerHTML += content
                            } 
                        log(`Ou você usou uma sintaxe errada ou obteve o elemento errado, verifique ${value}, qualquer coisa ente usar a função: "elmGSimple()"`, 2)   
                        return this.element
                    }
                }
            }
            else{
                log(`O Tipo ${type} é invalido!, tente os seguintes: id, class, other`, 1)
                return undefined
                
            }
        })
        