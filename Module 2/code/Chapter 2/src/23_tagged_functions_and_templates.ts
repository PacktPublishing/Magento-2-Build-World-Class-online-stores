namespace chapter02.tagged_functions_and_templates {
    
    var name = "Luke";
    var surname = "Skywalker";
    var fullname = `${name} ${fullname}`;
    
    function htmlEscape(literals : string[], ...placeholders : string[]) {
        let result = "";
    
        for (let i = 0; i < placeholders.length; i++) {
            result += literals[i];
            result += placeholders[i]
                .replace(/&/g, '&amp;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#39;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;');
        }
    
        result += literals[literals.length - 1];
        return result;
    }
    
    var say = "a bird in hand > two in the bush";
    var html = htmlEscape `<div> I would just like to say : ${say}</div>`;    
    
}