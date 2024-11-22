Feature: Buscar en un sitio web

    @example
    Scenario: Buscar en la pagina de Cucumber
        Given ingreso a la url "https://cucumber.io/"
        When valido que estoy en la página principal
        And busco "Docs"
        Then valido que estoy en Docs
        And busco seccion "Reports"