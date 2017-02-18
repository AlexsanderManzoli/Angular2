"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var contatos = [
            { id: 1, nome: 'alexsander manzoli', email: 'alexsander@atualsistemas.net', telefone: '(00) 00000-0000' },
            { id: 2, nome: 'jessica ferreira', email: 'alexsander@atualsistemas.net', telefone: '(00) 00000-0000' },
            { id: 3, nome: 'rodrigo grigoleto', email: 'alexsander@atualsistemas.net', telefone: '(00) 00000-0000' },
            { id: 4, nome: 'tefim manzoli', email: 'alexsander@atualsistemas.net', telefone: '(00) 00000-0000' },
            { id: 5, nome: 'vicente manzoli', email: 'alexsander@atualsistemas.net', telefone: '(00) 00000-0000' },
            { id: 6, nome: 'leo manzoli', email: 'alexsander@atualsistemas.net', telefone: '(00) 00000-0000' },
            { id: 7, nome: 'emanuel manzoli', email: 'alexsander@atualsistemas.net', telefone: '(00) 00000-0000' },
        ];
        return { contatos: contatos };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map