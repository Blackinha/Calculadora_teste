const { default: expect } = require("expect");
const Calculadora = require("./Calculadora");

describle("Calculadora", () => {
    it("Criar nova Calculadora", () => {
        const calculadora = new Calculadora();
        expect(calculadora).toBeDefined();
    })

    it("Operação soma", () => {
        const calculadora = new Calculadora();
        expect(calculadora.soma).toBeDefined();
        expect(clculadora.soma.length).toBe(1);
        expect(() => calculadora.soma("Texto")).toThrow(TypeError);
        expect(() => calculadora.soma(true)).toThrow("O argumento deve ser um numero válido")
        expect(() => calculadora.soma("5")).not.toThrow(TypeError);
        expect(typeof calculadora.resultado).toBe('number');
        expect(calculadora.resultado).toBe(5);
        
    })
})