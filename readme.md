# NhacScript 2.0.2-1
    The beta version is a experiment's version.
    We're building and removing the functions.
## Release note
### Remove
    1 - Remove the function task()
    2 - Remove the function obj()
    3 - Remove the function list()
    4 - Remove the individual DOM class.
    5 - Remove the the function getVarInfo().
### Additions
    1 - Designer Settings Addition:
        a - setDesktop(settings)
        b - setMobile(settings)
        p.S. The "set" is a abbreviation of "settings", the functions is settings a designer's function.
        The setDesktop is settings of device whit width >= 800  
        The setMobile is settings of device whit width < 800   
        The params settings, your append a callback function, and the function run automatic. 
    2 - Addition new constructor:
        The new constructor working as the olds individual DOM class.
        const myHTNative = document.body 
        const newElm = new NS_DOM(myHTNative)
    3 - Addition new Method Get HTML Element:
        The new Method to Get, get a list whit more a HTML Element. And return a Array, view a Example:
        [
            [element, element1],
            ...//All atributes,
            getWhit = "class"
        ]
        If the params is ".className" the attributes "getWhit" is class.
        If the params is "<tagName>" the attributes "getWhit" is tag.
        Example to get:
            const myList = HTGetList(".tabs")
            const Table = HLGet("<table>")
### Changes
    1 - The functions used to be made as a variable: 
        const name Func =  (params) => {} 
        It is now done in its original form: 
        function nameFunc (params) {} 
        This will not affect its performance and functionality.
    2 - The return structure of HTGet.
        Instead of returning to see the element it will return:
        {
            element: htmlElement,
            ... // NS attributes
        }
        const myElm = HTGet ("#myElm") // Will return {element: HTMLElement, ...}
        myElm.element // Native JS element manipulation
        myElm.CSS () // Example for using the NS attributes
    3 - new param in log(), now the log params is (message, type, forceStop), in documentation i teach about message and type, o forceStop have are a bool value. If true, the program is stopped, else, the program as run. 
# NhacScript 2.0.2-2
## Changes
- 1 - Fix Bugs 
- 2 - Two New DOM Event
- - eKeyPress(event) and theKeyPress(keyCode, event, codeOrKey)
