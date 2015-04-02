angular.module('AdminManagementApp.controllers', []).

  /* Drivers controller */
  controller('inventorylistController', function($scope, ergastAPIservice) {
    $scope.nameFilter = null;
    $scope.inventoryList = [];
    $scope.searchFilter = function (driver) {
        var re = new RegExp($scope.nameFilter, 'i');
        return !$scope.nameFilter || re.test(driver.Driver.givenName) || re.test(driver.Driver.familyName);
    };

        $scope.options = {
            pantry: true,
            office: false,
            all: false
        };

        $scope.inventoryList = [
            {
                InventoryItem: {
                    Id:'1',
                    Name: 'Potato Chips'

                },
                qty: 100,
                code: "A",
                supplier: "Costco",
                dateofOrder: "Jan 22 2015",
                Constructors: [
                    {brand: "Lays"}
                ]
            },
            {
                InventoryItem: {
                    Name: 'Fruit Loops'
                },
                qty: 150,
                code: "B",
                dateofOrder: "Jan 10 2015",
                supplier: "Costco",
                Constructors: [
                    {brand: "Kelloges"}
                ]
            },

            {
                InventoryItem: {
                    Name: 'Chocolate Milk'
                },
                qty: 5,
                code: "C",
                dateofOrder: "Jan 15 2015",
                supplier: "Safeway",
                Constructors: [
                    {brand: "Clover"}
                ]
            },
            {
                InventoryItem: {
                    Name: 'Greek Yogurt'
                },
                qty: 70,
                code: "D",
                dateofOrder: "Dec 22 2014",
                supplier: "Safeway",
                Constructors: [
                    {brand: "Straus"}
                ]
            },

            {
                InventoryItem: {
                    Name: 'Snack Bar'
                },
                qty: 180,
                code: "E",
                supplier: "Costco",
                dateofOrder: "Jan 29 2015",
                Constructors: [
                    {brand: "Chocolate"}
                ]
            },
            {
                InventoryItem: {
                    Name: 'Organic Cheese'
                },
                qty: 10,
                code: "F",
                supplier: "Safeway",
                dateofOrder: "Feb 22 2015",
                Constructors: [
                    {brand: "Pacific"}
                ]
            },
            {
                InventoryItem: {
                    Name: 'Notepads & Notebooks'
                },
                qty: 10,
                code: "G",
                supplier: "Office Depot",
                dateofOrder: "Jab 2 2015",
                Constructors: [
                    {brand: "OneNote"}
                ]
            },
            {
                InventoryItem: {
                    Name: 'Sticky Notes'
                },
                qty: 10,
                code: "H",
                supplier: "Staples",
                dateofOrder: "Feb 13 2015",
                Constructors: [
                    {brand: "Doodle Pro"}
                ]
            },
            {
                InventoryItem: {
                    Name: 'Pens & Pencils'
                },
                qty: 10,
                code: "I",
                supplier: "Office Depot",
                dateofOrder: "Aug 22 2014",
                Constructors: [
                    {brand: "Pilot"}
                ]
            },
            {
                InventoryItem: {
                    Name: 'Folders  & Binders'

                },
                qty: 10,
                code: "J",
                supplier: "Staples",
                dateofOrder: "Jun 22 2014",
                Constructors: [
                    {brand: "Thrifty"}
                ]
            }

        ];

    /*ergastAPIservice.getDrivers().success(function (response) {
        //Digging into the response to get the relevant data
        $scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    });*/
  }).

  /* Driver controller */
  controller('inventoryitemController', function($scope, $routeParams,$location, ergastAPIservice) {
    $scope.id = $routeParams.id;
    $scope.races = [];
    $scope.inventoryItem = null;
console.log("in controller");
        console.log($routeParams.id);


        console.log("hello");

        $scope.inventoryItem =
            {
                InventoryItem: {
                    Id: "1",
                    Name: 'Potato Chips'
                },
                qty: 100,
                frequency: "3 times a month",
                dateofOrder: "Jan 22 2015",
                refill: "Feb 2 2015",
                supplier: "Costco",
                code: "A",
                Constructors: [
                    {brand: "Lays"}
                ]
            };

        $scope.left  = function() {return 100 - $scope.message.length;};
        $scope.clear = function() {$scope.message = "";};
        $scope.save  = function() {alert("Note Saved");};


    /*ergastAPIservice.getDriverDetails($scope.id).success(function (response) {
        $scope.driver = response.MRData.StandingsTable.StandingsLists[0].DriverStandings[0]; 
    });*/

   /* ergastAPIservice.getDriverRaces($scope.id).success(function (response) {
        $scope.races = response.MRData.RaceTable.Races; 
    }); */
  });


