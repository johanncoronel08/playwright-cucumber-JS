Feature: Buscar en un sitio web

    @example
    Scenario: Buscar en la pagina de Cucumber
        Given ingreso a la url "https://cucumber.io/"
        When valido que estoy en la página principal
        And busco "Docs"
        Then Valido que estoy en Docs