var React = Charts.React;
var LineChart = Charts.LineChart;

var seriesNames = function(d){
    return d.name;
  };
var seriesValues = function(d){
    return d.values;
  };
var pointNames = function(d){
    return d.text;
  };
var pointValues = function(d){
    return d.value||0;
  };
var data = (function(num, size){
  var data = [], series;
  var i, l=size, j=0, k=num;
  for(; j<k; j++){
    series = {name: 'Series '+j, values: []};
    for(i=0; i<l; i++){
      series.values.push({
        value: Math.floor(Math.random() * 90)+10,
        text: "Series "+j+" - Value "+i
      });
    }
    data.push(series);
  }
  return data;
})(3, 10);