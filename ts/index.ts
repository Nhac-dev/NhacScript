// Types
    // TO DOM
        type HTML = HTMLInputElement | HTMLElement 
        type toGet = "class"|"id"|"name"|"type"|"other"
        type eventTarget = keyof HTMLElementEventMap
        type attrsNs = "id"|"class"|"hidden"|"type"|"submit"|"style"|"name"|"lang"|"href"|"download"
    // Utils
        type conversorTo = "str"|"obj"|"num"|"JSON"|"obj"
// Interfaces
    // TO DOM
        interface nssProps{
            background?: string,
            backgroundColor?: string,
            backgroundPosition?: string,
            color?: string,
            textAlign?: string,
            textDecoration?: string,
            display?: string,
            margin?: string,
            marginTop?: string,
            marginBottom?: string,
            marginLeft?: string,
            marginRight?: string,
            padding?: string,
            paddingTop?: string,
            paddingBottom?: string,
            paddingLeft?: string,
            paddingRight?: string,
            borderRadius?: string,
            border?: string
        }
        interface DOM{
            AddEnv(nameEvent:eventTarget, env:Function | any):void,
            Click(env:Function | any):void,
            DbClick(env:Function | any):void,
            Change(env:Function | any):void,
            Submit(env:Function | any):void,
            Keypress(env:Function | any):void,
            Keydown(env:Function | any):void,
            Keyup(env:Function | any):void,
            Mouseenter(env:Function | any):void,
            Mouseout(env:Function | any):void
            NOS(props: nssProps):void,
            GetContent(type: "html"|"txt"):string|string[],
            GetHtml():string|string[],
            GetTXT():string|string[],
            GetVal():string|string[],
            SetVal(value: string):void,
            SetHTML(content: string):void,
            SetTXT(content: string):void,
            AddHTML(content: string):void,
            AddTXT(content: string):void,
            SetID(id: string):void,
            SetClass(target: string | Array<string>):void,
            RmClass(target: string | Array<string>):void,
            SetAttr(target: attrsNs, value: (string)):void,
            RmAttr(target: attrsNs):void,   
        }
        interface preDefinition{
            value?: string
            style?: nssProps
            text?: string
            name?: string
            id?: string
            class?: string     
        }
        interface createElement{
            CreateElm: (tag: string, preDefinition: preDefinition)=>creat_Element_Cls
            Btn: (preDefinition: preDefinition)=>creat_Element_Cls
            Input: (preDefinition: preDefinition)=>creat_Element_Cls
            Output: (preDefinition: preDefinition)=>creat_Element_Cls
            Div: (preDefinition: preDefinition)=>creat_Element_Cls
            Span: (preDefinition: preDefinition)=>creat_Element_Cls
            P: (preDefinition: preDefinition)=>creat_Element_Cls
            Form: (preDefinition: preDefinition)=>creat_Element_Cls
            Label: (preDefinition: preDefinition)=>creat_Element_Cls
            Textarea: (preDefinition: preDefinition)=>creat_Element_Cls
            Script: (preDefinition: {src: string, type: string} & preDefinition)=>creat_Element_Cls
            createdBy: "NhacScript"
        }
    // TO CONVERT
        interface geralConvertor{
            to: conversorTo,
            value: any
        }
        interface conversor{
            Conversor(set:geralConvertor):any;
            ToStr(value:(number|boolean)):string,
            ToNum(value:(string|number)):number,
            ToInt(value:string):number,
            ToFloat(value:string):number,
            ToJSON(obj:object):string,
            ToObj(obj:string):object,
            createdBy: "NhacScript"
        }
    // Input e Output - of Window
        interface inputNhac{
            Ask(question:string):any
            AskNum(question:string):number
            AskBool(question: string):boolean
            createdBy: "NhacScript"
        }
        interface outputNhac{
            Debug(setting:{type:number, forceStop?: boolean},...msg:any[]):void
            Log(...message:any[]):any
            Table(obj:object):void
            Err(...msg: any[]):void
            Warn(...warnMsg: any[]):void
            createdBy: "NhacScript"
        }

