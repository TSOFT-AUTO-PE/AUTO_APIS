$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ProductOrders.feature");
formatter.feature({
  "line": 1,
  "name": "Product Orders",
  "description": "",
  "id": "product-orders",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Servicio de generacion de token y product orders",
  "description": "",
  "id": "product-orders;servicio-de-generacion-de-token-y-product-orders",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@ProductOrders"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Se genera el token que es entrada de product orders",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Se llama el servicio de product orders",
  "keyword": "Then "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "product-orders;servicio-de-generacion-de-token-y-product-orders;",
  "rows": [
    {
      "cells": [
        "caso_prueba"
      ],
      "line": 8,
      "id": "product-orders;servicio-de-generacion-de-token-y-product-orders;;1"
    },
    {
      "cells": [
        "1"
      ],
      "line": 9,
      "id": "product-orders;servicio-de-generacion-de-token-y-product-orders;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10556780500,
  "status": "passed"
});
formatter.before({
  "duration": 78717900,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Servicio de generacion de token y product orders",
  "description": "",
  "id": "product-orders;servicio-de-generacion-de-token-y-product-orders;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@ProductOrders"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Se genera el token que es entrada de product orders",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Se llama el servicio de product orders",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps_ProductOrders.seGeneraElTokenQueEsEntradaDeProductOrders()"
});
formatter.result({
  "duration": 2136396801,
  "status": "passed"
});
formatter.match({
  "location": "Steps_ProductOrders.seLlamaElServicioDeProductOrders()"
});
formatter.result({
  "duration": 1531418600,
  "status": "passed"
});
formatter.after({
  "duration": 986704899,
  "status": "passed"
});
});