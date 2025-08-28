setProperty("WaterAppHeader", "color", "#38618C");
setProperty("ParaText", "color", "#38618C");
setProperty("WaterAppHeader", "font-size", "36px");
setProperty("ParaText", "font-size", "30px");
setProperty("SpanishButton", "background-color", "#38618C");
setProperty("EnglishButton", "background-color", "#38618C");

onEvent ("SpanishButton", "click", function() {
  setText("WaterAppHeader", "Proyecto de Conservación de Agua");
  setText("ParaText", "Es importante que todos hagamos nuestra parte para usar menos agua. Haga clic en esta aplicación para obtener consejos sobre ideas de conservación.");
  setText("SpanishButton", "Español");
  setText("EnglishButton", "Inglés");
});
onEvent ("EnglishButton", "click", function() {
  setText("WaterAppHeader", "Water Conservation Project");
  setText("ParaText", "It's important that we all do our part to use less water. Click through this app for tips on conservation ideas.");
  setText("SpanishButton", "Spanish");
  setText("EnglishButton", "English");
});
