// API 第三題：挑出電影裡所有的車輛，馬力（最高大氣層速度）超過 1000 的。
describe('fast vehicles', () => {
  it('finds vehicles faster than 1000 across every page', () => {
    cy.swapiAll('vehicles').then((vehicles) => {
      // Some vehicles report "unknown"; Number() turns those into NaN, which fails the check.
      const fast = vehicles.filter((v) => Number(v.max_atmosphering_speed) > 1000);

      expect(vehicles.length, 'all pages were loaded').to.be.greaterThan(10);
      expect(fast).to.not.be.empty;
      fast.forEach((v) => expect(Number(v.max_atmosphering_speed)).to.be.greaterThan(1000));

      cy.log(fast.map((v) => v.name).join(', '));
    });
  });
});
