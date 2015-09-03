app.controller("ClimaController",function($scope,clima
        ,$timeout){
          
  $scope.temp= clima.temp;
  $scope.description = clima.description;

  $scope.refresh=function(ciudad, pais){
    clima.loadWeather(ciudad, pais);
    $timeout(function(){
      alert(clima.temp +" "+clima.description);
    },5000);
  }






});
