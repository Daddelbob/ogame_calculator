export class SolarPlant {
  /**
   * ABRUNDEN(20 * STUFE * 1,1 ^ STUFE)
   * @param solarPlantLvl
   */
  public static production(
    solarPlantLvl: number = 0,
  ): number {
    return Math.floor(20 * solarPlantLvl * Math.pow(1.1, solarPlantLvl));
  }

  /**
   * ABRUNDEN(50 * 1,5 ^ X)
   * @param solarPlantLvl
   */
  public static metalCosts(solarPlantLvl: number = 0): number {
    return Math.floor(50 * Math.pow(1.5, solarPlantLvl));
  }

  /**
   * ABRUNDEN(20 * 1,5 ^ X)
   * @param solarPlantLvl
   */
  public static crystalCosts(solarPlantLvl: number = 0): number {
    return Math.floor(20 * Math.pow(1.5, solarPlantLvl));
  }
}