// Class declaration
    // Get The DOM
        class ns_Dom_Uni_Cls implements DOM{
            /**
            * domBy serve para dizer de onde vem o DOM
            */
            domBy!: string
            /**
            * indica o elemento a qual o index se refere
            */
            to!: HTML
            /**
            * O AddEnv trabalha como o addEventListener, sendo o primeiro parâmetro para o nome do evento
            * e o segundo para a função que ocorrerá ao acontecer determinado evento.
            * @param {('abort'| 'change'|  'click'|  'close'|  'compositionend'| 'copy'| 'cuechange'| 'cut'| 'dblclick'| 'keydown'| 'keypress'| "keyup"| 'load'| 'mousedown'| 'mouseenter'| 'mouseout'| 'mouseover'| 'mouseup'| 'submit')} nameEvent
            * @param {Function} env
            */
            AddEnv!: (nameEvent:eventTarget, env:Function | any) => void
            Click!: (env:Function | any) => void
            DbClick!: (env:Function | any) => void 
            Change!: (env:Function | any) => void
            Submit!: (env:Function | any) => void
            Keypress!: (env:Function | any) => void
            Keydown!: (env:Function | any) => void
            Keyup!: (env:Function | any) => void
            Mouseenter!: (env:Function | any) => void
            Mouseout!: (env:Function | any) => void
            NOS!: (props: nssProps)=>void
            GetContent!: (type: "html"|"txt")=>string
            GetHtml!: ()=>string
            GetTXT!: ()=>string
            GetVal!: ()=>string
            SetVal!: (value: string)=>void
            SetHTML!: (content: string)=>void
            SetTXT!: (content: string)=>void
            AddHTML!: (content: string)=>void
            AddTXT!: (content: string)=>void
            SetID!: (id: string)=>void
            SetClass!: (target: string | Array<string>)=>void
            RmClass!: (target: string | Array<string>)=>void
            SetAttr!: (target: attrsNs, value: (string)) => void
            RmAttr!: (target: attrsNs)=>void
            static createdBy: string

            constructor(element:any) {
                /**
                * indica o elemento a qual o index se refere
                */
                this.to = element
                /**
                 * domBy serve para dizer de onde vem o DOM
                 */
                this.domBy = "NhacScript Module"
                /**
                 * O AddEnv trabalha como o addEventListener, sendo o primeiro parâmetro para o nome do evento
                 * e o segundo para a função que ocorrerá ao acontecer determinado evento.
                 * @param {keyof HTMLElementEventMap} nameEvent
                 * @param {Function} env
                */
                this.AddEnv = (nameEvent:eventTarget, env: Function | any): void =>{
                    if(element){
                        this.to.addEventListener(nameEvent, env)
                    }
                }
                /**
                * O método click realizará a função passada pelo parâmetro quando o elemento em questão receber o evento de clique
                * @param {Function} env
                */
                this.Click = (env: Function): void =>{
                    this.AddEnv("click", env)
                }
                /**
                * O método dbClick realizará a função passada pelo parâmetro quando o elemento em questão receber o evento de duplo clique
                * @param {Function} env
                */
                this.DbClick = (env: Function): void =>{
                    this.AddEnv("dblclick", env)
                }
                /**
                * O método change realizará a função passada pelo parâmetro quando o elemento em questão receber o evento de mudança(mudar o valor do atributo value) ocorrer
                * @param {Function} env
                */
                this.Change = (env: Function): void =>{
                    this.AddEnv("change", env)
                }
                /**
                * O método submit realizará a função passada pelo parâmetro quando o formulário em questão for submetido
                * @param {Function} env
                */
                this.Submit = (env: Function): void =>{
                    this.AddEnv("submit", env)
                }
                /**
                * O método keypress realizará a função passada pelo parâmetro quando o uma tecla do teclado for precisando no elemento 
                * @param {Function} env
                */
                this.Keypress = (env: Function): void =>{
                    this.AddEnv("keypress", env)
                }
                /**
                * O método keydown realizará a função passada pelo parâmetro quando o uma tecla do teclado for precisando no elemento 
                * @param {Function} env
                */
                this.Keydown = (env: Function): void =>{
                    this.AddEnv("keydown", env)
                }
                /**
                * O método keyup realizará a função passada pelo parâmetro quando o uma tecla do teclado for precisando, logo depois solto no elemento 
                * @param {Function} env
                */
                this.Keyup = (env: any):void =>{
                    this.AddEnv("keyup", env)
                }
                /**
                * O método mouseenter realizará a função passada pelo parâmetro quando o mouse entrar no elemento 
                * @param {Function} env
                */
                this.Mouseenter = (env: Function): void =>{
                    this.AddEnv("mouseenter", env)
                }
                /**
                * O método mouseout realizará a função passada pelo parâmetro quando o mouse sair no elemento 
                * @param {Function} env
                */
                this.Mouseout = (env: Function): void =>{
                    this.AddEnv("mouseout", env)
                }
                /**
                * NOS ou Nhac Object Style é um método criado pŕo NS_DOM(NhacScript Document Object Module)
                * Sua principal função é estilizar os elementos por meio de objeto
                * @param {{background?: string,backgroundColor?: string,backgroundPosition?: string,color?: string,textAlign?: string,textDecoration?: string,display?: string,margin?: string,marginTop?: string,marginBottom?: string,marginLeft?: string,marginRight?: string,padding?: string,paddingTop?: string,paddingBottom?: string,paddingLeft?: string,paddingRight?: string,maxWidth?: string,minWidth?: string,maxHeight?: string,minHeight?: string}} props
                */
                this.NOS = (props: nssProps): void =>{
                    if(typeof props == "object"){
                        var keys:Array<any> = Object.keys(props)
                        var value:Array<any> = Object.values(props)
                
                        for(let ind = 0; ind < keys.length; ind++){
                            this.to.style[keys[ind]] = value[ind]
                        }
                    }
                }
                
                /**
                * Obterá o conteúdo do elemento, se html, obterá as tags html, se txt, obterá apenas o texto
                * @param {("html"|"txt")} type 
                * @returns {string} 
                */
                this.GetContent = (type: "html" | "txt"):string => {
                    switch (type) {
                        case "html":
                            return this.to.innerHTML
                            break;
                        case "txt":
                            return this.to.innerText
                            break;
                        default:
                            let a = "Error - o tipo é invalído"
                            console.error("Error - o tipo é invalído")
                            return a
                    }
                }
                /**
                * Obterá o conteúdo do elemento em html
                * @returns {string} 
                */
                this.GetHtml = (): string => {
                    return this.to.innerHTML
                }
                /**
                * Obterá o conteúdo do elemento em texto
                * @returns {string} 
                */
                this.GetTXT = (): string => {
                    return this.to.innerText
                }
                /**
                * Obterá o valor do atributo value
                * @returns {string} 
                */
                this.GetVal = (): string => {
                    return element.value
                }
                /**
                * Sobreporá(escreverá um novo) o valor do atributo value 
                * @param {string} value - valor a ser atribuído
                */
                this.SetVal = (value: string): void =>{
                    element.value = value
                }
                /**
                * Escreverá o conteúdo em HTML no elemento sobrescrevendo o valor anterior
                *  @param {string} content - valor a ser escrito
                */
                this.SetHTML = (content: string): void =>{
                    this.to.innerHTML = content
                }
                /**
                * Escreverá o conteúdo em TEXTO no elemento sobrescrevendo o valor anterior
                * @param {string} content - valor a ser escrito
                */
                this.SetTXT = (content: string): void =>{
                    this.to.innerText = content
                }
                /**
                * Escreverá o conteúdo em HTML no elemento, sem sobrepor o conteúdo anterior
                *  @param {string} content - valor a ser escrito
                */
                this.AddHTML = (content: string): void =>{
                    this.to.innerHTML += content
                }
                /**
                * Escreverá o conteúdo em TXT no elemento, sem sobrepor o conteúdo anterior
                *  @param {string} content - valor a ser escrito
                */
                this.AddTXT = (content: string): void =>{
                    this.to.innerText += content
                }
                /**
                * Irá por o id no elemento em questão  
                * @param {string} id
                */        
                this.SetID = (id: string): void =>{
                    this.to.id = id
                }
                /**
                * Irá adicionar uma(ou mais) classe ao elemento  
                * @param {...string} target
                */
                this.SetClass = (target: string | string[]): void =>{
                    if(Array.isArray(target)){
                        target.forEach(elm => {
                            let a = this.to.classList.contains(elm)
                            switch(a) {
                                case false:
                                    this.to.classList.add(elm)
                                    break;
                                default:
                                    console.error("Esta classe já existe neste elemento!")
                                    break;
                            }
                        });
                    }else{
                        let a = this.to.classList.contains(target)
                        switch (a) {
                            case false:
                                this.to.classList.add(target)
                                break;
                            default:
                                console.error("Esta classe já existe neste elemento!")
                                break;
                        }
                    }
                    
                }
                /**
                * Irá remover uma(ou mais) classe do elemento  
                * @param {...string} target
                */
                this.RmClass =(target: string | string[]): void =>{
                    if(Array.isArray(target)){
                        target.forEach(elm => {
                            let a = this.to.classList.contains(elm)
                            switch(a) {
                                case true:
                                    this.to.classList.remove(elm)
                                    break;
                                default:
                                    console.error("Esta classe não existe neste elemento!")
                                    break;
                            }
                        });
                    }else{
                        let a = this.to.classList.contains(target)
                        switch (a) {
                            case true:
                                this.to.classList.remove(target)
                                break;
                            default:
                                console.error("Esta classe não existe neste elemento!")
                                break;
                        }
                    }
                }
                /**
                * Irá adicionar um atributo ao elemento  
                * @param {attrsNs} target
                */
                this.SetAttr = (target: attrsNs, value: string): void =>{
                    this.to.setAttribute(target, value)
                }
                /**
                * Irá remover um atributo ao elemento  
                * @param {string} target
                */
                this.RmAttr = (target: attrsNs): void =>{
                    this.to.removeAttribute(target)
                }
                NoRewriteObject(this, "*")
            }

        }
        class ns_Dom_List_Cls implements DOM{
            /**
            * domBy serve para dizer de onde vem o DOM
            */
            domBy!: string
            /**
             * indica o elemento a qual o index se refere
             */
            to!: HTML
            /**
             * O AddEnv trabalha como o addEventListener, sendo o primeiro parâmetro para o nome do evento
             * e o segundo para a função que ocorrerá ao acontecer determinado evento.
             * @param {('abort'| 'change'|  'click'|  'close'|  'compositionend'| 'copy'| 'cuechange'| 'cut'| 'dblclick'| 'keydown'| 'keypress'| "keyup"| 'load'| 'mousedown'| 'mouseenter'| 'mouseout'| 'mouseover'| 'mouseup'| 'submit')} nameEvent
             * @param {Function} env
             */
            AddEnv!: (nameEvent:eventTarget, env:Function | any) => void
            Click!: (env:Function | any) => void
            DbClick!: (env:Function | any) => void 
            Change!: (env:Function | any) => void
            Submit!: (env:Function | any) => void
            Keypress!: (env:Function | any) => void
            Keydown!: (env:Function | any) => void
            Keyup!: (env:Function | any) => void
            Mouseenter!: (env:Function | any) => void
            Mouseout!: (env:Function | any) => void
            NOS!: (props: nssProps)=>void
            GetContent!: (type: "html"|"txt")=>string|string[]
            GetHtml!: ()=>string|string[]
            GetTXT!: ()=>string|string[]
            GetVal!: ()=>string|string[]
            SetVal!: (value: string)=>void
            SetHTML!: (content: string)=>void
            SetTXT!: (content: string)=>void
            AddHTML!: (content: string)=>void
            AddTXT!: (content: string)=>void
            SetID!: (id: string)=>void
            SetClass!: (target: string | Array<string>)=>void
            RmClass!: (target: string | Array<string>)=>void
            SetAttr!: (target: attrsNs, value: (string)) => void
            RmAttr!: (target: attrsNs)=>void
            static createdBy: string
    
            constructor(element:any) {
                /**
                 * domBy serve para dizer de onde vem o DOM
                 */
                this.domBy = "NhacScript Module"
                /**
                 * O AddEnv trabalha como o addEventListener, sendo o primeiro parâmetro para o nome do evento
                 * e o segundo para a função que ocorrerá ao acontecer determinado evento.
                 * @param {('abort'| 'change'|  'click'|  'close'|  'compositionend'| 'copy'| 'cuechange'| 'cut'| 'dblclick'| 'keydown'| 'keypress'| "keyup"| 'load'| 'mousedown'| 'mouseenter'| 'mouseout'| 'mouseover'| 'mouseup'| 'submit')} nameEvent
                 * @param {Function} env
                */
                this.AddEnv = (nameEvent:eventTarget, env: Function): void =>{
                    for(let e of element){
                        e.addEventListener(nameEvent, env)
                    }            
                }
                /**
                * O método click realizará a função passada pelo parâmetro quando o elemento em questão receber o evento de clique
                * @param {Function} env
                */
                this.Click = (env: Function): void =>{
                    this.AddEnv("click", env)
                }
                /**
                * O método dbClick realizará a função passada pelo parâmetro quando o elemento em questão receber o evento de duplo clique
                * @param {Function} env
                */
                this.DbClick = (env: Function): void =>{
                    this.AddEnv("dblclick", env)
                }
                /**
                * O método change realizará a função passada pelo parâmetro quando o elemento em questão receber o evento de mudança(mudar o valor do atributo value) ocorrer
                * @param {Function} env
                */
                this.Change = (env: Function): void =>{
                    this.AddEnv("change", env)
                }
                /**
                * O método submit realizará a função passada pelo parâmetro quando o formulário em questão for submetido
                * @param {Function} env
                */
                this.Submit = (env: Function): void =>{
                    this.AddEnv("submit", env)
                }
                /**
                * O método keypress realizará a função passada pelo parâmetro quando o uma tecla do teclado for precisando no elemento 
                * @param {Function} env
                */
                this.Keypress = (env: Function): void =>{
                    this.AddEnv("keypress", env)
                }
                /**
                * O método keydown realizará a função passada pelo parâmetro quando o uma tecla do teclado for precisando no elemento 
                * @param {Function} env
                */
                this.Keydown = (env: Function): void =>{
                    this.AddEnv("keydown", env)
                }
                /**
                * O método keyup realizará a função passada pelo parâmetro quando o uma tecla do teclado for precisando, logo depois solto no elemento 
                * @param {Function} env
                */
                this.Keyup = (env: any):void =>{
                    this.AddEnv("keyup", env)
                }
                /**
                * O método mouseenter realizará a função passada pelo parâmetro quando o mouse entrar no elemento 
                * @param {Function} env
                */
                this.Mouseenter = (env: Function): void =>{
                    this.AddEnv("mouseenter", env)
                }
                /**
                * O método mouseout realizará a função passada pelo parâmetro quando o mouse sair no elemento 
                * @param {Function} env
                */
                this.Mouseout = (env: Function): void =>{
                    this.AddEnv("mouseout", env)
                }
                /**
                * NOS ou Nhac Object Style é um método criado pŕo NS_DOM(NhacScript Document Object Module)
                * Sua principal função é estilizar os elementos por meio de objeto
                * @param {{background?: string,backgroundColor?: string,backgroundPosition?: string,color?: string,textAlign?: string,textDecoration?: string,display?: string,margin?: string,marginTop?: string,marginBottom?: string,marginLeft?: string,marginRight?: string,padding?: string,paddingTop?: string,paddingBottom?: string,paddingLeft?: string,paddingRight?: string,maxWidth?: string,minWidth?: string,maxHeight?: string,minHeight?: string}} props
                */
                this.NOS = (props: nssProps): void =>{
                    for(let e = 0; e< element.length; e++){
                        if(typeof props == "object"){
                            var keys:Array<string> = Object.keys(props)
                            var value:Array<string> = Object.values(props)
                    
                            for(let ind = 0; ind < keys.length; ind++){
                                element[e].style[keys[ind]] = value[ind]                        
                            }
                        }
                    } 
                }
                /**
                * Obterá o conteúdo do elemento, se html, obterá as tags html, se txt, obterá apenas o texto
                * @param {("html"|"txt")} type 
                * @returns {string} 
                */
                this.GetContent = (type: "html" | "txt"):Array<string> => {
                    let ret:Array<string> = new Array()
                    for (let e = 0; e < element.length; e++) {
                        switch (type) {
                            case "html":
                                ret.push(element[e].innerHTML)
                                break;
                            case "txt":
                                ret.push(element[e].innerText)
                                break;
                            default:
                                let a = "Error - o tipo é invalído"
                                console.error("Error - o tipo é invalído")
                                ret.push(a)
                                break;
                        }
                    }
                    return ret
                }
                /**
                * Obterá o conteúdo do elemento em html
                * @returns {string} 
                */
                this.GetHtml = (): Array<string> => {
                    let ret:Array<string> = new Array()
                    for (let e = 0; e < element.length; e++) {
                        ret.push(element[e].innerHTML)
                    }
                    return ret
                }
                /**
                * Obterá o conteúdo do elemento em texto
                * @returns {string} 
                */
                this.GetTXT = (): Array<string> => {
                    let ret:Array<string> = new Array()
                    for (let e = 0; e < element.length; e++) {
                        ret.push(element[e].innerText)
                    }
                    return ret
                }
                /**
                * Obterá o valor do atributo value
                * @returns {string} 
                */
                this.GetVal = (): Array<string> => {
                    let ret:Array<string> = new Array()
                    for (let e = 0; e < element.length; e++) {
                        ret.push(element[e].value)
                    }
                    return ret
                }
                /**
                * Sobreporá(escreverá um novo) o valor do atributo value 
                * @param {string} value - valor a ser atribuído
                */
                this.SetVal = (value: string): void =>{
                    for (let e = 0; e < element.length; e++) {
                        element[e].value = value
                    }
                }
                /**
                * Escreverá o conteúdo em HTML no elemento sobrescrevendo o valor anterior
                *  @param {string} content - valor a ser escrito
                */
                this.SetHTML = (content: string): void =>{
                    for (let e = 0; e < element.length; e++) {
                        element[e].innerHTML = content
                    }
                }
                /**
                * Escreverá o conteúdo em TEXTO no elemento sobrescrevendo o valor anterior
                * @param {string} content - valor a ser escrito
                */
                this.SetTXT = (content: string): void =>{
                    for (let e = 0; e < element.length; e++) {
                        element[e].innerText = content
                    }
                }
                /**
                * Escreverá o conteúdo em HTML no elemento, sem sobrepor o conteúdo anterior
                *  @param {string} content - valor a ser escrito
                */
                this.AddHTML = (content: string): void =>{
                    for (let e = 0; e < element.length; e++) {
                        element[e].innerHTML += content
                    }
                }
                /**
                * Escreverá o conteúdo em TXT no elemento, sem sobrepor o conteúdo anterior
                *  @param {string} content - valor a ser escrito
                */
                this.AddTXT = (content: string): void =>{
                    for (let e = 0; e < element.length; e++) {
                        element[e].innerText += content
                    }
                }    
                /**
                * Irá adicionar uma(ou mais) classe ao elemento  
                * @param {...string} target
                */
                this.SetClass = (target: string | string[]): void =>{
                    for (let e = 0; e < element.length; e++) {
                        if(Array.isArray(target)){
                        target.forEach(elm => {
                            let a = element[e].classList.contains(elm)
                            switch(a) {
                                case false:
                                    element[e].classList.add(elm)
                                    break;
                                default:
                                    console.error("Esta classe já existe neste elemento!")
                                    break;
                            }
                        });
                        }else{
                            let a = element[e].classList.contains(target)
                            switch (a) {
                                case false:
                                    element[e].classList.add(target)
                                    break;
                                default:
                                    console.error("Esta classe já existe neste elemento!")
                                    break;
                            }
                        }
                    }
                }
                /**
                * Irá remover uma(ou mais) classe do elemento  
                * @param {...string} target
                */
                this.RmClass =(target: string | string[]): void =>{
                    for (let e = 0; e < element.length; e++) {     
                        if(Array.isArray(target)){
                            target.forEach(elm => {
                                let a = element[e].classList.contains(elm)
                                switch(a) {
                                    case true:
                                        element[e].classList.remove(elm)
                                        break;
                                    default:
                                        console.error("Esta classe não existe neste elemento!")
                                        break;
                                }
                            });
                        }else{
                            let a = element[e].classList.contains(target)
                            switch (a) {
                                case true:
                                    element[e].classList.remove(target)
                                    break;
                                default:
                                    console.error("Esta classe não existe neste elemento!")
                                    break;
                            }
                        }
                        
                    }
                
                }
                /**
                * Irá adicionar um atributo ao elemento  
                * @param {string} target
                */
                this.SetAttr = (target: string | string[], value: string | string[]): void =>{
                    for (let e of element) {     
                        e.setAttribute(target, value)
                    }
                }
                /**
                * Irá remover um atributo ao elemento  
                * @param {string} target
                */
                this.RmAttr = (target: string | string[]): void =>{
                    for (let e of element) {     
                        e.removeAttribute(target)
                    }      
                }
                NoRewriteObject(this, "*")
            }
        
        }
    // Get The HTML Elements
        class get_Elm_Cls {
            elm!: Element 
            DOM!: ns_Dom_Uni_Cls
            getSyntax!: toGet
            static createdBy: string
            constructor(syntax:string) {
                let elm = document.querySelector(syntax)
                if(elm) {
                    this.elm = elm
                    this.DOM = GetDom(this.elm)
                }
                switch (syntax[0]){
                    case ".":
                        this.getSyntax = "class"
                        break
                    case "#":
                        this.getSyntax = "id"
                        break
                    default:
                        if(syntax.includes("[name=")) this.getSyntax = "name"
                        else if(syntax.includes("[type=")) this.getSyntax = "type"
                        else this.getSyntax = "other"
                }
                NoRewriteObject(this, "*")
            }
        }
        class get_List_Elm_Cls {
            elms!: NodeList 
            allDOM!: ns_Dom_List_Cls
            aDOM!: ns_Dom_Uni_Cls[]
            getSyntax!: toGet
            static createdBy: string
            constructor(syntax:string) {
                let elm = document.querySelectorAll(syntax)
                if(elm) {
                    this.elms = elm
                    this.aDOM = new Array()
                    this.allDOM = GetListDom(this.elms)
                    for(let elmL of this.elms){
                        this.aDOM.push(GetDom(elmL))
                    }
                    NoRewriteObject(this, "*")
                }
                switch (syntax[0]){
                    case ".":
                        this.getSyntax = "class"
                        break
                    default:
                        if(syntax.includes("[type=")) this.getSyntax = "type"
                        else this.getSyntax = "other"
                }
            }
        }
        class creat_Element_Cls{
            elm!: Element
            #elm!: any
            DOM!: ns_Dom_Uni_Cls
            append!: (feather: Element)=>void
            constructor(tag:string, preDefinition?: preDefinition){
                if(tag[0] == "<" && tag[tag.length -1] == ">"){
                    tag = tag.replace("<", "")
                    tag = tag.replace(/ /g, "")
                    tag = tag.replace(">", "")
                    this.elm = document.createElement(tag)
                    this.#elm = this.elm
                    this.DOM = GetDom(this.elm)
                    if(preDefinition){
                        let preKey = Object.keys(preDefinition)
                        let preValue = Object.values(preDefinition)
                        for (const keyPre in preKey) {
                            let attr = preKey[keyPre];
                            switch (attr) {
                                case "id":
                                    this.DOM.SetID(preValue[keyPre])
                                    break;
                                case "class":
                                    this.DOM.SetClass(preValue[keyPre])
                                    break;
                                case "style":
                                    this.DOM.NOS(preValue[keyPre])
                                    break;
                                case "text":
                                    this.DOM.SetTXT(preValue[keyPre])
                                    break;
                                default:
                                    this.#elm[attr] = preValue[keyPre]
                                    break;
                            }
                            
                        }
                    }
                    this.append = (feather?: Element)=>{
                        if(!feather){
                            feather = document.body
                            Debug({type: 2}, `Como não passou o elemento pai, o elemento solicitado, foi adicionada ao body.`)
                        }
                        feather.appendChild(this.#elm)
                    }
                }else{
                    Debug({type: 1}, "Erro: use as chaves < e > para indicar que é uma tag.")
                }
            }
        }
// Function
    // Get The DOM
        /**
         * Obtenha o DOM para manipular um elemento HTML
         * @param {Element|Node} element - Passe o elemento a ser manipulado 
         * @returns {ns_Dom_Uni_Cls}
         */
        function GetDom(element:Element|Node): ns_Dom_Uni_Cls {
            let elm = new ns_Dom_Uni_Cls(element)
            return elm
        }
        /**
         * Obtenha o DOM para uma NodeList
         * @param {NodeList} element - Passe a NodeList a ser manipulada 
         * @returns {ns_Dom_List_Cls}
         */
        function GetListDom(element:NodeList): ns_Dom_List_Cls {
            let elm = new ns_Dom_List_Cls(element)
            return elm
        }
    // Get The HTML Elements
        /**
         * Obtenha elementos HTML com o NhacScript para melhor manipulação
         * @param {string} syntax - use a mesma sintaxe que usaria no querySelector 
         * @returns {get_Elm_Cls}
         */
        function GetElm(syntax:string): get_Elm_Cls {
            let element = new get_Elm_Cls(syntax)
            return element
        }
        /**
         * Obtenha um array com vários elementos HTML com o NhacScript para melhor manipulação
         * @param {string} syntax - use a mesma sintaxe que usaria no querySelectorAll
         * @returns {get_List_Elm_Cls}
         */
        function GetListElm(syntax:string): get_List_Elm_Cls {
            let element = new get_List_Elm_Cls(syntax)
            return element
        }
    // Object Manipulator
        // Protect
            /**
             * Proíba a rescrição nas chaves dos seus objetos 
             * @param {object} obj - Objeto a ser modificado
             * @param {string|string[]} keys - Chave ou chaves a serem modificadas
             * use * como argumento de keys para modificar todas
             */
            function NoRewriteObject(obj:object, keys: string|string[]){
                function protectFuncWrite(arrayKey?:string[]) {
                    if(arrayKey == void 0) arrayKey = Object.keys(obj)
                    for(let privKey of arrayKey ){
                        Object.defineProperties(obj, {
                            [privKey]:{
                                writable: false
                            }
                        })
                    }
                }
                if(keys == "*"){
                    protectFuncWrite()
                }else if(Array.isArray(keys)){
                    protectFuncWrite(keys)
                }else if(typeof keys == "string"){
                    protectFuncWrite([keys])
                }
            }
             /**
             * Proíba a enumeração nas chaves dos seus objetos 
             * @param {object} obj - Objeto a ser modificado
             * @param {string|string[]} keys - Chave ou chaves a serem modificadas
             * use * como argumento de keys para modificar todas
             */
            function NoEnumerableObject(obj:object, keys: string|string[]){
                function protectFuncEnu(arrayKey?:string[]) {
                    if(arrayKey == void 0) arrayKey = Object.keys(obj)
                    for(let privKey of arrayKey ){
                        Object.defineProperties(obj, {
                            [privKey]:{
                                enumerable: false
                            }
                        })
                    }
                }
                if(keys == "*"){
                    protectFuncEnu()
                }else if(Array.isArray(keys)){
                    protectFuncEnu(keys)
                }else if(typeof keys == "string"){
                    protectFuncEnu([keys])
                }
            }
             /**
             * Proíba qualquer alteração nas chaves dos seus objetos 
             * @param {object} obj - Objeto a ser modificado
             * @param {string|string[]} keys - Chave ou chaves a serem modificadas
             * use * como argumento de keys para modificar todas
             */
            function PrivateAllObject(obj:object, keys: string|string[]) {
                function protectFunc(arrayKey?:string[]) {
                    if(arrayKey == void 0) arrayKey = Object.keys(obj)
                    for(let privKey of arrayKey ){
                        Object.defineProperties(obj, {
                            [privKey]:{
                                enumerable: false,
                                writable: false 
                            }
                        })
                    }
                }
                if(keys == "*"){
                    protectFunc()
                }else if(Array.isArray(keys)){
                    protectFunc(keys)
                }else if(typeof keys == "string"){
                    protectFunc([keys])
                }
            }
        // DeProtect
            /**
             * Permita a rescrição nas chaves dos seus objetos 
             * @param {object} obj - Objeto a ser modificado
             * @param {string|string[]} keys - Chave ou chaves a serem modificadas
             * use * como argumento de keys para modificar todas
             */
            function RewriteObject(obj:object, keys: string|string[]){
                function protectFuncWrite(arrayKey?:string[]) {
                    if(arrayKey == void 0) arrayKey = Object.keys(obj)
                    for(let privKey of arrayKey ){
                        Object.defineProperties(obj, {
                            [privKey]:{
                                writable: true
                            }
                        })
                    }
                }
                if(keys == "*"){
                    protectFuncWrite()
                }else if(Array.isArray(keys)){
                    protectFuncWrite(keys)
                }else if(typeof keys == "string"){
                    protectFuncWrite([keys])
                }
            }
            /**
             * Permita a enumeração nas chaves dos seus objetos 
             * @param {object} obj - Objeto a ser modificado
             * @param {string|string[]} keys - Chave ou chaves a serem modificadas
             * use * como argumento de keys para modificar todas
             */
            function EnumerableObject(obj:object, keys: string|string[]){
                function protectFuncEnu(arrayKey?:string[]) {
                    if(arrayKey == void 0) arrayKey = Object.keys(obj)
                    for(let privKey of arrayKey ){
                        Object.defineProperties(obj, {
                            [privKey]:{
                                enumerable: true
                            }
                        })
                    }
                }
                if(keys == "*"){
                    protectFuncEnu()
                }else if(Array.isArray(keys)){
                    protectFuncEnu(keys)
                }else if(typeof keys == "string"){
                    protectFuncEnu([keys])
                }
            }
            /**
             * Permita qualquer alteração nas chaves dos seus objetos 
             * @param {object} obj - Objeto a ser modificado
             * @param {string|string[]} keys - Chave ou chaves a serem modificadas
             * use * como argumento de keys para modificar todas
             */
            function PublicAllObject(obj:object, keys: string|string[]) {
                function protectFunc(arrayKey?:string[]) {
                    if(arrayKey == void 0) arrayKey = Object.keys(obj)
                    for(let privKey of arrayKey ){
                        Object.defineProperties(obj, {
                            [privKey]:{
                                enumerable: true,
                                writable: true
                            }
                        })
                    }
                }
                if(keys == "*"){
                    protectFunc()
                }else if(Array.isArray(keys)){
                    protectFunc(keys)
                }else if(typeof keys == "string"){
                    protectFunc([keys])
                }
            }
    // Verify Types
        /**
         * Verifica se o elemento é um número ou não
         * @param {string} target - Valor a ser analisado  
         * @returns {true|false}
         */
        function IsNum(target:any): true|false {
            return (target < 0)||(target >= 0)? true: false;
        }
        /**
         * Verifica se o elemento é um string ou não
         * @param {string} target - Valor a ser analisado  
         * @returns {true|false}
         */
        function IsStr(target:any): boolean {
            return (typeof target == "string")? true: false
        }
        /**
         * Verifica se o elemento é um Objeto(não array) ou não
         * @param {string} target - Valor a ser analisado  
         * @returns {true|false}
         */
        function IsObj(target:any): boolean {
            return (typeof target === "object" && Array.isArray(target) === false)? true: false
        }
        /**
         * Verifica se o elemento é um Array ou não
         * @param {string} target - Valor a ser analisado  
         * @returns {true|false}
         */
        function IsArray(target:any): boolean {
            return (typeof target === "object" && Array.isArray(target) === true)? true: false
        }
        /**
         * Verifica o tipo da variável.
         * @param {string} target - Valor a ser analisado  
         * @returns {{special?:string, literal: string}}
         */
        function TypeVar(target:any){
            let typeLiterals = typeof target
            let objReturn = new Object()
            if(typeLiterals == "function"){
                if(target.createdBy == "NhacScript"){
                    objReturn = {
                        special: "Function_NS",
                        literal: typeLiterals
                    }
                }else if(target.createdBy == "NhacScript CLS"){
                    objReturn =  {
                        special: "ns_cls_Class_", 
                        literal: typeLiterals
                    }
                }else{
                    objReturn = {
                        literal: typeLiterals
                    }
                }
            }else if(typeLiterals == "object"){
                if(target.createdBy == "NhacScript"){
                    objReturn = {
                        special: "Object Shortener",
                        literal: typeLiterals
                    }
                }
                else if(Array.isArray(target) == true){
                    objReturn = {
                        special: "Array",
                        literal: typeLiterals
                    }
                }else{
                    objReturn = {
                        special: "Object Js",
                        literal: typeLiterals
                    }
                }
            }else{
                objReturn = {
                    literal: typeLiterals
                }
            }
            return objReturn
        }
    // Math Function
        /**
         * Gere um número aleatório
         * @param {number} min bote o valor mínimo a ser retornado
         * @param {number} max bote o valor máximo a ser retornado
         * @returns {number}
         */
        function GenRandom(min:number, max:number):number{
            let randomDefault = Math.random()
            let randomNum =   RoundNum(randomDefault * (max - min) + min)
            return randomNum
        }
        /**
         * Arredonde o número de forma lógica
         * @param {number} num 
         * @returns {number}
         */
        function RoundNum(num:number): number {
            return Math.round(num)
        }
        /**
         * Arredonde o número para baixo
         * EX: 1.6 
         * logica: 2.0 ou 2
         * retorno 1.0 ou 1
         * @param {number} num 
         * @returns {number}
         */
        function RoundNumDown(num:number): number {
            return Math.floor(num)
        }
         /**
         * Arredonde o número para cima
         * EX: 1.2
         * logica: 1.0 ou 1
         * retorno 2.0 ou 2
         * @param {number} num 
         * @returns {number}
         */
        function RoundNumUp(num:number): number {
            return Math.ceil(num)
        }
    // String and Array Working
        /**
         * Gere um texto aleatório, defina o limite máximo dele.
         * @param {number} maxLength - Quantidade de caracteres máximo
         * @param {string} mask - Mascare automaticamente com o @function MaskText 
         * @returns {string}
         */
        function GenRandomText(maxLength:number, mask?:{template: string}): string {
            let allChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
            let ranText = ""
            for(let l = 0; l < maxLength; l++) {
                let ranNum = GenRandom(0, allChar.length)
                ranText += allChar[ranNum]
            }
            if(mask){
                ranText = MaskText(ranText, mask.template)
            }
            return ranText
        }     
        /**
         * Mascare sua string, defina o template exemplo:
         * "###.###.###-##"
         * E seu texto, exemplo:
         * "00000000000"
         * e virará: 
         * "000.000.000-00"
         * @param {string} text - Texto a ser mascarado
         * @param {string} template - Templete - use as # para definir o valor para ser substituído
         * @returns {string}
         */
        function MaskText(text:string, template: string): string {
            let indexText = text.length
            let indexMask = FindAllIndex("#",template).length
            let returnText = template
            if(indexMask == indexText){
                for (const textImplants of text) {
                    returnText = returnText.replace("#", textImplants)
                }
            }else{
                Debug({type: 1, forceStop: true}, "O template não coincide com o tamanho do texto a ser implementado!")
            }
            return returnText
        }
        /**
         * Uma das coisas mais chatas, é verificar os arrays, e essa função retorna todos os indices de um determinado valor no array ou string.
         * Desde que, haja valores repetidos.
         * @param {any} to - Valor a ser pesquisado
         * @param {string|any} ofItem - Vetor mãe
         * @returns {number[]}
         */
        function FindAllIndex(to:any,ofItem:string|any[]): number[] {
            let found = new Array()
            let counter = 0
            for (let item of ofItem) {
                let is = to == item
                if(is){
                    found.push(counter)
                }
                counter++
            }
            return found
        }
    // MultiPlatform
        /**
         * Defina funções para dispositivos nomeados como Desktops a função que ocorrerá somente nos aparelho com a tela maior que 800px
         * @param {Function} callback
         */
        function SetDesktop(callback:Function) {
            if(screen.width <= 800){
                callback()
            }
        }
        /**
         * Defina funções para dispositivos nomeados como Celulares Mobile a função que ocorrerá somente nos aparelho com a tela menor que 801px
         * @param {Function} callback
         */
        function SetMobile(callback:Function) {
            if(screen.width >= 801){
                callback()
            }
        }
        /**
         * Defina funções para dispositivos de tamanho diferente
         * @param {Function} mobile Defina função que ocorrerá somente nos aparelho com a tela menos que 801px
         * @param {Function} desktop Defina função que ocorrerá somente nos aparelho com a tela mais que 800px
         */
        function SetResponsive(mobile:Function, desktop: Function) {
            if(screen.width <= 800){
                mobile()
            }else if(screen.width >= 801){
                desktop()
            }
        }
    // LocalStorage Manipulation
        /**
         * Adicione valores ao local storage
         * @param {string} localName - Nome do localStorage
         * @param {any} value - Valor a ser adicionado
         * @param {boolean} append - Esse valor vai ser adicionado ou sobreporá o anterior?
         * Se true, os valores serão concatenados, se false, o valor anterior será removido e o novo adicionado
         */
        function SetLocal(localName:string, value:any, append:boolean=false) {
            if(typeof value == "object") ToJSON(value)
            if(append == false){
                localStorage[localName] = value
            }else{
                localStorage[localName] += value
            }
        }
        /**
         * Obtenha os valores do localStorage;
         * Obtenha pre-convertido ou no tipo default(string)
         * @param {string} localName - Nome do localStorage
         * @param {{convert: boolean, targetType: conversorTo}} setting - Em convert defina se vai converter ou não, em targetType, defina o tipo da conversão de retorno.
         * @returns {any}
         */
        function GetLocal(localName:string, setting?:{convert: boolean, targetType: conversorTo}): any {
            let localValue = localStorage[localName]
            if(localValue == "" || localValue == undefined){
                Debug({type: 1}, `O localStorage: ${localName} não foi encontrado ou o valor armazenado é invalido`)
                return ""
            }else{
                if(setting && setting.convert == true){
                    try{
                        localValue = Conversor({to: setting.targetType, value: localValue})
                        return localValue
                    }catch(err){
                        Debug({type: 1}, `Impossível converter o valor de ${localName}, para ${setting.targetType}, então lhe foi retornado o tipo default do localStorage(string)`)
                    }
                }
                return localValue
            }

        }
// Constant declaration
    /**
     * Objeto padrão do NhacScript para conversão de tipo
    */
    const convertor:conversor = {
        /**
         * Conversor geral, converte para qualquer tipo
         * @param {{to:("str"|"obj"|"num"|"JSON"|"obj"), value:any}} set - no set ponha: obj | str | num | int | float | bool
         * obj - Para objeto ; str - para string
         * num - Para número ; int - para inteiro
         * float - Para num flutuante ; bool - para booleano 
         */
        Conversor: (set:geralConvertor)=>{
            switch (set.to) {
                case "str":
                    return convertor.ToStr(set.value)
                case "obj":
                    return convertor.ToObj(set.value)
                case "num":
                    return convertor.ToNum(set.value)
                case "JSON":
                    return convertor.ToJSON(set.value)
                default:
                    return "Tipo inválido"
            }
        },
        ToStr: (value:(number|boolean)):string=>{
            if(typeof value == "number"){
                return value.toString()
            }else if(typeof value == "boolean"){
                switch (value) {
                    case true:
                        return "true"
                    case false:
                        return "false"
                    default:
                        break;
                }
            }
            return "Error - Invalid type"
        },
        ToNum: (value: string|number):number=>{
            if(value <= 0 || value > 0){
                return Number(value)
            }else{
                return 0.000001
            }
        },
        ToInt: (value: string)=>{
            let confNum = convertor.ToNum(value)
            let num = confNum.toString()
            return typeof num == "string"? parseInt(num): 0
        },
        ToFloat: (value: string)=>{
            let confNum = convertor.ToNum(value)
            let num = confNum.toString()
            return typeof num == "string"? parseFloat(num): 0
        },
        ToJSON: (obj: object)=>{
            if(typeof obj == "object"){
                return JSON.stringify(obj)
            }else{
                return "Erro - O argumento não é um objeto!"
            }
        },
        ToObj: (obj: string)=>{
            try {
                return JSON.parse(obj)
            } catch (error) {
                return {
                    error: true,
                    errorMSG: "O armento não é um JSON válido",
                    TypeError: error
                }
            }             
        },
        createdBy: "NhacScript"
    }
    /**
     * Objeto padrão do NhacScript para entrada de texto
    */
    const inputObj:inputNhac = {
        /**
         * Pergunte algo ao usuário e tenha um retorno de um texto
         * @param {string} question - Pergunta a ser feita 
         * @returns {string|null} 
        */
        Ask:(question:string): string|null=>{
            return prompt(question)
        },
        /**
         * Pergunte algo ao usuário e tenha um retorno de um número
         * @param {string} question - Pergunta a ser feita 
         * @returns {number} - se retornar -10 de forma não esperada, é porque o usuário não digitou um número
         */
        AskNum:(question:string): number=>{
            let userResponse:(string)|(number)|(null) = prompt(question)
            let isANumber = IsNum(userResponse)
            switch (isANumber) {
                case true:
                    userResponse = (userResponse != null)? ToNum(userResponse): -10;
                    break;
                default:
                    userResponse = -10
                    console.error("Isso não é um número!");
                    break;
            }
            return userResponse
        },
        AskBool:(question: string): boolean =>{
            return confirm(question)
        },
        createdBy: "NhacScript"
    }
    /**
     * Objeto padrão do NhacScript para saída de texto
    */
    const outObj:outputNhac = {
        /**
         * Por baixo dos panos usa o objeto console original, porém tudo é convertido em texto; 
         * Você pode configurar a saída, definindo os tipos (0: log, 1: error, 2: warn, 3: table) 
         * @param {{type:number, forceStop?: boolean}} settings - Configure a saída
         * @param message - bote suas mensagens
         * @returns 
         */
        Debug: (settings?:{type:number, forceStop?: boolean},...message:any[]):void=>{
            var msg:any = ""
            function verifyObj(val:(object|string)){
                if(typeof val == "object") return val;
                else if(typeof val == "string") try{
                    return JSON.parse(val)
                }catch(_a){
                    return new Error("Não é possível converter o valor para objeto!")
                }
            }
            function appendMsg() {
                if (message.length == 1) {
                    msg = message[0]
                }else if(message.length > 1){
                    for(let sendMes of message){
                        if(typeof sendMes == "object"){
                            msg += JSON.stringify(sendMes)
                        }else{
                            msg += sendMes
                        }
                        msg += " "
                    }
                }
            }
            if(typeof settings != "object"){
                message.push(settings)
                settings = {type: 0}
            }
            else if(typeof settings == "object"){
                appendMsg()
                switch (settings.type) {
                    case 0:
                        console.log(msg);
                        break;
                    case 1:
                        if(settings.type == 1 && settings.forceStop == true) throw new Error(msg)
                        console.error(msg);
                        break;
                    case 2:
                        console.warn(msg);
                        break;
                    case 3:
                        let objPrint = verifyObj(msg)
                        console.table(objPrint);
                        break;
                    default:
                        console.error("Este tipo não existe!")
                        break;
                }
            }
        },
        /**
        * Por baixo dos panos usa o objeto console.log original, porém tudo é convertido em texto; 
        * @param message - bote suas mensagens
        * @returns 
        */
        Log:(...message:any[])=>{
            var msg:any = ""
            if (message.length == 1) {
                msg = message[0]
            }else if(message.length > 1){
                for(let i:number = 0; i < message.length; i++){
                    if(i < (message.length - 1)){
                        if(typeof message[i] == "object"){
                            msg += JSON.stringify(message[i])
                        }else{
                            msg += message[i]
                        }
                        msg += " "
                    }else{
                        if(typeof message[i] == "object"){
                            msg += JSON.stringify(message[i])
                        }else{
                            msg += message[i]
                        }
                    }
                }
            }
            console.log(msg);
        },
        /**
         * Mostrará uma tabela decorada para objetos e array
         * @param {object} obj Objeto a ser mostrado
         * @returns object
         */
        Table: (obj: object)=>{
            if(typeof obj == "object"){
                if(Array.isArray(obj) == true){
                    console.log("Depurando Array:");
                    console.table(obj)
                }else{
                    console.log("Depurando Objeto:");
                    console.table(obj)
                }
            }else{
                throw new Error("O Argumento não é um objeto!")
            }
        },
        /**
        * Exiba uma mensagem de erro  
        * @param message - bote suas mensagens
        * @returns 
        */
        Err:(message:string)=>{
            var msg:string = message
            if (message.length == 1) {
                msg = message[0]
            }else if(message.length > 1){
                for(let i:number = 0; i < message.length; i++){
                    if(i < (message.length - 1)){
                        if(typeof message[i] == "object"){
                            msg += JSON.stringify(message[i])
                        }else{
                            msg += message[i]
                        }
                        msg += " "
                    }else{
                        if(typeof message[i] == "object"){
                            msg += JSON.stringify(message[i])
                        }else{
                            msg += message[i]
                        }
                    }
                }
            }
            console.error(msg);
        },
        /**
        * Exiba uma mensagem de aviso  
        * @param message - bote suas mensagens
        * @returns 
        */
        Warn:(message:string)=>{
            var msg:string = message
            if (message.length == 1) {
                msg = message[0]
            }else if(message.length > 1){
                for(let i:number = 0; i < message.length; i++){
                    if(i < (message.length - 1)){
                        if(typeof message[i] == "object"){
                            msg += JSON.stringify(message[i])
                        }else{
                            msg += message[i]
                        }
                        msg += " "
                    }else{
                        if(typeof message[i] == "object"){
                            msg += JSON.stringify(message[i])
                        }else{
                            msg += message[i]
                        }
                    }
                }
            }
            console.warn(msg);
        },
        createdBy: "NhacScript"
    }
    /**
     * Crie elementos HTML em poucos texto
     */
    const createElm:createElement = {
        /**
         * Crie qualquer tag
         * @param {string} tag use os sinais < text > para definir a tag.
         * @param {{value?: string, style?: nssProps,text?: string, name?: string, id?: string,class?: string}} preDefinition - Predefinição
         * @returns 
         */
        CreateElm: (tag: string, preDefinition: preDefinition)=>{
            let create = new creat_Element_Cls(tag, preDefinition)
            return create
        },
        /**
         * Crie um botão
         * @param {{value?: string, style?: nssProps,text?: string, name?: string, id?: string,class?: string}} preDefinition - Predefinição
         * @returns 
         */
        Btn: (preDefinition: preDefinition)=>{
            if(!preDefinition || !preDefinition.style){
                if(!preDefinition) preDefinition = new Object()
                if(!preDefinition.style){
                    preDefinition.style = {
                        backgroundColor: "#999999",
                        color: "#00ddff"
                    }
                }
            }
            let create = createElm.CreateElm("<button>", preDefinition)
            return create
        },
        /**
         * Crie um input
         * @param {{value?: string, style?: nssProps,text?: string, name?: string, id?: string,class?: string}} preDefinition - Predefinição
         * @returns 
         */
        Input: (preDefinition: preDefinition)=>{
            if(!preDefinition || !preDefinition.style){
                if(!preDefinition) preDefinition = new Object()
                if(!preDefinition.style){
                    preDefinition.style = {
                        backgroundColor: "#999999",
                        color: "#000",
                        border: "none",
                        borderRadius: "3rem",
                    }
                }
            }
            let create = createElm.CreateElm("<input>", preDefinition)
            return create
        },
        /**
         * Crie um output
         * @param {{value?: string, style?: nssProps,text?: string, name?: string, id?: string,class?: string}} preDefinition - Predefinição
         * @returns 
         */
        Output: (preDefinition: preDefinition)=>{
            if(!preDefinition || !preDefinition.style){
                if(!preDefinition) preDefinition = new Object()
                if(!preDefinition.style){
                    preDefinition.style = {
                        backgroundColor: "#999999",
                        color: "#000",
                        border: "none",
                        borderRadius: "3rem",
                    }
                }
            }
            let create = createElm.CreateElm("<output>", preDefinition)
            return create
        },
        /**
         * Crie uma div
         * @param {{value?: string, style?: nssProps,text?: string, name?: string, id?: string,class?: string}} preDefinition - Predefinição
         * @returns 
         */
        Div: (preDefinition: preDefinition)=>{
            let create = createElm.CreateElm("<div>", preDefinition)
            return create
        },
        /**
         * Crie uma span
         * @param {{value?: string, style?: nssProps,text?: string, name?: string, id?: string,class?: string}} preDefinition - Predefinição
         * @returns 
         */
        Span: (preDefinition: preDefinition)=>{
            let create = createElm.CreateElm("<span>", preDefinition)
            return create
        },
        /**
         * Crie um parágrafo
         * @param {{value?: string, style?: nssProps,text?: string, name?: string, id?: string,class?: string}} preDefinition - Predefinição
         * @returns 
         */
        P: (preDefinition: preDefinition)=>{
            let create = createElm.CreateElm("<p>", preDefinition)
            return create
        },
        /**
         * Crie um formulário
         * @param {{value?: string, style?: nssProps,text?: string, name?: string, id?: string,class?: string}} preDefinition - Predefinição
         * @returns 
         */
        Form: (preDefinition: preDefinition)=>{
            let create = createElm.CreateElm("<form>", preDefinition)
            return create
        },
        Label: (preDefinition: preDefinition)=>{
            let create = createElm.CreateElm("<label>", preDefinition)
            return create
        },
        Textarea: (preDefinition: preDefinition)=>{
            let create = createElm.CreateElm("<textarea>", preDefinition)
            return create
        },
        Script: (preDefinition: preDefinition)=>{
            if(!preDefinition){
                Debug({type: 2}, "Erro não grave, o src não foi definido.")
            }
            let create = createElm.CreateElm("<script>", preDefinition)
            return create
        },
        createdBy: "NhacScript"
    }
    // Extract of Objects
        const {Conversor, ToNum, ToStr, ToObj, ToJSON} = convertor
        const {Ask, AskNum, AskBool} = inputObj
        const {Log, Debug, Err, Warn, Table} = outObj
        const {Input, Output, Btn, Form, Div} = createElm
// Execution
    // Add Special attr to Identifier NhacScript
        // Function
            GetDom.createdBy = "NhacScript"
            GetListDom.createdBy = "NhacScript"
            NoRewriteObject.createdBy = "NhacScript"
            NoEnumerableObject.createdBy = "NhacScript"
            PrivateAllObject.createdBy = "NhacScript"
            RewriteObject.createdBy = "NhacScript"
            EnumerableObject.createdBy = "NhacScript"
            PublicAllObject.createdBy = "NhacScript"
            IsNum.createdBy = "NhacScript"
            IsStr.createdBy = "NhacScript"
            IsObj.createdBy = "NhacScript"
            TypeVar.createdBy = "NhacScript"
            GenRandom.createdBy = "NhacScript"
            SetLocal.createdBy = "NhacScript"
            GetLocal.createdBy = "NhacScript"
        // Class
            ns_Dom_Uni_Cls.createdBy = "NhacScript CLS"
            ns_Dom_List_Cls.createdBy = "NhacScript CLS"
            get_Elm_Cls.createdBy = "NhacScript CLS"
            get_List_Elm_Cls.createdBy = "NhacScript CLS"