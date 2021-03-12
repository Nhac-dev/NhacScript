/*
    The script is a "shortener" for static javascript.
    The main objective of the project is to help your web developer.
    So I created a minimal version with my ideas and things made for me.

    Author: Jefferson Silva de Souza/Nhac
    GitHub Nick: Nhac-dev || https://github.com/Nhac-dev
    Language Logs: EN
    Version: 2.0.1 - MEGA UPDATE
    // Release note

    Repository link: https://github.com/Nhac-dev/NhacScript
    Creator Instagram: https://www.instagram.com/nhac_dev/
*/
// Here is the new Methods and new Declaration of variables whit the NhacScript

    function task(newTask){
        if(typeof(newTask) == 'function'){
            return newTask
        }
        else{
            var type = typeof(newTask)
            errorInfo = {
                errorMessage: `This function is not exactly a function, but a ${type}, please put a valid rask!`,
                errorType: 'Invalid param'
            }
            console.error(errorInfo.errorMessage, errorInfo)
        }
    }
    const log = task(
        (message,
            type=0)=>
        {
            if(type == 0)
            {
                console.log(message);
            }
            else if(type == 1)
            {
                console.error(message);   
            }
            else if(type == 2)
            {
                console.warn(message);
            }
            else if(type == 3)
            {
                console.table(message)
            }
            else 
            {
                console.error(`Sorry, ${type} is not supported!`);
            }
        }
    )
    const obj = task(
        (object)=>
        {
            if(typeof(object) == 'object')
            {
                if(Array.isArray(object) == true)
                {
                    log (`The requested object is actually an Array/list, use the "list()" method.`, 2)
                    return object
                }
                else
                {
                    return object
                }
            }
            else
            {
                log (`The requested object is actually a ${typeof(object)}, use "$elm()" for any value [task exception] or "list()" for array/list, and "task()" for tasks.`, 1)
                return undefined
            }
        }
    )
    const list = task(
        (arrayValue)=>
        {
        if(typeof(arrayValue)=='object')
        {
            if(Array.isArray(arrayValue) == true)
            {
                return arrayValue
            }   
            else
            {
                log(`The object is actually an Object, use the "obj()" method.`, 2)
                return arrayValue
            }
        }
        else
        {
            log(`The object is actually a ${typeof(object)}, use "$elm()" for any value [task exception] or "obj()" for objects, and "task()" for tasks. `, 1)
            return undefined
        }
        }
    )
    const getVarInfo = task(
        (element)=>
        {
            var infos = {
                value: element,
                type: typeof(element)
            } 
            if(infos.type != 'undefined')
            {
                infos.length = element.length
                if(infos.type == 'object')
                {
                    if(Array.isArray(element) == false)
                    {
                        infos.lengthKeys = Object.keys(element).length
                        infos.key = Object.keys(element)
                        infos.type = 'object/object'
                    }
                    else
                    {
                        infos.type = 'object/array'
                        infos.indexArray = element.length
                    }
                }
            }
            if(element.isHtml == true)
            {
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
        }
    )
    // Conversor
        const toJSON = task(
            (object)=>
            {
                return JSON.stringify(object)
            }
        )
        const toObj = task(
            (JSONString)=>
            {
                return JSON.parse(JSONString)
            }
        )
        const toNum = task(
            (numTarget)=>
            {
                if(typeof(numTarget) != 'number')
                {
                    if(numTarget <= 0 || numTarget >= 0)
                    {
                        return Number(numTarget)
                    }
                    else
                    {
                        log('This element is not a valid number!', 1)
                        return undefined
                    }
                }
                else
                {
                        log('This element is already a number!', 1)
                        return undefined
                }
            }
        )
        const toFlt = task(
            (numTarget)=>
            {
                if(typeof(numTarget) != 'number' 
                    && typeof(numTarget) != 'string'
                )
                {
                    log('The requested argument is neither a number nor a string!', 1)
                }
                else
                {
                    if(numTarget <= 0 
                        || numTarget >= 0)
                    {
                        return parseFloat(numTarget)
                    }
                    else
                    {
                        log('This element is not a valid number!', 1)
                        return undefined
                    }
                }
            }
        )
        const toInt = task(
            (numTarget)=>
            {
                if(
                    typeof(numTarget) != 'number' &&
                        typeof(numTarget) != 'string'
                    )
                {
                        log('The requested argument is neither a number nor a string!', 1)
                }
                else
                {
                    if(numTarget <= 0 ||
                        numTarget >= 0)
                    {
                        return parseInt(numTarget)
                    }
                    else
                    {
                        log('This element is not a valid number!!', 1)
                        return undefined
                    }
                }
            }
        )
        const toStr = task(
            (target)=>
            {
                if(target)
                {
                    if(typeof(target) != 'string')
                    {
                        if(typeof(target) != 'object')
                        {
                            return target.toString()
                        }
                        else
                        {
                            log('If you want to convert an object to JSON, use the "toJSON()" task', 2)
                            return JSON.stringify(target)
                        }
                        
                    }
                    else
                    {
                        log('This element is already a string.', 1)
                        return undefined
                    }
                }
                else
                {
                    log(`Operation impossible! There are arguments missing to complete this task!`, 2)
                    return NaN
                }
                
            }
        )

// Classes and the DOM functions
    class DOM{
        constructor(element)
        {
            this.addEnv = (eventName, eventTask)=>
            {
                element.addEventListener(eventName, eventTask)
            }
            this.click = (event)=>
            {
                if(event && typeof(event) == 'function'){
                    element.addEventListener('click', event)
                }
                else{
                    if(!event){
                        element.click()
                    }
                    else if(typeof(event) != 'function'){
                        log(`The argument is not a function. Please put a function!`, 1)
                    }
                }
            }
            this.dbClick = (event)=>
            {
                element.addEventListener('dblclick', event)
            }
            this.onChange = (event)=>
            {
                element.addEventListener('change', event)
            }
            this.load = (event)=>
            {
                element.addEventListener('load', event)
            }
            this.sub = (event)=>{
                element.addEventListener('submit', event)
            }     
        }
    }
    class AttributesManipulator{
        constructor(element)
        {
            // Css And Content Manipulation 
                this.css = (key, 
                    value)=>
                {
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
                    // Verification array, the array KEY is the css key, and the array VALUE is the css proprieties
                    if (Array.isArray(key) == true &&
                    Array.isArray(value) == true)
                    {
                        for (let counter = 0; counter < key.length; counter++)
                        {
                            if(key[counter] == arrayCssSyntax[counter])
                            {
                                element.style[arrayJSSyntax[counter]] = value[counter]
                            } 
                        else
                        {
                            element.style[key[counter]] = value[counter]
                        }
                        }
                    }
                    else if(Array.isArray(key) == false &&
                        typeof(key) == 'object')
                    {
                        if(value)
                        {
                            log('Since the key is an object, the value is unnecessary', 2)
                        }
                        var values = Object.values(key)
                        var entries = Object.entries(key)
                        var keys = Object.keys(key)
                        for(let counter = 0; counter < entries.length; counter++){
                            if(keys[counter] == arrayCssSyntax[counter]){
                                element.style[arrayJSSyntax[counter]] = values[counter] 
                            }
                            else{
                                element.style[keys[counter]] = values[counter] 
                            }
                        }
                    }
                    else
                    {
                    element.style[key] = value                 
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
                    element.innerHTML += content
                }
            // HTML Class
                this.rmClass = (value)=>{
                    var classList = element.classList
                    if(classList.contains(value) == true){
                        if(typeof(value) == 'object' && Array.isArray(value) == true){
                            let c = 0
                            for(c in value){
                                element.classList.remove(value[c])
                            }
                        }
                        else{
                            element.classList.remove(value)
                        }
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
                        else{
                            element.classList.add(value)
                        }
                    }
                }
                this.val = (newValue, history='noHistory')=>{
                    if(newValue){
                        const oldVal = element.value
                        element.value = newValue
                        if(history == 'noHistory'){
                            return newValue
                        }
                        else
                        {
                            return [{
                                oldValue: oldVal,
                                valueNow: newValue
                                }, element.objectName
                            ]                                     
                        }
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
                        if(value){
                            $l('Since the attribute is an object, the value is unnecessary', 2)
                        }
                        var values = Object.values(attribute)
                        var entries = Object.entries(attribute)
                        var keys = Object.keys(attribute)
                        var counter = 0
                        for(counter in entries){
                            element.setAttribute(keys[counter], values[counter])
                        }
                    }
                    else{
                        element.setAttribute(attribute, value)
                    }
                }
                this.rmAttr = (attribute, value)=>{
                    if(Array.isArray(attribute) && Array.isArray(value)){
                        for(let c = 0; c < attribute.length; c++){
                            element.removeAttribute(attribute[c], value[c])
                        }
                    }
                    else if(Array.isArray(attribute) == false && typeof(attribute) == 'object'){
                        if(value){
                            $l('Since the attribute is an object, the value is unnecessary', 2)
                        }
                        var values = Object.values(attribute)
                        var entries = Object.entries(attribute)
                        var keys = Object.keys(attribute)
                        var counter = 0
                        for(counter in entries){
                            element.removeAttribute(keys[counter], values[counter])
                        }
                    }
                    else{
                        element.removeAttribute(attribute, value)
                    }
                }
        } 
    }
    // On get
        class NewGet{
            constructor(syntax)
            {
                this.e = document.querySelector(syntax)
                if(this.e)
                {
                    this.getDom()
                    this.getAttr()
                    this.e.isHtml = true
                    this.e.getByNhacScript = true
                    // Minimal settings
                        let objectName = this.e.localName
                        this.e.objectName = `<${objectName}> - get By NhacScript`

                    return this.e
                }
                else
                {
                    log(`The requested object does not exist, or the syntax is incorrect, check! "${syntax}"`, 1)
                }
                
            }
            getDom = ()=>{
                var domEnv =  new DOM(this.e)
                this.e.addEnv = domEnv.addEnv
                this.e.eCli = domEnv.click
                this.e.eDBCli = domEnv.dbClick
                this.e.eChange = domEnv.onChange
                this.e.eLoad = domEnv.load
                this.e.eSub = domEnv.sub
            }
            getAttr = ()=>{
                var attrClass = new AttributesManipulator(this.e)
                this.e.mkAttr = attrClass.mkAttr
                this.e.rmAttr = attrClass.rmAttr
                this.e.mkClass = attrClass.mkClass
                this.e.rmClass = attrClass.rmClass
                this.e.CSS = attrClass.css
                this.e.val = attrClass.val
                this.e.HTML = attrClass.HTML
                this.e.TXT = attrClass.TXT
                this.e.addHTML = attrClass.addHTML
                this.e.addTXT = attrClass.addTXT
            }
        } 
    // Separate DOM event
        class addEnv {
            constructor(element){
                this.addEnv = (eventName, env)=>{
                    this.addEventListener(eventName, env)
                }
                return this.addEnv
            }
        }
        class click {
            constructor(element){
                this.click = (event)=>{
                    if(event && typeof(event) == 'function'){
                        element.addEventListener('click', event)
                    }
                    else{
                        if(!event){
                            element.click()
                        }
                        else if(typeof(event) != 'function'){
                            log(`The argument is not a function. Please put a function!`, 1)
                        }
                    }
                }
                return this.click
            }
        }
        class dblClick {
            constructor(element){
                this.dbClick = (event)=>{
                    addEventListener('dblclick', event)
                }
                return this.dbClick
            }
        }
        class onChange {
            constructor(element){
                this.onChange = (event)=>{
                    element.addEventListener('change', event)
                }
                return this.onChange
            }   
        }
        class onLoad {
            constructor(element){
                this.load = (event)=>{
                    element.addEventListener('load', event)
                }
                return this.load
            }
        }
        class onSubmit {
            constructor(element){
                this.sub = (event)=>{
                    element.addEventListener('submit', event)
                }
                return this.sub
            }
        }
        class personEvent {
            constructor(event){
                if(typeof(event) === 'function'){
                    this.event = event
                    return this.event     
                }
                else{
                    log(`The event called not is a task/function.`,1)
                    return undefined
                }
            }
        }
    // CSS
        class css {
            constructor(element){
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
                this.css = (key, value)=>{
                    if (Array.isArray(key) == true && Array.isArray(value) == true) {
                        for (let counter = 0; counter < key.length; counter++) {
                            if(key[counter] == arrayCssSyntax[counter]){
                                element.style[arrayJSSyntax[counter]] = value[counter]
                            } 
                        else{
                            element.style[key[counter]] = value[counter]
                        }
                        }
                    }
                    else if(Array.isArray(key) == false && typeof(key) == 'object'){
                        if(value){
                            log('Since the key is an object, the value is unnecessary', 2)
                        }
                        var values = Object.values(key)
                        var entries = Object.entries(key)
                        var keys = Object.keys(key)
                        for(let counter = 0; counter < entries.length; counter++){
                            if(keys[counter] == arrayCssSyntax[counter]){
                                element.style[arrayJSSyntax[counter]] = values[counter] 
                            }
                            else{
                                element.style[keys[counter]] = values[counter] 
                            }
                        }
                    }
                    else {
                    element.style[key] = value                 
                    }
                }
                return this.css

            }
        }
    // Inner
        // Write
            class inner {
                constructor(element, type){
                    if(type == 'html'){
                        this.HTML = (content)=>{
                            element.innerHTML = content
                        }
                        return this.HTML
                    }
                    else if(type == 'TXT'){
                        this.TXT = (content)=>{
                            element.innerText = content
                        }
                        return this.TXT
                    }
                } 
            }
        // Append write
            class append {
                constructor(element, type){
                    if(type == 'html'){
                        this.addHTML = (content)=>{
                            element.innerHTML += content
                        }
                        return this.addHTML
                    }
                    else if(type == 'TXT'){
                        this.addTXT = (content)=>{
                            element.innerText += content
                        }
                        return this.addTXT
                    }
                    else{
                        this.append = (content, method='html')=>{
                            if (method == 'html') {
                                element.innerHTML += content
                            }
                            else if (method == 'txt' || method == 'text') {
                                element.innerText += content
                            }
                        }
                        return this .append
                    }
                }
            }
    // Attributes
        class mkAttr {
                constructor(element){
                    this.attr = (attribute, value)=>{
                        if(Array.isArray(attribute) && Array.isArray(value)){
                            for(let c = 0; c < attribute.length; c++){
                                element.setAttribute(attribute[c], value[c])
                            }
                        }
                        else if(Array.isArray(attribute) == false && typeof(attribute) == 'object'){
                            if(value){
                                $l('Since the attribute is an object, the value is unnecessary', 2)
                            }
                            var values = Object.values(attribute)
                            var entries = Object.entries(attribute)
                            var keys = Object.keys(attribute)
                            var counter = 0
                            for(counter in entries){
                                element.setAttribute(keys[counter], values[counter])
                            }
                        }
                        else{
                            element.setAttribute(attribute, value)
                        }
                    }
                    return this.attr
                }
        }
        class rmAttr {
                constructor(element){
                    this.rmAttr = (attribute, value)=>{
                        if(Array.isArray(attribute) && Array.isArray(value)){
                            for(let c = 0; c < attribute.length; c++){
                                element.removeAttribute(attribute[c], value[c])
                            }
                        }
                        else if(Array.isArray(attribute) == false && typeof(attribute) == 'object'){
                            if(value){
                                $l('Since the attribute is an object, the value is unnecessary', 2)
                            }
                            var values = Object.values(attribute)
                            var entries = Object.entries(attribute)
                            var keys = Object.keys(attribute)
                            var counter = 0
                            for(counter in entries){
                                element.removeAttribute(keys[counter], values[counter])
                            }
                        }
                        else{
                            element.removeAttribute(attribute, value)
                        }
                    }
                    return this.rmAttr
                }
        }
        class mkClass {
                constructor(element){
                    this.addClass = (value)=>{
                        var classList = element.classList
                        if(classList.contains(value) != true){
                            if(typeof(value) == 'object' && Array.isArray(value) == true){
                                let c = 0
                                for(c in value){
                                    element.classList.add(value[c])
                                }

                            }
                            else{
                                element.classList.add(value)
                            }
                        }
                    }
                    return this.addClass
                }
        }
        class rmClass {
                constructor(element){
                    this.addClass = (value)=>{
                        var classList = element.classList
                        if(classList.contains(value) == true){
                            if(typeof(value) == 'object' && Array.isArray(value) == true){
                                let c = 0
                                for(c in value){
                                    element.classList.remove(value[c])
                                }
                            }
                            else{
                                element.classList.remove(value)
                            }
                        }
                    }
                    return this.addClass
                    
                }
        }
        class value {
                constructor(element){
                    this.val = (newValue, history)=>{
                        if(newValue){
                            const oldVal = element.value
                            element.value = newValue
                            if(history == 'noHistory'){
                                return newValue
                            }
                            else
                            {
                                return [{
                                    oldValue: oldVal,
                                    valueNow: newValue
                                    }, element.objectName
                                ]                                     
                            }
                        }
                        else{
                            return element.value
                        }
                    }
                    return this.val
                }
        }
    // Final Settings
        window.addEnv = new addEnv(window)
        window.eClick = new click(window)
        window.eDblClick = new dblClick(window)
        window.eChange = new onChange(window)
        window.eLoad = new onLoad(window)
// functions
    const HTGet = (syntax)=>{
        return new NewGet(syntax)
    }
    const LS_Set = (name, value, append=false)=>{
        function saveData(valueToSave){
            if(localStorage[name] && append == true)
            {
                localStorage[name] += valueToSave
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
    const LS_Get = (name)=>{
        let recibe =localStorage[name] 
        try {
            recibe = toObj(recibe)
        } catch{
            recibe = recibe
        }
        return recibe
        // return 
    }
    const jPopUp = (message, type)=>{
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
            log(`Erro, the type ${type} is not valid!`,1)
        }
    }
    const redirect = (link)=>{
        window.location.href = link
    }
    const openWin = (link)=>{
        window.open(link)
    }