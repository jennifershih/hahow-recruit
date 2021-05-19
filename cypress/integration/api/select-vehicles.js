// 請幫我挑出電影裡所有的車輛，馬力超過１０００的。

describe('select vehicles', () => {
    it('select vehilces over 1000', () => {
        requestVehicles('http://swapi.dev/api/vehicles/',[]);
      }); 
    });

function requestVehicles(url,results) {
    cy.request('GET', url).then(
        (response) => {
            const vehicles = response.body.results;
            const fastVehicles = vehicles.filter(vehicle => vehicle.max_atmosphering_speed > 1000);
            fastVehicles.forEach(vehicle => results.push(vehicle));
            if (response.body.next!=null){
                requestVehicles(response.body.next,results)
            }else{
                const vehicleNames = results.map((vehicle) =>{
                    return vehicle.name
               })
                cy.log(results);
                cy.log(JSON.stringify(vehicleNames));
            }
        }
    )
}